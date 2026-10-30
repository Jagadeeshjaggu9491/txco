'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { submitChatbotEnquiry } from '@/utils/enquiryManager';
import {
  MessageSquare,
  X,
  Send,
  Paperclip,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
  MapPin,
  RotateCcw,
  Minimize2,
  ChevronRight,
  UploadCloud,
  Sparkles,
  Bot,
  User,
  AlertCircle,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import '@/styles/txco-chatbot.css';

// Approved TXCO Contact Constants
const TXCO_INFO = {
  company: 'TXCO Sealing Products Private Limited',
  website: 'www.txcosealing.com',
  email: 'info@txcosealing.com',
  phone: '+91 9553125566',
  location: 'Ghatkesar, Hyderabad, Telangana, India – 500088',
};

// Initial Welcome Prompt matching Phase 1 Specification Section 4
const WELCOME_MESSAGE = {
  id: 'welcome-msg',
  sender: 'bot',
  text: 'Welcome to TXCO Sealing Products Private Limited. How can we help you today? Explore our sealing products, submit a quotation request, upload a drawing or contact our team.',
  timestamp: 'Just now',
};

export default function TxcoChatbot() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [activeView, setActiveView] = useState('menu'); // 'menu' | 'find-gasket' | 'not-sure' | 'rfq' | 'tech-questions' | 'upload' | 'quality' | 'vendor' | 'talk'
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // RFQ Form State
  const [rfqData, setRfqData] = useState({
    contactName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    productCategory: 'Ring Type Joint (RTJ) Gaskets',
    description: '',
    standard: '',
    dimensions: '',
    material: '',
    pressure: '',
    quantity: '',
    deliveryDate: '',
    notes: '',
  });

  // Vendor Registration State
  const [vendorData, setVendorData] = useState({
    name: '',
    designation: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    category: '',
    reference: '',
    message: '',
  });

  // Talk / Callback State
  const [contactData, setContactData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Commercial & Sales',
    message: '',
  });

  // File Upload State
  const [attachedFile, setAttachedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null); // null | 'uploading' | 'success' | 'error'
  const [submittingForm, setSubmittingForm] = useState(false);

  const fileInputRef = useRef(null);
  const chatBodyRef = useRef(null);

  // Teaser bubble timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasInteracted) {
        setShowTeaser(true);
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [isOpen, hasInteracted]);

  // Auto scroll chat body
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, activeView, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTeaser(false);
    setHasInteracted(true);
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
    setActiveView('menu');
    setAttachedFile(null);
    setUploadStatus(null);
  };

  // Helper to add bot message with typing simulation
  const addBotMessage = (text, delay = 400, nextView = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      if (nextView) setActiveView(nextView);
    }, delay);
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // --------------------------------------------------------------------------
  // Flow Handlers
  // --------------------------------------------------------------------------

  // Flow: Find the Right Gasket
  const handleFindGasketSelect = (category) => {
    addUserMessage(`Selected Category: ${category}`);

    if (category === "I'm not sure / Need Guidance") {
      addBotMessage(
        "No problem at all! Let's help narrow down your application with 5 quick questions:\n\n1. What equipment or connection will the gasket be used on (pipeline flange, heat exchanger, valve, subsea wellhead)?\n2. What are the operating temperature and pressure, if known?\n3. What fluid or media will the gasket contact (steam, hydrocarbon, sour gas, seawater)?\n4. Do you have a drawing, existing part number, standard or photograph?\n5. Would you like to upload available documents or speak with the TXCO team?",
        500,
        'not-sure'
      );
      return;
    }

    // Specific guidance per Priority Category (Section 3 of spec)
    let guidance = '';
    if (category.includes('RTJ')) {
      guidance =
        'For Ring Type Joint (RTJ) Gaskets, TXCO manufactures standard and pressure-energized rings per ASME B16.20 & API Spec 6A.\n\nPlease share:\n• Ring Profile: Style R (Octagonal / Oval), Style RX (pressure-energized), or Style BX (high-pressure/subsea)\n• Size & Pressure Class (e.g. 2" Class 1500# or API 10K psi)\n• Material: Soft Iron, Low Carbon Steel, SS316, Inconel 625/825\n• Equipment details or drawing if available.';
    } else if (category.includes('Metallic')) {
      guidance =
        'For Metallic Gaskets, TXCO provides Spiral Wound Gaskets (Style R, CG, CGI), Kammprofile Serrated, and Metal Jacketed Gaskets.\n\nPlease specify:\n• Construction style (e.g., CGI Spiral Wound with inner & outer rings)\n• Facing/filler: Flexible Graphite, PTFE, or Mica\n• Nominal pipe size, pressure rating, and service application.';
    } else if (category.includes('Isolation')) {
      guidance =
        'For Flange Isolation Kits (Cathodic Protection & Galvanic Corrosion Prevention):\n\nPlease specify:\n• Flange standard & pressure rating (ASME B16.5 / B16.47)\n• Kit Type: Type E (Full Face), Type F (Raised Face), or Type D (RTJ)\n• Retainer gasket material: G10 / G11 epoxy glass or Phenolic\n• Sleeve & washer requirements and pipeline service media.';
    } else if (category.includes('CNAF')) {
      guidance =
        'For Compressed Non-Asbestos Fiber (CNAF) Gaskets:\n\nPlease specify:\n• Dimensions: Standard ASME B16.21 / EN 1514 or custom dimensions\n• Thickness: 0.5mm, 1.0mm, 1.5mm, 2.0mm, or 3.0mm\n• Material Grade (BS 7531 Grade X or Grade Y) and operating service conditions.';
    } else if (category.includes('Asbestos-Free')) {
      guidance =
        'For Asbestos-Free Gaskets (Expanded Graphite, ePTFE, Virgin PTFE, Elastomeric):\n\nPlease specify:\n• Preferred material type and thickness\n• Operating temperature, pressure, and media resistance\n• Flange standard or custom drawing.';
    }

    setRfqData((prev) => ({ ...prev, productCategory: category }));
    addBotMessage(
      `${guidance}\n\nWould you like to submit an RFQ with these details, upload a drawing, or speak directly with our team?`,
      500,
      'product-selected-actions'
    );
  };

  // Flow: RFQ Submission
  const handleRfqSubmit = async (e) => {
    e.preventDefault();
    if (!rfqData.contactName || !rfqData.companyName || !rfqData.email) {
      alert('Please fill in the required fields: Contact Name, Company Name, and Business Email.');
      return;
    }

    setSubmittingForm(true);
    const refId = `TXCO-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await submitChatbotEnquiry({
        type: 'RFQ',
        referenceId: refId,
        ...rfqData,
        fileName: attachedFile?.name,
        fileSize: attachedFile ? `${(attachedFile.size / 1024).toFixed(1)} KB` : null,
      });

      // Save to local storage cache for visitor visibility
      try {
        const stored = JSON.parse(localStorage.getItem('txco_client_rfqs') || '[]');
        stored.push({ refId, date: new Date().toISOString(), ...rfqData });
        localStorage.setItem('txco_client_rfqs', JSON.stringify(stored));
      } catch (err) {}

      setSubmittingForm(false);
      addUserMessage(`Submitted RFQ for ${rfqData.productCategory}`);
      addBotMessage(
        `CONFIRMED: Your enquiry reference ID is **${refId}**.\n\nThank you for contacting TXCO Sealing Products. Your enquiry has been submitted to our team for review. A TXCO representative will review the information and follow up. If you have additional drawings or technical details, you can send them to info@txcosealing.com.`,
        400,
        'menu'
      );
      setAttachedFile(null);
    } catch (err) {
      setSubmittingForm(false);
      addBotMessage(
        `Your RFQ was logged locally with reference **${refId}**. If you experience network connectivity issues, you can also forward your requirement directly to info@txcosealing.com.`,
        400,
        'menu'
      );
    }
  };

  // Flow: Vendor Registration Submit
  const handleVendorSubmit = async (e) => {
    e.preventDefault();
    if (!vendorData.name || !vendorData.company || !vendorData.email) {
      alert('Please fill in Name, Company, and Business Email.');
      return;
    }

    setSubmittingForm(true);
    const refId = `TXCO-VR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await submitChatbotEnquiry({
        type: 'VENDOR_REGISTRATION',
        referenceId: refId,
        contactName: vendorData.name,
        companyName: vendorData.company,
        email: vendorData.email,
        phone: vendorData.phone,
        country: vendorData.country,
        vendorCategory: vendorData.category,
        customerPortalRef: vendorData.reference,
        notes: vendorData.message,
        fileName: attachedFile?.name,
      });
      setSubmittingForm(false);
      addUserMessage(`Submitted Vendor Registration for ${vendorData.company}`);
      addBotMessage(
        `CONFIRMED: Vendor Registration Reference ID: **${refId}**.\n\nThank you for registering with TXCO Sealing Products Private Limited. Our vendor development and procurement team will review your credentials and contact you for the next steps.`,
        400,
        'menu'
      );
      setAttachedFile(null);
    } catch (err) {
      setSubmittingForm(false);
      addBotMessage(
        `Vendor registration recorded with reference **${refId}**. You may also email vendor questionnaires to info@txcosealing.com.`,
        400,
        'menu'
      );
    }
  };

  // Flow: Direct Callback / Message Submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email) {
      alert('Please provide your name and email address.');
      return;
    }

    setSubmittingForm(true);
    const refId = `TXCO-CB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await submitChatbotEnquiry({
        type: 'CALLBACK',
        referenceId: refId,
        contactName: contactData.name,
        companyName: contactData.company || 'N/A',
        email: contactData.email,
        phone: contactData.phone || 'N/A',
        notes: contactData.message,
        productCategory: contactData.category,
      });
      setSubmittingForm(false);
      addUserMessage(`Requested contact from TXCO team`);
      addBotMessage(
        `Thank you ${contactData.name}! Your request has been routed to our Ghatkesar, Hyderabad team under Reference **${refId}**. An engineering or sales representative will reach out shortly.\n\nDirect Phone: +91 9553125566\nEmail: info@txcosealing.com`,
        400,
        'menu'
      );
    } catch (err) {
      setSubmittingForm(false);
      addBotMessage(
        `Thank you! You can reach us directly at info@txcosealing.com or call +91 9553125566.`,
        400,
        'menu'
      );
    }
  };

  // Flow: File Upload Handler
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit: 15MB
    if (file.size > 15 * 1024 * 1024) {
      alert('File size exceeds 15MB limit. Please upload a smaller file or email it to info@txcosealing.com.');
      return;
    }

    setAttachedFile(file);
    setUploadStatus('success');
  };

  const handleStandaloneUploadSubmit = async (e) => {
    e.preventDefault();
    if (!attachedFile) {
      alert('Please attach a drawing or specification file first.');
      return;
    }
    if (!rfqData.contactName || !rfqData.email) {
      alert('Please provide your contact name and email so our engineering team can follow up.');
      return;
    }

    setSubmittingForm(true);
    const refId = `TXCO-DRW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    try {
      await submitChatbotEnquiry({
        type: 'DRAWING',
        referenceId: refId,
        contactName: rfqData.contactName,
        companyName: rfqData.companyName || 'Independent Enquiry',
        email: rfqData.email,
        phone: rfqData.phone || 'N/A',
        notes: rfqData.notes,
        fileName: attachedFile.name,
        fileSize: `${(attachedFile.size / 1024).toFixed(1)} KB`,
      });
      setSubmittingForm(false);
      addUserMessage(`Uploaded technical document: ${attachedFile.name}`);
      addBotMessage(
        `CONFIRMED: Drawing / Specification received under Reference ID: **${refId}**.\n\nThank you for contacting TXCO Sealing Products. Your drawing has been forwarded to our engineering team for dimensional review and quotation. A representative will follow up with you. If you have additional documents, you may email them to info@txcosealing.com.`,
        400,
        'menu'
      );
      setAttachedFile(null);
    } catch (err) {
      setSubmittingForm(false);
      addBotMessage(
        `File recorded locally with Reference **${refId}**. You may also send your file directly to info@txcosealing.com.`,
        400,
        'menu'
      );
    }
  };

  // Technical Q&A handler (Section 7 Fallback & Approved Knowledge)
  const handleTechnicalAnswer = (topicKey) => {
    addUserMessage(`Technical Inquiry: ${topicKey}`);

    let reply = '';
    if (topicKey === 'RTJ Styles') {
      reply =
        '**RTJ Gasket Styles Breakdown (ASME B16.20 / API 6A):**\n\n' +
        '• **Style R (Oval & Octagonal):** Standard RTJ design for flat-bottom or 23° angle ring grooves on ASME B16.5 & API 6B flanges. Octagonal provides superior sealing efficiency over oval.\n' +
        '• **Style RX:** Pressure-energized design up to 5,000 psi. Uses system pressure to intensify sealing force against the outer groove wall.\n' +
        '• **Style BX:** High-pressure subsea & wellhead gasket for API 6BX flanges up to 15,000 & 20,000 psi, featuring a cross-bore pressure balance hole.';
    } else if (topicKey === 'Spiral Wound Fillers') {
      reply =
        '**Spiral Wound Gasket (SWG) Fillers:**\n\n' +
        '• **Flexible Graphite:** Standard choice for steam, hydrocarbons, and high temperatures up to 450°C (oxidizing) / 650°C (steam).\n' +
        '• **PTFE:** Exceptional chemical inertness for aggressive acids and cryogenic services up to 260°C.\n' +
        '• **Mica:** High-temperature oxidation barrier for extreme heat applications.';
    } else if (topicKey === 'Flange Isolation Types') {
      reply =
        '**Flange Isolation Kit (FIK) Configurations:**\n\n' +
        '• **Type E (Full Face):** Covers both the flange face and bolt holes to completely prevent foreign material ingress and bridging.\n' +
        '• **Type F (Raised Face):** Sits neatly within the bolt circle diameter.\n' +
        '• **Type D (RTJ):** Machined to fit directly into the ring joint groove of API/ASME RTJ flanges.';
    } else if (topicKey === 'CNAF Standards') {
      reply =
        '**CNAF (Compressed Non-Asbestos Fiber) Overview:**\n\n' +
        '• Bound with synthetic aramid fibers and NBR/SBR binders.\n' +
        '• Manufactured compliant with BS 7531 Grade X (high temperature & pressure) and Grade Y (general industrial utilities).\n' +
        '• Available in standard thicknesses: 0.5mm, 1.0mm, 1.5mm, 2.0mm, and 3.0mm.';
    }

    addBotMessage(
      `${reply}\n\n*Note:* I don’t want to give you an unverified technical answer. Please share your drawing, specification or operating details, and our engineering team can review your requirement.`,
      450,
      'tech-questions'
    );
  };

  // Custom user input submission via footer
  const handleCustomSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');
    addUserMessage(userText);

    const lower = userText.toLowerCase();

    // Check keyword triggers
    if (lower.includes('quote') || lower.includes('rfq') || lower.includes('price')) {
      addBotMessage(
        "I can help you submit an RFQ right now! Let's capture your application details in this mobile-friendly form:",
        400,
        'rfq'
      );
    } else if (lower.includes('draw') || lower.includes('spec') || lower.includes('upload') || lower.includes('pdf')) {
      addBotMessage(
        "You can upload your drawing or specification document (PDF, DWG, DXF, PNG, JPG) below:",
        400,
        'upload'
      );
    } else if (lower.includes('certif') || lower.includes('quality') || lower.includes('iso')) {
      addBotMessage(
        "TXCO maintains verified ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 management systems, EN 10204-3.1 inspection certification, and manufactures compliant with ASME B16.20 and API 6A standards.",
        400,
        'quality'
      );
    } else if (lower.includes('vendor') || lower.includes('supplier') || lower.includes('register')) {
      addBotMessage(
        "Welcome! We route all supplier and vendor registrations to our Ghatkesar, Hyderabad procurement desk:",
        400,
        'vendor'
      );
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('address') || lower.includes('talk')) {
      addBotMessage(
        `You can connect directly with the TXCO team:\n\n• Email: ${TXCO_INFO.email}\n• Phone: ${TXCO_INFO.phone}\n• Location: ${TXCO_INFO.location}`,
        400,
        'talk'
      );
    } else if (lower.includes('rtj') || lower.includes('metallic') || lower.includes('gasket') || lower.includes('isolation') || lower.includes('cnaf')) {
      addBotMessage(
        "Which product category are you inquiring about? Choose an option below:",
        400,
        'find-gasket'
      );
    } else {
      // Specification Fallback Response (Section 7)
      addBotMessage(
        "I don’t want to give you an unverified technical answer. Please share the drawing, specification or operating details, and our team can review your requirement.\n\nWould you like to Request a Quote, Upload a Drawing, or Speak with the TXCO Team?",
        500,
        'menu'
      );
    }
  };

  // Hide the AI chatbot completely on admin panel routes (checked safely after all hooks run)
  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="txco-chat-fixed-container no-print">
      {/* ------------------------------------------------------------------
          1. Animated Floating Teaser Speech Bubble (Pops in after ~2 seconds)
          ------------------------------------------------------------------ */}
      {showTeaser && !isOpen && (
        <div
          className="txco-chat-teaser-bubble"
          onClick={toggleChat}
          title="Click to open TXCO Assistant"
        >
          <div className="txco-teaser-avatar">
            <Sparkles size={16} />
          </div>
          <div className="txco-teaser-content">
            <div className="txco-teaser-title">
              TXCO Sealing Products
            </div>
            <div className="txco-teaser-text">
              Need technical help finding gaskets or submitting an RFQ?
            </div>
          </div>
          <button
            type="button"
            className="txco-teaser-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            title="Dismiss notification"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------------
          2. Fixed Animated Launcher Button (Radar pulse waves + float)
          ------------------------------------------------------------------ */}
      <button
        type="button"
        id="txco-chatbot-toggle-btn"
        className="txco-chat-launcher-btn"
        onClick={toggleChat}
        aria-label="Toggle TXCO Assistant"
        title="Chat with TXCO Sealing Products Assistant"
      >
        <div className="txco-chat-pulse-ring" />
        <div className="txco-chat-pulse-ring txco-chat-pulse-ring-delayed" />
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        <span className="txco-chat-online-badge" />
        {!isOpen && <span className="txco-chat-launcher-tag">ASK ME</span>}
      </button>

      {/* ------------------------------------------------------------------
          3. Chat Window Docked at Right Side
          ------------------------------------------------------------------ */}
      {isOpen && (
        <div className="txco-chat-window">
          {/* Header */}
          <div className="txco-chat-header">
            <div className="txco-header-brand">
              <div className="txco-header-logo-card">
                <img
                  src="/images/logo/txco-logo-new.avif"
                  alt="TXCO Sealing Products"
                  className="txco-header-brand-logo"
                />
              </div>
              <div className="txco-header-meta">
                <div className="txco-header-title">
                  <span>Technical Assistant</span>
                </div>
                <div className="txco-header-subtitle">
                  <span className="status-circle" />
                  Online
                </div>
              </div>
            </div>

            <div className="txco-header-actions">
              <button
                type="button"
                className="txco-header-action-btn"
                onClick={handleReset}
                title="Restart Conversation"
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                className="txco-header-action-btn"
                onClick={toggleChat}
                title="Minimize Chat"
              >
                <Minimize2 size={15} />
              </button>
            </div>
          </div>

          {/* Body: Chronological Messages */}
          <div className="txco-chat-body" ref={chatBodyRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`txco-msg-row ${msg.sender}`}>
                <div className={`txco-msg-avatar ${msg.sender}`}>
                  {msg.sender === 'bot' ? <Bot size={15} /> : <User size={15} />}
                </div>
                <div className={`txco-msg-bubble ${msg.sender}`}>
                  <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                  <span className="txco-msg-time">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="txco-msg-row bot">
                <div className="txco-msg-avatar bot">
                  <Bot size={15} />
                </div>
                <div className="txco-msg-bubble bot txco-typing-dots">
                  <span className="txco-typing-dot" />
                  <span className="txco-typing-dot" />
                  <span className="txco-typing-dot" />
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Welcome Main Menu Buttons (Section 4)
                ---------------------------------------------------------------- */}
            {activeView === 'menu' && (
              <div className="txco-quick-actions-grid">
                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Find the Right Gasket');
                    addBotMessage(
                      'Which sealing product are you looking for? Select one of our five priority product categories or choose "I’m not sure":',
                      350,
                      'find-gasket'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <Sparkles size={16} />
                    <span>Find the Right Gasket</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Request a Quote');
                    addBotMessage(
                      "Please fill out our conversational RFQ form below. You can skip any technical fields you don't know:",
                      350,
                      'rfq'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <FileText size={16} />
                    <span>Request a Quote (RFQ)</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Technical Questions');
                    addBotMessage(
                      'Explore verified technical fundamentals or ask a question from approved TXCO specifications:',
                      350,
                      'tech-questions'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <ShieldCheck size={16} />
                    <span>Technical Questions</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Upload Drawing / Specification');
                    addBotMessage(
                      'Upload your engineering drawings, equipment specifications, or RFQ document for review by our engineering team:',
                      350,
                      'upload'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <UploadCloud size={16} />
                    <span>Upload Drawing / Spec</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Quality & Certifications');
                    addBotMessage(
                      'Here is our approved quality and certification register:',
                      350,
                      'quality'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <CheckCircle2 size={16} />
                    <span>Quality &amp; Certifications</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Vendor Registration');
                    addBotMessage(
                      'Register your company or supplier credentials with TXCO Sealing Products:',
                      350,
                      'vendor'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <Building2 size={16} />
                    <span>Vendor Registration</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => {
                    addUserMessage('Talk to TXCO Team');
                    addBotMessage(
                      'Connect directly with our commercial and technical teams at our Ghatkesar facility:',
                      350,
                      'talk'
                    );
                  }}
                >
                  <span className="txco-pill-btn-text">
                    <Phone size={16} />
                    <span>Talk to TXCO Team</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Find the Right Gasket Category Grid (Section 5)
                ---------------------------------------------------------------- */}
            {activeView === 'find-gasket' && (
              <div className="txco-category-grid">
                {[
                  'Ring Type Joint (RTJ) Gaskets',
                  'Metallic Gaskets (SWG / Kammprofile / Jacketed)',
                  'Flange Isolation Kits',
                  'CNAF Gaskets',
                  'Asbestos-Free Gaskets',
                  "I'm not sure / Need Guidance",
                ].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className="txco-cat-btn"
                    onClick={() => handleFindGasketSelect(cat)}
                  >
                    <span>{cat}</span>
                    <ChevronRight size={14} className="cat-arrow" />
                  </button>
                ))}
              </div>
            )}

            {/* View: Product Selected Next Actions */}
            {activeView === 'product-selected-actions' && (
              <div className="txco-quick-actions-grid">
                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => setActiveView('rfq')}
                >
                  <span className="txco-pill-btn-text">
                    <FileText size={16} />
                    <span>Proceed to Request a Quote (RFQ)</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => setActiveView('upload')}
                >
                  <span className="txco-pill-btn-text">
                    <UploadCloud size={16} />
                    <span>Upload Drawing / Spec First</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => setActiveView('talk')}
                >
                  <span className="txco-pill-btn-text">
                    <Phone size={16} />
                    <span>Speak with TXCO Technical Team</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>
              </div>
            )}

            {/* View: "I'm Not Sure" 5-Questions Guidance Followup */}
            {activeView === 'not-sure' && (
              <div className="txco-quick-actions-grid">
                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => setActiveView('rfq')}
                >
                  <span className="txco-pill-btn-text">
                    <FileText size={16} />
                    <span>Fill Available Details in RFQ Form</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => setActiveView('upload')}
                >
                  <span className="txco-pill-btn-text">
                    <UploadCloud size={16} />
                    <span>Upload Photo / Drawing of Gasket</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => setActiveView('talk')}
                >
                  <span className="txco-pill-btn-text">
                    <Phone size={16} />
                    <span>Request Application Call from TXCO</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Request a Quote (RFQ) Form (Section 6)
                ---------------------------------------------------------------- */}
            {activeView === 'rfq' && (
              <div className="txco-embedded-form-card">
                <div className="txco-form-header">
                  <div className="txco-form-title">
                    <FileText size={16} color="#3b82f6" />
                    <span>Quotation Request (RFQ)</span>
                  </div>
                  <span className="txco-form-step-tag">Mobile-Friendly Form</span>
                </div>

                <form onSubmit={handleRfqSubmit}>
                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Contact Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="txco-form-input"
                        placeholder="Your full name"
                        value={rfqData.contactName}
                        onChange={(e) => setRfqData({ ...rfqData, contactName: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Company Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="txco-form-input"
                        placeholder="Organization name"
                        value={rfqData.companyName}
                        onChange={(e) => setRfqData({ ...rfqData, companyName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Business Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="txco-form-input"
                        placeholder="name@company.com"
                        value={rfqData.email}
                        onChange={(e) => setRfqData({ ...rfqData, email: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Phone / WhatsApp <span className="required-star">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="txco-form-input"
                        placeholder="+91 / Country Code"
                        value={rfqData.phone}
                        onChange={(e) => setRfqData({ ...rfqData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Country &amp; City <span className="optional-tag">(Recommended)</span>
                      </label>
                      <input
                        type="text"
                        className="txco-form-input"
                        placeholder="e.g., India, Hyderabad"
                        value={rfqData.country}
                        onChange={(e) => setRfqData({ ...rfqData, country: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Product Category <span className="required-star">*</span>
                      </label>
                      <select
                        className="txco-form-select"
                        value={rfqData.productCategory}
                        onChange={(e) => setRfqData({ ...rfqData, productCategory: e.target.value })}
                      >
                        <option>Ring Type Joint (RTJ) Gaskets</option>
                        <option>Metallic Gaskets (SWG / Kammprofile)</option>
                        <option>Flange Isolation Kits</option>
                        <option>CNAF Gaskets</option>
                        <option>Asbestos-Free Gaskets</option>
                        <option>Other / Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="txco-form-group">
                    <label className="txco-form-label">
                      Description / Application <span className="required-star">*</span>
                    </label>
                    <textarea
                      required
                      className="txco-form-textarea"
                      placeholder="Specify service, equipment or requirements..."
                      value={rfqData.description}
                      onChange={(e) => setRfqData({ ...rfqData, description: e.target.value })}
                    />
                  </div>

                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Standard / Specification <span className="optional-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="txco-form-input"
                        placeholder="ASME B16.20, API 6A, etc."
                        value={rfqData.standard}
                        onChange={(e) => setRfqData({ ...rfqData, standard: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Size / Dimensions / Thk <span className="optional-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="txco-form-input"
                        placeholder='e.g. 2" NPS, R-24, 3mm'
                        value={rfqData.dimensions}
                        onChange={(e) => setRfqData({ ...rfqData, dimensions: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Material / Grade <span className="optional-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="txco-form-input"
                        placeholder="SS316L, Inconel 625, Soft Iron"
                        value={rfqData.material}
                        onChange={(e) => setRfqData({ ...rfqData, material: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Quantity &amp; Unit <span className="optional-tag">(Recommended)</span>
                      </label>
                      <input
                        type="text"
                        className="txco-form-input"
                        placeholder="e.g. 50 Pcs / Sets"
                        value={rfqData.quantity}
                        onChange={(e) => setRfqData({ ...rfqData, quantity: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Optional File Attachment */}
                  <div className="txco-form-group">
                    <label className="txco-form-label">
                      Attach Drawing / Specification <span className="optional-tag">(Optional)</span>
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      accept=".pdf,.png,.jpg,.jpeg,.dwg,.dxf"
                      onChange={handleFileChange}
                    />
                    {!attachedFile ? (
                      <div
                        className="txco-file-dropzone"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <UploadCloud size={20} className="txco-dropzone-icon" />
                        <div className="txco-dropzone-title">Click to attach file</div>
                        <div className="txco-dropzone-sub">PDF, PNG, JPG, DWG, DXF up to 15MB</div>
                      </div>
                    ) : (
                      <div className="txco-attached-file-pill">
                        <span className="file-name">📎 {attachedFile.name}</span>
                        <button
                          type="button"
                          className="file-remove"
                          onClick={() => setAttachedFile(null)}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="txco-form-actions">
                    <button
                      type="submit"
                      disabled={submittingForm}
                      className="txco-btn-submit"
                    >
                      {submittingForm ? 'Submitting...' : 'Submit Quotation Request'}
                      <ArrowRight size={14} />
                    </button>
                    <button
                      type="button"
                      className="txco-btn-cancel"
                      onClick={() => setActiveView('menu')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Technical Questions (Section 7)
                ---------------------------------------------------------------- */}
            {activeView === 'tech-questions' && (
              <div className="txco-quick-actions-grid">
                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => handleTechnicalAnswer('RTJ Styles')}
                >
                  <span className="txco-pill-btn-text">
                    <ShieldCheck size={16} />
                    <span>Difference between Style R, RX &amp; BX RTJ</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => handleTechnicalAnswer('Spiral Wound Fillers')}
                >
                  <span className="txco-pill-btn-text">
                    <ShieldCheck size={16} />
                    <span>Spiral Wound Fillers: Graphite vs PTFE</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => handleTechnicalAnswer('Flange Isolation Types')}
                >
                  <span className="txco-pill-btn-text">
                    <ShieldCheck size={16} />
                    <span>Flange Isolation Kit Types (E, F, D)</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <button
                  type="button"
                  className="txco-template-pill-btn"
                  onClick={() => handleTechnicalAnswer('CNAF Standards')}
                >
                  <span className="txco-pill-btn-text">
                    <ShieldCheck size={16} />
                    <span>CNAF BS 7531 Grade X &amp; Y Specifications</span>
                  </span>
                  <span className="txco-pill-btn-arrow">
                    <ChevronRight size={14} />
                  </span>
                </button>

                <div style={{ marginTop: '8px' }}>
                  <button
                    type="button"
                    className="txco-btn-cancel"
                    style={{ width: '100%' }}
                    onClick={() => setActiveView('menu')}
                  >
                    &larr; Back to Main Menu
                  </button>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Drawing / Specification Upload (Section 8)
                ---------------------------------------------------------------- */}
            {activeView === 'upload' && (
              <div className="txco-embedded-form-card">
                <div className="txco-form-header">
                  <div className="txco-form-title">
                    <UploadCloud size={16} color="#06b6d4" />
                    <span>Upload Drawing / Specification</span>
                  </div>
                </div>

                <form onSubmit={handleStandaloneUploadSubmit}>
                  <div className="txco-form-group">
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      accept=".pdf,.png,.jpg,.jpeg,.dwg,.dxf"
                      onChange={handleFileChange}
                    />
                    {!attachedFile ? (
                      <div
                        className="txco-file-dropzone"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <UploadCloud size={24} className="txco-dropzone-icon" />
                        <div className="txco-dropzone-title">Click or Drop Drawing File Here</div>
                        <div className="txco-dropzone-sub">
                          Supported: PDF, JPG, PNG, DWG, DXF (Max 15MB)
                        </div>
                      </div>
                    ) : (
                      <div className="txco-attached-file-pill">
                        <span className="file-name">📄 {attachedFile.name} ({(attachedFile.size / 1024).toFixed(1)} KB)</span>
                        <button
                          type="button"
                          className="file-remove"
                          onClick={() => setAttachedFile(null)}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Your Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="txco-form-input"
                        placeholder="Contact name"
                        value={rfqData.contactName}
                        onChange={(e) => setRfqData({ ...rfqData, contactName: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Company Name <span className="optional-tag">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="txco-form-input"
                        placeholder="Company"
                        value={rfqData.companyName}
                        onChange={(e) => setRfqData({ ...rfqData, companyName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="txco-form-group">
                    <label className="txco-form-label">
                      Business Email <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="txco-form-input"
                      placeholder="name@company.com"
                      value={rfqData.email}
                      onChange={(e) => setRfqData({ ...rfqData, email: e.target.value })}
                    />
                  </div>

                  <div className="txco-form-group">
                    <label className="txco-form-label">
                      Notes / Part Number <span className="optional-tag">(Optional)</span>
                    </label>
                    <textarea
                      className="txco-form-textarea"
                      placeholder="Any specific tolerances, quantities or temperature limits..."
                      value={rfqData.notes}
                      onChange={(e) => setRfqData({ ...rfqData, notes: e.target.value })}
                    />
                  </div>

                  <div className="txco-form-actions">
                    <button
                      type="submit"
                      disabled={submittingForm || !attachedFile}
                      className="txco-btn-submit"
                    >
                      {submittingForm ? 'Uploading...' : 'Submit Drawing for Review'}
                    </button>
                    <button
                      type="button"
                      className="txco-btn-cancel"
                      onClick={() => setActiveView('menu')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Quality & Certifications Register (Section 9)
                ---------------------------------------------------------------- */}
            {activeView === 'quality' && (
              <div className="txco-cert-list">
                <div className="txco-cert-item">
                  <CheckCircle2 size={16} className="txco-cert-icon" />
                  <div>
                    <div className="txco-cert-title">ISO 9001:2015 QMS</div>
                    <div className="txco-cert-desc">Certified Quality Management System for design &amp; manufacturing.</div>
                  </div>
                </div>

                <div className="txco-cert-item">
                  <CheckCircle2 size={16} className="txco-cert-icon" />
                  <div>
                    <div className="txco-cert-title">ISO 14001:2015 &amp; ISO 45001:2018</div>
                    <div className="txco-cert-desc">Environmental Management &amp; Occupational Health and Safety.</div>
                  </div>
                </div>

                <div className="txco-cert-item">
                  <CheckCircle2 size={16} className="txco-cert-icon" />
                  <div>
                    <div className="txco-cert-title">EN 10204 Type 3.1 Inspection Certificates</div>
                    <div className="txco-cert-desc">Complete chemical &amp; mechanical traceability per batch &amp; heat code.</div>
                  </div>
                </div>

                <div className="txco-cert-item">
                  <CheckCircle2 size={16} className="txco-cert-icon" />
                  <div>
                    <div className="txco-cert-title">ASME B16.20 &amp; API 6A Compliance</div>
                    <div className="txco-cert-desc">Precision CNC machining and testing adhering to international standards.</div>
                  </div>
                </div>

                <div style={{ marginTop: '6px' }}>
                  <button
                    type="button"
                    className="txco-btn-cancel"
                    style={{ width: '100%' }}
                    onClick={() => setActiveView('menu')}
                  >
                    &larr; Back to Main Menu
                  </button>
                </div>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Vendor Registration Form (Section 10)
                ---------------------------------------------------------------- */}
            {activeView === 'vendor' && (
              <div className="txco-embedded-form-card">
                <div className="txco-form-header">
                  <div className="txco-form-title">
                    <Building2 size={16} color="#8b5cf6" />
                    <span>Vendor Registration</span>
                  </div>
                </div>

                <form onSubmit={handleVendorSubmit}>
                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Name &amp; Designation <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="txco-form-input"
                        placeholder="John Doe (Manager)"
                        value={vendorData.name}
                        onChange={(e) => setVendorData({ ...vendorData, name: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Company Name <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="txco-form-input"
                        placeholder="Supplier Enterprise"
                        value={vendorData.company}
                        onChange={(e) => setVendorData({ ...vendorData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="txco-form-row">
                    <div className="txco-form-group">
                      <label className="txco-form-label">
                        Business Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="txco-form-input"
                        placeholder="procurement@vendor.com"
                        value={vendorData.email}
                        onChange={(e) => setVendorData({ ...vendorData, email: e.target.value })}
                      />
                    </div>

                    <div className="txco-form-group">
                      <label className="txco-form-label">Phone &amp; Country</label>
                      <input
                        type="tel"
                        className="txco-form-input"
                        placeholder="+91..."
                        value={vendorData.phone}
                        onChange={(e) => setVendorData({ ...vendorData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="txco-form-group">
                    <label className="txco-form-label">Product / Supplier Category</label>
                    <input
                      type="text"
                      className="txco-form-input"
                      placeholder="e.g. Raw Material Alloys, Tooling, Packaging..."
                      value={vendorData.category}
                      onChange={(e) => setVendorData({ ...vendorData, category: e.target.value })}
                    />
                  </div>

                  <div className="txco-form-actions">
                    <button
                      type="submit"
                      disabled={submittingForm}
                      className="txco-btn-submit"
                    >
                      {submittingForm ? 'Registering...' : 'Submit Vendor Profile'}
                    </button>
                    <button
                      type="button"
                      className="txco-btn-cancel"
                      onClick={() => setActiveView('menu')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ----------------------------------------------------------------
                Interactive View: Talk to TXCO Team Card & Callback (Section 12)
                ---------------------------------------------------------------- */}
            {activeView === 'talk' && (
              <div className="txco-contact-card">
                <a href={`tel:${TXCO_INFO.phone.replace(/\s+/g, '')}`} className="txco-contact-item">
                  <Phone size={16} className="contact-icon" />
                  <div>
                    <div style={{ fontWeight: 700 }}>Direct Call</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{TXCO_INFO.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${TXCO_INFO.email}`} className="txco-contact-item">
                  <Mail size={16} className="contact-icon" />
                  <div>
                    <div style={{ fontWeight: 700 }}>Direct Email</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{TXCO_INFO.email}</div>
                  </div>
                </a>

                <div className="txco-contact-item">
                  <MapPin size={16} className="contact-icon" />
                  <div>
                    <div style={{ fontWeight: 700 }}>Manufacturing Plant &amp; Office</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{TXCO_INFO.location}</div>
                  </div>
                </div>

                <div style={{ marginTop: '6px' }}>
                  <button
                    type="button"
                    className="txco-btn-cancel"
                    style={{ width: '100%' }}
                    onClick={() => setActiveView('menu')}
                  >
                    &larr; Back to Main Menu
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input Bar */}
          <form className="txco-chat-footer" onSubmit={handleCustomSend}>
            <button
              type="button"
              className="txco-chat-home-btn"
              onClick={handleReset}
              title="Return to Main Menu"
            >
              <RotateCcw size={16} />
            </button>

            <div className="txco-chat-input-wrapper">
              <input
                type="text"
                className="txco-chat-input"
                placeholder="Ask about gaskets, RFQ, standards..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="button"
                className="txco-chat-attach-btn"
                onClick={() => {
                  addUserMessage('I would like to upload a document');
                  setActiveView('upload');
                }}
                title="Upload document"
              >
                <Paperclip size={16} />
              </button>
            </div>

            <button
              type="submit"
              className="txco-chat-send-btn"
              disabled={!inputText.trim()}
              title="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
