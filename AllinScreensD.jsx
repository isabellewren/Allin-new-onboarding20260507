// AllinScreensD.jsx — belief-mapping flow + 10-step plan roadmap.
// Maps to BeliefsMappingFlow.swift / BeliefsPlanManager.swift.

const { AllinC: dC, AllinF: dF, Pill, Header, Back, Icon, Card, Screen, Eyebrow, Display, Body, Muted } = window;

// ── Life areas (matches allAreas in Swift) ──────────────────────────
const AREAS = [
  { name: 'Health & fitness',       cat: 'PERSONAL' },
  { name: 'Intellectual life',      cat: 'PERSONAL' },
  { name: 'Emotional life',         cat: 'PERSONAL' },
  { name: 'Character',              cat: 'PERSONAL' },
  { name: 'Spiritual life',         cat: 'PERSONAL' },
  { name: 'Love relationship',      cat: 'RELATIONSHIPS' },
  { name: 'Parenting',              cat: 'RELATIONSHIPS' },
  { name: 'Social life',            cat: 'RELATIONSHIPS' },
  { name: 'Career',                 cat: 'BUSINESS' },
  { name: 'Financial life',         cat: 'BUSINESS' },
  { name: 'Creative life',          cat: 'BUSINESS' },
];

// ── Top chrome shared by every mapping step ─────────────────────────
function MapHeader({ step, total = 4 }) {
  return (
    <div>
      <Header
        left={<Back/>}
        center={<span style={{ fontFamily: dF.display, fontSize: 17, fontWeight: 300, color: dC.deepReef, letterSpacing: 0.01 }}>map your beliefs</span>}
        right={null}
        borderless
      />
      <div style={{ padding: '8px 24px 16px' }}>
        <div style={{ fontFamily: dF.body, fontSize: 10.5, color: dC.muted, letterSpacing: 0.16, textTransform: 'uppercase', fontWeight: 500, marginBottom: 8 }}>
          step {step} of {total}
        </div>
        <div style={{ height: 2, background: 'rgba(74,63,53,0.12)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${(step / total) * 100}%`, background: dC.rust, borderRadius: 2 }}/>
        </div>
      </div>
    </div>
  );
}

// ── Continue CTA (ghost pill), matches Swift styling ────────────────
function ContinueBar({ label = 'continue', enabled = true }) {
  return (
    <div style={{ padding: '12px 24px 28px', background: 'linear-gradient(to bottom, rgba(244,240,230,0) 0%, var(--color-base, #F4F0E6) 40%)' }}>
      <button style={{
        width: '100%', padding: '15px 20px', borderRadius: 999,
        background: 'transparent',
        border: `1px solid ${enabled ? 'rgba(36,62,66,0.35)' : 'rgba(36,62,66,0.15)'}`,
        color: enabled ? dC.deepReef : 'rgba(36,62,66,0.35)',
        fontFamily: dF.body, fontSize: 15, fontWeight: 500, letterSpacing: 0.01,
        cursor: 'pointer',
      }}>{label}</button>
    </div>
  );
}

// ── Slider row ──────────────────────────────────────────────────────
function RateRow({ area, value }) {
  const pct = ((value - 1) / 9) * 100;
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 14,
      padding: '14px 16px',
      boxShadow: '0 1px 2px rgba(74,63,53,0.04), 0 1px 1px rgba(74,63,53,0.03)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontFamily: dF.body, fontSize: 15, fontWeight: 500, color: dC.deepReef }}>{area}</div>
        <div style={{ fontFamily: dF.display, fontSize: 18, color: dC.rust, fontWeight: 300 }}>{value}</div>
      </div>
      <div style={{ position: 'relative', height: 18 }}>
        <div style={{ position: 'absolute', top: 8, left: 0, right: 0, height: 2, background: 'rgba(74,63,53,0.12)', borderRadius: 2 }}/>
        <div style={{ position: 'absolute', top: 8, left: 0, width: `${pct}%`, height: 2, background: dC.rust, borderRadius: 2 }}/>
        <div style={{
          position: 'absolute', top: 1, left: `calc(${pct}% - 8px)`,
          width: 16, height: 16, borderRadius: '50%',
          background: '#FFFFFF', border: `1.5px solid ${dC.rust}`,
          boxShadow: '0 1px 2px rgba(74,63,53,0.15)',
        }}/>
      </div>
    </div>
  );
}

// ── 1. Rate all areas ───────────────────────────────────────────────
function BeliefsRateAreasScreen() {
  const demo = {
    'Health & fitness': 6, 'Intellectual life': 7, 'Emotional life': 4,
    'Character': 7, 'Spiritual life': 5,
    'Love relationship': 5, 'Parenting': 6, 'Social life': 6,
  };
  const cats = ['PERSONAL', 'RELATIONSHIPS', 'BUSINESS'];
  const shown = ['Health & fitness', 'Intellectual life', 'Emotional life', 'Character', 'Spiritual life', 'Love relationship', 'Parenting', 'Social life'];
  return (
    <Screen>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <MapHeader step={1}/>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 24px 20px' }}>
          <Display size={28} style={{ marginBottom: 6 }}>rate your life areas</Display>
          <Muted size={14} style={{ marginBottom: 24 }}>where are you right now, from 1 to 10?</Muted>

          {cats.map(cat => {
            const rows = AREAS.filter(a => a.cat === cat && shown.includes(a.name));
            if (!rows.length) return null;
            return (
              <div key={cat} style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: dF.body, fontSize: 10.5, color: dC.muted, letterSpacing: 0.16, textTransform: 'uppercase', fontWeight: 500, marginBottom: 10 }}>{cat.toLowerCase()}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {rows.map(a => <RateRow key={a.name} area={a.name} value={demo[a.name] ?? 5}/>)}
                </div>
              </div>
            );
          })}
        </div>
        <ContinueBar/>
      </div>
    </Screen>
  );
}

// ── 2. Area picker popup (modal over dimmed stepsView) ──────────────
function BeliefsPickAreasScreen() {
  const lowest = [
    { name: 'Emotional life',    score: 4 },
    { name: 'Spiritual life',    score: 5 },
    { name: 'Love relationship', score: 5 },
    { name: 'Health & fitness',  score: 6 },
    { name: 'Social life',       score: 6 },
    { name: 'Parenting',         score: 6 },
  ];
  const selected = new Set(['Emotional life', 'Love relationship', 'Social life']);

  return (
    <Screen>
      {/* dimmed background showing hint of step 1 */}
      <div style={{ position: 'absolute', inset: 0, background: dC.base, opacity: 0.6 }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(36,62,66,0.35)' }}/>

      <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 22px' }}>
        <div style={{
          width: '100%',
          background: dC.base,
          borderRadius: 24,
          padding: '28px 22px 22px',
          boxShadow: '0 16px 40px rgba(36,62,66,0.25), 0 4px 10px rgba(36,62,66,0.1)',
        }}>
          <Display size={22} style={{ textAlign: 'center', marginBottom: 6 }}>you scored lowest<br/>on these</Display>
          <Muted size={13} style={{ textAlign: 'center', marginBottom: 20 }}>which three do you want to focus on first?</Muted>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
            {lowest.map(a => {
              const on = selected.has(a.name);
              // gradient: score 4 → deep reef-tinted; score 6 → soft sand. interpolate.
              // t = 0 at score 4 (lowest, darkest), t = 1 at score 6 (highest, lightest)
              const t = (a.score - 4) / 2;
              // mix from deep teal (#5E7478, the muted) → sandstone (#DEE6E0)
              const mix = (lo, hi) => Math.round(lo + (hi - lo) * t);
              const r = mix(0x5E, 0xDE);
              const g = mix(0x74, 0xE6);
              const bl = mix(0x78, 0xE0);
              const bg = `rgb(${r}, ${g}, ${bl})`;
              const fg = t < 0.55 ? dC.base : dC.deepReef;
              const scoreColor = t < 0.55 ? 'rgba(244,240,230,0.78)' : dC.muted;
              return (
                <div key={a.name} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '13px 16px',
                  background: bg,
                  color: fg,
                  borderRadius: 12,
                  border: on ? `1.5px solid ${dC.rust}` : '1.5px solid transparent',
                  transition: 'all 200ms',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {on && (
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: dC.rust, color: dC.base,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700,
                      }}>&#10003;</div>
                    )}
                    <div style={{ fontFamily: dF.body, fontSize: 14, fontWeight: 500 }}>{a.name.toLowerCase()}</div>
                  </div>
                  <div style={{ fontFamily: dF.body, fontSize: 13, color: scoreColor }}>{a.score}/10</div>
                </div>
              );
            })}
          </div>

          <button style={{
            width: '100%', padding: '13px 20px', borderRadius: 999,
            background: 'transparent',
            border: `1px solid rgba(36,62,66,0.35)`,
            color: dC.deepReef,
            fontFamily: dF.body, fontSize: 15, fontWeight: 500,
            cursor: 'pointer',
          }}>continue</button>
        </div>
      </div>
    </Screen>
  );
}

// ── Stage indicator — shows current/ideal/action arc ─────────────────
// Every belief-mapping step shows the same 3-stage strip with the
// active stage emphasized, so each screen visibly announces what it's for.
function StageStrip({ active }) {
  // active: 'current' | 'ideal' | 'action'
  // Each stage carries its own colour so the strip visually narrates change:
  // driftwood (settled / past)  →  sea-glass+rust (movement / future)  →  deep-reef (commitment / locked-in)
  const stages = [
    { key: 'current', label: 'where you are',         micro: 'current belief',   accent: dC.driftwood, tint: 'rgba(168,150,124,0.10)', bloom: 'rgba(168,150,124,0.18)' },
    { key: 'ideal',   label: 'where you\u2019re going', micro: 'ideal direction', accent: dC.rust,      tint: 'rgba(196,107,79,0.08)',  bloom: 'rgba(143,166,166,0.22)' },
    { key: 'action',  label: 'how you start',         micro: 'first move',       accent: dC.deepReef,  tint: 'rgba(36,62,66,0.07)',    bloom: 'rgba(36,62,66,0.92)' },
  ];
  return (
    <div style={{
      display: 'flex', alignItems: 'stretch', gap: 6,
      marginTop: 4, marginBottom: 18,
      position: 'relative',
    }}>
      {stages.map((s, i) => {
        const on = s.key === active;
        const isCommit = s.key === 'action' && on;
        // Show a connector arrow between cells (between 1→2 and 2→3) to reinforce direction
        return (
          <React.Fragment key={s.key}>
            <div style={{
              flex: on ? 1.4 : 1,
              padding: '10px 12px',
              background: isCommit ? s.bloom : (on ? '#FFFFFF' : s.tint),
              border: on
                ? `1px solid ${isCommit ? s.bloom : s.accent}`
                : `1px dashed ${s.accent}55`,
              borderRadius: 10,
              boxShadow: on ? `0 4px 14px -10px ${s.accent}80` : 'none',
              opacity: on ? 1 : 0.65,
              transition: 'all 240ms ease',
              position: 'relative',
            }}>
              {/* coloured top rule for the active cell */}
              {on && !isCommit && (
                <div style={{
                  position: 'absolute', top: 0, left: 10, right: 10, height: 2,
                  background: s.accent, borderRadius: 2,
                }}/>
              )}
              <div style={{
                fontFamily: dF.body, fontSize: 8.5, letterSpacing: 0.18,
                textTransform: 'uppercase', fontWeight: 600,
                color: isCommit ? '#F2D9A8' : (on ? s.accent : s.accent),
                opacity: on ? 1 : 0.7,
              }}>{i + 1} &middot; {s.label}</div>
              {on && (
                <div style={{
                  marginTop: 3,
                  fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic',
                  fontSize: 13,
                  color: isCommit ? '#F4EBD9' : dC.deepReef,
                  lineHeight: 1.2,
                }}>{s.micro}</div>
              )}
            </div>
            {/* arrow connector */}
            {i < stages.length - 1 && (
              <div style={{
                alignSelf: 'center',
                fontFamily: dF.body, fontSize: 11, fontWeight: 600,
                color: on || stages[i+1].key === active ? stages[i+1].accent : `${dC.muted}66`,
                marginLeft: -2, marginRight: -2,
                transition: 'color 240ms ease',
              }}>&rarr;</div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ── Input card (current belief / ideal direction) ───────────────────
function InputCard({ area, label, text, samples, variant = 'current' }) {
  // variant: 'current' (heavy/anchored) | 'ideal' (lifted/forward)
  const isIdeal = variant === 'ideal';
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 16,
      padding: 20,
      border: `1px solid ${dC.border}`,
      borderLeft: !isIdeal ? `3px solid rgba(74,63,53,0.40)` : `1px solid ${dC.border}`,
      borderRight: isIdeal ? `3px solid ${dC.rust}` : `1px solid ${dC.border}`,
      display: 'flex', flexDirection: 'column', gap: 14,
      position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: dF.display, fontSize: 20, fontWeight: 300, color: dC.deepReef, letterSpacing: 0.01 }}>{area.toLowerCase()}</div>
        {/* tiny direction marker */}
        <div style={{
          fontFamily: dF.body, fontSize: 9, letterSpacing: 0.18,
          textTransform: 'uppercase', fontWeight: 600,
          color: isIdeal ? dC.rust : dC.muted,
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          {isIdeal ? <>toward &rarr;</> : <>&larr; from</>}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontFamily: dF.body, fontSize: 10, color: isIdeal ? dC.rust : dC.driftwood, letterSpacing: 0.18, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
        <div style={{
          minHeight: text ? 'auto' : 72,
          padding: 14,
          background: isIdeal ? 'rgba(207,220,214,0.30)' : '#F7F4EE',
          border: isIdeal ? `1px solid rgba(143,166,166,0.35)` : 'none',
          borderRadius: 12,
          fontFamily: isIdeal ? "'Cormorant Garamond',serif" : dF.body,
          fontStyle: isIdeal && text ? 'italic' : 'normal',
          fontSize: isIdeal && text ? 16 : 14,
          lineHeight: 1.55,
          color: text ? dC.deepReef : 'rgba(74,63,53,0.38)',
        }}>{text || (isIdeal ? 'name where you\u2019re heading\u2026' : 'name what you currently believe\u2026')}</div>
      </div>

      {samples && samples.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: dF.body, fontSize: 9.5, color: isIdeal ? dC.rust : dC.driftwood, letterSpacing: 0.16, textTransform: 'uppercase', fontWeight: 600 }}>{isIdeal ? 'where others have gone \u00b7 tap to use' : 'common starting points \u00b7 tap to use'}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {samples.map(s => (
              <span key={s} style={{
                padding: '7px 12px',
                background: isIdeal ? 'rgba(207,220,214,0.40)' : dC.sandStone,
                border: isIdeal ? `1px solid rgba(143,166,166,0.35)` : 'none',
                borderRadius: 14,
                fontFamily: dF.body, fontSize: 12.5,
                color: dC.driftwood,
              }}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── 3. Current beliefs ──────────────────────────────────────────────
function BeliefsCurrentScreen() {
  const cards = [
    { area: 'Emotional life',    text: 'i\u2019m too sensitive — i feel everything too deeply.', samples: ['i can\u2019t control my feelings', 'i\u2019m emotionally weak'] },
    { area: 'Love relationship', text: '',                                                        samples: ['i\u2019m not lovable', 'i\u2019ll end up alone', 'i always get hurt'] },
    { area: 'Social life',       text: '',                                                        samples: ['i don\u2019t belong', 'people don\u2019t really like me'] },
  ];
  return (
    <Screen>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <MapHeader step={2}/>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 24px 20px' }}>
          <div style={{ fontFamily: dF.body, fontSize: 10.5, letterSpacing: 0.20, textTransform: 'uppercase', fontWeight: 600, color: dC.driftwood, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 2, background: dC.driftwood, display: 'inline-block' }}></span>
            stage 1 &middot; name the starting point
          </div>
          <Display size={26} style={{ marginBottom: 6, lineHeight: 1.05 }}>what do you<br/>believe <em style={{ fontStyle: 'italic', color: dC.driftwood }}>now?</em></Display>
          <Muted size={14} style={{ marginBottom: 14, fontStyle: 'italic' }}>
            "the story you currently operate from — in your own words."
          </Muted>
          <StageStrip active="current"/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {cards.map(c => <InputCard key={c.area} area={c.area} label="current belief" text={c.text} samples={c.samples} variant="current"/>)}
          </div>
        </div>
        <ContinueBar/>
      </div>
    </Screen>
  );
}

// ── 4. Ideal direction ──────────────────────────────────────────────
function BeliefsIdealScreen() {
  const cards = [
    { area: 'Emotional life',    text: 'i feel my feelings fully — and i respond, not react.', samples: ['i trust myself', 'peace is my default'] },
    { area: 'Love relationship', text: 'i am safe in love.',                                   samples: ['i give and receive love freely', 'i communicate openly'] },
    { area: 'Social life',       text: '',                                                     samples: ['i belong', 'i attract real connection', 'i show up as myself'] },
  ];
  return (
    <Screen>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <MapHeader step={3}/>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 24px 20px' }}>
          <div style={{ fontFamily: dF.body, fontSize: 10.5, letterSpacing: 0.20, textTransform: 'uppercase', fontWeight: 600, color: dC.rust, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 2, background: dC.rust, display: 'inline-block' }}></span>
            stage 2 &middot; name the destination
          </div>
          <Display size={26} style={{ marginBottom: 6, lineHeight: 1.05 }}>where do you<br/>want to <em style={{ fontStyle: 'italic', color: dC.rust }}>arrive?</em></Display>
          <Muted size={14} style={{ marginBottom: 14, fontStyle: 'italic' }}>"the new story you'd live from — written as if it's already true."</Muted>
          <StageStrip active="ideal"/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {cards.map(c => <InputCard key={c.area} area={c.area} label="ideal direction" text={c.text} samples={c.samples} variant="ideal"/>)}
          </div>
        </div>
        <ContinueBar/>
      </div>
    </Screen>
  );
}

// ── 5. Make it real (why + first move) ──────────────────────────────
// Distinct visual register: a "commitment card" — banded header with a
// checkbox, two small fields, and a "this week" date stamp. Looks like
// a thing you sign, not another empty form.
function MakeItRealCard({ area, why, move, whySamples, moveSamples }) {
  const field = (label, text, samples, placeholder) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ fontFamily: dF.body, fontSize: 9.5, color: dC.muted, letterSpacing: 0.20, textTransform: 'uppercase', fontWeight: 600 }}>{label}</div>
      <div style={{
        padding: '10px 0',
        borderBottom: `1px dashed rgba(74,63,53,0.25)`,
        fontFamily: text ? "'Cormorant Garamond',serif" : dF.body,
        fontStyle: text ? 'italic' : 'normal',
        fontSize: text ? 16 : 13,
        lineHeight: 1.4,
        color: text ? dC.deepReef : 'rgba(74,63,53,0.38)',
        minHeight: text ? 'auto' : 30,
      }}>{text || placeholder}</div>
      {!text && samples && samples.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
          {samples.slice(0, 2).map(s => (
            <span key={s} style={{
              padding: '5px 10px',
              background: 'transparent',
              border: `1px dashed rgba(74,63,53,0.25)`,
              borderRadius: 12,
              fontFamily: dF.body, fontSize: 11.5, color: dC.driftwood,
            }}>{s}</span>
          ))}
        </div>
      )}
    </div>
  );

  const signed = !!(why && move);
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 14,
      border: `1px solid ${dC.border}`,
      overflow: 'hidden',
      boxShadow: signed ? '0 6px 20px -14px rgba(36,62,66,0.30)' : 'none',
    }}>
      {/* commitment band */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 16px',
        background: signed ? dC.deepReef : 'rgba(74,63,53,0.04)',
        color: signed ? '#FFFFFF' : dC.muted,
        borderBottom: `1px solid ${signed ? 'transparent' : dC.border}`,
      }}>
        <div style={{
          width: 18, height: 18, borderRadius: 4,
          background: signed ? '#FFFFFF' : 'transparent',
          border: `1.5px solid ${signed ? '#FFFFFF' : 'rgba(74,63,53,0.30)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flex: '0 0 auto',
        }}>
          {signed && <Icon name="check" size={11} color={dC.deepReef} stroke={2.6}/>}
        </div>
        <div style={{
          fontFamily: dF.body, fontSize: 9.5, letterSpacing: 0.22,
          textTransform: 'uppercase', fontWeight: 700, flex: 1,
        }}>my commitment</div>
        <div style={{
          fontFamily: dF.body, fontSize: 9.5, letterSpacing: 0.18,
          textTransform: 'uppercase', fontWeight: 600,
          opacity: signed ? 0.8 : 1,
        }}>this week</div>
      </div>

      {/* body */}
      <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ fontFamily: dF.display, fontSize: 19, fontWeight: 300, color: dC.deepReef, letterSpacing: 0.01 }}>{area.toLowerCase()}</div>
        {field('because\u2026', why, whySamples, 'why this matters to you\u2026')}
        {field('i will\u2026', move, moveSamples, 'one small thing you\u2019ll do\u2026')}
      </div>
    </div>
  );
}

function BeliefsMakeRealScreen() {
  const cards = [
    {
      area: 'Emotional life',
      why: 'if this changes, i\u2019ll feel more steady — in every room i walk into.',
      move: 'journal for 5 minutes tonight.',
      whySamples: ['i can\u2019t pour from an empty cup', 'peace changes everything'],
      moveSamples: ['do a check-in now', 'name what i\u2019m feeling'],
    },
    {
      area: 'Love relationship',
      why: '',
      move: '',
      whySamples: ['love is the foundation', 'i want to feel safe with someone'],
      moveSamples: ['send a kind message', 'listen without fixing'],
    },
  ];
  return (
    <Screen>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <MapHeader step={4}/>
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 24px 20px' }}>
          <div style={{ fontFamily: dF.body, fontSize: 10.5, letterSpacing: 0.20, textTransform: 'uppercase', fontWeight: 600, color: dC.deepReef, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 2, background: dC.deepReef, display: 'inline-block' }}></span>
            stage 3 &middot; commit to a first move
          </div>
          <Display size={26} style={{ marginBottom: 6, lineHeight: 1.05 }}>sign the<br/><em style={{ fontStyle: 'italic', color: dC.deepReef }}>commitment.</em></Display>
          <Muted size={14} style={{ marginBottom: 14, fontStyle: 'italic' }}>"a reason that moves you, and one small thing you'll actually do."</Muted>
          <StageStrip active="action"/>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {cards.map(c => <MakeItRealCard key={c.area} {...c}/>)}
          </div>
        </div>
        <ContinueBar label="build my plan"/>
      </div>
    </Screen>
  );
}

// ── 6. The 10-step plan ─────────────────────────────────────────────
const PLAN_STEPS = [
  { n: 1,  type: 'REWIRE', area: 'Emotional life',    practice: 'Identity Shift',       status: 'done' },
  { n: 2,  type: 'RESET',  area: 'Emotional life',    practice: 'Body Awareness',       status: 'done' },
  { n: 3,  type: 'REWIRE', area: 'Love relationship', practice: 'Belief Rewrite',       status: 'current' },
  { n: 4,  type: 'RESET',  area: 'Love relationship', practice: 'Nervous System Reset', status: 'locked' },
  { n: 5,  type: 'REWIRE', area: 'Social life',       practice: 'Pattern Release',      status: 'locked' },
  { n: 6,  type: 'RESET',  area: 'Social life',       practice: 'Somatic Release',      status: 'locked' },
  { n: 7,  type: 'REWIRE', area: 'Emotional life',    practice: 'Core Rewire',          status: 'locked' },
  { n: 8,  type: 'RESET',  area: 'Love relationship', practice: 'Grounding Practice',   status: 'locked' },
  { n: 9,  type: 'REWIRE', area: 'Social life',       practice: 'Deep Reprogram',       status: 'locked' },
  { n: 10, type: 'RESET',  area: 'Emotional life',    practice: 'Breath Reset',         status: 'locked' },
];

function PlanStepRow({ step, isLast }) {
  const { n, type, area, practice, status } = step;
  const done = status === 'done';
  const current = status === 'current';
  const locked = status === 'locked';

  const dotBg  = done ? '#7A9693' : current ? dC.deepReef : 'rgba(74,63,53,0.12)';
  const dotFg  = done ? '#FFFFFF' : current ? '#FFFFFF' : 'rgba(74,63,53,0.35)';

  return (
    <div style={{ display: 'flex', gap: 14 }}>
      {/* timeline column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
        <div style={{
          width: 24, height: 24, borderRadius: '50%',
          background: dotBg, color: dotFg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flex: '0 0 auto',
        }}>
          {done && <Icon name="check" size={12} color="#FFFFFF" stroke={2.4}/>}
          {current && <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#FFFFFF' }}/>}
          {locked && <Icon name="lock" size={10} color="rgba(74,63,53,0.4)" stroke={1.8}/>}
        </div>
        {!isLast && <div style={{ flex: 1, width: 2, background: 'rgba(74,63,53,0.1)', minHeight: 24 }}/>}
      </div>

      {/* body column */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : 14, opacity: locked ? 0.55 : 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
          <span style={{ fontFamily: dF.body, fontSize: 9.5, color: dC.muted, letterSpacing: 0.18, textTransform: 'uppercase', fontWeight: 600 }}>
            step {n} · {type.toLowerCase()}
          </span>
          {current && (
            <span style={{
              padding: '2px 7px', background: 'rgba(122,150,147,0.18)',
              color: '#5E7976', borderRadius: 6,
              fontFamily: dF.body, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.12, textTransform: 'uppercase',
            }}>current</span>
          )}
          {done && (
            <span style={{ fontFamily: dF.body, fontSize: 8.5, color: '#7A9693', fontWeight: 700, letterSpacing: 0.14, textTransform: 'uppercase' }}>done</span>
          )}
        </div>

        <div style={{ fontFamily: dF.display, fontSize: current ? 17 : 15, fontWeight: 300, color: dC.deepReef, letterSpacing: 0.01, marginBottom: current ? 12 : 4 }}>
          {area.toLowerCase()}
        </div>

        {!current && (
          <div style={{ fontFamily: dF.body, fontSize: 12.5, color: done ? '#7A9693' : dC.muted }}>
            {practice.toLowerCase()}
          </div>
        )}

        {current && (
          <div style={{
            background: '#F7F4EE',
            borderRadius: 14,
            padding: 16,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={{ fontFamily: dF.body, fontSize: 13.5, fontWeight: 500, color: dC.muted }}>{practice}</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontFamily: dF.body, fontSize: 12 }}>
                <span style={{ color: dC.muted, fontWeight: 600 }}>current belief · </span>
                <span style={{ color: dC.deepReef }}>i am safe in love.</span>
              </div>
              <div style={{ fontFamily: dF.body, fontSize: 12 }}>
                <span style={{ color: dC.muted, fontWeight: 600 }}>ideal direction · </span>
                <span style={{ color: dC.deepReef }}>i give and receive love freely.</span>
              </div>
            </div>

            <div style={{ fontFamily: dF.body, fontSize: 11.5, color: dC.muted, letterSpacing: 0.02 }}>15 min guided audio session</div>

            <button style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '13px 18px', borderRadius: 999,
              background: dC.deepReef, color: dC.base, border: 'none',
              fontFamily: dF.body, fontSize: 14.5, fontWeight: 500,
              cursor: 'pointer',
            }}>
              <Icon name="play" size={12} color={dC.base} stroke={2}/>
              start practice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function BeliefsPlanScreen() {
  const completed = PLAN_STEPS.filter(s => s.status === 'done').length;
  const pct = completed / PLAN_STEPS.length;

  return (
    <Screen>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Header
          left={<Back/>}
          center={<span style={{ fontFamily: dF.display, fontSize: 17, fontWeight: 300, color: dC.deepReef, letterSpacing: 0.01 }}>your plan</span>}
          right={null}
          borderless
        />

        <div style={{ flex: 1, overflow: 'auto', padding: '8px 24px 100px' }}>
          {/* intro */}
          <div style={{ marginBottom: 18 }}>
            <Display size={28} style={{ marginBottom: 4 }}>your 10-step plan</Display>
            <Muted size={14}>built from your journey.</Muted>
          </div>

          {/* overall progress */}
          <div style={{ marginBottom: 26 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
              <div style={{ fontFamily: dF.body, fontSize: 10, color: dC.rust, letterSpacing: 0.18, textTransform: 'uppercase', fontWeight: 600 }}>overall progress</div>
              <div style={{ fontFamily: dF.body, fontSize: 13, color: dC.rust, fontWeight: 600 }}>{Math.round(pct * 100)}%</div>
            </div>
            <div style={{ height: 4, background: 'rgba(185,106,74,0.15)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${pct * 100}%`, background: dC.rust, borderRadius: 2 }}/>
            </div>
          </div>

          {/* timeline */}
          <div>
            {PLAN_STEPS.map((s, i) => (
              <PlanStepRow key={s.n} step={s} isLast={i === PLAN_STEPS.length - 1}/>
            ))}
          </div>
        </div>

        {/* floating done */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '12px 24px 28px',
          background: 'linear-gradient(to bottom, rgba(244,240,230,0) 0%, #F4F0E6 50%)',
        }}>
          <button style={{
            width: '100%', padding: '15px 20px', borderRadius: 999,
            background: 'transparent', border: `1px solid rgba(36,62,66,0.35)`,
            color: dC.deepReef, fontFamily: dF.body, fontSize: 15, fontWeight: 500,
            cursor: 'pointer',
          }}>done</button>
        </div>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  BeliefsRateAreasScreen,
  BeliefsPickAreasScreen,
  BeliefsCurrentScreen,
  BeliefsIdealScreen,
  BeliefsMakeRealScreen,
  BeliefsPlanScreen,
});
