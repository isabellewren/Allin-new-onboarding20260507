// AllinScreensC.jsx — completion, journal, progress, profile, onboarding.

const { AllinC: c, AllinF: f, Orb, Pill, Header, Back, Icon, Card, Progress, Screen, Eyebrow, Display, Body, Muted, Mark, Tabs, Badge } = window;

// ─── 12. Session complete ───────────────────────────────────────────
function SessionCompleteScreen() {
  return (
    <Screen>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 85% 70% at 50% 30%, rgba(240,191,144,0.55) 0%, rgba(240,191,144,0.18) 35%, rgba(244,240,230,0) 65%)' }}/>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header left={null} center={null} right={<Icon name="close" size={16} color={c.muted}/>} borderless/>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px', textAlign: 'center' }}>
          <Orb size={150} variant="welcome" breathing />

          <div style={{ marginTop: 36 }}>
            <Eyebrow style={{ color: c.rust }}>session complete</Eyebrow>
            <div style={{ fontFamily: f.display, fontSize: 32, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01, lineHeight: 1.2, marginTop: 14, textWrap: 'balance' }}>
              you came home<br/>to yourself<span style={{ color: c.rust }}>.</span>
            </div>
            <Muted size={14} style={{ marginTop: 16, maxWidth: 280, lineHeight: 1.6 }}>
              notice what feels different — even one degree. that's the shift.
            </Muted>
          </div>

          {/* intensity slider — "how strong is your initial feeling now" */}
          <div style={{ marginTop: 32, width: '100%', maxWidth: 320 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
              <div style={{ fontFamily: f.body, fontSize: 10.5, color: c.muted, letterSpacing: 0.14, textTransform: 'uppercase', textAlign: 'left' }}>
                how strong is your<br/>initial feeling now
              </div>
              <div style={{ fontFamily: f.display, fontSize: 28, color: c.rust, fontWeight: 300, lineHeight: 1 }}>3</div>
            </div>
            {/* track */}
            <div style={{ position: 'relative', height: 16, display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'absolute', inset: '7px 0', height: 2, borderRadius: 2, background: 'rgba(74,63,53,0.12)' }}/>
              <div style={{ position: 'absolute', left: 0, top: 7, width: '30%', height: 2, borderRadius: 2, background: c.rust }}/>
              {/* knob */}
              <div style={{
                position: 'absolute', left: 'calc(30% - 8px)', top: 0,
                width: 16, height: 16, borderRadius: '50%',
                background: c.base, border: `2px solid ${c.rust}`,
                boxShadow: '0 1px 3px rgba(74,63,53,0.15)',
              }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: f.body, fontSize: 12, color: c.driftwood, letterSpacing: 0.01 }}>
              <span>barely there</span>
              <span>overwhelming</span>
            </div>
          </div>

          {/* reminder note — canonical write surface */}
          <div style={{
            marginTop: 24, width: '100%', maxWidth: 320,
            background: '#FFFFFF',
            border: `1px solid ${c.border}`,
            borderRadius: 16,
            padding: 18,
            textAlign: 'left',
          }}>
            <div style={{ fontFamily: f.body, fontSize: 10.5, color: c.muted, letterSpacing: 0.14, textTransform: 'uppercase', marginBottom: 8 }}>
              note to self
            </div>
            <input
              type="text"
              placeholder="something i'd like to remember…"
              style={{
                width: '100%', background: 'transparent', border: 'none', outline: 'none',
                fontFamily: f.body, fontStyle: 'italic', fontSize: 15, fontWeight: 400,
                color: c.driftwood, letterSpacing: 0.01, lineHeight: 1.55,
                padding: 0,
              }}
            />
          </div>
        </div>

        <div style={{ padding: '0 24px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Pill variant="dark" full size="lg">save to journal</Pill>
          <Pill variant="ghost" full size="lg">return home</Pill>
        </div>
      </div>
    </Screen>
  );
}

// ─── 13. Journal — list ─────────────────────────────────────────────
function JournalScreen() {
  // A ledger of moments. Each row: date column · trigger (what happened) · shift (what you arrived at).
  // Compact enough to read 8+ at a glance, structured enough that the role of each line is unambiguous.
  const entries = [
    { dateTop: 'today',     dateBot: '8:42 am',    trigger: 'a message i wasn\u2019t expecting.',   from: 'i\u2019m too much',           to: 'i am enough.',           tone: 'apricot', kind: 'shift'  },
    { dateTop: 'yesterday', dateBot: '11:04 pm',   trigger: 'meeting didn\u2019t go the way i hoped.', from: 'i failed',                to: 'i can set it down.',     tone: 'sea',     kind: 'shift'  },
    { dateTop: 'wed',       dateBot: '22 apr',     trigger: 'felt invisible at dinner.',                from: 'i don\u2019t belong',     to: 'i belong, as i am.',     tone: 'tide',    kind: 'shift'  },
    { dateTop: 'tue',       dateBot: '21 apr',     trigger: 'woke with my chest already tight.',         from: 'something\u2019s wrong',  to: 'i trust what i feel.',   tone: 'tide',    kind: 'shift'  },
    { dateTop: 'mon',       dateBot: '20 apr',     trigger: 'a conversation i keep replaying.',          from: 'i said the wrong thing',  to: 'i belong, as i am.',     tone: 'apricot', kind: 'star'   },
    { dateTop: 'sun',       dateBot: '19 apr',     trigger: 'sat with the silence after she left.',      from: 'i\u2019m alone',          to: 'i can be with myself.',  tone: 'sea',     kind: 'shift'  },
    { dateTop: 'sat',       dateBot: '18 apr',     trigger: 'felt the old pull to text him.',            from: 'i need him',              to: 'i\u2019m safe in love.', tone: 'apricot', kind: 'log'    },
    { dateTop: 'fri',       dateBot: '17 apr',     trigger: 'check-in &mdash; nothing big, just steady.',from: '',                        to: 'still here.',            tone: 'tide',    kind: 'log'    },
    { dateTop: 'thu',       dateBot: '16 apr',     trigger: 'a small win i almost missed.',              from: 'i\u2019m not progressing',to: 'i am moving.',           tone: 'sea',     kind: 'shift'  },
  ];
  return (
    <Screen style={{ overflow: 'auto' }}>
      <Header
        left={<Back />}
        center={<><Icon name="book" size={14} color={c.muted}/>journal</>}
        right={<Icon name="search" size={16} color={c.deepReef}/>}
      />

      <div style={{ padding: '20px 24px 0' }}>
        <Eyebrow>your journey</Eyebrow>
        <Display size={28} style={{ marginTop: 6 }}>what you've met<span style={{ color: c.rust }}>.</span></Display>
        <Muted size={12} style={{ marginTop: 6 }}>9 moments &middot; 6 shifts &middot; 3 logs</Muted>
      </div>

      {/* filter pills */}
      <div style={{ padding: '14px 24px 0', display: 'flex', gap: 6 }}>
        {[
          { l: 'all', n: 9 },
          { l: 'shifts', n: 6 },
          { l: 'logs', n: 3 },
          { l: 'starred', n: 1 },
        ].map((t, i) => (
          <div key={t.l} style={{
            padding: '5px 12px', borderRadius: 999, fontFamily: f.body, fontSize: 11,
            background: i === 0 ? c.deepReef : 'transparent',
            color: i === 0 ? c.base : c.driftwood,
            border: i === 0 ? 'none' : `1px solid ${c.border}`,
            letterSpacing: 0.01,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>{t.l}<span style={{ opacity: 0.6, fontSize: 10 }}>{t.n}</span></div>
        ))}
      </div>

      {/* column header — tells the user how to read the ledger */}
      <div style={{
        padding: '16px 30px 8px',
        display: 'grid', gridTemplateColumns: '52px 1fr auto',
        gap: 12,
        fontFamily: f.body, fontSize: 9, color: c.muted,
        letterSpacing: 0.18, textTransform: 'uppercase', fontWeight: 600,
      }}>
        <span>when</span><span>what came up &middot; what you met</span><span>kind</span>
      </div>

      <div style={{ padding: '4px 16px 120px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {entries.map((e, i) => {
          const accent = e.tone === 'apricot' ? c.apricot : e.tone === 'sea' ? c.seaGlass : c.tide;
          const kindLabel = e.kind === 'star' ? '\u2605 shift' : e.kind === 'log' ? 'log' : 'shift';
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '52px 1fr auto',
              gap: 12, alignItems: 'flex-start',
              padding: '12px 14px',
              background: c.sandStone,
              border: `1px solid ${c.tide}66`,
              borderRadius: 12,
            }}>
              {/* date column */}
              <div style={{ paddingTop: 2 }}>
                <div style={{ fontFamily: f.body, fontSize: 11, color: c.deepReef, fontWeight: 600, letterSpacing: 0.04, textTransform: 'uppercase', lineHeight: 1.1 }}>{e.dateTop}</div>
                <div style={{ fontFamily: f.body, fontSize: 10, color: c.muted, marginTop: 2, letterSpacing: 0.02 }}>{e.dateBot}</div>
              </div>

              {/* body column: trigger headline + belief shift */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                <div style={{
                  fontFamily: f.display, fontSize: 14.5, fontWeight: 400, color: c.deepReef,
                  letterSpacing: 0.01, lineHeight: 1.25,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }} dangerouslySetInnerHTML={{ __html: e.trigger }}/>
                <div style={{
                  fontFamily: f.body, fontSize: 11, color: c.driftwood, lineHeight: 1.3,
                  display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'nowrap',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent, flexShrink: 0 }}/>
                  {e.kind === 'log' ? (
                    <span style={{ fontStyle: 'italic', color: c.deepReef, fontFamily: "'Cormorant Garamond',serif", fontSize: 13 }}>"{e.to}"</span>
                  ) : (
                    <>
                      {e.from && <span style={{ textDecoration: 'line-through', opacity: 0.55 }}>{e.from}</span>}
                      {e.from && <span style={{ color: c.muted }}>&rarr;</span>}
                      <span style={{ fontStyle: 'italic', color: c.deepReef, fontFamily: "'Cormorant Garamond',serif", fontSize: 13 }}>"{e.to}"</span>
                    </>
                  )}
                </div>
              </div>

              {/* kind column */}
              <div style={{
                fontFamily: f.body, fontSize: 9, fontWeight: 600, letterSpacing: 0.16,
                textTransform: 'uppercase',
                color: e.kind === 'log' ? c.muted : (e.kind === 'star' ? c.rust : c.deepReef),
                paddingTop: 4, whiteSpace: 'nowrap',
              }}>{kindLabel}</div>
            </div>
          );
        })}
      </div>
    </Screen>
  );
}

// ─── 14. Progress — the arc ────────────────────────────────────────
function ProgressScreen() {
  // mock data: 14 days of check-in intensity before/after (0-10)
  const days = Array.from({ length: 14 }, (_, i) => ({
    before: 4 + Math.round(Math.sin(i * 0.7) * 2 + 3),
    after: 1 + Math.round(Math.abs(Math.cos(i * 0.9)) * 2),
  }));

  return (
    <Screen style={{ overflow: 'auto' }}>
      <Header
        left={<Back />}
        center={<><Icon name="spiral" size={14} color={c.muted}/>progress</>}
        right={null}
      />

      <div style={{ padding: '24px 24px 0' }}>
        <Eyebrow>last 14 days</Eyebrow>
        <Display size={30} style={{ marginTop: 8 }}>you're rewiring<span style={{ color: c.rust }}>.</span></Display>
        <Muted size={13} style={{ marginTop: 10, maxWidth: 300 }}>intensity of what you arrived with, vs. what you left with.</Muted>
      </div>

      {/* stat tiles */}
      <div style={{ padding: '24px 16px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <Card surface="sand" pad={16}>
          <Muted size={10} style={{ textTransform: 'uppercase', letterSpacing: 0.12 }}>sessions</Muted>
          <div style={{ fontFamily: f.display, fontSize: 36, fontWeight: 300, color: c.deepReef, lineHeight: 1, marginTop: 8, letterSpacing: -0.01 }}>23</div>
          <Muted size={11} style={{ marginTop: 6 }}>+5 this week</Muted>
        </Card>
        <Card surface="sea" pad={16}>
          <Muted size={10} style={{ textTransform: 'uppercase', letterSpacing: 0.12, color: c.deepReef }}>avg. shift</Muted>
          <div style={{ fontFamily: f.display, fontSize: 36, fontWeight: 300, color: c.deepReef, lineHeight: 1, marginTop: 8, letterSpacing: -0.01 }}>−3.4</div>
          <Muted size={11} style={{ marginTop: 6, color: c.deepReef }}>on a 10-point scale</Muted>
        </Card>
      </div>

      {/* chart */}
      <div style={{ padding: '12px 16px 0' }}>
        <Card surface="sand" pad={20}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01 }}>intensity arc</div>
            <div style={{ display: 'flex', gap: 12, fontFamily: f.body, fontSize: 10, color: c.driftwood, letterSpacing: 0.06, textTransform: 'uppercase' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: c.rust }}/>before</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: c.seaGlass }}/>after</span>
            </div>
          </div>

          {/* SVG chart */}
          <div style={{ position: 'relative' }}>
            <svg viewBox="0 0 280 140" width="100%" height="140" preserveAspectRatio="none">
              {[0, 1, 2, 3].map(g => (
                <line key={g} x1="0" x2="280" y1={g * 35 + 5} y2={g * 35 + 5} stroke={c.border} strokeWidth="0.5" strokeDasharray="2 3"/>
              ))}
              {/* before area */}
              <path d={`M 0 ${140 - days[0].before * 12} ${days.map((d, i) => `L ${(i * 280) / 13} ${140 - d.before * 12}`).join(' ')} L 280 140 L 0 140 Z`}
                fill="rgba(185,106,74,0.12)"/>
              <path d={`M 0 ${140 - days[0].before * 12} ${days.map((d, i) => `L ${(i * 280) / 13} ${140 - d.before * 12}`).join(' ')}`}
                fill="none" stroke={c.rust} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* after line */}
              <path d={`M 0 ${140 - days[0].after * 12} ${days.map((d, i) => `L ${(i * 280) / 13} ${140 - d.after * 12}`).join(' ')}`}
                fill="none" stroke={c.seaGlass} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              {days.map((d, i) => (
                <circle key={i} cx={(i * 280) / 13} cy={140 - d.after * 12} r="3" fill={c.base} stroke={c.seaGlass} strokeWidth="1.5"/>
              ))}
            </svg>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontFamily: f.body, fontSize: 10, color: c.muted, letterSpacing: 0.04 }}>
            <span>2 wk ago</span><span>1 wk ago</span><span>today</span>
          </div>
        </Card>
      </div>

      {/* belief frequency */}
      <div style={{ padding: '12px 16px 40px' }}>
        <Card surface="sand" pad={20}>
          <div style={{ fontFamily: f.display, fontSize: 18, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01 }}>beliefs you've met most</div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { t: 'i\'m not enough.', n: 9, p: 0.9 },
              { t: 'i have to hold it all.', n: 6, p: 0.6 },
              { t: 'nothing i do matters.', n: 4, p: 0.4 },
              { t: 'i\'ll always be alone.', n: 3, p: 0.3 },
            ].map((b, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <span style={{ fontFamily: f.display, fontSize: 15, color: c.deepReef, fontWeight: 300 }}>{b.t}</span>
                  <Muted size={11}>{b.n}×</Muted>
                </div>
                <div style={{ height: 4, background: c.border, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${b.p * 100}%`, background: `linear-gradient(90deg, ${c.apricot}, ${c.rust})`, borderRadius: 2 }}/>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Screen>
  );
}

// ─── 15. Profile / settings ────────────────────────────────────────
function ProfileScreen() {
  const settingsGroups = [
    {
      label: 'ritual',
      items: [
        { icon: 'bell', label: 'daily check-in', meta: '8:00 am' },
        { icon: 'moon', label: 'calm mode', meta: 'on' },
        { icon: 'spiral', label: 'session length', meta: '15 min' },
      ]
    },
    {
      label: 'account',
      items: [
        { icon: 'user', label: 'your details' },
        { icon: 'lock', label: 'privacy & data' },
        { icon: 'heart', label: 'emergency support' },
      ]
    },
    {
      label: 'about',
      items: [
        { icon: 'book', label: 'how allin works' },
        { icon: 'leaf', label: 'research behind it' },
      ]
    },
  ];
  return (
    <Screen style={{ overflow: 'auto' }}>
      <Header left={<Back />} center={<span>profile</span>} right={null} />

      {/* avatar header */}
      <div style={{ padding: '24px 24px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ position: 'relative', width: 72, height: 72 }}>
          <Orb size={72} variant="welcome" />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: f.display, fontSize: 26, color: c.deepReef, fontWeight: 300 }}>m</div>
        </div>
        <div>
          <div style={{ fontFamily: f.display, fontSize: 24, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01 }}>maya</div>
          <Muted size={12} style={{ marginTop: 4 }}>21 days on the path  ·  23 sessions</Muted>
        </div>
      </div>

      {/* streak card */}
      <div style={{ padding: '24px 16px 0' }}>
        <Card surface="apricot" pad={18}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <Muted size={10} style={{ textTransform: 'uppercase', letterSpacing: 0.12, color: c.deepReef }}>rhythm</Muted>
              <div style={{ fontFamily: f.display, fontSize: 22, fontWeight: 300, color: c.deepReef, marginTop: 6, letterSpacing: 0.01 }}>4 days of showing up.</div>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {[1,1,1,1,0,0,0].map((on, i) => (
                <div key={i} style={{ width: 8, height: 28, borderRadius: 4, background: on ? c.rust : 'rgba(36,62,66,0.15)' }}/>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* settings groups */}
      <div style={{ padding: '24px 16px 40px' }}>
        {settingsGroups.map(group => (
          <div key={group.label} style={{ marginBottom: 24 }}>
            <Eyebrow style={{ padding: '0 8px 10px' }}>{group.label}</Eyebrow>
            <Card surface="sand" pad={0}>
              {group.items.map((it, i) => (
                <div key={it.label} style={{
                  padding: '16px 18px',
                  borderBottom: i < group.items.length - 1 ? `1px solid ${c.border}` : 'none',
                  display: 'flex', alignItems: 'center', gap: 14,
                }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: c.seaGlassSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={it.icon} size={16} color={c.deepReef}/>
                  </div>
                  <div style={{ flex: 1, fontFamily: f.body, fontSize: 15, color: c.deepReef, letterSpacing: 0.01 }}>{it.label}</div>
                  {it.meta && <Muted size={12}>{it.meta}</Muted>}
                  <Icon name="chev-right" size={14} color={c.muted}/>
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>
    </Screen>
  );
}

// ─── 16. Onboarding — welcome ──────────────────────────────────────
function OnboardingWelcomeScreen() {
  return (
    <Screen>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 70% at 50% 35%, rgba(240,191,144,0.45) 0%, rgba(240,191,144,0.12) 40%, rgba(244,240,230,0) 70%)' }}/>

      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header
          left={<Mark size={16} />}
          center={null}
          right={<span>skip</span>}
          borderless
        />
        <div style={{ padding: '0 24px 12px' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 1 ? c.rust : 'rgba(74,63,53,0.12)' }}/>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, padding: '28px 28px 20px', display: 'flex', flexDirection: 'column', textAlign: 'center', overflowY: 'auto' }}>
          <div style={{ fontFamily: f.display, fontSize: 34, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01, lineHeight: 1.25 }}>
            <div>not <span style={{ textDecoration: 'line-through', textDecorationThickness: '1.2px' }}>therapy</span><span style={{ color: c.rust }}>.</span></div>
            <div>not <span style={{ textDecoration: 'line-through', textDecorationThickness: '1.2px' }}>meditation</span><span style={{ color: c.rust }}>.</span></div>
            <div>not <span style={{ textDecoration: 'line-through', textDecorationThickness: '1.2px' }}>journaling</span><span style={{ color: c.rust }}>.</span></div>
          </div>
          <Muted size={14} style={{ marginTop: 22, lineHeight: 1.65, maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
            allin is a guided emotional regulation practice that helps your nervous system settle and gently recalibrate subconscious patterns.
            <br/><br/>
            here's how it works:
          </Muted>

          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10, textAlign: 'left' }}>
            {[
              'you answer a few intuitive questions',
              'we identify emotional patterns beneath the surface',
              'you unlock audio designed to gently rewire those patterns',
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', background: '#F2EADD', borderRadius: 14, padding: '14px 18px' }}>
                <div style={{ fontFamily: f.display, fontSize: 22, fontWeight: 300, color: c.rust, flex: '0 0 auto', width: 24 }}>
                  0{i + 1}
                </div>
                <Body size={14} style={{ lineHeight: 1.5 }}>{step}</Body>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '0 24px 32px' }}>
          <Pill variant="dark" full size="lg">continue</Pill>
        </div>
      </div>
    </Screen>
  );
}

// ─── Onboarding — behind the scenes (step 03/05) ─────────────────
function OnboardingBehindScreen() {
  const steps = [
    { word: 'notice.', desc: 'a moment of reactivity — big or small.' },
    { word: 'name.',   desc: 'the belief under the feeling.' },
    { word: 'rewrite.',desc: 'gently, with guided audio.' },
  ];
  return (
    <Screen>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header
          left={<Mark size={16} />}
          center={null}
          right={<span>skip</span>}
          borderless
        />
        <div style={{ padding: '0 24px 12px' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 2 ? c.rust : 'rgba(74,63,53,0.12)' }}/>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, padding: '28px 28px 0', display: 'flex', flexDirection: 'column' }}>
          <Eyebrow style={{ color: c.rust }}>the practice</Eyebrow>
          <div style={{ fontFamily: f.display, fontSize: 38, fontWeight: 300, color: c.deepReef, letterSpacing: 0.01, lineHeight: 1.15, marginTop: 14 }}>
            <div>three steps.</div>
            <div>five minutes.</div>
            <div style={{ fontStyle: 'italic' }}>daily<span style={{ color: c.rust, fontStyle: 'normal' }}>.</span></div>
          </div>

          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontFamily: f.display, fontSize: 34, fontWeight: 300, color: c.rust, lineHeight: 1, flex: '0 0 auto', width: 52, letterSpacing: 0.02 }}>
                  0{i + 1}
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontFamily: f.body, fontSize: 18, fontWeight: 600, color: c.deepReef, letterSpacing: -0.01 }}>{s.word}</div>
                  <Body size={14} style={{ marginTop: 4, color: c.muted, lineHeight: 1.5, maxWidth: 260 }}>{s.desc}</Body>
                </div>
              </div>
            ))}
          </div>

          <Muted size={13} style={{ marginTop: 22, textAlign: 'center', fontStyle: 'italic', maxWidth: 300, alignSelf: 'center', lineHeight: 1.55 }}>
            think of it as tuning an instrument — not forcing a change.
          </Muted>
        </div>

        <div style={{ padding: '0 24px 32px' }}>
          <Pill variant="dark" full size="lg">continue</Pill>
        </div>
      </div>
    </Screen>
  );
}

// ─── Onboarding — care & boundaries (step 06 of 6) ─────────────────
function OnboardingCareScreen() {
  const [agreed, setAgreed] = React.useState(false);
  return (
    <Screen>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Header
          left={<Mark size={16} />}
          center={null}
          right={<span>skip</span>}
          borderless
        />
        <div style={{ padding: '0 24px 12px' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 3 ? c.rust : 'rgba(74,63,53,0.12)' }}/>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, padding: '28px 28px 0', display: 'flex', flexDirection: 'column' }}>
          {/* heart mark */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={c.rust} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 18 }}>
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <Display size={30} style={{ textWrap: 'balance', lineHeight: 1.18 }}>
            before we begin, a <span style={{ fontStyle: 'italic' }}>care</span> note<span style={{ color: c.rust }}>.</span>
          </Display>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Body size={14.5} style={{ lineHeight: 1.65 }}>
              allin supports emotional regulation and self-awareness. it is not a substitute for professional mental health care, therapy, or medical treatment.
            </Body>
            <Body size={14.5} style={{ lineHeight: 1.65 }}>
              if you're experiencing a mental health crisis, thoughts of self-harm, or need immediate support, please reach out to a qualified professional or crisis helpline.
            </Body>
            <Body size={14.5} style={{ lineHeight: 1.65, color: c.muted }}>
              this practice is intended to complement your wellness journey — not replace professional guidance when it's needed.
            </Body>
          </div>
        </div>

        <div style={{ padding: '0 24px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <button
            onClick={() => setAgreed(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'transparent', border: 'none', padding: '4px 2px',
              cursor: 'pointer', textAlign: 'left',
            }}>
            <div style={{
              width: 20, height: 20, borderRadius: 5,
              border: `1.5px solid ${agreed ? c.rust : c.borderStrong}`,
              background: agreed ? c.rust : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 180ms cubic-bezier(.4,0,.2,1)',
              flex: '0 0 auto',
            }}>
              {agreed && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke={c.base} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <Body size={14} style={{ color: c.driftwood }}>i understand</Body>
          </button>
          <div style={{ opacity: agreed ? 1 : 0.45, transition: 'opacity 200ms', pointerEvents: agreed ? 'auto' : 'none' }}>
            <Pill variant="dark" full size="lg">continue</Pill>
          </div>
        </div>
      </div>
    </Screen>
  );
}

Object.assign(window, {
  SessionCompleteScreen, JournalScreen, ProgressScreen, ProfileScreen,
  OnboardingWelcomeScreen, OnboardingBehindScreen, OnboardingCareScreen,
});
