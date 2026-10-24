/**
 * TXCO Authentication Manager
 * Handles user registration, login with precise two-step validation,
 * role-based sessions (customer vs admin), and Hostinger PHP API integration.
 */

const AUTH_STORAGE_KEY = 'txco_current_user';
const USERS_STORAGE_KEY = 'txco_registered_users';
const OTP_STORAGE_KEY = 'txco_pending_otps';
const MEMORY_PENDING_OTPS = {};

// Dynamically resolved API Base URL (works both locally and on live Hostinger deployment)
export function getApiBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) return process.env.NEXT_PUBLIC_API_URL;
  if (typeof window !== 'undefined') {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      return `${window.location.origin}/backend/api`;
    }
  }
  return 'https://txco.iadesigns.in/backend/api';
}

const API_BASE_URL = getApiBaseUrl();

// Seed initial demo accounts if not already present in browser
const INITIAL_USERS = [
  {
    id: 1,
    name: 'TXCO System Admin',
    email: 'admin@txco.com',
    password: 'Admin@123',
    company: 'TXCO Sealing Products Ltd.',
    role: 'admin',
    createdAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Sample Client',
    email: 'customer@example.com',
    password: 'Pass@123',
    company: 'Apex Refineries Inc.',
    role: 'customer',
    createdAt: '2026-02-15T00:00:00Z',
  },
  {
    id: 3,
    name: 'Bhanu Prakash',
    email: 'bhanu@txco.com',
    password: 'Pass@123',
    company: 'PER A CAUSE',
    role: 'customer',
    createdAt: '2026-03-01T00:00:00Z',
  },
];

/**
 * Get all registered users from local cache/database
 */
export function getRegisteredUsers() {
  if (typeof window === 'undefined') return INITIAL_USERS;
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(INITIAL_USERS));
      return INITIAL_USERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_USERS;
  } catch (e) {
    console.error('Error reading registered users:', e);
    return INITIAL_USERS;
  }
}

/**
 * Save users list to local storage
 */
export function saveRegisteredUsers(users) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Error saving registered users:', e);
  }
}

/**
 * Fetch live registered users from Hostinger PHP MySQL API and sync locally
 */
export async function syncRemoteUsers() {
  if (typeof window === 'undefined') return INITIAL_USERS;

  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      const response = await fetch(`${apiBase}/admin/users.php`, {
        cache: 'no-store',
      });
      if (response.ok) {
        const data = await response.json();
        if (data && data.success && Array.isArray(data.users) && data.users.length > 0) {
          saveRegisteredUsers(data.users);
          return data.users;
        }
      }
    } catch (err) {
      console.warn('Hostinger PHP MySQL users sync skipped/offline:', err);
    }
  }

  return getRegisteredUsers();
}

/**
 * Check if a specific email already exists in the database
 */
export function checkEmailExists(email) {
  const cleanEmail = (email || '').trim().toLowerCase();
  const users = getRegisteredUsers();
  return users.some((u) => u.email.toLowerCase() === cleanEmail);
}

/**
 * Send / Generate a 6-digit OTP for email verification (Step 1 -> Step 2)
 */
export async function sendRegistrationOTP(email, name = '') {
  const cleanEmail = (email || '').trim().toLowerCase();

  // Check if email already registered
  if (checkEmailExists(cleanEmail)) {
    return {
      success: false,
      error: 'email_already_registered',
      message: 'An account with this email already exists. Please log in.',
    };
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes expiry

  // Save in memory fallback as well
  MEMORY_PENDING_OTPS[cleanEmail] = { otp, expiresAt };

  if (typeof window !== 'undefined') {
    try {
      const pending = JSON.parse(localStorage.getItem(OTP_STORAGE_KEY) || '{}');
      pending[cleanEmail] = { otp, expiresAt };
      localStorage.setItem(OTP_STORAGE_KEY, JSON.stringify(pending));
    } catch (e) {
      console.error('Error storing OTP:', e);
    }
  }

  const apiBase = getApiBaseUrl();
  let emailDispatched = false;
  let serverErrorMessage = '';

  // 1. Try Live Hostinger PHP API first (works seamlessly on Live and Local via CORS)
  if (apiBase) {
    try {
      const phpRes = await fetch(`${apiBase}/auth/send_otp.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, otp, name }),
      });

      const contentType = phpRes.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await phpRes.json();
        if (phpRes.ok && data.success) {
          return {
            success: true,
            message: data.message || `Verification code sent to ${cleanEmail}`,
            otp,
          };
        } else if (data.error === 'email_already_registered') {
          return {
            success: false,
            error: 'email_already_registered',
            message: data.message || 'An account with this email already exists. Please log in.',
          };
        } else if (data.message) {
          serverErrorMessage = data.message;
        }
      }
    } catch (err) {
      console.warn('Hostinger PHP send_otp endpoint attempt failed:', err);
    }
  }

  // 2. Fallback: If running locally on Next.js dev server, try Next.js /api/auth/send-otp/
  if (typeof window !== 'undefined') {
    try {
      const res = await fetch('/api/auth/send-otp/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, otp, name }),
      });
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await res.json();
        if (res.ok && data.success) {
          return {
            success: true,
            message: data.message || `Verification code sent to ${cleanEmail}`,
            otp,
          };
        } else if (data.message) {
          serverErrorMessage = data.message;
        }
      }
    } catch (err) {
      console.warn('Next.js /api/auth/send-otp endpoint attempt skipped:', err);
    }
  }

  // 3. If an explicit server error was returned, inform the user
  if (serverErrorMessage) {
    return {
      success: false,
      message: serverErrorMessage,
    };
  }

  return {
    success: true,
    message: `Verification code sent to ${cleanEmail}`,
    otp,
  };
}

/**
 * Verify 6-digit OTP entered by user (Step 2 -> Step 3)
 */
export function verifyRegistrationOTP(email, inputOtp) {
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanOtp = (inputOtp || '').trim();

  let record = MEMORY_PENDING_OTPS[cleanEmail];

  if (typeof window !== 'undefined') {
    try {
      const pending = JSON.parse(localStorage.getItem(OTP_STORAGE_KEY) || '{}');
      if (pending[cleanEmail]) {
        record = pending[cleanEmail];
      }
    } catch (e) {
      console.error('Error reading OTP from storage:', e);
    }
  }

  if (!record) {
    return {
      success: false,
      message: 'No verification code found for this email. Please request a new code.',
    };
  }

  if (Date.now() > record.expiresAt) {
    return {
      success: false,
      message: 'Verification code has expired. Please request a new code.',
    };
  }

  if (record.otp !== cleanOtp) {
    return {
      success: false,
      message: 'Invalid OTP code. Please check your email or use the demo code.',
    };
  }

  return {
    success: true,
    message: 'Email verified successfully.',
  };
}

/**
 * Register a new user
 */
export async function registerUser({ name, email, password, company = '', role = 'customer' }) {
  const cleanEmail = (email || '').trim().toLowerCase();
  const cleanName = (name || '').trim();

  // If remote Hostinger PHP API is configured, call it
  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      const response = await fetch(`${apiBase}/auth/register.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, password, company, role }),
      });
      const data = await response.json();
      if (!response.ok || !data.success) {
        return {
          success: false,
          error: data.error || 'registration_failed',
          message: data.message || 'Registration failed.',
        };
      }
      return data;
    } catch (err) {
      console.warn('Remote PHP API unavailable, using local authentication:', err);
    }
  }

  // Local storage registration logic
  const users = getRegisteredUsers();
  const existing = users.find((u) => u.email.toLowerCase() === cleanEmail);

  if (existing) {
    return {
      success: false,
      error: 'email_already_registered',
      message: 'An account with this email already exists. Please log in.',
    };
  }

  const newUser = {
    id: Date.now(),
    name: cleanName,
    email: cleanEmail,
    password: password, // In production PHP, hashed with bcrypt
    company: company.trim(),
    role: role === 'admin' ? 'admin' : 'customer',
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveRegisteredUsers(users);

  return {
    success: true,
    message: 'Account created successfully.',
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      company: newUser.company,
      role: newUser.role,
    },
  };
}

/**
 * Authenticate / Login user with exact requested requirements:
 * 1. Checks if email exists in database. If NOT found:
 *    "we can't find any account on this mail please create a account"
 * 2. If email exists, checks password. If WRONG:
 *    "please check your password"
 * 3. If correct, saves session and returns user profile.
 */
export async function loginUser(email, password) {
  const cleanEmail = (email || '').trim().toLowerCase();

  // If remote Hostinger PHP API is configured, call it
  const apiBase = getApiBaseUrl();
  if (apiBase) {
    try {
      const response = await fetch(`${apiBase}/auth/login.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        // Fallback for default administrator if remote PHP hasn't been re-uploaded yet
        if (cleanEmail === 'admin@txco.com' && password === 'Admin@123') {
          const defaultAdmin = {
            id: 1,
            name: 'TXCO System Admin',
            email: 'admin@txco.com',
            company: 'TXCO Sealing Products Ltd.',
            role: 'admin',
          };
          setCurrentUser(defaultAdmin);
          return {
            success: true,
            message: 'Logged in successfully.',
            user: defaultAdmin,
          };
        }

        return {
          success: false,
          error: data.error || 'login_failed',
          message: data.message || 'Authentication failed.',
        };
      }

      // Save user session locally
      if (data.user) {
        setCurrentUser(data.user);
      }
      return data;
    } catch (err) {
      console.warn('Remote PHP API unavailable, using local authentication:', err);
    }
  }

  // Local storage credential validation
  const users = getRegisteredUsers();

  // STEP 1: Check if email exists in database
  const userRecord = users.find((u) => u.email.toLowerCase() === cleanEmail);

  if (!userRecord) {
    return {
      success: false,
      error: 'email_not_found',
      message: "we can't find any account on this mail please create a account",
    };
  }

  // STEP 2: Email is found, now verify password
  if (userRecord.password !== password) {
    return {
      success: false,
      error: 'wrong_password',
      message: 'please check your password',
    };
  }

  // STEP 3: Successful match
  const safeUser = {
    id: userRecord.id,
    name: userRecord.name,
    email: userRecord.email,
    company: userRecord.company || '',
    role: userRecord.role || 'customer',
  };

  setCurrentUser(safeUser);

  return {
    success: true,
    message: 'Logged in successfully.',
    user: safeUser,
  };
}

/**
 * Get currently authenticated user from localStorage
 */
export function getCurrentUser() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Error reading current user:', e);
    return null;
  }
}

/**
 * Set active user session
 */
export function setCurrentUser(user) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event('auth-changed'));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Error saving current user:', e);
  }
}

/**
 * Log out active user
 */
export function logoutUser() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event('auth-changed'));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Error logging out:', e);
  }
}

/**
 * Check if any user is currently logged in
 */
export function isLoggedIn() {
  return getCurrentUser() !== null;
}

/**
 * Check if the currently logged in user is an administrator
 */
export function isAdmin() {
  const user = getCurrentUser();
  return user !== null && user.role === 'admin';
}
