// AllinScreensB.jsx — check-in, audio library, session-in-progress screens.

const { AllinC: c, AllinF: f, Orb, Pill, Header, Back, Icon, Card, Progress, Screen, Eyebrow, Display, Body, Muted, Mark, Tabs, Badge } = window;

// ─── 05. Check-in — Emotion selection ───────────────────────────────
function CheckinEmotionScreen() {
  const emotions = [
    'anxious', 'angry', 'overwhelmed', 'insecure',
    'stressed', 'numb', 'lonely', 'frustrated',
    'disappointed', 'resentful', 'fearful', 'guilty',
  ];
  const selected = new Set(['anxious', 'overwhelmed']);
  return (
    <Screen>
      <Header
        left={<Back />}
        center={<><Icon name="heart" size={14} color={c.rust}/>check-in</>}
        right={<span>1 / 5</span>}
      />
      <div style={{ padding: '16px 24px 0' }}>
        <Progress value={1/5} color={c.rust} />
      </div>

      <div style={{ padding: '32px 24px 0' }}>
        <Eyebrow>step 01 &nbsp;&middot;&nbsp; <span style={{ color: c.rust }}>what&rsquo;s here</span></Eyebrow>
        <Display size={26} style={{ marginTop: 8 }}>what's present for you right now<span style={{ color: c.rust }}>?</span></Display>
        <Muted size={13} style={{ marginTop: 10 }}>pick as many as feel true.</Muted>
      </div>

      <div style={{ padding: '20px 20px 0', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {emotions.map(e => {
          const on = selected.has(e);
          return (
            <div key={e} style={{
              padding: '10px 16px',
              borderRadius: 999,
              background: on ? c.seaGlass : '#FFFDF6',
              border: `1px solid ${on ? 'transparent' : c.border}`,
              color: on ? c.deepReef : c.driftwood,
              fontFamily: f.body, fontSize: 14, fontWeight: on ? 500 : 400, letterSpacing: 0.01,
            }}>{e}</div>
          );
        })}
      </div>

      {/* "in your own words" — optional free-text capture */}
      <div style={{ padding: '22px 20px 0' }}>
        <div style={{
          background: '#FFFDF6',
          border: `1px solid ${c.border}`,
          borderRadius: 16,
          padding: '20px 22px',
          textAlign: 'center',
          boxShadow: '0 4px 14px -10px rgba(36,62,66,0.18)',
        }}>
          <div style={{
            fontFamily: f.body, fontSize: 10.5, letterSpacing: 0.18,
            textTransform: 'uppercase', fontWeight: 500, color: c.muted,
          }}>in your own words</div>
          <div style={{
            marginTop: 12,
            fontFamily: "'Cormorant Garamond',serif",
            fontStyle: 'italic', fontWeight: 400, fontSize: 22,
            color: c.driftwood, opacity: 0.55, lineHeight: 1.3,
          }}>&ldquo;a knot in my chest&hellip;&rdquo;</div>
        </div>
        <div style={{
          marginTop: 8, textAlign: 'center',
          fontFamily: f.body, fontSize: 12, color: c.muted,
        }}>tap to add</div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
        <Pill variant="dark" full size="lg">continue</Pill>
      </div>
    </Screen>
  );
}

// ─── 06. Check-in — Body location ──────────────────────────────────
function CheckinBodyScreen() {
  const regions = [
    { id: 'head', label: 'head', x: 50, y: 12 },
    { id: 'throat', label: 'throat', x: 50, y: 28 },
    { id: 'chest', label: 'chest', x: 50, y: 40, on: true },
    { id: 'belly', label: 'belly', x: 50, y: 56 },
    { id: 'hands', label: 'hands', x: 18, y: 52 },
    { id: 'legs', label: 'legs', x: 50, y: 78 },
  ];
  return (
    <Screen>
      <Header
        left={<Back />}
        center={<><Icon name="heart" size={14} color={c.rust}/>check-in</>}
        right={<span>2 / 5</span>}
      />
      <div style={{ padding: '16px 24px 0' }}>
        <Progress value={2/5} color={c.rust} />
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <Eyebrow>step 02 &nbsp;&middot;&nbsp; <span style={{ color: c.rust }}>in the body</span></Eyebrow>
        <Display size={26} style={{ marginTop: 8 }}>where is it living in the body<span style={{ color: c.rust }}>?</span></Display>
      </div>

      {/* body silhouette */}
      <div style={{ padding: '16px 24px 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: 200, height: 300 }}>
          <svg viewBox="0 0 100 150" width="200" height="300" style={{ position: 'absolute', inset: 0 }}>
            <path d="M50 5 C 44 5 40 10 40 18 C 40 24 43 28 46 30 L 42 36 C 32 38 24 42 22 50 L 20 72 C 20 78 24 80 28 78 L 30 72 L 32 88 L 36 130 L 44 130 L 44 100 L 50 100 L 56 100 L 56 130 L 64 130 L 68 88 L 70 72 L 72 78 C 76 80 80 78 80 72 L 78 50 C 76 42 68 38 58 36 L 54 30 C 57 28 60 24 60 18 C 60 10 56 5 50 5 Z" fill="none" stroke={c.border} strokeWidth="0.8"/>
          </svg>
          {regions.map(r => (
            <div key={r.id} style={{
              position: 'absolute',
              left: `${r.x}%`, top: `${r.y}%`,
              transform: 'translate(-50%,-50%)',
              width: r.on ? 44 : 24, height: r.on ? 44 : 24,
              borderRadius: '50%',
              background: r.on ? 'radial-gradient(circle, rgba(185,106,74,0.5) 0%, rgba(215,155,106,0.25) 60%, rgba(215,155,106,0) 100%)' : 'rgba(176,197,190,0.3)',
              border: r.on ? `1.5px solid ${c.rust}` : `1px solid ${c.border}`,
            }}/>
          ))}
          <div style={{ position: 'absolute', left: '70%', top: '40%', fontFamily: f.body, fontSize: 12, color: c.rust, fontWeight: 500, background: c.base, padding: '3px 10px', borderRadius: 999, border: `1px solid ${c.border}` }}>chest</div>
        </div>
      </div>

      <div style={{ padding: '10px 24px 0' }}>
        <Muted size={12} style={{ textAlign: 'center' }}>tap where sensation shows up.</Muted>
      </div>

      {/* intensity slider */}
      <div style={{ padding: '18px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
          <Eyebrow>how strong does it feel</Eyebrow>
          <span style={{ fontFamily: f.display, fontSize: 22, fontWeight: 300, color: c.rust, letterSpacing: 0.02 }}>7</span>
        </div>
        <div style={{ position: 'relative', height: 4, background: 'rgba(74,63,53,0.12)', borderRadius: 999 }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '70%', background: c.rust, borderRadius: 999 }}/>
          <div style={{ position: 'absolute', left: '70%', top: '50%', transform: 'translate(-50%, -50%)', width: 18, height: 18, borderRadius: '50%', background: c.base, border: `2px solid ${c.rust}`, boxShadow: '0 2px 6px rgba(74,63,53,0.14)' }}/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
          <Muted size={11} style={{ letterSpacing: 0.04 }}>barely there</Muted>
          <Muted size={11} style={{ letterSpacing: 0.04 }}>overwhelming</Muted>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
        <Pill variant="dark" full size="lg">continue</Pill>
      </div>
    </Screen>
  );
}

// ─── 07. Check-in — Trigger text ────────────────────────────────────
function CheckinTriggerScreen() {
  return (
    <Screen>
      <Header
        left={<Back />}
        center={<><Icon name="heart" size={14} color={c.rust}/>check-in</>}
        right={<span>3 / 5</span>}
      />
      <div style={{ padding: '16px 24px 0' }}>
        <Progress value={3/5} color={c.rust} />
      </div>

      <div style={{ padding: '28px 24px 0' }}>
        <Eyebrow>step 03 &nbsp;&middot;&nbsp; <span style={{ color: c.rust }}>what happened</span></Eyebrow>
        <Display size={30} style={{ marginTop: 10 }}>what set this off<span style={{ color: c.rust }}>?</span></Display>
      </div>

      <div style={{ padding: '28px 24px 0' }}>
        <div style={{
          background: '#FFFFFF',
          border: `1px solid ${c.border}`,
          borderRadius: 16,
          padding: 18,
          minHeight: 170,
          fontFamily: f.body,
          fontSize: 15,
          fontStyle: 'italic',
          color: c.driftwood,
          lineHeight: 1.55,
          letterSpacing: 0.01,
        }}>
          my manager canceled our 1:1 for the third time. i felt the old thing — like i'm not worth the time.<span style={{ opacity: 0.4, fontStyle: 'normal' }}>|</span>
        </div>

        {/* prompt chips */}
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {[
            { label: 'work', on: true },
            { label: 'relationship' },
            { label: 'family' },
            { label: 'friendship' },
            { label: 'money' },
            { label: 'health' },
            { label: 'body' },
            { label: 'parenting' },
            { label: 'memory' },
            { label: 'news' },
            { label: 'nothing specific' },
            { label: 'no idea' },
          ].map(p => (
            <div key={p.label} style={{
              padding: '10px 18px',
              borderRadius: 999,
              fontFamily: f.body, fontSize: 13, fontWeight: 500,
              background: p.on ? c.seaGlass : '#FFFFFF',
              color: p.on ? c.deepReef : c.driftwood,
              border: `1px solid ${p.on ? 'transparent' : c.border}`,
            }}>{p.label}</div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
        <Pill variant="dark" full size="lg">continue</Pill>
      </div>
    </Screen>
  );
}

// ─── 08. Check-in — Belief selection ────────────────────────────────
function CheckinBeliefScreen() {
  const beliefs = [
    "i'm not enough.",
    "i'll always be alone.",
    "i have to hold it all.",
    "i can't trust myself.",
    "nothing i do matters.",
  ];
  const selected = new Set([1, 2]);
  return (
    <Screen>
      <Header
        left={<Back />}
        center={<><Icon name="heart" size={14} color={c.rust}/>check-in</>}
        right={<span>4 / 5</span>}
      />
      <div style={{ padding: '16px 24px 0' }}>
        <Progress value={4/5} color={c.rust} />
      </div>

      <div style={{ padding: '24px 24px 0' }}>
        <Eyebrow>step 04 &nbsp;&middot;&nbsp; <span style={{ color: c.rust }}>the belief</span></Eyebrow>
        <Display size={26} style={{ marginTop: 8 }}>why does this one hit<span style={{ color: c.rust }}>?</span></Display>
        <Muted size={13} style={{ marginTop: 10 }}>what belief is underneath this trigger.</Muted>
      </div>

      {/* your words — echo from previous step, enlarged as the hero */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: 'linear-gradient(135deg, #F5E3D0 0%, #F2EADD 100%)',
          border: `1px solid ${c.border}`,
          borderRadius: 20,
          padding: '28px 24px 30px',
          textAlign: 'center',
        }}>
          <Eyebrow>your words</Eyebrow>
          <div style={{ marginTop: 14, fontFamily: f.display, fontSize: 26, fontStyle: 'italic', color: c.deepReef, fontWeight: 300, letterSpacing: 0.01, lineHeight: 1.3, textWrap: 'balance' }}>
            "i'm not worth the time."
          </div>
        </div>
        <Muted size={11} style={{ marginTop: 10, letterSpacing: 0.04, textAlign: 'center' }}>tap to edit</Muted>
      </div>

      <div style={{ padding: '20px 20px 0' }}>
        <Muted size={11} style={{ letterSpacing: 0.12, textTransform: 'uppercase', marginBottom: 12, paddingLeft: 4 }}>the belief beneath</Muted>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {beliefs.map((b, i) => {
            const on = selected.has(i);
            return (
              <div key={i} style={{
                padding: '10px 16px',
                borderRadius: 999,
                fontFamily: f.body, fontSize: 13.5, fontWeight: 500,
                background: on ? c.seaGlass : '#FFFFFF',
                color: on ? c.deepReef : c.driftwood,
                border: `1px solid ${on ? 'transparent' : c.border}`,
                letterSpacing: 0.01,
              }}>{b}</div>
            );
          })}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
        <Pill variant="dark" full size="lg">continue</Pill>
      </div>
    </Screen>
  );
}

// ─── 09. Check-in — Desired belief ──────────────────────────────────
function CheckinDesiredScreen() {
  const desired = [
    "i am enough.",
    "i belong, exactly as i am.",
    "i can set it down.",
    "i trust what i feel.",
    "i am worthy of care.",
  ];
  const selected = new Set([0, 3]);
  return (
    <Screen>
      <Header
        left={<Back />}
        center={<><Icon name="heart" size={14} color={c.rust}/>check-in</>}
        right={<span>5 / 5</span>}
      />
      <div style={{ padding: '16px 24px 0' }}>
        <Progress value={1} color={c.rust} />
      </div>

      <div style={{ padding: '28px 24px 0' }}>
        <Eyebrow>step 05 &nbsp;&middot;&nbsp; <span style={{ color: c.rust }}>the shift</span></Eyebrow>
        <Display size={26} style={{ marginTop: 8 }}>what would you like to believe instead<span style={{ color: c.rust }}>?</span></Display>
      </div>

      {/* your words — write-your-own, canonical write surface */}
      <div style={{ padding: '22px 20px 0' }}>
        <div style={{
          background: '#FFFFFF',
          border: `1px solid ${c.border}`,
          borderRadius: 16,
          padding: 18,
          minHeight: 140,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Eyebrow>in your own words</Eyebrow>
          <div style={{ marginTop: 14, fontFamily: f.display, fontSize: 22, fontStyle: 'italic', color: c.deepReef, fontWeight: 300, letterSpacing: 0.01, lineHeight: 1.3, textWrap: 'balance' }}>
            "my time is worth honoring."
          </div>
        </div>
        <Muted size={11} style={{ marginTop: 10, letterSpacing: 0.04, textAlign: 'center' }}>tap to edit</Muted>
      </div>

      <div style={{ padding: '20px 20px 0' }}>
        <Muted size={11} style={{ letterSpacing: 0.12, textTransform: 'uppercase', marginBottom: 12, paddingLeft: 4 }}>or choose one</Muted>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {desired.map((b, i) => {
            const on = selected.has(i);
            return (
              <div key={i} style={{
                padding: '10px 16px',
                borderRadius: 999,
                fontFamily: f.body, fontSize: 13.5, fontWeight: 500,
                background: on ? c.seaGlass : '#FFFFFF',
                color: on ? c.deepReef : c.driftwood,
                border: `1px solid ${on ? 'transparent' : c.border}`,
                letterSpacing: 0.01,
              }}>{b}</div>
            );
          })}
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
        <Pill variant="dark" full size="lg">begin your rewire</Pill>
      </div>
    </Screen>
  );
}

// ─── 10. Audio library ──────────────────────────────────────────────
function AudioLibraryScreen() {
  const sessions = [
    { category: 'overwhelm', title: 'when you feel too much', len: '12 min', tone: 'apricot' },
    { category: 'self-trust', title: 'the voice that doubts you', len: '8 min',  tone: 'sea' },
    { category: 'regulation', title: 'softening a hard day', len: '14 min', tone: 'sea' },
    { category: 'belief',     title: 'what you learned to hide', len: '18 min', tone: 'apricot' },
  ];
  const filters = ['all', 'overwhelm', 'belief', 'rest'];

  // small orb-thumb with play triangle embedded
  const OrbThumb = ({ tone }) => {
    const gradient = tone === 'apricot'
      ? 'radial-gradient(circle at 50% 45%, #FFF3E3 0%, #EFBB93 40%, #E0A076 72%, rgba(215,155,106,0.3) 100%)'
      : 'radial-gradient(circle at 50% 45%, #F4EFE0 0%, #DDE3DA 40%, #C7D2CB 72%, rgba(176,197,190,0.3) 100%)';
    return (
      <div style={{
        width: 56, height: 56, borderRadius: 12,
        background: gradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {/* play triangle */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill={c.deepReef}>
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    );
  };

  const Bookmark = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={c.muted} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
    </svg>
  );

  return (
    <Screen style={{ overflow: 'auto' }}>
      {/* top bar — Audio Library title + grid icon */}
      <div style={{ padding: '88px 24px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: f.display, fontSize: 30, fontWeight: 300, color: c.deepReef, letterSpacing: 0.005, fontStyle: 'italic', lineHeight: 1.1 }}>
          Audio Library<span style={{ color: c.rust }}>.</span>
        </div>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(176,197,190,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={c.deepReef} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </div>
      </div>

      <Muted size={13} style={{ padding: '10px 24px 0' }}>
        Science-backed audio rewiring for instant relief.
      </Muted>

      {/* filter pills */}
      <div style={{ padding: '24px 24px 4px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {filters.map((label, i) => (
          <div key={label} style={{
            padding: '8px 16px',
            borderRadius: 999,
            background: i === 0 ? 'rgba(176,197,190,0.45)' : c.base,
            border: i === 0 ? '1px solid transparent' : `1px solid ${c.border}`,
            fontFamily: f.body, fontSize: 13,
            color: c.deepReef, fontWeight: i === 0 ? 500 : 400,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>{label}</div>
        ))}
      </div>

      {/* session cards */}
      <div style={{ padding: '14px 16px 120px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sessions.map((s, i) => (
          <div key={i} style={{
            background: '#FBF8EF',
            border: `1px solid ${c.border}`,
            borderRadius: 16,
            padding: 14,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <OrbThumb tone={s.tone} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: f.body, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: 0.14, color: c.muted, fontWeight: 500 }}>
                {s.category}
              </div>
              <div style={{ fontFamily: f.display, fontSize: 17, color: c.deepReef, fontWeight: 300, lineHeight: 1.25, letterSpacing: 0.005, marginTop: 4 }}>
                {s.title}
              </div>
              <div style={{ fontFamily: f.body, fontSize: 12, color: c.muted, marginTop: 4 }}>
                {s.len}
              </div>
            </div>
            <Bookmark />
          </div>
        ))}
      </div>

      <Tabs active="library" />
    </Screen>
  );
}

// ─── 11. Session — audio playback (the heart of it) ─────────────────
function SessionScreen() {
  return (
    <Screen bg={c.deepReef}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 40%, rgba(215,155,106,0.28) 0%, rgba(215,155,106,0.08) 30%, rgba(36,62,66,0) 70%)' }}/>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header
          left={<Back dark />}
          center={<div style={{ color: 'rgba(244,240,230,0.55)', fontFamily: f.body, fontSize: 11, letterSpacing: 0.14, textTransform: 'uppercase' }}>phase 2  ·  release</div>}
          right={
            <div style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,230,0.85)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
              </svg>
            </div>
          }
          borderless
          darkMode
        />

        {/* top prompt */}
        <div style={{ padding: '24px 24px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: f.display, fontSize: 24, fontWeight: 300, color: 'rgba(244,240,230,0.95)', letterSpacing: 0.01, lineHeight: 1.35, textWrap: 'pretty', maxWidth: 280, margin: '0 auto' }}>
            let's rewire this, together<span style={{ color: c.apricot }}>.</span>
          </div>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ width: 18, height: 1, background: 'rgba(244,240,230,0.25)' }}/>
            <div style={{ fontFamily: f.body, fontSize: 12, color: 'rgba(244,240,230,0.6)', letterSpacing: 0.06, fontStyle: 'italic' }}>
              the unhooking
            </div>
            <span style={{ width: 18, height: 1, background: 'rgba(244,240,230,0.25)' }}/>
          </div>
        </div>

        {/* breathing orb + ring + play button in center */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <svg width="240" height="240" viewBox="0 0 240 240" style={{ position: 'absolute' }}>
            <circle cx="120" cy="120" r="112" fill="none" stroke="rgba(244,240,230,0.12)" strokeWidth="2" />
            <circle cx="120" cy="120" r="112" fill="none" stroke={c.apricot} strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 112 * 0.42} ${2 * Math.PI * 112}`}
              strokeLinecap="round" transform="rotate(-90 120 120)" />
          </svg>
          <Orb size={200} variant="dark" />
        </div>

        {/* timeline + time */}
        <div style={{ padding: '0 32px 18px' }}>
          <div style={{ height: 3, borderRadius: 2, background: 'rgba(244,240,230,0.18)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '42%', background: c.base, borderRadius: 2 }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontFamily: f.body, fontSize: 12, color: 'rgba(244,240,230,0.55)', letterSpacing: 0.02, fontVariantNumeric: 'tabular-nums' }}>
            <span>6:14</span>
            <span>−8:34</span>
          </div>
        </div>

        {/* transport: rewind 10s · pause · volume */}
        <div style={{ padding: '0 32px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 }}>
            {/* rewind — double-triangle pointing left with terminal bar */}
            <div style={{ width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="rgba(244,240,230,0.9)" stroke="rgba(244,240,230,0.9)" strokeWidth="1.2" strokeLinejoin="round">
                <polygon points="11,6 11,18 3,12" />
                <polygon points="21,6 21,18 13,12" />
              </svg>
            </div>
            {/* pause */}
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: c.base, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="pause" size={22} color={c.deepReef} stroke={2}/>
            </div>
            {/* volume */}
            <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(244,240,230,0.85)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H3v6h3l5 4V5z"/>
                <path d="M15.5 9a4 4 0 010 6"/>
                <path d="M18.5 6.5a8 8 0 010 11"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  CheckinEmotionScreen, CheckinBodyScreen, CheckinTriggerScreen,
  CheckinBeliefScreen, CheckinDesiredScreen,
  AudioLibraryScreen, SessionScreen,
});
