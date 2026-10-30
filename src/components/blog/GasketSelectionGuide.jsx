'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Sliders,
  ShieldCheck,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import {
  rtjStandards,
  rtjPressureClassesByStandard,
  rtjGasketTypesByStandardAndClass,
  rtjSizeMapping,
  rTypeDimensions,
  rxTypeDimensions,
  bxTypeDimensions,
  metallurgyOptions,
  formatSizeWithDn,
  getBoltingAndTorque,
} from '@/data/gasketSelectionGuideData';
import '@/styles/gasket-selection-guide.css';

export default function GasketSelectionGuide() {
  // =========================================================================
  // 5-TIER DEPENDENT SELECTION STATE
  // Flange Standard → Pressure Class → Gasket Type → Nominal Size → Ring Number
  // =========================================================================
  const [calcStandard, setCalcStandard] = useState('asme_b16_5');
  const [calcClass, setCalcClass] = useState('cl1500'); // Default to Class 1500# to mirror screenshot!
  const [calcGasketType, setCalcGasketType] = useState('r_octagonal');
  const [calcSize, setCalcSize] = useState('3"');       // Default to 3" to mirror R-35!
  const [calcMetallurgy, setCalcMetallurgy] = useState('316l'); // Default to AISI 316L!
  const [naceCompliant, setNaceCompliant] = useState(true);
  const [fireSafe, setFireSafe] = useState(true);
  const [softSeated, setSoftSeated] = useState(false);

  // 1. Available Pressure Classes for selected Flange Standard
  const availableClasses = useMemo(() => {
    return rtjPressureClassesByStandard[calcStandard] || [];
  }, [calcStandard]);

  // 2. Available Gasket Types for selected Standard & Pressure Class
  const availableGasketTypes = useMemo(() => {
    if (calcStandard === 'api_6bx') {
      return [{ id: 'bx', name: 'BX (Self-Energizing API 6BX)' }];
    }
    if (calcStandard === 'api_6b') {
      if (calcClass === 'psi_2900') {
        return [{ id: 'rx', name: 'Style RX (Self-Energizing API 6B)' }];
      }
      if (calcClass === 'psi_2000') {
        return [
          { id: 'r_octagonal', name: 'Style R Octagonal (Flat-Bottom Groove)' },
          { id: 'r_oval', name: 'Style R Oval (Round or Flat-Bottom Groove)' },
        ];
      }
      return [
        { id: 'r_octagonal', name: 'Style R Octagonal (Flat-Bottom Groove)' },
        { id: 'r_oval', name: 'Style R Oval (Round or Flat-Bottom Groove)' },
        { id: 'rx', name: 'Style RX (Self-Energizing API 6B)' },
      ];
    }
    // ASME B16.5 & ASME B16.47 Series A
    return [
      { id: 'r_octagonal', name: 'Style R Octagonal (Flat-Bottom Groove)' },
      { id: 'r_oval', name: 'Style R Oval (Round or Flat-Bottom Groove)' },
    ];
  }, [calcStandard, calcClass]);

  // Helper to get compatible sizes
  function getSizesForCascade(std, cls, typ) {
    if (std === 'asme_b16_5') return rtjSizeMapping.asme_b16_5[cls] || [];
    if (std === 'asme_b16_47_a') return rtjSizeMapping.asme_b16_47_a[cls] || [];
    if (std === 'api_6bx') return rtjSizeMapping.api_6bx[cls] || [];
    if (std === 'api_6b') {
      const classMap = rtjSizeMapping.api_6b[cls];
      if (!classMap) return [];
      if (Array.isArray(classMap)) return classMap;
      if (typ === 'rx') return classMap.rx_type || [];
      return classMap.r_type || [];
    }
    return [];
  }

  // 3. Available Sizes for current Standard + Class + Gasket Type
  const availableSizes = useMemo(() => {
    return getSizesForCascade(calcStandard, calcClass, calcGasketType);
  }, [calcStandard, calcClass, calcGasketType]);

  // Handle Standard Change
  const handleStandardChange = (newStd) => {
    setCalcStandard(newStd);
    const classes = rtjPressureClassesByStandard[newStd] || [];
    const firstClass = classes[0]?.id || '';
    setCalcClass(firstClass);

    let defaultType = 'r_octagonal';
    if (newStd === 'api_6bx') defaultType = 'bx';
    else if (newStd === 'api_6b') {
      const typeDef = rtjGasketTypesByStandardAndClass.api_6b[firstClass];
      defaultType = Array.isArray(typeDef) ? typeDef[0] : 'r_octagonal';
    }
    setCalcGasketType(defaultType);

    const sizes = getSizesForCascade(newStd, firstClass, defaultType);
    setCalcSize(sizes[0]?.size || '');
  };

  // Handle Class Change
  const handleClassChange = (newClass) => {
    setCalcClass(newClass);

    let validTypes = ['r_octagonal', 'r_oval'];
    if (calcStandard === 'api_6bx') validTypes = ['bx'];
    else if (calcStandard === 'api_6b') {
      const typeDef = rtjGasketTypesByStandardAndClass.api_6b[newClass];
      validTypes = Array.isArray(typeDef) ? typeDef : ['r_octagonal'];
    }

    const currentTypeStillValid = validTypes.includes(calcGasketType);
    const chosenType = currentTypeStillValid ? calcGasketType : validTypes[0];
    setCalcGasketType(chosenType);

    const sizes = getSizesForCascade(calcStandard, newClass, chosenType);
    const hasCurrentSize = sizes.some((s) => s.size === calcSize);
    setCalcSize(hasCurrentSize ? calcSize : sizes[0]?.size || '');
  };

  // Handle Type Change
  const handleTypeChange = (newType) => {
    setCalcGasketType(newType);
    const sizes = getSizesForCascade(calcStandard, calcClass, newType);
    const hasCurrentSize = sizes.some((s) => s.size === calcSize);
    setCalcSize(hasCurrentSize ? calcSize : sizes[0]?.size || '');
  };

  // Resolved Ring Entry
  const resolvedRingEntry = useMemo(() => {
    const found = availableSizes.find((item) => item.size === calcSize);
    return found || availableSizes[0] || null;
  }, [availableSizes, calcSize]);

  const rawRingCode = resolvedRingEntry?.ring || 'R-35';
  const cleanRingKey = rawRingCode.split('/')[0].trim();

  // Selected Metallurgy Details
  const selectedMetal = useMemo(() => {
    return metallurgyOptions.find((m) => m.id === calcMetallurgy) || metallurgyOptions[0];
  }, [calcMetallurgy]);

  // Bolting and Torque Calculation
  const boltingInfo = useMemo(() => {
    return getBoltingAndTorque(calcStandard, calcClass, calcSize);
  }, [calcStandard, calcClass, calcSize]);

  // Dimensions
  const resolvedDims = useMemo(() => {
    if (cleanRingKey.startsWith('BX-')) {
      const dim = bxTypeDimensions[cleanRingKey];
      if (!dim) return null;
      return {
        type: 'BX',
        code: cleanRingKey,
        pitchDia: `${dim.od_mm} mm (${dim.od_in}")`,
        width: `${dim.a_mm} mm (${dim.a_in}")`,
        height: `${dim.h_mm} mm (${dim.h_in}")`,
        flat: `${dim.c_mm} mm (${dim.c_in}")`,
        hole: `${dim.d_mm} mm (${dim.d_in}")`,
        standardName: 'API 6BX',
      };
    }

    if (cleanRingKey.startsWith('RX-')) {
      const dim = rxTypeDimensions[cleanRingKey];
      if (!dim) return null;
      return {
        type: 'RX',
        code: cleanRingKey,
        pitchDia: `${dim.p_mm} mm (${dim.p_in}")`,
        width: `${dim.a_mm} mm (${dim.a_in}")`,
        height: `${dim.h_mm} mm (${dim.h_in}")`,
        flat: `${dim.c_mm} mm (${dim.c_in}")`,
        hole: dim.e_mm !== '—' ? `${dim.e_mm} mm (${dim.e_in}")` : '—',
        standardName: 'API 6B / ASME B16.20',
      };
    }

    // Default Style R (Oval / Octagonal)
    const dim = rTypeDimensions[cleanRingKey] || rTypeDimensions['R-35'];
    if (!dim) return null;
    const isOval = calcGasketType === 'r_oval';
    const heightVal = isOval
      ? (dim.b_mm !== '—' ? `${dim.b_mm} mm (${dim.b_in}")` : `${dim.h_mm} mm (${dim.h_in}")`)
      : `${dim.h_mm} mm (${dim.h_in}")`;

    return {
      type: 'R',
      code: cleanRingKey,
      pitchDia: `${dim.p_mm} mm (${dim.p_in}")`,
      width: `${dim.a_mm} mm (${dim.a_in}")`,
      height: heightVal,
      flat: `${dim.c_mm} mm (${dim.c_in}")`,
      radius: `${dim.r1_mm} mm (${dim.r1_in}")`,
      standardName: calcStandard === 'asme_b16_5' ? 'ASME B16.5' : calcStandard === 'api_6b' ? 'API 6B' : 'ASME B16.47 Series A',
    };
  }, [cleanRingKey, calcGasketType, calcStandard]);

  // Standard Display Name
  const grooveStandardDisplay = useMemo(() => {
    if (calcStandard === 'asme_b16_5') return 'ASME B16.5';
    if (calcStandard === 'api_6b') return 'API 6B';
    if (calcStandard === 'api_6bx') return 'API 6BX';
    return 'ASME B16.47 Series A';
  }, [calcStandard]);

  // WhatsApp click handler with pre-filled specs
  const handleWhatsAppOrder = () => {
    const classNameStr = availableClasses.find((c) => c.id === calcClass)?.name || calcClass;
    const sizeStr = formatSizeWithDn(calcSize);
    const message = encodeURIComponent(
      `Hello TXCO Team, I would like to order / request quotation for:\n\n` +
      `• Ring Number: ${rawRingCode}\n` +
      `• Flange Standard: ${grooveStandardDisplay}\n` +
      `• Pressure Class: ${classNameStr}\n` +
      `• Nominal Size: ${sizeStr}\n` +
      `• Metallurgy: ${selectedMetal.name} (${selectedMetal.code})\n` +
      `• Sour Service (NACE): ${naceCompliant ? 'Yes (NACE MR0175/ISO 15156)' : 'Standard'}\n` +
      `• Stud Bolting: ${boltingInfo.stud}\n\n` +
      `Please provide immediate stock availability and pricing.`
    );
    window.open(`https://wa.me/919553125566?text=${message}`, '_blank');
  };

  return (
    <section className="rtj-calc-section" id="gasket-selection-guide">
      <div className="rtj-calc-container">
        {/* Section Header */}
        <div className="rtj-calc-header">

          <h2 className="rtj-calc-title">
            Interactive <span className="rtj-calc-title-highlight">RTJ Gasket Selection Guide</span> & Operating Sizing
          </h2>
          <p className="rtj-calc-subtitle">
            Configure your flange operating parameters below to calculate the exact RTJ ring number, ASME/API precision dimensions, stud bolting geometry, and recommended preload torque.
          </p>
        </div>

        {/* ===================================================================
            FLANGE OPERATING PARAMETERS CALCULATOR (LIGHT THEME)
           =================================================================== */}
        <div className="rtj-calculator-widget">
          {/* LEFT PANEL: FLANGE OPERATING PARAMETERS */}
          <div className="rtj-widget-left">
            <div className="rtj-widget-panel-title">
              <Sliders size={18} />
              <span>FLANGE OPERATING PARAMETERS</span>
            </div>

            <div className="rtj-controls-grid">
              {/* Step 1: Flange Standard */}
              <div className="rtj-field-group">
                <label className="rtj-field-label">FLANGE STANDARD</label>
                <div className="rtj-select-wrapper">
                  <select
                    value={calcStandard}
                    onChange={(e) => handleStandardChange(e.target.value)}
                    className="rtj-light-select"
                  >
                    {rtjStandards.map((std) => (
                      <option key={std.id} value={std.id}>
                        {std.name}
                      </option>
                    ))}
                  </select>
                  <div className="rtj-select-arrow">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Step 2: Pressure Rating / Class */}
              <div className="rtj-field-group">
                <label className="rtj-field-label">PRESSURE RATING / CLASS</label>
                <div className="rtj-select-wrapper">
                  <select
                    value={calcClass}
                    onChange={(e) => handleClassChange(e.target.value)}
                    className="rtj-light-select"
                  >
                    {availableClasses.map((cls) => (
                      <option key={cls.id} value={cls.id}>
                        {calcStandard === 'asme_b16_5' || calcStandard === 'asme_b16_47_a'
                          ? `ASME ${cls.name}#`
                          : cls.name}
                      </option>
                    ))}
                  </select>
                  <div className="rtj-select-arrow">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Step 3: Gasket Type Profile */}
              <div className="rtj-field-group">
                <label className="rtj-field-label">GASKET TYPE PROFILE</label>
                <div className="rtj-select-wrapper">
                  <select
                    value={calcGasketType}
                    onChange={(e) => handleTypeChange(e.target.value)}
                    className="rtj-light-select"
                  >
                    {availableGasketTypes.map((typ) => (
                      <option key={typ.id} value={typ.id}>
                        {typ.name}
                      </option>
                    ))}
                  </select>
                  <div className="rtj-select-arrow">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Step 4: Nominal Pipe Size (NPS) with Metric DN */}
              <div className="rtj-field-group">
                <label className="rtj-field-label">NOMINAL PIPE SIZE (NPS)</label>
                <div className="rtj-select-wrapper">
                  <select
                    value={calcSize}
                    onChange={(e) => setCalcSize(e.target.value)}
                    className="rtj-light-select"
                  >
                    {availableSizes.map((item, idx) => (
                      <option key={idx} value={item.size}>
                        {formatSizeWithDn(item.size)}
                      </option>
                    ))}
                  </select>
                  <div className="rtj-select-arrow">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Step 5: Alloy Metallurgy */}
              <div className="rtj-field-group">
                <label className="rtj-field-label">ALLOY METALLURGY</label>
                <div className="rtj-select-wrapper">
                  <select
                    value={calcMetallurgy}
                    onChange={(e) => setCalcMetallurgy(e.target.value)}
                    className="rtj-light-select"
                  >
                    {metallurgyOptions.map((metal) => (
                      <option key={metal.id} value={metal.id}>
                        {metal.name}
                      </option>
                    ))}
                  </select>
                  <div className="rtj-select-arrow">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Design Compliance Note */}
              <div className="rtj-field-group" style={{ justifyContent: 'center' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: '1.4' }}>
                  <strong style={{ color: '#0284c7' }}>Design Compliance:</strong> ASME B16.20 & API Spec 6A controlled hardness and tolerances.
                </div>
              </div>
            </div>

            {/* Checkboxes Row */}
            <div className="rtj-checkboxes-row">
              <label className="rtj-checkbox-label">
                <input
                  type="checkbox"
                  checked={naceCompliant}
                  onChange={(e) => setNaceCompliant(e.target.checked)}
                />
                <span>NACE MR0175 / ISO 15156 Sour Service</span>
              </label>

              <label className="rtj-checkbox-label">
                <input
                  type="checkbox"
                  checked={fireSafe}
                  onChange={(e) => setFireSafe(e.target.checked)}
                />
                <span>API 6FB Fire-Safe Standard</span>
              </label>

              <label className="rtj-checkbox-label">
                <input
                  type="checkbox"
                  checked={softSeated}
                  onChange={(e) => setSoftSeated(e.target.checked)}
                />
                <span>Soft Material Seated (PTFE Insert)</span>
              </label>
            </div>
          </div>

          {/* RIGHT PANEL: CALCULATED RESULT */}
          <div className="rtj-widget-right">
            <div>
              <div className="rtj-result-top-bar">
                <span className="rtj-result-heading">CALCULATED RESULT</span>
                <div className="rtj-verified-spec-badge">
                  <ShieldCheck size={14} />
                  <span>VERIFIED SPEC</span>
                </div>
              </div>

              {/* Specified Ring Number Header */}
              <div className="rtj-ring-display-row">
                <div>
                  <div className="rtj-ring-title-sub">SPECIFIED RING NUMBER</div>
                  <div className="rtj-ring-big-code">{rawRingCode}</div>
                </div>

                <div className="rtj-groove-standard-col">
                  <div className="rtj-groove-standard-label">GROOVE STANDARD</div>
                  <div className="rtj-groove-standard-val">{grooveStandardDisplay}</div>
                </div>
              </div>

              {/* Dimension & Bolting List */}
              {resolvedDims && (
                <div className="rtj-specs-rows">
                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">
                      {resolvedDims.type === 'BX' ? 'Outside Diameter (OD):' : 'Pitch Diameter (P):'}
                    </span>
                    <span className="rtj-spec-value">{resolvedDims.pitchDia}</span>
                  </div>

                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">Ring Width (A):</span>
                    <span className="rtj-spec-value">{resolvedDims.width}</span>
                  </div>

                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">Ring Height (H):</span>
                    <span className="rtj-spec-value">{resolvedDims.height}</span>
                  </div>

                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">Width of Flat (C):</span>
                    <span className="rtj-spec-value">{resolvedDims.flat}</span>
                  </div>

                  {resolvedDims.type === 'BX' && resolvedDims.hole && (
                    <div className="rtj-spec-row">
                      <span className="rtj-spec-label">Vent Hole Size (D):</span>
                      <span className="rtj-spec-value">{resolvedDims.hole}</span>
                    </div>
                  )}

                  {resolvedDims.type === 'RX' && resolvedDims.hole !== '—' && (
                    <div className="rtj-spec-row">
                      <span className="rtj-spec-label">Pressure Vent Hole (E):</span>
                      <span className="rtj-spec-value">{resolvedDims.hole}</span>
                    </div>
                  )}

                  {resolvedDims.type === 'R' && resolvedDims.radius && (
                    <div className="rtj-spec-row">
                      <span className="rtj-spec-label">Radius (R1):</span>
                      <span className="rtj-spec-value">{resolvedDims.radius}</span>
                    </div>
                  )}

                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">Stud Bolt Geometry:</span>
                    <span className="rtj-spec-value highlight-amber">{boltingInfo.stud}</span>
                  </div>

                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">Preload Torque:</span>
                    <span className="rtj-spec-value highlight-cyan">{boltingInfo.torque}</span>
                  </div>

                  <div className="rtj-spec-row">
                    <span className="rtj-spec-label">Hardness Limit:</span>
                    <span className="rtj-spec-value">
                      {selectedMetal.maxBrinell} / {selectedMetal.maxRockwell} Max
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="rtj-actions-stack">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="rtj-whatsapp-btn"
                title="Direct WhatsApp chat with pre-filled specs"
              >
                <MessageCircle size={18} />
                <span>ORDER THIS SPEC ON WHATSAPP</span>
              </button>

              <Link
                href={`/contact?spec=${encodeURIComponent(
                  `RTJ ${rawRingCode} - ${grooveStandardDisplay} ${calcClass} ${calcSize} (${selectedMetal.name})`
                )}`}
                className="rtj-rfq-btn"
              >
                <span>+ ADD TO RAPID RFQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
