'use client';

import React, { useRef } from 'react';
import { X, Printer, Download, FileText, CheckCircle2 } from 'lucide-react';

export default function InvoiceModal({ isOpen, onClose, poData, invoiceItem }) {
  const printRef = useRef(null);

  if (!isOpen || !poData) return null;

  const invoiceNo = invoiceItem?.invoiceNo || '19694';
  const invoiceDate = poData.poDate || '18.04.2025';
  const currencySymbol = poData.currency === 'GBP' ? '£' : '$';

  const items = invoiceItem
    ? [invoiceItem]
    : poData.items || [];

  const subtotal = items.reduce((sum, item) => sum + (item.orderQty * (item.unitPrice || 250)), 0);
  const tax = subtotal * 0.18; // 18% IGST
  const total = subtotal + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="portal-modal-overlay" onClick={onClose}>
      <div className="portal-modal-container invoice-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="portal-modal-topbar no-print">
          <div className="portal-modal-topbar-title">
            <FileText size={18} className="text-primary" />
            <span>COMMERCIAL INVOICE — {poData.invoiceNumber || `INV-${invoiceNo}`}</span>
          </div>
          <div className="portal-modal-actions">
            <button type="button" onClick={handlePrint} className="portal-doc-btn print-btn" title="Print Invoice">
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
          <div className="invoice-document-sheet">
            {/* Watermark */}
            <div className="document-watermark">SENSITIVE INFO</div>

            {/* Header Box */}
            <div className="invoice-header-box">
              <div className="invoice-title">INVOICE</div>
              <div className="invoice-subtitle">SUPPLY MEANT FOR EXPORT ON PAYMENT OF IGST</div>
            </div>

            {/* Top Grid: Consigner vs Tax Info */}
            <div className="invoice-grid-row">
              <div className="invoice-col-left">
                <div className="inv-meta-label">Consigner</div>
                <div className="inv-meta-strong">TXCO / Asian Sealing Products Pvt Ltd</div>
                <div className="inv-meta-text">A-3(2) SIPCOT Industrial Park, Pillaipakkam,</div>
                <div className="inv-meta-text">Sriperumbudur, Kanchipuram, TamilNadu - 602105, India</div>
                <div className="inv-meta-text">Phone: +91 75400 75400 &bull; export@txco.com</div>
              </div>

              <div className="invoice-col-right">
                <table className="inv-meta-table">
                  <tbody>
                    <tr>
                      <td className="meta-th">PAN No.</td>
                      <td className="meta-td">AAJCA5558K</td>
                    </tr>
                    <tr>
                      <td className="meta-th">GSTIN No.</td>
                      <td className="meta-td">33AAJCA5558K1ZE</td>
                    </tr>
                    <tr>
                      <td className="meta-th">CGST Range</td>
                      <td className="meta-td">SRIPERUMBUDUR</td>
                    </tr>
                    <tr>
                      <td className="meta-th">Commissionerate</td>
                      <td className="meta-td">CGST &amp; C E, Chennai</td>
                    </tr>
                    <tr>
                      <td className="meta-th">Address</td>
                      <td className="meta-td">42 Trunk Road, Poonamallee, Chennai - 600056</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Middle Grid: Invoice No, Exporter Ref, Buyer's Order */}
            <div className="invoice-grid-row border-top">
              <div className="invoice-col-third">
                <div className="inv-meta-label">Invoice No. &amp; Date</div>
                <div className="inv-meta-strong">{poData.invoiceNumber || `${invoiceNo}/A dt. ${invoiceDate}`}</div>
              </div>
              <div className="invoice-col-third">
                <div className="inv-meta-label">Exporter's Ref.</div>
                <div className="inv-meta-strong">{poData.exporterRef || '0411023390'}</div>
              </div>
              <div className="invoice-col-third">
                <div className="inv-meta-label">Other Reference(s)</div>
                <div className="inv-meta-text">TXCO/EXP/{new Date().getFullYear()}</div>
              </div>
            </div>

            {/* Buyer Order & Consignee */}
            <div className="invoice-grid-row border-top">
              <div className="invoice-col-left">
                <div className="inv-meta-label">Buyer's Order No. &amp; Date</div>
                <div className="inv-meta-strong">{poData.buyersOrderRef || `PO# ${poData.poNumber} dt. ${poData.poDate}`}</div>
              </div>
              <div className="invoice-col-right">
                <div className="inv-meta-label">Carrier / Tracking</div>
                <div className="inv-meta-text">{poData.preCarriage || 'DHL EXPRESS (AIRWAYS)'}</div>
              </div>
            </div>

            {/* Consignee & Shipping Details */}
            <div className="invoice-grid-row border-top">
              <div className="invoice-col-half">
                <div className="inv-meta-label">Consignee &amp; Delivery Address</div>
                <div className="inv-meta-strong">{poData.customerName || 'CUSTOMER CORPORATE HEADQUARTERS'}</div>
                <div className="inv-meta-text">Engineering Purchasing Division &bull; Industrial Terminal</div>
                <div className="inv-meta-text">Global Sealing Plant Facility &bull; United Kingdom / Worldwide</div>
              </div>
              <div className="invoice-col-half">
                <table className="inv-meta-table">
                  <tbody>
                    <tr>
                      <td className="meta-th">Country of Origin</td>
                      <td className="meta-td">INDIA</td>
                    </tr>
                    <tr>
                      <td className="meta-th">Country of Destination</td>
                      <td className="meta-td">{poData.portOfDischarge?.includes('UK') ? 'UNITED KINGDOM' : 'UNITED STATES'}</td>
                    </tr>
                    <tr>
                      <td className="meta-th">Port of Loading</td>
                      <td className="meta-td">{poData.portOfLoading || 'CHENNAI AIR CARGO (MAA)'}</td>
                    </tr>
                    <tr>
                      <td className="meta-th">Port of Discharge</td>
                      <td className="meta-td">{poData.portOfDischarge || 'LONDON HEATHROW (LHR)'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Goods Items Table */}
            <div className="invoice-table-wrapper border-top">
              <table className="invoice-items-table">
                <thead>
                  <tr>
                    <th style={{ width: '45px' }}>SL.NO</th>
                    <th style={{ width: '60px' }}>PO SN</th>
                    <th>DESCRIPTION OF GOODS</th>
                    <th style={{ width: '85px' }}>HSN CODE</th>
                    <th style={{ width: '60px' }}>QTY</th>
                    <th style={{ width: '55px' }}>UOM</th>
                    <th style={{ width: '85px' }}>RATE ({poData.currency})</th>
                    <th style={{ width: '100px' }}>AMOUNT ({poData.currency})</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => {
                    const price = item.unitPrice || 250.0;
                    const itemTotal = item.orderQty * price;
                    return (
                      <tr key={idx}>
                        <td className="text-center">{idx + 1}</td>
                        <td className="text-center">{item.serialNo || idx + 1}</td>
                        <td>
                          <strong>{item.item}</strong>
                          <div className="inv-item-sub">Metallic Ring Joint Gasket &bull; ASME B16.20 / API 6A &bull; Fully Inspected &amp; Certified</div>
                        </td>
                        <td className="text-center">{item.hsnCode || '73269099'}</td>
                        <td className="text-center font-bold">{item.orderQty}</td>
                        <td className="text-center">NOS</td>
                        <td className="text-right">{currencySymbol}{price.toFixed(2)}</td>
                        <td className="text-right font-bold">{currencySymbol}{itemTotal.toFixed(2)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals & Declaration */}
            <div className="invoice-summary-row border-top">
              <div className="invoice-declaration-col">
                <div className="inv-meta-label">Declaration &amp; Terms:</div>
                <div className="inv-declaration-text">
                  We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.
                  Goods manufactured in accordance with ASME B16.20 / API 6A quality standards.
                </div>
                <div className="inv-package-info">
                  <strong>Marks &amp; Nos.:</strong> CUSTOMER SPECIFIED &bull; Carton Box 2 Nos. &bull; Gross Weight: 28.4 KGS
                </div>
              </div>

              <div className="invoice-totals-col">
                <table className="inv-totals-table">
                  <tbody>
                    <tr>
                      <td>Sub Total:</td>
                      <td className="text-right">{currencySymbol}{subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>IGST (18% Export Credit):</td>
                      <td className="text-right">{currencySymbol}{tax.toFixed(2)}</td>
                    </tr>
                    <tr className="total-highlight-row">
                      <td><strong>INVOICE TOTAL:</strong></td>
                      <td className="text-right"><strong>{currencySymbol}{total.toFixed(2)}</strong></td>
                    </tr>
                  </tbody>
                </table>

                {/* Stamp & Signature */}
                <div className="inv-signature-box">
                  <div className="inv-stamp-circle">
                    <span>TXCO SEALING</span>
                    <small>EXPORT DIVISION</small>
                    <CheckCircle2 size={16} color="#052C58" />
                  </div>
                  <div className="inv-sign-line">
                    <div className="inv-sign-img">D. Selvakumar</div>
                    <div className="inv-sign-name">Authorized Signatory</div>
                    <div className="inv-sign-title">TXCO Sealing Products Ltd.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
