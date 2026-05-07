// AllinScreensA.jsx — Onboarding, auth, dashboard screens.

const { AllinC: c, AllinF: f, Orb, Pill, Header, Back, Icon, Card, Progress, Screen, Eyebrow, Display, Body, Muted, Mark, Tabs } = window;

// 01 — Opening (dark version — deep reef, saturated orb)
function OpeningScreen() {
  return (
    <Screen bg={c.deepReef}>
      {/* faint warm halo bleeding from behind the orb */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 42%, rgba(215,155,106,0.18) 0%, rgba(185,106,74,0.08) 25%, rgba(36,62,66,0) 55%)' }}/>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 44 }}>
        {/* saturated apricot/rust orb on dark ground */}
        <div style={{ position: 'relative', width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute', inset: -30, borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 45%, rgba(240,191,144,0.22) 0%, rgba(215,155,106,0.10) 35%, rgba(36,62,66,0) 65%)',
            filter: 'blur(6px)',
          }}/>
          <div style={{
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle at 42% 36%, #FFF1DC 0%, #F0BF90 18%, #D79B6A 48%, #B96A4A 82%, #8C4A33 100%)',
            boxShadow: 'inset -10px -14px 28px rgba(70,30,15,0.35), inset 8px 10px 22px rgba(255,240,210,0.35), 0 30px 60px rgba(0,0,0,0.25)',
            animation: 'allin-breathe 6s ease-in-out infinite',
          }}/>
        </div>
        <div style={{ fontFamily: f.display, fontSize: 60, fontWeight: 300, color: 'rgba(244,240,230,0.95)', letterSpacing: 0.02 }}>
          Allin<span style={{ color: c.rust }}>.</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 56, left: 0, right: 0, textAlign: 'center', fontFamily: f.body, fontSize: 12, color: 'rgba(244,240,230,0.45)', letterSpacing: 0.14, textTransform: 'uppercase' }}>
        tap to begin
      </div>
    </Screen>
  );
}

// 02 — Splash / sign-in
function SplashScreen() {
  return (
    <Screen bg={c.base}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 35%, #F0BF90 0%, rgba(215,155,106,0.4) 20%, rgba(222,230,224,0.5) 50%, #F4F0E6 85%)' }}/>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '120px 28px 48px', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <Orb size={180} variant="welcome" />
          <div style={{ textAlign: 'center' }}>
            <Display size={52}>Allin<span style={{ color: c.rust }}>.</span></Display>
          </div>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Pill variant="dark" full size="lg">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill={c.deepReef}><path d="M17.5 12.5c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-.9 0-2.4-1.1-4-1-2 0-3.9 1.2-4.9 3-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.2 3 3.7 3 1.5-.1 2.1-1 3.9-1s2.3 1 3.9.9c1.6 0 2.6-1.4 3.6-2.9 1.1-1.7 1.6-3.3 1.6-3.4-.1 0-3-1.2-3-4.6z"/></svg>
              continue with Apple
            </span>
          </Pill>
          <Muted size={11} style={{ textAlign: 'center', marginTop: 8, letterSpacing: 0.02 }}>Privacy  ·  Terms</Muted>
        </div>
      </div>
    </Screen>
  );
}

// 03 — Onboarding (step 1 of 5, soft welcome)
function OnboardingScreen() {
  return (
    <Screen>
      <Header
        left={<Mark size={16} />}
        center={null}
        right={<span>skip</span>}
        borderless
      />
      <div style={{ padding: '0 24px 12px' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0,1,2,3,4].map(i => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i === 0 ? c.rust : 'rgba(74,63,53,0.12)' }}/>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        {/* layered-orb mark — "meet what's underneath": depth, not a diagram */}
        <div style={{ position: 'relative', width: 170, height: 170, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* outer soft halo */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'radial-gradient(circle at 50% 50%, rgba(176,197,190,0.22) 0%, rgba(176,197,190,0.08) 55%, rgba(176,197,190,0) 75%)',
          }}/>
          {/* mid ring — sea glass depth */}
          <div style={{
            position: 'absolute', width: 130, height: 130, borderRadius: '50%',
            background: 'radial-gradient(circle at 48% 42%, rgba(255,255,255,0.9) 0%, #CFDDD7 30%, #B0C5BE 65%, rgba(176,197,190,0.5) 90%)',
            boxShadow: 'inset 0 -8px 20px rgba(74,63,53,0.08), inset 0 4px 12px rgba(255,255,255,0.4)',
          }}/>
          {/* inner orb — warm core */}
          <div style={{
            position: 'absolute', width: 74, height: 74, borderRadius: '50%',
            background: 'radial-gradient(circle at 45% 40%, #FFF8EC 0%, #F0BF90 22%, #D79B6A 55%, rgba(215,155,106,0.6) 85%, rgba(215,155,106,0) 100%)',
            animation: 'allin-breathe 8s ease-in-out infinite',
          }}/>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Display size={28} style={{ lineHeight: 1.2, textWrap: 'balance' }}>meet what's underneath<span style={{ color: c.rust }}>.</span></Display>
          <Body size={15} style={{ marginTop: 18, color: c.muted, maxWidth: 320, textWrap: 'pretty' }}>
            allin helps you understand the thoughts behind your feelings — and gently shift the ones that no longer serve you.
          </Body>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 32, left: 24, right: 24 }}>
        <Pill variant="dark" full size="lg">continue</Pill>
      </div>
    </Screen>
  );
}

// 04 — Dashboard (home)
function DashboardScreen() {
  return (
    <Screen>
      <div style={{ position: 'absolute', inset: '0 0 84px 0', overflowY: 'auto' }}>
      <Header
        left={<Mark size={16} />}
        center={null}
        right={
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <Icon name="user" size={18} color={c.muted} />
            <Icon name="gear" size={18} color={c.muted} />
          </div>
        }
        borderless
        topPad={72}
      />

      {/* greeting */}
      <div style={{ padding: '32px 24px 0' }}>
        <div style={{ fontFamily: f.display, fontSize: 42, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01, lineHeight: 1.1 }}>
          good morning,<br/>
          <span style={{ fontStyle: 'italic' }}>maya</span><span style={{ color: c.rust }}>.</span>
        </div>
      </div>

      {/* hero: orientation video — sits in place of today's check-in until watched */}
      <div style={{ padding: '24px 16px 0' }}>
        <TourVideoCard/>
      </div>

      {/* two primary actions */}
      <div style={{ padding: '12px 16px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <ActionTile icon="heart" label="check in" sub="explore emotion" tone="apricot" />
        <ActionTile icon="leaf" label="quick session" sub="begin rewiring" tone="sage" />
      </div>

      {/* secondary row — connected pair */}
      <div style={{ padding: '10px 16px 0', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <ActionTile icon="shield" label="map beliefs" sub="wheel of life" tone="sand" paired="first" />
          <ActionTile icon="arrow" label="your 10-step plan" tone="sand" locked lockedReason="unlocks after mapping beliefs" paired="second" />
        </div>
        {/* connector: sits over the gap, centered vertically */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: 24, height: 24, borderRadius: '50%',
          background: c.base,
          border: `1px solid ${c.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c.muted} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12h6"/>
            <path d="M10 8a4 4 0 00-4 4 4 4 0 004 4"/>
            <path d="M14 8a4 4 0 014 4 4 4 0 01-4 4"/>
          </svg>
        </div>
      </div>

      {/* stat strip */}
      <div style={{ padding: '18px 16px 0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        <StatCell label="sessions" value="12" />
        <StatCell label="streak" value="3d" />
        <StatCell label="top" value="anxiety" small />
      </div>

      {/* recent */}
      <div style={{ padding: '20px 24px 0' }}>
        <Eyebrow>latest  ·  jump back in</Eyebrow>
      </div>
      <div style={{ padding: '10px 16px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { emo: 'anxious', date: 'apr 22' },
          { emo: 'overwhelmed', date: 'apr 20' },
        ].map((s, i) => (
          <Card key={i} surface="sand" pad={14}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Badge label={s.emo} />
              <Muted size={12}>{s.date}</Muted>
              <div style={{ flex: 1 }}/>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: c.seaGlass }}/>
                <Muted size={11} style={{ letterSpacing: 0.04 }}>complete</Muted>
              </div>
            </div>
          </Card>
        ))}
      </div>
      </div>

      <Tabs active="today"/>
    </Screen>
  );
}

function ActionTile({ icon, label, sub, tone, locked, lockedReason, paired }) {
  const tones = {
    apricot: { bg: 'linear-gradient(150deg, #E9B68A 0%, #D79B6A 100%)', fg: c.deepReef, ring: 'rgba(36,62,66,0.1)' },
    sage:    { bg: 'linear-gradient(150deg, #B0C5BE 0%, #8FA6A6 100%)', fg: c.deepReef, ring: 'rgba(36,62,66,0.1)' },
    sand:    { bg: c.sandStone, fg: c.deepReef, ring: c.border },
    reef:    { bg: c.deepReef, fg: c.base, ring: 'rgba(244,240,230,0.15)' },
    locked:  { bg: c.sandStone, fg: c.muted, ring: 'rgba(74,63,53,0.08)' },
  }[locked ? 'locked' : tone];
  const pairedBorder = paired === 'first'
    ? { borderTopRightRadius: 4, borderBottomRightRadius: 4 }
    : paired === 'second'
    ? { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }
    : {};
  return (
    <div style={{ position: 'relative', background: tones.bg, borderRadius: 16, padding: 16, minHeight: 120, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: tones.fg, opacity: locked ? 0.78 : 1, ...pairedBorder }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: tones.ring, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {locked ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={tones.fg} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="11" width="16" height="10" rx="2"/>
            <path d="M8 11V7a4 4 0 018 0v4"/>
          </svg>
        ) : (
          <Icon name={icon} size={18} color={tones.fg} />
        )}
      </div>
      <div>
        <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 300, lineHeight: 1.2 }}>{label}</div>
        <div style={{ fontFamily: f.body, fontSize: 11, marginTop: 3, opacity: 0.8, letterSpacing: 0.02 }}>{locked ? lockedReason : sub}</div>
      </div>
    </div>
  );
}
function StatCell({ label, value, small }) {
  return (
    <Card surface="base" pad={14} style={{ border: `1px solid ${c.border}`, textAlign: 'center' }}>
      <Eyebrow style={{ fontSize: 9 }}>{label}</Eyebrow>
      <div style={{ fontFamily: f.display, fontSize: small ? 17 : 22, fontWeight: 300, color: c.deepReef, marginTop: 8, lineHeight: 1 }}>{value}</div>
    </Card>
  );
}
function Badge({ label, tone = 'sea' }) {
  const tones = { sea: { bg: c.seaGlassSoft, fg: c.deepReef }, apricot: { bg: 'rgba(215,155,106,0.2)', fg: c.rust }, tide: { bg: 'rgba(143,166,166,0.25)', fg: c.muted } }[tone];
  return (
    <div style={{ display: 'inline-flex', padding: '4px 10px', background: tones.bg, color: tones.fg, borderRadius: 999, fontFamily: f.body, fontSize: 11, fontWeight: 500, letterSpacing: 0.02 }}>{label}</div>
  );
}

Object.assign(window, {
  OpeningScreen, SplashScreen, OnboardingScreen, DashboardScreen,
  ActionTile, StatCell, Badge, TourVideoCard,
});

// Tour video card — first-time affordance on the dashboard.
// The whole card IS the video, with the CTA inside the frame.
function TourVideoCard() {
  return (
    <div style={{
      position: 'relative', borderRadius: 18, overflow: 'hidden',
      border: `1px solid ${c.border}`,
      boxShadow: '0 10px 28px -14px rgba(36,62,66,0.28), 0 2px 6px -2px rgba(36,62,66,0.08)',
      cursor: 'pointer',
    }}>
      {/* video still — warm cream wash with orb upper-center, small "Allin." lockup below */}
      <div style={{
        position: 'relative', aspectRatio: '4 / 3.4',
        background: 'radial-gradient(ellipse 80% 60% at 50% 35%, #FBF1DC 0%, #F7E8CE 30%, #F4F0E6 75%)',
      }}>
        {/* orb — sized so play button sits below, not on top */}
        <div style={{
          position: 'absolute', left: '50%', top: '30%',
          transform: 'translate(-50%, -50%)',
          width: '34%', aspectRatio: '1 / 1', borderRadius: '50%',
          background: 'radial-gradient(circle at 56% 42%, #FFF8EC 0%, #FBE0BC 18%, #F0BF90 38%, #D79B6A 62%, rgba(222,206,178,0.5) 82%, rgba(244,240,230,0) 100%)',
        }}/>

        {/* big centered play button — clear video affordance, sits below the orb */}
        <div style={{
          position: 'absolute', left: '50%', top: '52%',
          transform: 'translate(-50%, -50%)',
          width: 72, height: 72, borderRadius: '50%',
          background: 'rgba(36,62,66,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 10px 24px -6px rgba(36,62,66,0.5), 0 0 0 6px rgba(244,240,230,0.5), 0 0 0 1px rgba(36,62,66,0.1)',
        }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill={c.base} stroke="none">
            <path d="M8 5l12 7-12 7z"/>
          </svg>
        </div>

        {/* small Allin. + A QUICK TOUR lockup */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: '70%',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        }}>
          <div style={{
            fontFamily: f.display, fontSize: 20, fontWeight: 400,
            color: c.deepReef, letterSpacing: 0.005, lineHeight: 1,
          }}>Allin<span style={{ color: c.rust }}>.</span></div>
          <div style={{
            fontFamily: f.body, fontSize: 8, letterSpacing: 0.3,
            textTransform: 'uppercase', fontWeight: 500, color: c.muted,
          }}>a quick tour</div>
        </div>

        {/* dismiss × — top left */}
        <button style={{
          position: 'absolute', left: 12, top: 12,
          width: 28, height: 28, borderRadius: '50%',
          background: 'rgba(36,62,66,0.18)', backdropFilter: 'blur(4px)',
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c.deepReef} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
          </svg>
        </button>

        {/* "new here?" — bottom of the video frame */}
        <div style={{
          position: 'absolute', left: 16, right: 16, bottom: 14,
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          <div style={{
            fontFamily: f.body, fontSize: 10, letterSpacing: 0.18,
            textTransform: 'uppercase', fontWeight: 600, color: c.deepReef, opacity: 0.7,
          }}>new here?</div>
        </div>
      </div>
    </div>
  );
}
