'use client';

import React, { useRef } from 'react';
import { X, Printer, Download, Award, CheckCircle } from 'lucide-react';

export default function TestCertificateModal({ isOpen, onClose, tcData }) {
  const printRef = useRef(null);

  if (!isOpen || !tcData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="portal-modal-overlay" onClick={onClose}>
      <div className="portal-modal-container tc-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="portal-modal-topbar no-print">
          <div className="portal-modal-topbar-title">
            <Award size={18} className="text-primary" />
            <span>EN 10204-3.1 INSPECTION CERTIFICATE — {tcData.tcName}</span>
          </div>
          <div className="portal-modal-actions">
            <button type="button" onClick={handlePrint} className="portal-doc-btn print-btn" title="Print Certificate">
              <Printer size={15} />
              <span>Print</span>
            </button>
            <button type="button" onClick={handlePrint} className="portal-doc-btn download-btn" title="Download PDF">
              <Download size={15} />
              <span>Download PDF</span>
            </button>
            <button type="button" onClick={onClose} className="portal-modal-close" title="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="portal-document-scroll" ref={printRef}>
          <div className="tc-document-sheet">
            {/* Watermark */}
            <div className="document-watermark">SENSITIVE INFO</div>

            {/* Certificate Header with Company Crest */}
            <div className="tc-header-section">
              <div className="tc-brand-header">
                <div className="tc-logo-wrapper">
                  <div className="tc-logo-symbol">
                    <span className="tc-logo-badge">ASP</span>
                  </div>
                  <div className="tc-logo-text">
                    <h1 className="tc-company-name">TXCO / ASIAN SEALING PRODUCTS PVT. LTD.</h1>
                    <p className="tc-company-desc">High-Precision Metallic Ring Joint Gaskets &bull; API 6A &bull; ASME B16.20</p>
                  </div>
                </div>
                <div className="tc-address-line">
                  No. A-3(2), SIPCOT Industrial Park, Pillaipakkam, Sriperumbudur, Tamil Nadu - 602105, India<br />
                  Phone: +91 9553125566 &bull; info@txcosealing.com &bull; www.txco.com
                </div>
              </div>

              <div className="tc-title-banner">
                <h2>TEST CERTIFICATE EN 10204-3.1</h2>
              </div>
            </div>

            {/* 2-Column Meta Table */}
            <div className="tc-meta-grid">
              <div className="tc-meta-col">
                <table className="tc-inner-table">
                  <tbody>
                    <tr>
                      <td className="tc-lbl">Certificate No. &amp; Date</td>
                      <td className="tc-val">: {tcData.tcName} DT. {tcData.tcDate}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">Ref. No. &amp; Date</td>
                      <td className="tc-val">: {tcData.orderId} DT. {tcData.orderDate}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">MATERIAL</td>
                      <td className="tc-val">: {tcData.material}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">UNS NUMBER</td>
                      <td className="tc-val">: {tcData.unsNumber || 'UNS S31600'}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">RING NO./SHAPE</td>
                      <td className="tc-val">: {tcData.ring}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">QUANTITY</td>
                      <td className="tc-val">: {tcData.quantity || "4 No's"}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">ASTM SPEC</td>
                      <td className="tc-val">: {tcData.astmSpec || 'ASTM A 182 / A 182M'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="tc-meta-col">
                <table className="tc-inner-table">
                  <tbody>
                    <tr>
                      <td className="tc-lbl">Client</td>
                      <td className="tc-val">: {tcData.customerName}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">Client Order No.</td>
                      <td className="tc-val">: PO# {tcData.poNumber} DT. {tcData.poDate}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">TXCO / ASP HEAT CODE</td>
                      <td className="tc-val">: {tcData.heatCode}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">MELTING PRACTICE</td>
                      <td className="tc-val">: {tcData.meltingPractice || 'Electric Induction Furnace'}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">MANUFACTURING METHOD</td>
                      <td className="tc-val">: {tcData.mfgMethod || 'Centrifugal Casting / Forging'}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">BATCH NO</td>
                      <td className="tc-val">: {tcData.batchNo || '241121A01'}</td>
                    </tr>
                    <tr>
                      <td className="tc-lbl">MATERIAL COUNTRY OF ORIGIN</td>
                      <td className="tc-val">: INDIA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Heat Treatment Bar */}
            <div className="tc-section-box">
              <div className="tc-ht-text">
                <strong>HEAT TREATMENT:</strong> {tcData.heatTreatment || 'Solution annealed at 1050°C soaking for 3 hours after Water Quenched'}
              </div>
            </div>

            {/* Mechanical Analysis Table */}
            <div className="tc-table-container">
              <table className="tc-data-table">
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>MECHANICAL ANALYSIS</th>
                    <th>Tensile Strength<br /><small>Mpa Min</small></th>
                    <th>Yield Strength<br /><small>Mpa Min (0.2% OFFSET)</small></th>
                    <th>Elongation<br /><small>% Min (GL=4D or 2")</small></th>
                    <th>Reduction Area<br /><small>% Min</small></th>
                    <th>Hardness<br /><small>HRBW Max</small></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tc-row-hdr">Standards</td>
                    <td>{tcData.mech?.tensileStd || 515}</td>
                    <td>{tcData.mech?.yieldStd || 205}</td>
                    <td>{tcData.mech?.elongStd || 50}</td>
                    <td>-</td>
                    <td>{tcData.mech?.hardnessStd || 83}</td>
                  </tr>
                  <tr className="tc-highlight-row">
                    <td className="tc-row-hdr">Actual</td>
                    <td className="font-bold">{tcData.mech?.tensileAct || 582}</td>
                    <td className="font-bold">{tcData.mech?.yieldAct || 248}</td>
                    <td className="font-bold">{tcData.mech?.elongAct || 56.4}</td>
                    <td>-</td>
                    <td className="font-bold">{tcData.mech?.hardnessAct || '76 - 78'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chemical Analysis Table */}
            <div className="tc-table-container">
              <table className="tc-data-table">
                <thead>
                  <tr>
                    <th style={{ width: '22%' }}>CHEMICAL ANALYSIS</th>
                    {tcData.chem?.map((c, i) => (
                      <th key={i}>{c.elem}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tc-row-hdr">Min</td>
                    {tcData.chem?.map((c, i) => (
                      <td key={i}>{c.min}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="tc-row-hdr">Max</td>
                    {tcData.chem?.map((c, i) => (
                      <td key={i}>{c.max}</td>
                    ))}
                  </tr>
                  <tr className="tc-highlight-row">
                    <td className="tc-row-hdr">Actual</td>
                    {tcData.chem?.map((c, i) => (
                      <td key={i} className="font-bold">{c.act}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Dimensional & Compliance Affirmation */}
            <div className="tc-compliance-box">
              <p>
                <strong>Compliance Statement:</strong> The products supplied comply fully with customer purchase order specifications,
                relevant ASTM/ASME standards, and API 6A dimensional tolerances. Visual and NDT dye penetrant examination confirmed 100% defect-free.
                Certified under ISO 9001:2015 &amp; API Spec Q1 Quality Management Systems.
              </p>
            </div>

            {/* Stamp & Quality Assurance Signature Section */}
            <div className="tc-footer-sign-grid">
              <div className="tc-stamp-col">
                <div className="tc-round-stamp">
                  <div className="stamp-ring-outer">
                    <div className="stamp-text-circle">ASIAN SEALING PRODUCTS PVT. LTD.</div>
                    <div className="stamp-center">
                      <div className="stamp-sign-cursive">D. Selvakumar</div>
                      <div className="stamp-role">QA INSPECTOR</div>
                    </div>
                    <div className="stamp-text-bottom">QUALITY ASSURANCE</div>
                  </div>
                </div>
              </div>

              <div className="tc-sign-col">
                <div className="tc-sign-box">
                  <div className="tc-sign-signature-line">
                    <span className="sign-signature-name">D. Selvakumar</span>
                  </div>
                  <div className="tc-sign-title font-bold">Quality Assurance</div>
                  <div className="tc-sign-company">for TXCO / Asian Sealing Products Pvt Ltd.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
