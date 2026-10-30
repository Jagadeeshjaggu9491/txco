'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  MessageSquare,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  Trash2,
  Mail,
  Building,
  Phone,
  FileText,
  Paperclip,
  ExternalLink,
  RefreshCw,
  X,
  ChevronDown,
  Download,
  Send,
  Eye,
  Bot,
} from 'lucide-react';
import {
  fetchAllEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} from '@/utils/enquiryManager';

export default function EnquiriesHub({ onToast }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [contactEnquiries, setContactEnquiries] = useState([]);
  const [chatbotEnquiries, setChatbotEnquiries] = useState([]);

  // Filter States
  const [subTab, setSubTab] = useState('all'); // 'all' | 'contact' | 'chatbot'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Detail Modal & Delete Confirmation
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const loadData = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const data = await fetchAllEnquiries();
      setContactEnquiries(data.contactEnquiries || []);
      setChatbotEnquiries(data.chatbotEnquiries || []);
      if (isManualRefresh && onToast) {
        onToast('Enquiries refreshed from database.');
      }
    } catch (err) {
      console.error('Failed to load enquiries:', err);
      if (onToast) onToast('Error syncing enquiries.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Normalize enquiries for unified viewing
  const unifiedList = useMemo(() => {
    const list = [];

    // 1. Contact Form Enquiries
    contactEnquiries.forEach((item) => {
      list.push({
        id: item.id,
        referenceId: item.reference_id || item.referenceId,
        source: 'contact',
        sourceLabel: 'Contact Page',
        type: item.inquiry_type || item.inquiryType || 'RFQ / Inquiry',
        name: item.full_name || item.fullName || 'N/A',
        email: item.email,
        phone: item.phone || 'N/A',
        company: item.company || 'N/A',
        industry: item.industry || 'Oil & Gas',
        message: item.message || '',
        attachment: item.attachment_name || item.attachmentName || null,
        status: item.status || 'New',
        createdAt: item.created_at || item.createdAt || new Date().toISOString(),
        raw: item,
      });
    });

    // 2. Chatbot Enquiries
    chatbotEnquiries.forEach((item) => {
      const contact = item.contact || {};
      const technical = item.technical || {};
      const file = item.file || {};

      list.push({
        id: item.id,
        referenceId: item.referenceId || item.reference_id,
        source: 'chatbot',
        sourceLabel: 'Chatbot',
        type: `${item.type || item.enquiry_type || 'RFQ'}`,
        name: contact.name || item.contact_name || 'N/A',
        email: contact.email || item.email,
        phone: contact.phone || item.phone || 'N/A',
        company: contact.company || item.company_name || 'N/A',
        industry: item.industry || 'General Sealing',
        message: technical.description || item.description || technical.notes || item.notes || '',
        attachment: file.name || item.file_name || null,
        status: item.status || 'New',
        createdAt: item.createdAt || item.created_at || new Date().toISOString(),
        technical: {
          productCategory: technical.productCategory || item.product_category,
          standard: technical.standard || item.standard,
          dimensions: technical.dimensions || item.dimensions,
          material: technical.material || item.material,
          pressure: technical.pressure || item.pressure,
          quantity: technical.quantity || item.quantity,
          deliveryDate: technical.deliveryDate || item.delivery_date,
        },
        raw: item,
      });
    });

    // Sort descending by date
    return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }, [contactEnquiries, chatbotEnquiries]);

  // Filtered List
  const filteredList = useMemo(() => {
    return unifiedList.filter((item) => {
      // Subtab filter
      if (subTab === 'contact' && item.source !== 'contact') return false;
      if (subTab === 'chatbot' && item.source !== 'chatbot') return false;

      // Status filter
      if (statusFilter !== 'All' && item.status !== statusFilter) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchRef = (item.referenceId || '').toLowerCase().includes(q);
        const matchName = (item.name || '').toLowerCase().includes(q);
        const matchEmail = (item.email || '').toLowerCase().includes(q);
        const matchCompany = (item.company || '').toLowerCase().includes(q);
        const matchType = (item.type || '').toLowerCase().includes(q);
        const matchMsg = (item.message || '').toLowerCase().includes(q);
        return matchRef || matchName || matchEmail || matchCompany || matchType || matchMsg;
      }

      return true;
    });
  }, [unifiedList, subTab, statusFilter, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    return {
      total: unifiedList.length,
      contact: unifiedList.filter((i) => i.source === 'contact').length,
      chatbot: unifiedList.filter((i) => i.source === 'chatbot').length,
      newCount: unifiedList.filter((i) => i.status === 'New').length,
      inReview: unifiedList.filter((i) => i.status === 'In Review').length,
      quoted: unifiedList.filter((i) => i.status === 'Quoted').length,
      closed: unifiedList.filter((i) => i.status === 'Closed').length,
    };
  }, [unifiedList]);

  const handleStatusChange = async (item, newStatus) => {
    // Optimistic UI update
    const updateInState = (setter) => {
      setter((prev) =>
        prev.map((i) => {
          const ref = i.reference_id || i.referenceId;
          if (ref === item.referenceId || i.id === item.id) {
            return { ...i, status: newStatus };
          }
          return i;
        })
      );
    };

    if (item.source === 'contact') updateInState(setContactEnquiries);
    else updateInState(setChatbotEnquiries);

    if (selectedEnquiry && selectedEnquiry.referenceId === item.referenceId) {
      setSelectedEnquiry((prev) => ({ ...prev, status: newStatus }));
    }

    const success = await updateEnquiryStatus({
      id: item.id,
      referenceId: item.referenceId,
      source: item.source,
      status: newStatus,
    });

    if (success && onToast) {
      onToast(`Enquiry ${item.referenceId} marked as ${newStatus}.`);
    }
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;
    const item = deleteConfirm;

    if (item.source === 'contact') {
      setContactEnquiries((prev) => prev.filter((i) => (i.reference_id || i.referenceId) !== item.referenceId));
    } else {
      setChatbotEnquiries((prev) => prev.filter((i) => (i.referenceId || i.reference_id) !== item.referenceId));
    }

    if (selectedEnquiry && selectedEnquiry.referenceId === item.referenceId) {
      setSelectedEnquiry(null);
    }
    setDeleteConfirm(null);

    const success = await deleteEnquiry({
      id: item.id,
      referenceId: item.referenceId,
      source: item.source,
    });

    if (success && onToast) {
      onToast(`Enquiry ${item.referenceId} deleted.`);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New':
        return 'badge-new';
      case 'In Review':
        return 'badge-review';
      case 'Quoted':
        return 'badge-quoted';
      case 'Closed':
        return 'badge-closed';
      default:
        return 'badge-default';
    }
  };

  return (
    <div className="enquiries-hub-wrapper">
      {/* =====================================================================
          1. STATS OVERVIEW CARDS
          ===================================================================== */}
      <div className="admin-stats-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">Total Inquiries</span>
            <div className="admin-stat-icon-wrapper" style={{ backgroundColor: '#eff6ff', color: '#1d4ed8' }}>
              <MessageSquare size={20} />
            </div>
          </div>
          <div className="admin-stat-value">{stats.total}</div>
          <div className="admin-stat-subtitle">
            {stats.contact} from Contact • {stats.chatbot} from Chatbot
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">New (Action Required)</span>
            <div className="admin-stat-icon-wrapper" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
              <AlertCircle size={20} />
            </div>
          </div>
          <div className="admin-stat-value" style={{ color: stats.newCount > 0 ? '#dc2626' : '#052C58' }}>
            {stats.newCount}
          </div>
          <div className="admin-stat-subtitle">Awaiting engineering review</div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">In Engineering Review</span>
            <div className="admin-stat-icon-wrapper" style={{ backgroundColor: '#fffbeb', color: '#d97706' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className="admin-stat-value" style={{ color: '#d97706' }}>{stats.inReview}</div>
          <div className="admin-stat-subtitle">Estimations in progress</div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-header">
            <span className="admin-stat-title">Quoted / Closed</span>
            <div className="admin-stat-icon-wrapper" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
              <CheckCircle2 size={20} />
            </div>
          </div>
          <div className="admin-stat-value" style={{ color: '#16a34a' }}>
            {stats.quoted + stats.closed}
          </div>
          <div className="admin-stat-subtitle">
            {stats.quoted} Quoted • {stats.closed} Completed
          </div>
        </div>
      </div>

      {/* =====================================================================
          2. FILTER & CONTROLS BAR
          ===================================================================== */}
      <div className="admin-table-card" style={{ marginBottom: '1.5rem', padding: '1.25rem 1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Subtabs */}
          <div style={{ display: 'flex', gap: '0.4rem', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '8px' }}>
            <button
              type="button"
              onClick={() => setSubTab('all')}
              className={`enq-subtab-btn ${subTab === 'all' ? 'active' : ''}`}
            >
              All Inquiries ({stats.total})
            </button>
            <button
              type="button"
              onClick={() => setSubTab('contact')}
              className={`enq-subtab-btn ${subTab === 'contact' ? 'active' : ''}`}
            >
              Contact RFQs ({stats.contact})
            </button>
            <button
              type="button"
              onClick={() => setSubTab('chatbot')}
              className={`enq-subtab-btn ${subTab === 'chatbot' ? 'active' : ''}`}
            >
              Chatbot ({stats.chatbot})
            </button>
          </div>

          {/* Right controls: Search, Status, Refresh */}
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
            {/* Search */}
            <div style={{ position: 'relative', minWidth: '240px', flex: '1 1 240px', maxWidth: '360px' }}>
              <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search by Ref ID, Client, Company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="admin-form-input"
                style={{ paddingLeft: '36px', height: '38px', fontSize: '0.86rem' }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Status Dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="admin-form-select"
              style={{ height: '38px', fontSize: '0.86rem', minWidth: '140px' }}
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="In Review">In Review</option>
              <option value="Quoted">Quoted</option>
              <option value="Closed">Closed</option>
            </select>

            {/* Refresh */}
            <button
              type="button"
              onClick={() => loadData(true)}
              disabled={refreshing}
              className="admin-btn admin-btn-secondary"
              style={{ height: '38px', padding: '0 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              title="Refresh from Database"
            >
              <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} />
              <span>{refreshing ? 'Syncing...' : 'Sync'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          3. ENQUIRIES TABLE
          ===================================================================== */}
      <div className="admin-table-card">
        <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#052C58', margin: 0 }}>
              Live Enquiries & RFQ Log
            </h3>
            <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Showing {filteredList.length} of {unifiedList.length} submissions • Auto-saved to MySQL database & notified via email
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.78rem', color: '#018F5D', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#018F5D', display: 'inline-block' }}></span>
              Notifications Active: banuakash99@gmail.com, info@txcosealing.com
            </span>
          </div>
        </div>

        {loading ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#64748b' }}>
            <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 1rem auto', color: '#018F5D' }} />
            <p>Loading enquiries from database...</p>
          </div>
        ) : filteredList.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#94a3b8' }}>
            <MessageSquare size={42} style={{ margin: '0 auto 1rem auto', color: '#cbd5e1' }} />
            <h4 style={{ color: '#475569', margin: '0 0 0.4rem 0' }}>No Enquiries Found</h4>
            <p style={{ fontSize: '0.88rem', margin: 0 }}>
              {searchQuery || statusFilter !== 'All'
                ? 'Try clearing search filters to see all enquiries.'
                : 'Submissions through the Contact page and Chatbot will appear here automatically.'}
            </p>
          </div>
        ) : (
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Ref ID & Channel</th>
                  <th>Client Contact</th>
                  <th>Company & Industry</th>
                  <th>Inquiry Details / Specs</th>
                  <th>Attachment</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredList.map((item) => (
                  <tr key={`${item.source}-${item.id}-${item.referenceId}`}>
                    {/* Ref ID & Channel */}
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontFamily: 'monospace', fontWeight: 700, color: '#052C58', fontSize: '0.88rem' }}>
                          {item.referenceId}
                        </span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            width: 'fit-content',
                            backgroundColor: item.source === 'contact' ? '#e0f2fe' : '#fef3c7',
                            color: item.source === 'contact' ? '#0369a1' : '#b45309',
                          }}
                        >
                          {item.source === 'contact' ? <FileText size={11} /> : <Bot size={11} />}
                          {item.sourceLabel}
                        </span>
                      </div>
                    </td>

                    {/* Client Contact */}
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <strong style={{ color: '#0f172a', fontSize: '0.92rem' }}>{item.name}</strong>
                        <a
                          href={`mailto:${item.email}?subject=TXCO%20Sealing%20Products%20Quotation%20[${item.referenceId}]`}
                          style={{ color: '#018F5D', fontSize: '0.82rem', textDecoration: 'none' }}
                        >
                          {item.email}
                        </a>
                        {item.phone && item.phone !== 'N/A' && (
                          <span style={{ color: '#64748b', fontSize: '0.78rem' }}>📞 {item.phone}</span>
                        )}
                      </div>
                    </td>

                    {/* Company & Industry */}
                    <td>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontWeight: 600, color: '#334155' }}>{item.company}</span>
                        <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{item.industry}</span>
                      </div>
                    </td>

                    {/* Inquiry Details */}
                    <td style={{ maxWidth: '280px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#052C58' }}>
                          {item.type}
                        </span>
                        <p
                          style={{
                            margin: 0,
                            fontSize: '0.82rem',
                            color: '#475569',
                            lineHeight: '1.4',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                          title={item.message}
                        >
                          {item.message || 'No additional message.'}
                        </p>
                      </div>
                    </td>

                    {/* Attachment */}
                    <td>
                      {item.attachment ? (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: '#018F5D',
                            fontWeight: 600,
                            fontSize: '0.78rem',
                            backgroundColor: '#f0fdf4',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            border: '1px solid #bbf7d0',
                          }}
                          title={item.attachment}
                        >
                          <Paperclip size={12} />
                          <span style={{ maxWidth: '110px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {item.attachment}
                          </span>
                        </span>
                      ) : (
                        <span style={{ color: '#cbd5e1', fontSize: '0.8rem' }}>—</span>
                      )}
                    </td>

                    {/* Date */}
                    <td>
                      <span style={{ color: '#64748b', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                        {new Date(item.createdAt).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </td>

                    {/* Status Dropdown */}
                    <td>
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item, e.target.value)}
                        className={`enq-status-select ${getStatusBadgeClass(item.status)}`}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                        <button
                          type="button"
                          onClick={() => setSelectedEnquiry(item)}
                          className="admin-action-btn view"
                          title="View Full Specification"
                        >
                          <Eye size={15} />
                        </button>
                        <a
                          href={`mailto:${item.email}?subject=Re:%20TXCO%20Quotation%20[${item.referenceId}]`}
                          className="admin-action-btn reply"
                          title="Reply via Email"
                          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                          <Mail size={15} />
                        </a>
                        <button
                          type="button"
                          onClick={() => setDeleteConfirm(item)}
                          className="admin-action-btn delete"
                          title="Delete Enquiry"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* =====================================================================
          4. MODAL: FULL ENQUIRY SPECIFICATION VIEWER
          ===================================================================== */}
      {selectedEnquiry && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box" style={{ maxWidth: '680px' }}>
            <div className="admin-modal-header" style={{ borderBottom: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: selectedEnquiry.source === 'contact' ? '#e0f2fe' : '#fef3c7',
                      color: selectedEnquiry.source === 'contact' ? '#0369a1' : '#b45309',
                      textTransform: 'uppercase',
                    }}
                  >
                    {selectedEnquiry.sourceLabel}
                  </span>
                  <h3 className="admin-modal-title" style={{ fontFamily: 'monospace', fontSize: '1.25rem' }}>
                    {selectedEnquiry.referenceId}
                  </h3>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  Submitted on {new Date(selectedEnquiry.createdAt).toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="admin-modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            <div className="admin-modal-body" style={{ maxHeight: '72vh', overflowY: 'auto' }}>
              {/* Contact Information Box */}
              <div style={{ backgroundColor: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.25rem' }}>
                <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '0.86rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#64748b' }}>
                  Client Contact Profile
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.88rem' }}>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.78rem' }}>Name:</span>
                    <strong style={{ color: '#052C58' }}>{selectedEnquiry.name}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.78rem' }}>Company:</span>
                    <strong style={{ color: '#1e293b' }}>{selectedEnquiry.company}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.78rem' }}>Email:</span>
                    <a href={`mailto:${selectedEnquiry.email}`} style={{ color: '#018F5D', fontWeight: 600 }}>
                      {selectedEnquiry.email}
                    </a>
                  </div>
                  <div>
                    <span style={{ color: '#64748b', display: 'block', fontSize: '0.78rem' }}>Phone:</span>
                    <span style={{ color: '#1e293b' }}>{selectedEnquiry.phone}</span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications (if chatbot) */}
              {selectedEnquiry.technical && (
                <div style={{ backgroundColor: '#f8fafc', padding: '1.2rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.25rem' }}>
                  <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '0.86rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#64748b' }}>
                    Technical Parameters
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.86rem' }}>
                    {selectedEnquiry.technical.productCategory && (
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Product Category:</span>
                        <strong>{selectedEnquiry.technical.productCategory}</strong>
                      </div>
                    )}
                    {selectedEnquiry.technical.standard && (
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Design Standard:</span>
                        <strong>{selectedEnquiry.technical.standard}</strong>
                      </div>
                    )}
                    {selectedEnquiry.technical.dimensions && (
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Dimensions:</span>
                        <strong>{selectedEnquiry.technical.dimensions}</strong>
                      </div>
                    )}
                    {selectedEnquiry.technical.material && (
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Material Grade:</span>
                        <strong>{selectedEnquiry.technical.material}</strong>
                      </div>
                    )}
                    {selectedEnquiry.technical.pressure && (
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Pressure Rating:</span>
                        <strong>{selectedEnquiry.technical.pressure}</strong>
                      </div>
                    )}
                    {selectedEnquiry.technical.quantity && (
                      <div>
                        <span style={{ color: '#64748b', fontSize: '0.78rem', display: 'block' }}>Quantity:</span>
                        <strong>{selectedEnquiry.technical.quantity}</strong>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Requirement Notes & Message */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.86rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#64748b' }}>
                  Requirement Description & Notes
                </h4>
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1rem', fontSize: '0.9rem', color: '#1e293b', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                  {selectedEnquiry.message || 'No additional specifications provided.'}
                </div>
              </div>

              {/* Attachment if present */}
              {selectedEnquiry.attachment && (
                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '0.9rem 1.2rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Paperclip size={18} color="#16a34a" />
                    <div>
                      <strong style={{ fontSize: '0.88rem', color: '#166534', display: 'block' }}>
                        {selectedEnquiry.attachment}
                      </strong>
                      <span style={{ fontSize: '0.76rem', color: '#15803d' }}>
                        Client uploaded specification / drawing document
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#15803d', fontWeight: 600 }}>Attached</span>
                </div>
              )}
            </div>

            <div className="admin-modal-footer" style={{ borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.84rem', color: '#64748b' }}>Update Status:</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry, e.target.value)}
                  className={`enq-status-select ${getStatusBadgeClass(selectedEnquiry.status)}`}
                >
                  <option value="New">New</option>
                  <option value="In Review">In Review</option>
                  <option value="Quoted">Quoted</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <a
                  href={`mailto:${selectedEnquiry.email}?subject=TXCO%20Sealing%20Products%20Quotation%20[${selectedEnquiry.referenceId}]`}
                  className="admin-btn admin-btn-primary"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Send size={15} />
                  <span>Reply to Client</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className="admin-btn admin-btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          5. DELETE CONFIRMATION MODAL
          ===================================================================== */}
      {deleteConfirm && (
        <div className="admin-modal-backdrop">
          <div className="admin-modal-box" style={{ maxWidth: '440px' }}>
            <div className="admin-modal-header">
              <h3 className="admin-modal-title" style={{ color: '#dc2626' }}>
                Delete Enquiry?
              </h3>
              <button
                type="button"
                onClick={() => setDeleteConfirm(null)}
                className="admin-modal-close-btn"
              >
                <X size={20} />
              </button>
            </div>
            <div className="admin-modal-body">
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.92rem', color: '#475569', lineHeight: '1.5' }}>
                Are you sure you want to remove enquiry{' '}
                <strong style={{ color: '#052C58' }}>{deleteConfirm.referenceId}</strong> from{' '}
                <strong>{deleteConfirm.name}</strong>?
              </p>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>
                This action will delete the record from both local cache and MySQL database.
              </p>
            </div>
            <div className="admin-modal-footer">
              <button
                type="button"
                onClick={() => setDeleteConfirm(null)}
                className="admin-btn admin-btn-secondary"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                className="admin-btn admin-btn-danger"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
