// AllinShared.jsx — shared tokens + primitives used across every screen.

const C = {
  base: '#F4F0E6',
  sandStone: '#E0E8E1',
  seaGlass: '#B0C5BE',
  seaGlassSoft: '#EBF0E8',
  seaGlassSurface: '#D6E1D8',
  tide: '#8FA6A6',
  muted: '#5E7478',
  rust: '#B96A4A',
  apricot: '#D79B6A',
  apricotLight: '#F0BF90',
  deepReef: '#243E42',
  driftwood: '#4A3F35',
  border: 'rgba(74, 63, 53, 0.14)',
  borderStrong: 'rgba(74, 63, 53, 0.22)',
};

const F = {
  display: "'Optima','Candara','Avenir Next','Gill Sans','Commissioner',sans-serif",
  body: "'Manrope',-apple-system,system-ui,sans-serif",
};

// ── Orb ──────────────────────────────────────────────────────────────
function Orb({ size = 180, variant = 'welcome', breathing = true, style = {} }) {
  const gradients = {
    welcome: 'radial-gradient(circle at 45% 40%, #FFF8EC 0%, #F0BF90 12%, #D79B6A 32%, rgba(222,230,224,0.4) 65%, rgba(244,240,230,0) 95%)',
    therapeutic: 'radial-gradient(circle at 45% 40%, #FFFFFF 0%, #D6E0DB 15%, #B0C5BE 40%, rgba(176,197,190,0.4) 70%, rgba(244,240,230,0) 100%)',
    reflection: 'radial-gradient(circle at 45% 40%, #FFFFFF 0%, #BCCDCA 15%, #8FA6A6 40%, rgba(143,166,166,0.4) 70%, rgba(244,240,230,0) 100%)',
    dark: 'radial-gradient(circle at 45% 40%, #FFF2DE 0%, #E0A875 20%, #B96A4A 45%, rgba(185,106,74,0.3) 75%, rgba(36,62,66,0) 100%)',
  };
  return (
    <>
      <style>{`@keyframes allin-breathe {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.035); opacity: 0.92; }
      }`}</style>
      <div style={{
        width: size, height: size, borderRadius: '50%',
        background: gradients[variant],
        animation: breathing ? 'allin-breathe 8s ease-in-out infinite' : 'none',
        flex: '0 0 auto',
        ...style,
      }}/>
    </>
  );
}

// ── Pill Button ──────────────────────────────────────────────────────
function Pill({ children, variant = 'primary', onClick, full = false, size = 'md' }) {
  const styles = {
    primary:   { bg: C.seaGlass, fg: C.deepReef, border: 'transparent' },
    apricot:   { bg: C.apricot, fg: C.deepReef, border: 'transparent' },
    rust:      { bg: C.rust, fg: C.base, border: 'transparent' },
    ghost:     { bg: 'transparent', fg: C.driftwood, border: C.border },
    dark:      { bg: 'transparent', fg: C.deepReef, border: C.border },
    glass:     { bg: 'rgba(244,240,230,0.12)', fg: C.base, border: 'rgba(244,240,230,0.3)' },
  }[variant];
  const sizes = { sm: { py: 10, px: 18, fs: 13 }, md: { py: 14, px: 24, fs: 15 }, lg: { py: 16, px: 28, fs: 16 } }[size];
  return (
    <button onClick={onClick} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      padding: `${sizes.py}px ${sizes.px}px`, borderRadius: 999,
      background: styles.bg, color: styles.fg, border: `1px solid ${styles.border}`,
      fontFamily: F.body, fontSize: sizes.fs, fontWeight: 500, letterSpacing: 0.01,
      cursor: 'pointer', width: full ? '100%' : 'auto',
      transition: 'transform 200ms cubic-bezier(.4,0,.2,1)',
    }}>
      {children}
    </button>
  );
}

// ── Header (consistent top chrome) ───────────────────────────────────
function Header({ left, center, right, borderless = false, darkMode = false, topPad = 56 }) {
  const fg = darkMode ? 'rgba(244,240,230,0.9)' : C.deepReef;
  const muted = darkMode ? 'rgba(244,240,230,0.55)' : C.muted;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: `${topPad}px 24px 14px`,
      borderBottom: borderless ? 'none' : `1px solid ${darkMode ? 'rgba(244,240,230,0.08)' : C.border}`,
    }}>
      <div style={{ width: 64, display: 'flex', alignItems: 'center' }}>{left}</div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', fontFamily: F.body, fontSize: 14, fontWeight: 500, color: fg, gap: 8, alignItems: 'center' }}>{center}</div>
      <div style={{ width: 64, display: 'flex', justifyContent: 'flex-end', color: muted, fontFamily: F.body, fontSize: 13 }}>{right}</div>
    </div>
  );
}

// ── Back chevron ─────────────────────────────────────────────────────
function Back({ dark = false }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M15 18l-6-6 6-6" stroke={dark ? 'rgba(244,240,230,0.65)' : C.muted} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Icon (inline SVG, consistent stroke) ─────────────────────────────
function Icon({ name, size = 20, color = C.driftwood, stroke = 1.6 }) {
  const paths = {
    heart: 'M20.84 4.6a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.07a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.24l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
    sparkle: 'M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1',
    user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z',
    gear: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z',
    play: 'M7 4v16l13-8L7 4z',
    pause: 'M6 4h4v16H6V4zm8 0h4v16h-4V4z',
    close: 'M6 6l12 12M18 6L6 18',
    book: 'M4 19V6a2 2 0 012-2h11l3 3v12a2 2 0 01-2 2H6a2 2 0 01-2-2zM8 10h8M8 14h6',
    shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    flame: 'M12 2s4 4 4 9a4 4 0 01-8 0c0-2 1-3 1-3s-1 2 0 3a2 2 0 004 0c0-3-1-5-1-9z',
    bolt: 'M13 2L4 14h7l-1 8 9-12h-7l1-8z',
    chart: 'M3 3v18h18M7 14l4-4 3 3 5-7',
    arrow: 'M5 12h14M13 5l7 7-7 7',
    check: 'M5 13l4 4L19 7',
    plus: 'M12 5v14M5 12h14',
    brain: 'M9 4a3 3 0 00-3 3v1a3 3 0 00-2 3v2a3 3 0 002 3v1a3 3 0 003 3h0a3 3 0 003-3V7a3 3 0 00-3-3zm6 0a3 3 0 013 3v1a3 3 0 012 3v2a3 3 0 01-2 3v1a3 3 0 01-3 3h0a3 3 0 01-3-3V7a3 3 0 013-3z',
    leaf: 'M11 20A7 7 0 014 13V4h9a7 7 0 017 7v9h-9zM11 20V9',
    home: 'M3 12l9-8 9 8v8a2 2 0 01-2 2h-4v-6h-6v6H5a2 2 0 01-2-2v-8z',
    calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z',
    moon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
    lock: 'M5 11h14v10H5zM8 11V7a4 4 0 018 0v4',
    trash: 'M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6',
    signout: 'M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9',
    doc: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
    mic: 'M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8',
    search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35',
    'chev-right': 'M9 6l6 6-6 6',
    'chev-down': 'M6 9l6 6 6-6',
    spiral: 'M12 12a3 3 0 113-3 5 5 0 01-5 5 7 7 0 01-7-7 9 9 0 019-9 11 11 0 0111 11',
    bell: 'M18 16v-5a6 6 0 00-12 0v5l-2 3h16l-2-3zM10 20a2 2 0 004 0',
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d={paths[name]} stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Card ─────────────────────────────────────────────────────────────
function Card({ children, surface = 'sand', pad = 20, style = {} }) {
  const bg = { sand: C.sandStone, base: C.base, sea: C.seaGlassSurface, seaSoft: C.seaGlassSoft, dark: '#2F4E52' }[surface];
  const tinted = surface !== 'base' && surface !== 'dark';
  const border = tinted ? `1px solid ${C.tide}66` : 'none';
  return (
    <div style={{ background: bg, borderRadius: 16, padding: pad, border, ...style }}>{children}</div>
  );
}

// ── Progress bar ─────────────────────────────────────────────────────
function Progress({ value = 0.3, color = C.seaGlass, dark = false }) {
  return (
    <div style={{ height: 3, borderRadius: 2, background: dark ? 'rgba(244,240,230,0.12)' : 'rgba(74,63,53,0.1)', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${value * 100}%`, background: color, borderRadius: 2, transition: 'width 400ms cubic-bezier(.4,0,.2,1)' }}/>
    </div>
  );
}

// ── Tab bar ──────────────────────────────────────────────────────────
function Tabs({ active = 'today' }) {
  const tabs = [
    { id: 'today', label: 'today', icon: 'home' },
    { id: 'library', label: 'library', icon: 'leaf' },
    { id: 'journal', label: 'journal', icon: 'book' },
    { id: 'you', label: 'you', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
      height: 84, background: 'rgba(244,240,230,0.94)',
      backdropFilter: 'blur(20px) saturate(180%)', WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      borderTop: `0.5px solid ${C.border}`,
      display: 'flex', alignItems: 'flex-start', paddingTop: 12,
    }}>
      {tabs.map(t => (
        <div key={t.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Icon name={t.icon} size={22} color={active === t.id ? C.deepReef : C.muted} />
          <div style={{ fontFamily: F.body, fontSize: 10, letterSpacing: 0.02, color: active === t.id ? C.deepReef : C.muted, fontWeight: active === t.id ? 500 : 400 }}>{t.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Screen shell ─────────────────────────────────────────────────────
function Screen({ children, bg = C.base, style = {} }) {
  return <div style={{ height: '100%', width: '100%', background: bg, position: 'relative', overflow: 'hidden', ...style }}>{children}</div>;
}

// ── Eyebrow / Display / Body text ────────────────────────────────────
const Eyebrow = ({ children, dark, style }) => (
  <div style={{ fontFamily: F.body, fontSize: 11, color: dark ? 'rgba(244,240,230,0.55)' : C.muted, textTransform: 'uppercase', letterSpacing: 0.08, fontWeight: 500, ...style }}>{children}</div>
);
const Display = ({ children, size = 36, dark, style }) => (
  <div style={{ fontFamily: F.display, fontSize: size, lineHeight: 1.1, letterSpacing: 0.01, fontWeight: 300, color: dark ? 'rgba(244,240,230,0.95)' : C.deepReef, ...style }}>{children}</div>
);
const Body = ({ children, size = 15, dark, style }) => (
  <div style={{ fontFamily: F.body, fontSize: size, lineHeight: 1.55, color: dark ? 'rgba(244,240,230,0.85)' : C.driftwood, ...style }}>{children}</div>
);
const Muted = ({ children, size = 13, dark, style }) => (
  <div style={{ fontFamily: F.body, fontSize: size, lineHeight: 1.5, color: dark ? 'rgba(244,240,230,0.55)' : C.muted, ...style }}>{children}</div>
);

// ── Mark (little orb + wordmark) ─────────────────────────────────────
function Mark({ dark, size = 18 }) {
  const dotColor = C.rust;
  const inkColor = dark ? 'rgba(244,240,230,0.95)' : C.deepReef;
  const orbSize = Math.round(size * 1.2);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: orbSize, height: orbSize, borderRadius: '50%', background: 'radial-gradient(circle at 45% 40%, #FFF8EC 0%, #D79B6A 50%, rgba(185,106,74,0.4) 85%, rgba(185,106,74,0) 100%)' }}/>
      <div style={{ fontFamily: F.display, fontSize: size, fontWeight: 300, color: inkColor, letterSpacing: 0.01 }}>All<span style={{ letterSpacing: 0 }}>in</span><span style={{ color: dotColor }}>.</span></div>
    </div>
  );
}

Object.assign(window, {
  AllinC: C, AllinF: F,
  Orb, Pill, Header, Back, Icon, Card, Progress, Tabs, Screen,
  Eyebrow, Display, Body, Muted, Mark,
});
