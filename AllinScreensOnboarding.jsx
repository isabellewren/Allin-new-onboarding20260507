// AllinOnboarding.jsx — B · LAYERED onboarding (8 screens).
// Merged from v3-onboarding/_shared.jsx + v3-onboarding/variantB-layered.jsx.
// Exposes the 8 layered screens under both their B# names and the catalogue's
// "Onboarding...Screen" naming convention.

// ─── Shared chrome (ObHeader / ObCTA / DisclaimerCard / FilmStill / BgGlow / CheckRow) ─
// Shared chrome for v3 onboarding variants.
// Builds on top of the project's AllinShared.jsx + ios-frame.jsx.

const { AllinC: VC, AllinF: VF, Mark: VMark, Pill: VPill } = window;

// ── Onboarding Header ────────────────────────────────────────────────
// Logo top-left, skip top-right, then a 8-tick progress bar.
function ObHeader({ step, total = 8, skip = true, dark = false }) {
  const fg = dark ? 'rgba(244,240,230,0.55)' : VC.muted;
  const trackOff = dark ? 'rgba(244,240,230,0.12)' : 'rgba(74,63,53,0.10)';
  const trackOn  = dark ? '#D79B6A' : VC.rust;
  return (
    <>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '56px 22px 10px',
      }}>
        <VMark size={14} dark={dark}/>
        {skip && (
          <div style={{ fontFamily: VF.body, fontSize: 13, color: fg, letterSpacing: 0.02 }}>
            skip
          </div>
        )}
      </div>
      <div style={{ padding: '0 22px 10px', display: 'flex', gap: 4 }}>
        {Array.from({ length: total }, (_, i) => (
          <div key={i} style={{
            flex: 1, height: 2.5, borderRadius: 2,
            background: i < step ? trackOn : trackOff,
            transition: 'background 240ms ease',
          }}/>
        ))}
      </div>
    </>
  );
}

// ── Bottom CTA ───────────────────────────────────────────────────────
function ObCTA({ children = 'continue', secondary, variant = 'dark', dark = false }) {
  return (
    <div style={{
      position: 'absolute', bottom: 28, left: 22, right: 22,
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <VPill variant={variant} full size="lg">{children}</VPill>
      {secondary && (
        <button style={{
          background: 'transparent', border: 'none',
          color: dark ? 'rgba(244,240,230,0.55)' : VC.muted,
          fontFamily: VF.body, fontSize: 12, padding: 8, cursor: 'pointer',
          letterSpacing: 0.04,
        }}>{secondary}</button>
      )}
    </div>
  );
}

// ── A short eyebrow + display block, used by every screen ────────────
function ObCopy({ eyebrow, title, body, align = 'center', dark = false, titleSize = 28, maxWidth = 320 }) {
  const fg = dark ? 'rgba(244,240,230,0.95)' : VC.deepReef;
  const muted = dark ? 'rgba(244,240,230,0.55)' : VC.muted;
  const driftwood = dark ? 'rgba(244,240,230,0.78)' : VC.driftwood;
  return (
    <div style={{
      padding: align === 'left' ? '0 26px' : '0 24px',
      textAlign: align,
      display: 'flex', flexDirection: 'column', gap: 12,
      alignItems: align === 'center' ? 'center' : 'flex-start',
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: VF.body, fontSize: 10.5, letterSpacing: 0.14,
          textTransform: 'uppercase', fontWeight: 500, color: muted,
        }}>{eyebrow}</div>
      )}
      {title && (
        <div style={{
          fontFamily: VF.display, fontWeight: 300, fontSize: titleSize,
          lineHeight: 1.15, color: fg, letterSpacing: 0.005,
          textWrap: 'balance', maxWidth,
        }}>{title}</div>
      )}
      {body && (
        <div style={{
          fontFamily: VF.body, fontSize: 14, lineHeight: 1.6,
          color: driftwood, textWrap: 'pretty', maxWidth,
        }}>{body}</div>
      )}
    </div>
  );
}

// ── Disclaimer card (shared by all three variants) ───────────────────
function DisclaimerCard({ dark = false }) {
  const muted = dark ? 'rgba(244,240,230,0.65)' : VC.muted;
  const ink = dark ? 'rgba(244,240,230,0.95)' : VC.deepReef;
  const surface = dark ? 'rgba(244,240,230,0.06)' : 'rgba(255,255,255,0.55)';
  const border = dark ? 'rgba(244,240,230,0.12)' : VC.border;
  return (
    <div style={{
      borderRadius: 14, padding: '14px 16px',
      background: surface, border: `1px solid ${border}`,
      display: 'flex', gap: 12, alignItems: 'flex-start',
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
        <path d="M20.84 4.6a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.07a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.24l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
              stroke={dark ? '#D79B6A' : VC.rust} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div>
        <div style={{ fontFamily: VF.body, fontSize: 11.5, color: muted, lineHeight: 1.5 }}>
          if it&rsquo;s urgent, please call
        </div>
        <div style={{ fontFamily: VF.body, fontSize: 13, color: ink, lineHeight: 1.5, marginTop: 2 }}>
          988 (US) &middot; 116 123 (UK) &middot; iasp.info
        </div>
      </div>
    </div>
  );
}

// ── Tiny check row ───────────────────────────────────────────────────
function CheckRow({ label, dark = false }) {
  const ink = dark ? 'rgba(244,240,230,0.85)' : VC.driftwood;
  const border = dark ? 'rgba(244,240,230,0.25)' : VC.border;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 18, height: 18, borderRadius: 5,
        border: `1.5px solid ${border}`, background: 'transparent',
      }}/>
      <div style={{ fontFamily: VF.body, fontSize: 12.5, color: ink }}>{label}</div>
    </div>
  );
}

// ── Background glow (radial, soft, behind content) ───────────────────
function BgGlow({ from = '#F0BF90', to = 'transparent', x = '50%', y = '38%', size = '95% 80%', opacity = 1 }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', opacity,
      background: `radial-gradient(ellipse ${size} at ${x} ${y}, ${from} 0%, ${to} 65%)`,
    }}/>
  );
}

// ── A film-still card (used by all three on screen 8) ────────────────
function FilmStill({ dark = false, runtime = '3 min', size = 220 }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '4/5', borderRadius: 18,
      background: 'linear-gradient(160deg, #2E4F52 0%, #243E42 55%, #1a2d2f 100%)',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        position: 'absolute', inset: '-15%',
        background: 'radial-gradient(circle at 50% 42%, rgba(215,155,106,0.42) 0%, rgba(215,155,106,0) 55%)',
      }}/>
      <div style={{
        position: 'relative', zIndex: 1,
        width: 56, height: 56, borderRadius: '50%',
        background: 'rgba(244,240,230,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 22px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: '14px solid #243E42',
          borderTop: '9px solid transparent',
          borderBottom: '9px solid transparent',
          marginLeft: 3,
        }}/>
      </div>
      <div style={{
        position: 'absolute', bottom: 14, right: 16,
        fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
        color: 'rgba(244,240,230,0.7)', zIndex: 1, fontFamily: VF.body,
      }}>{runtime}</div>
      <div style={{
        position: 'absolute', top: 14, left: 16,
        fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
        color: 'rgba(244,240,230,0.65)', zIndex: 1, fontFamily: VF.body,
      }}>a short film</div>
    </div>
  );
}

// ─── Variant B · Layered ────────────────────────────────────────────────
// Variant B — LAYERED
// Depth metaphor: horizontal strata representing surface mood, deeper thoughts, deepest beliefs.
// Each screen reveals/peels a layer. Diagrammatic but warm.

const BC = window.AllinC, BF = window.AllinF;
const BMark = window.Mark, BPill = window.Pill, BOrb = window.Orb, BScreen = window.Screen;
const BObHeader = ObHeader, BObCTA = ObCTA, BDisclaimerCard = DisclaimerCard;
const BCheckRow = CheckRow, BBgGlow = BgGlow, BFilmStill = FilmStill;
// ── Stratum (one band of "depth") ────────────────────────────────────
function Stratum({ tone, label, value, height = 56, active = false, italic = false, faded = false }) {
  // tone: 0..3 (top → bottom = surface → depth)
  // Sea-glass → deep reef scale, drawn from the design-system blue range.
  // Each tone defines: base fill, bloom highlight (the inner radial glow), label/value fg.
  const tones = [
    {
      base: '#E8EEE9', bloom: 'rgba(255,255,255,0.85)',
      fg: BC.deepReef, labelOpacity: 0.85,
    },
    {
      base: '#CFDCD6', bloom: 'rgba(255,255,255,0.75)',
      fg: BC.deepReef, labelOpacity: 0.85,
    },
    {
      base: '#8FA6A6', bloom: 'rgba(232,238,233,0.55)',
      fg: '#FFFFFF', labelOpacity: 0.95,
    },
    {
      base: '#3D5C5F', bloom: 'rgba(143,166,166,0.6)',
      fg: '#FFFFFF', labelOpacity: 0.9,
    },
  ];
  const t = tones[tone];
  return (
    <div style={{
      position: 'relative', height, width: '100%',
      background: t.base,
      display: 'flex', alignItems: 'center', padding: '0 18px',
      borderRadius: 0,
      borderTop: tone === 0 ? 'none' : '1px solid rgba(244,240,230,0.18)',
      opacity: faded ? 0.7 : 1,
      transition: 'opacity 240ms ease',
      overflow: 'hidden',
    }}>
      {/* glowy bloom — radial highlight that bleeds up from inside the band */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse 80% 120% at 50% 90%, ${t.bloom} 0%, transparent 70%)`,
        mixBlendMode: 'screen',
      }}/>
      {/* a tiny top-edge highlight so each band feels like glass, not paper */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.35) 40%, rgba(255,255,255,0.35) 60%, transparent 100%)',
        pointerEvents: 'none',
      }}/>
      {/* active state: soft rust glow halo, no harsh outline */}
      {active && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 140% at 50% 50%, rgba(215,155,106,0.30) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', inset: 0,
            boxShadow: 'inset 0 0 0 1.5px rgba(185,106,74,0.55), 0 0 24px rgba(215,155,106,0.35)',
            pointerEvents: 'none',
          }}/>
        </>
      )}
      <div style={{
        position: 'relative', zIndex: 1,
        fontFamily: BF.body, fontSize: 9.5, color: t.fg,
        letterSpacing: 0.16, textTransform: 'uppercase', fontWeight: 600,
        opacity: faded ? 1 : t.labelOpacity, width: 90, flexShrink: 0,
      }}>{label}</div>
      <div style={{
        position: 'relative', zIndex: 1,
        flex: 1, textAlign: 'right',
        fontFamily: italic ? "'Cormorant Garamond',serif" : BF.body,
        fontStyle: italic ? 'italic' : 'normal',
        fontSize: italic ? 16 : 14,
        color: t.fg, fontWeight: italic ? 400 : 400,
      }}>{value}</div>
    </div>
  );
}

// ── Title block (bottom-aligned, used by most screens) ───────────────
function BTitle({ eyebrow, title, body }) {
  return (
    <div style={{
      position: 'absolute', bottom: 110, left: 26, right: 26,
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      {eyebrow && (
        <div style={{
          fontFamily: BF.body, fontSize: 10, letterSpacing: 0.18, textTransform: 'uppercase',
          fontWeight: 500, color: BC.rust,
        }}>{eyebrow}</div>
      )}
      <div style={{
        fontFamily: BF.display, fontSize: 26, fontWeight: 300, color: BC.deepReef,
        lineHeight: 1.18, letterSpacing: 0.005, textWrap: 'balance',
      }}>{title}</div>
      {body && (
        <div style={{
          fontFamily: BF.body, fontSize: 13.5, lineHeight: 1.55,
          color: BC.driftwood, textWrap: 'pretty', maxWidth: 320, marginTop: 4,
        }}>{body}</div>
      )}
    </div>
  );
}

// ── Section frame for the strata stack ───────────────────────────────
function BStrataFrame({ children, top, height = 280, withGlow = true }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: 16, overflow: 'hidden',
      boxShadow: '0 8px 28px -16px rgba(36,62,66,0.25)',
      border: `1px solid ${BC.border}`,
    }}>
      {withGlow && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(240,191,144,0.35) 0%, transparent 70%)',
          zIndex: 1,
        }}/>
      )}
      <div style={{ position: 'relative', zIndex: 0 }}>
        {children}
      </div>
    </div>
  );
}

// ── 1 · Welcome ──────────────────────────────────────────────────────
function B1_Welcome() {
  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(240,191,144,0.45)" y="36%"/>
      <BObHeader step={1} skip={false}/>

      {/* hero: orb-in-orb — sea-glass halo cradles a warm apricot core */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 130,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30,
      }}>
        <div style={{
          position: 'relative', width: 220, height: 220,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* outer halo — sea-glass blue */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 50%, rgba(143,166,166,0.45) 0%, rgba(207,220,214,0.30) 45%, transparent 75%)',
          }}/>
          {/* mid orb — soft sand/sea blend */}
          <div style={{
            position: 'absolute', width: 160, height: 160, borderRadius: '50%',
            background: 'radial-gradient(circle at 48% 42%, #F0E8D6 0%, #DACDB1 55%, rgba(186,170,140,0.55) 100%)',
            boxShadow: 'inset 0 -10px 24px rgba(74,63,53,0.10), 0 6px 20px rgba(143,166,166,0.18)',
          }}/>
          {/* inner core — warm apricot/rust */}
          <div style={{
            position: 'absolute', width: 90, height: 90, borderRadius: '50%',
            background: 'radial-gradient(circle at 45% 40%, #FFF8EC 0%, #F0BF90 22%, #D79B6A 60%, rgba(215,155,106,0) 100%)',
            animation: 'allin-breathe 8s ease-in-out infinite',
          }}/>
        </div>
        <div style={{
          textAlign: 'center', padding: '0 32px',
        }}>
          <div style={{
            fontFamily: BF.display, fontSize: 32, fontWeight: 300, color: BC.deepReef,
            letterSpacing: 0.005, lineHeight: 1.1,
          }}>change your patterns<br/><em style={{ fontStyle: 'italic', color: BC.rust }}>for good</em><span style={{ color: BC.rust }}>.</span></div>
          <div style={{
            marginTop: 28, fontFamily: BF.body, fontSize: 14, color: BC.muted,
            lineHeight: 1.55, maxWidth: 280, marginLeft: 'auto', marginRight: 'auto',
          }}>a wellness tool for the moment it&rsquo;s hard.</div>
        </div>
      </div>
      <BObCTA>begin</BObCTA>
    </BScreen>
  );
}

// ── 2 · The idea (a) — surface only ──────────────────────────────────
// Show only the top stratum; deeper bands are blurred & faded behind.
function B2_Surface() {
  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(240,191,144,0.35)" y="20%"/>
      <BObHeader step={2}/>
      <div style={{
        position: 'absolute', left: 22, right: 22, top: 110, bottom: 280,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10,
      }}>
        <BStrataFrame withGlow={false}>
          <Stratum tone={0} label="mood" value="anxious" italic active height={64}/>
          <Stratum tone={1} label="thought" value="&mdash;" faded/>
          <Stratum tone={2} label="story" value="&mdash;" faded/>
          <Stratum tone={3} label="belief" value="&mdash;" faded/>
        </BStrataFrame>
      </div>

      <BTitle
        title={<>most apps focus on<br/><em style={{ fontStyle: 'italic', color: BC.rust }}>the surface</em>.</>}
        body="logging a mood or breathing is helpful, but the same feelings inevitably return."
      />
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}

// ── 3 · The idea (b) — peel further down ─────────────────────────────
function B3_Deeper() {
  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(176,197,190,0.4)" y="22%"/>
      <BObHeader step={3}/>
      <div style={{
        position: 'absolute', left: 22, right: 22, top: 110, bottom: 280,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10,
      }}>
        <BStrataFrame>
          <Stratum tone={0} label="mood"    value="anxious" italic height={52}/>
          <Stratum tone={1} label="thought" value={<><em style={{ fontStyle: 'italic' }}>&ldquo;they&rsquo;re upset with me.&rdquo;</em></>} height={56}/>
          <Stratum tone={2} label="story"   value={<><em style={{ fontStyle: 'italic' }}>&ldquo;i must have done something wrong.&rdquo;</em></>} height={68} active/>
          <Stratum tone={3} label="belief"  value={<><em style={{ fontStyle: 'italic' }}>&ldquo;i&rsquo;m not enough.&rdquo;</em></>} height={72}/>
        </BStrataFrame>
      </div>

      <BTitle
        title={<>allin works deeper, down to the<br/><em style={{ fontStyle: 'italic', color: BC.rust }}>beliefs</em> driving your experience.</>}
        body="every mood rests on a quiet idea. that&rsquo;s the part allin uncovers."
      />
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}

// ── 4 · The idea (c) — rewire (the bottom layer changes) ─────────────
function B4_Rewire() {
  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(215,155,106,0.40)" y="26%"/>
      <BObHeader step={4}/>
      <div style={{
        position: 'absolute', left: 22, right: 22, top: 110, bottom: 280,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10,
      }}>
        <BStrataFrame>
          <Stratum tone={0} label="mood"    value="softer" italic height={48}/>
          <Stratum tone={1} label="thought" value={<>&ldquo;they might be tired&rdquo;</>} height={52}/>
          <Stratum tone={2} label="story"   value={<>&ldquo;not everything is mine to fix&rdquo;</>} height={64}/>
          {/* belief — replaced */}
          <div style={{ position: 'relative' }}>
            <Stratum tone={3} label="belief" value={<><em style={{ fontStyle: 'italic' }}>&ldquo;i&rsquo;m allowed to be met.&rdquo;</em></>} height={84} active/>
            <div style={{
              position: 'absolute', top: 6, right: 12,
              fontFamily: BF.body, fontSize: 9, color: '#F4F0E6',
              letterSpacing: 0.16, textTransform: 'uppercase',
              padding: '3px 8px', borderRadius: 999, background: 'rgba(185,106,74,0.85)',
              fontWeight: 500,
            }}>rewired</div>
          </div>
        </BStrataFrame>
      </div>

      <BTitle
        title={<>we help you <em style={{ fontStyle: 'italic', color: BC.rust }}>change</em> those beliefs.</>}
        body="based on peer-reviewed methods &mdash; the same trigger, met with a truer interpretation, has less pull next time."
      />
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}

// ── 5 · What that means (a) — the flow ───────────────────────────────
// 4 separate cards connected by a thin descending thread.
// Same depth scale as the strata, but cards (not bands) — this is the *approach*,
// not the strata themselves. The thread on the left signals descent through layers.
// ── 5 · The flow — 4 numbered steps with one line of essence each ────
function B5_Flow() {
  const steps = [
    { num: '1', label: 'arrive',    line: 'how are you arriving today?' },
    { num: '2', label: 'map',       line: 'what belief sits underneath this?' },
    { num: '3', label: 'rewire',    line: 'a guided audio session.' },
    { num: '4', label: 'integrate', line: 'what feels true now?' },
  ];

  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(240,191,144,0.32)" y="22%"/>
      <BObHeader step={5}/>

      <div style={{
        position: 'absolute', left: 22, right: 22, top: 130, bottom: 320,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14,
      }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '14px 16px', borderRadius: 14,
            background: 'rgba(255,255,255,0.55)',
            border: `1px solid ${BC.border}`,
            boxShadow: '0 1px 2px rgba(36,62,66,0.04)',
          }}>
            {/* numbered orb — design system gradient */}
            <div style={{ position: 'relative', width: 36, height: 36, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ position: 'absolute', inset: -6, borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 50%, rgba(240,191,144,0.22) 0%, rgba(244,240,230,0) 75%)',
              }}/>
              <div style={{ width: 36, height: 36, borderRadius: '50%',
                background: 'radial-gradient(circle at 45% 42%, #FFF8EC 0%, #F0BF90 28%, #D79B6A 60%, rgba(222,230,224,0.55) 90%, rgba(244,240,230,0) 100%)',
              }}/>
              <div style={{ position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: BF.display, fontSize: 16, fontWeight: 400,
                color: BC.deepReef,
              }}>{s.num}</div>
            </div>

            {/* label + line */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
              <div style={{
                fontFamily: BF.body, fontSize: 9, letterSpacing: 0.18,
                textTransform: 'uppercase', fontWeight: 600, color: BC.muted,
              }}>{s.label}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
                fontSize: 16, color: BC.deepReef, lineHeight: 1.2,
              }}>{s.line}</div>
            </div>
          </div>
        ))}
      </div>

      <BTitle
        title={<>each session follows the same format that guides you through <em style={{ fontStyle: 'italic', color: BC.rust }}>the process</em>.</>}
        body="you can’t do this wrong. just answer honestly."
      />
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}


// ── 6 · Over time — strongest unhelpful beliefs, surfaced & rewired ──
function B6_OverTime() {
  // Stacked weekly bands — heavy "deep reef" band shrinks across weeks
  // as the recurring belief is gradually rewritten / softens.
  const weeks = [
    { label: 'week 1',  caption: '"not enough"',           deep: 0.55, mid: 0.25, glass: 0.15, salt: 0.05 },
    { label: 'week 4',  caption: '"sometimes."',           deep: 0.38, mid: 0.32, glass: 0.20, salt: 0.10 },
    { label: 'week 8',  caption: '"often, enough."',       deep: 0.22, mid: 0.30, glass: 0.30, salt: 0.18 },
    { label: 'week 12', caption: '"i\u2019m allowed."',   deep: 0.10, mid: 0.22, glass: 0.32, salt: 0.36, highlight: true },
  ];

  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(176,197,190,0.22)" y="55%"/>
      <BObHeader step={6}/>

      <div style={{
        position: 'absolute', left: 22, right: 22, top: 118, bottom: 300,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 14,
      }}>
        <div style={{
          fontFamily: BF.body, fontSize: 10, letterSpacing: 0.18,
          textTransform: 'uppercase', fontWeight: 600, color: BC.muted,
        }}>over time, the deepest layer&hellip;</div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end', height: 150 }}>
          {weeks.map((w, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 8, minWidth: 0 }}>
              <div style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                borderRadius: 4, overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(36,62,66,0.08)',
                border: `1px solid ${BC.border}`,
              }}>
                <div style={{ flex: w.salt,  background: '#EEF2EC' }}/>
                <div style={{ flex: w.glass, background: '#B0C5BE' }}/>
                <div style={{ flex: w.mid,   background: '#8FA6A6' }}/>
                <div style={{ flex: w.deep,  background: BC.deepReef }}/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <div style={{
                  fontFamily: BF.body, fontSize: 11, color: BC.deepReef,
                  letterSpacing: 0.02, fontWeight: 500,
                }}>{w.label}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
                  fontSize: 12, color: w.highlight ? BC.rust : BC.muted,
                  fontWeight: w.highlight ? 500 : 400,
                  textAlign: 'center', lineHeight: 1.1,
                }}>{w.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BTitle
        title={<>becomes <em style={{ fontStyle: 'italic', color: BC.rust }}>lighter</em>.</>}
        body="not one breakthrough &mdash; a slow re-learning, at the depth where the belief lives."
      />
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}


// ── 7 · Disclaimer (care note) ───────────────────────────────────────
function B7_Disclaimer() {
  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(176,197,190,0.30)" y="20%"/>
      <BObHeader step={7}/>
      <div style={{
        position: 'absolute', left: 26, right: 26, top: 104,
      }}>
        {/* heart mark */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BC.rust}
             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             style={{ marginBottom: 18 }}>
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
        <div style={{
          fontFamily: BF.display, fontSize: 28, fontWeight: 300, color: BC.deepReef,
          lineHeight: 1.18, letterSpacing: 0.005, textWrap: 'balance',
        }}>before we begin, a <em style={{ fontStyle: 'italic' }}>care</em> note<span style={{ color: BC.rust }}>.</span></div>

        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{
            fontFamily: BF.body, fontSize: 13.5, lineHeight: 1.65, color: BC.deepReef,
          }}>
            allin is a wellbeing tool, not emergency or medical care. if you are in crisis or feel unsafe, please seek immediate support.
          </div>
        </div>

        <div style={{
          marginTop: 22, padding: '14px 0 0',
          borderTop: `1px solid ${BC.border}`,
        }}>
          <BCheckRow label="i understand."/>
        </div>
      </div>
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}

// ── 8 · Film ─────────────────────────────────────────────────────────
function B8_Film() {
  return (
    <BScreen bg={BC.base}>
      <BBgGlow from="rgba(240,191,144,0.35)" y="20%"/>
      <BObHeader step={8}/>
      <div style={{
        position: 'absolute', left: 22, right: 22, top: 110, bottom: 110,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          fontFamily: BF.body, fontSize: 10, letterSpacing: 0.18, textTransform: 'uppercase',
          fontWeight: 500, color: BC.rust, marginBottom: 8,
        }}>before you begin</div>
        <div style={{
          fontFamily: BF.display, fontSize: 22, fontWeight: 300, color: BC.deepReef,
          lineHeight: 1.25, letterSpacing: 0.005, marginBottom: 18, textWrap: 'balance',
        }}>watch this video to learn more about <em style={{ fontStyle: 'italic', color: BC.rust }}>Allin</em>.</div>

        <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
          <div style={{ flex: 1, display: 'flex' }}>
            <BFilmStillTall/>
          </div>
        </div>
      </div>
      <BObCTA>continue</BObCTA>
    </BScreen>
  );
}

// Tall film still — dark teal frame with a white play button, "a short film" / "3 min" labels.
function BFilmStillTall() {
  return (
    <div style={{
      width: '100%', height: '100%', borderRadius: 18,
      background: 'linear-gradient(160deg, #2E4F52 0%, #243E42 55%, #1a2d2f 100%)',
      position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* warm halo behind the play button */}
      <div style={{
        position: 'absolute', inset: '-15%',
        background: 'radial-gradient(circle at 50% 42%, rgba(215,155,106,0.42) 0%, rgba(215,155,106,0) 55%)',
      }}/>
      {/* play button */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: 64, height: 64, borderRadius: '50%',
        background: 'rgba(244,240,230,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 22px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: '16px solid #243E42',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          marginLeft: 3,
        }}/>
      </div>
      {/* corner labels */}
      <div style={{
        position: 'absolute', top: 14, left: 16,
        fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
        color: 'rgba(244,240,230,0.65)', zIndex: 1, fontFamily: BF.body,
      }}>a short film</div>
      <div style={{
        position: 'absolute', bottom: 14, right: 16,
        fontSize: 10, letterSpacing: 0.14, textTransform: 'uppercase',
        color: 'rgba(244,240,230,0.7)', zIndex: 1, fontFamily: BF.body,
      }}>3 min</div>
    </div>
  );
}

// ─── Aliases for the catalogue ──────────────────────────────────────────
Object.assign(window, {
  // Shared chrome
  ObHeader, ObCTA, ObCopy, DisclaimerCard, CheckRow, BgGlow, FilmStill,
  // B variant raw
  B1_Welcome, B2_Surface, B3_Deeper, B4_Rewire,
  B5_Flow, B6_OverTime, B7_Disclaimer, B8_Film,
  // Catalogue-friendly names
  OnboardingWelcomeScreen:    B1_Welcome,
  OnboardingSurfaceScreen:    B2_Surface,
  OnboardingDeeperScreen:     B3_Deeper,
  OnboardingRewireScreen:     B4_Rewire,
  OnboardingFlowScreen:       B5_Flow,
  OnboardingOverTimeScreen:   B6_OverTime,
  OnboardingDisclaimerScreen: B7_Disclaimer,
  OnboardingFilmScreen:       B8_Film,
});
