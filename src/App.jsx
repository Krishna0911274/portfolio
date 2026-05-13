import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

const LI = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GH = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);
const MailIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const LocIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MenuIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-6 h-6"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ExtIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const CodeIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const DlIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const SendIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const CertIco = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-7 h-7"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

// ── CARTOON DEVELOPER AVATARS ─────────────────────────────────────────────────
const HeroAvatar = () => (
  <svg
    viewBox="0 0 420 460"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%", maxWidth: "420px" }}
  >
    <defs>
      <radialGradient id="hg" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#D4956A" />
        <stop offset="100%" stopColor="#B5763A" />
      </radialGradient>
      <radialGradient id="sg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Star background */}
    <polygon
      points="210,18 255,140 382,144 282,222 318,348 210,274 102,348 138,222 38,144 165,140"
      fill="#f97316"
      opacity="0.88"
    />
    <polygon
      points="210,48 250,148 368,152 278,220 308,332 210,268 112,332 142,220 52,152 170,148"
      fill="#fb923c"
      opacity="0.25"
    />
    {/* Body shadow */}
    <ellipse cx="210" cy="438" rx="88" ry="13" fill="rgba(0,0,0,0.22)" />
    {/* Left arm */}
    <path
      d="M150 292 Q118 338 130 378"
      stroke="#f97316"
      strokeWidth="38"
      strokeLinecap="round"
    />
    <path
      d="M150 292 Q118 338 130 378"
      stroke="#ea6c0a"
      strokeWidth="38"
      strokeLinecap="round"
      opacity="0.28"
      transform="translate(4,5)"
    />
    {/* Right arm */}
    <path
      d="M270 292 Q302 338 290 378"
      stroke="#f97316"
      strokeWidth="38"
      strokeLinecap="round"
    />
    {/* Torso */}
    <path
      d="M150 282 Q146 392 210 402 Q274 392 270 282 Q240 265 210 263 Q180 265 150 282Z"
      fill="#f97316"
    />
    <path
      d="M150 282 Q146 392 210 402 Q274 392 270 282 Q240 265 210 263 Q180 265 150 282Z"
      fill="#ea6c0a"
      opacity="0.22"
      transform="translate(3,4)"
    />
    {/* Pocket */}
    <rect x="183" y="332" width="54" height="42" rx="10" fill="#ea6c0a" />
    <rect
      x="183"
      y="332"
      width="54"
      height="42"
      rx="10"
      fill="rgba(0,0,0,0.12)"
    />
    {/* Collar */}
    <path
      d="M177 268 Q210 252 243 268 Q228 284 210 286 Q192 284 177 268Z"
      fill="#ea6c0a"
    />
    {/* Neck */}
    <rect x="193" y="253" width="34" height="28" rx="8" fill="url(#hg)" />
    {/* Head */}
    <ellipse cx="210" cy="212" rx="62" ry="66" fill="url(#hg)" />
    <ellipse cx="194" cy="192" rx="26" ry="21" fill="rgba(255,255,255,0.07)" />
    {/* Long hair behind body – drawn before ears/head details */}
    <path
      d="M150 162 Q122 230 126 330 Q132 358 148 352 Q140 268 152 182"
      fill="#2C1810"
    />
    <path
      d="M270 162 Q298 230 294 330 Q288 358 272 352 Q280 268 268 182"
      fill="#2C1810"
    />
    {/* Hair top */}
    <ellipse cx="210" cy="157" rx="62" ry="30" fill="#2C1810" />
    {/* Hair sides – shorter, feminine */}
    <path
      d="M148 160 Q136 192 140 222"
      stroke="#2C1810"
      strokeWidth="28"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M272 160 Q284 192 280 222"
      stroke="#2C1810"
      strokeWidth="28"
      strokeLinecap="round"
      fill="none"
    />
    {/* Hair front sweep */}
    <path
      d="M155 172 Q188 152 228 158 Q248 162 260 174"
      stroke="#2C1810"
      strokeWidth="18"
      strokeLinecap="round"
    />
    {/* Hair highlight */}
    <ellipse cx="190" cy="150" rx="22" ry="9" fill="#4A2C1A" opacity="0.65" />
    {/* Hair clip accessory */}
    <rect x="240" y="152" width="20" height="12" rx="6" fill="#f97316" />
    <rect x="243" y="155" width="14" height="6" rx="3" fill="#fb923c" />
    {/* Ears */}
    <ellipse cx="148" cy="212" rx="13" ry="16" fill="#C68642" />
    <ellipse cx="272" cy="212" rx="13" ry="16" fill="#C68642" />
    <ellipse cx="148" cy="212" rx="8" ry="10" fill="#B5763A" />
    <ellipse cx="272" cy="212" rx="8" ry="10" fill="#B5763A" />
    {/* Eyelashes – left eye */}
    <path
      d="M176 200 Q181 194 186 199"
      stroke="#1a1a2a"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M182 197 Q187 191 191 197"
      stroke="#1a1a2a"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M188 196 Q193 191 196 197"
      stroke="#1a1a2a"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    {/* Eyelashes – right eye */}
    <path
      d="M220 197 Q225 191 229 197"
      stroke="#1a1a2a"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M226 196 Q231 191 234 197"
      stroke="#1a1a2a"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M232 197 Q237 192 240 198"
      stroke="#1a1a2a"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    {/* Eye whites */}
    <ellipse cx="188" cy="208" rx="13" ry="12" fill="white" />
    <ellipse cx="232" cy="208" rx="13" ry="12" fill="white" />
    {/* Pupils */}
    <circle cx="190" cy="209" r="8" fill="#1a1a2a" />
    <circle cx="234" cy="209" r="8" fill="#1a1a2a" />
    <circle cx="190" cy="209" r="5" fill="#3D2B1F" />
    <circle cx="234" cy="209" r="5" fill="#3D2B1F" />
    <circle cx="193" cy="206" r="2.5" fill="white" />
    <circle cx="237" cy="206" r="2.5" fill="white" />
    {/* Glasses */}
    <rect
      x="174"
      y="198"
      width="28"
      height="22"
      rx="6"
      fill="none"
      stroke="#1a1a2a"
      strokeWidth="2.5"
    />
    <rect
      x="218"
      y="198"
      width="28"
      height="22"
      rx="6"
      fill="none"
      stroke="#1a1a2a"
      strokeWidth="2.5"
    />
    <line
      x1="202"
      y1="209"
      x2="218"
      y2="209"
      stroke="#1a1a2a"
      strokeWidth="2"
    />
    <line
      x1="174"
      y1="209"
      x2="160"
      y2="211"
      stroke="#1a1a2a"
      strokeWidth="2"
    />
    <line
      x1="246"
      y1="209"
      x2="260"
      y2="211"
      stroke="#1a1a2a"
      strokeWidth="2"
    />
    {/* Eyebrows – arched feminine style */}
    <path
      d="M175 193 Q188 185 201 192"
      stroke="#2C1810"
      strokeWidth="2.8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M219 192 Q232 185 245 193"
      stroke="#2C1810"
      strokeWidth="2.8"
      fill="none"
      strokeLinecap="round"
    />
    {/* Nose */}
    <path
      d="M206 222 Q210 229 214 222"
      stroke="#B5763A"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
    />
    {/* Smile */}
    <path
      d="M194 236 Q210 248 226 236"
      stroke="#2C1810"
      strokeWidth="2.2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Laptop */}
    <rect x="128" y="358" width="164" height="92" rx="10" fill="#1e293b" />
    <rect x="134" y="364" width="152" height="76" rx="6" fill="#0f172a" />
    <rect x="134" y="364" width="152" height="76" rx="6" fill="url(#sg)" />
    <rect
      x="142"
      y="373"
      width="75"
      height="4"
      rx="2"
      fill="#f97316"
      opacity="0.9"
    />
    <rect
      x="142"
      y="382"
      width="50"
      height="4"
      rx="2"
      fill="#60a5fa"
      opacity="0.9"
    />
    <rect
      x="148"
      y="391"
      width="65"
      height="4"
      rx="2"
      fill="#34d399"
      opacity="0.9"
    />
    <rect
      x="142"
      y="400"
      width="45"
      height="4"
      rx="2"
      fill="#f97316"
      opacity="0.9"
    />
    <rect
      x="142"
      y="409"
      width="70"
      height="4"
      rx="2"
      fill="#a78bfa"
      opacity="0.9"
    />
    <rect
      x="148"
      y="418"
      width="55"
      height="4"
      rx="2"
      fill="#60a5fa"
      opacity="0.9"
    />
    <rect x="118" y="448" width="184" height="10" rx="5" fill="#1e293b" />
    {/* Hands */}
    <circle cx="130" cy="376" r="17" fill="#C68642" />
    <circle cx="290" cy="376" r="17" fill="#C68642" />
    {/* React badge */}
    <g transform="translate(358,92)">
      <circle r="26" fill="#0d1526" stroke="#61dafb" strokeWidth="2.5" />
      <circle r="5.5" fill="#61dafb" />
      <ellipse
        rx="22"
        ry="8.5"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.8"
      />
      <ellipse
        rx="22"
        ry="8.5"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.8"
        transform="rotate(60)"
      />
      <ellipse
        rx="22"
        ry="8.5"
        fill="none"
        stroke="#61dafb"
        strokeWidth="1.8"
        transform="rotate(120)"
      />
    </g>
    {/* JS badge */}
    <g transform="translate(58,112)">
      <rect x="-24" y="-24" width="48" height="48" rx="10" fill="#f7df1e" />
      <text
        x="-14"
        y="10"
        fontSize="22"
        fontWeight="bold"
        fill="#000"
        fontFamily="Arial,sans-serif"
      >
        JS
      </text>
    </g>
    {/* Angular badge */}
    <g transform="translate(368,308)">
      <circle r="24" fill="#dd0031" />
      <text
        x="-9"
        y="7"
        fontSize="17"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        A
      </text>
    </g>
    {/* Spring badge */}
    <g transform="translate(48,318)">
      <circle r="22" fill="#6db33f" />
      <text
        x="-8"
        y="6"
        fontSize="15"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        S
      </text>
    </g>
    {/* Sparkles */}
    <g transform="translate(318,172)" fill="#f97316" opacity="0.8">
      <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" />
    </g>
    <g transform="translate(88,192)" fill="#f97316" opacity="0.55">
      <polygon points="0,-6 1.5,-1.5 6,0 1.5,1.5 0,6 -1.5,1.5 -6,0 -1.5,-1.5" />
    </g>
    <g transform="translate(335,378)" fill="#f97316" opacity="0.45">
      <polygon points="0,-5 1.2,-1.2 5,0 1.2,1.2 0,5 -1.2,1.2 -5,0 -1.2,-1.2" />
    </g>
  </svg>
);

const AboutAvatar = () => (
  <svg
    viewBox="0 0 360 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%", maxWidth: "360px" }}
  >
    <defs>
      <radialGradient id="ag" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#D4956A" />
        <stop offset="100%" stopColor="#B5763A" />
      </radialGradient>
      <radialGradient id="asg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* Background glow circle */}
    <circle cx="180" cy="200" r="165" fill="rgba(249,115,22,0.06)" />
    <circle cx="180" cy="200" r="140" fill="rgba(249,115,22,0.04)" />
    {/* Hi speech bubble */}
    <rect x="220" y="20" width="110" height="55" rx="16" fill="#f97316" />
    <polygon points="230,75 218,95 248,75" fill="#f97316" />
    <text
      x="275"
      y="55"
      fontSize="28"
      fontWeight="bold"
      fill="white"
      fontFamily="Arial,sans-serif"
      textAnchor="middle"
    >
      Hi!
    </text>
    {/* Body shadow */}
    <ellipse cx="180" cy="388" rx="75" ry="11" fill="rgba(0,0,0,0.2)" />
    {/* Left arm */}
    <path
      d="M122 262 Q95 305 108 342"
      stroke="#f97316"
      strokeWidth="34"
      strokeLinecap="round"
    />
    {/* Right arm – holding laptop */}
    <path
      d="M238 262 Q265 305 252 342"
      stroke="#f97316"
      strokeWidth="34"
      strokeLinecap="round"
    />
    {/* Torso */}
    <path
      d="M122 255 Q118 355 180 365 Q242 355 238 255 Q212 240 180 238 Q148 240 122 255Z"
      fill="#f97316"
    />
    <path
      d="M122 255 Q118 355 180 365 Q242 355 238 255 Q212 240 180 238 Q148 240 122 255Z"
      fill="#ea6c0a"
      opacity="0.2"
      transform="translate(3,3)"
    />
    {/* Pocket */}
    <rect x="156" y="300" width="48" height="36" rx="9" fill="#ea6c0a" />
    {/* Collar */}
    <path
      d="M150 242 Q180 228 210 242 Q196 256 180 258 Q164 256 150 242Z"
      fill="#ea6c0a"
    />
    {/* Neck */}
    <rect x="165" y="228" width="30" height="24" rx="7" fill="url(#ag)" />
    {/* Head */}
    <ellipse cx="180" cy="188" rx="56" ry="60" fill="url(#ag)" />
    <ellipse cx="166" cy="170" rx="22" ry="18" fill="rgba(255,255,255,0.07)" />
    {/* Long hair behind body */}
    <path
      d="M126 140 Q102 205 106 298 Q112 322 126 316 Q118 240 130 160"
      fill="#2C1810"
    />
    <path
      d="M234 140 Q258 205 254 298 Q248 322 234 316 Q242 240 230 160"
      fill="#2C1810"
    />
    {/* Hair top */}
    <ellipse cx="180" cy="136" rx="56" ry="27" fill="#2C1810" />
    {/* Hair sides – feminine */}
    <path
      d="M124 138 Q113 168 117 196"
      stroke="#2C1810"
      strokeWidth="25"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M236 138 Q247 168 243 196"
      stroke="#2C1810"
      strokeWidth="25"
      strokeLinecap="round"
      fill="none"
    />
    {/* Hair front sweep */}
    <path
      d="M130 150 Q160 132 200 137 Q218 141 230 152"
      stroke="#2C1810"
      strokeWidth="16"
      strokeLinecap="round"
    />
    {/* Hair highlight */}
    <ellipse cx="165" cy="130" rx="19" ry="8" fill="#4A2C1A" opacity="0.6" />
    {/* Hair clip */}
    <rect x="208" y="132" width="18" height="10" rx="5" fill="#f97316" />
    <rect x="211" y="135" width="12" height="4" rx="2" fill="#fb923c" />
    {/* Ears */}
    <ellipse cx="124" cy="188" rx="12" ry="14" fill="#C68642" />
    <ellipse cx="236" cy="188" rx="12" ry="14" fill="#C68642" />
    <ellipse cx="124" cy="188" rx="7" ry="9" fill="#B5763A" />
    <ellipse cx="236" cy="188" rx="7" ry="9" fill="#B5763A" />
    {/* Eyelashes – left */}
    <path
      d="M151 177 Q156 171 160 176"
      stroke="#1a1a2a"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M157 174 Q162 168 165 174"
      stroke="#1a1a2a"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M163 173 Q167 168 170 174"
      stroke="#1a1a2a"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    {/* Eyelashes – right */}
    <path
      d="M188 174 Q193 168 196 174"
      stroke="#1a1a2a"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M194 173 Q199 168 202 174"
      stroke="#1a1a2a"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M200 174 Q205 169 208 175"
      stroke="#1a1a2a"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    {/* Eye whites */}
    <ellipse cx="162" cy="184" rx="12" ry="11" fill="white" />
    <ellipse cx="198" cy="184" rx="12" ry="11" fill="white" />
    {/* Pupils */}
    <circle cx="164" cy="185" r="7" fill="#1a1a2a" />
    <circle cx="200" cy="185" r="7" fill="#1a1a2a" />
    <circle cx="164" cy="185" r="4.5" fill="#3D2B1F" />
    <circle cx="200" cy="185" r="4.5" fill="#3D2B1F" />
    <circle cx="167" cy="182" r="2" fill="white" />
    <circle cx="203" cy="182" r="2" fill="white" />
    {/* Glasses */}
    <rect
      x="149"
      y="175"
      width="25"
      height="20"
      rx="5"
      fill="none"
      stroke="#1a1a2a"
      strokeWidth="2.2"
    />
    <rect
      x="186"
      y="175"
      width="25"
      height="20"
      rx="5"
      fill="none"
      stroke="#1a1a2a"
      strokeWidth="2.2"
    />
    <line
      x1="174"
      y1="185"
      x2="186"
      y2="185"
      stroke="#1a1a2a"
      strokeWidth="1.8"
    />
    <line
      x1="149"
      y1="185"
      x2="137"
      y2="187"
      stroke="#1a1a2a"
      strokeWidth="1.8"
    />
    <line
      x1="211"
      y1="185"
      x2="223"
      y2="187"
      stroke="#1a1a2a"
      strokeWidth="1.8"
    />
    {/* Eyebrows – arched feminine */}
    <path
      d="M150 170 Q162 163 174 169"
      stroke="#2C1810"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M186 169 Q198 163 210 169"
      stroke="#2C1810"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Nose */}
    <path
      d="M177 198 Q180 204 183 198"
      stroke="#B5763A"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    />
    {/* Smile */}
    <path
      d="M168 210 Q180 221 192 210"
      stroke="#2C1810"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    {/* Laptop */}
    <rect x="105" y="328" width="150" height="80" rx="9" fill="#1e293b" />
    <rect x="111" y="334" width="138" height="64" rx="5" fill="#0f172a" />
    <rect x="111" y="334" width="138" height="64" rx="5" fill="url(#asg)" />
    <rect
      x="118"
      y="342"
      width="68"
      height="4"
      rx="2"
      fill="#f97316"
      opacity="0.9"
    />
    <rect
      x="118"
      y="351"
      width="45"
      height="4"
      rx="2"
      fill="#60a5fa"
      opacity="0.9"
    />
    <rect
      x="123"
      y="360"
      width="58"
      height="4"
      rx="2"
      fill="#34d399"
      opacity="0.9"
    />
    <rect
      x="118"
      y="369"
      width="40"
      height="4"
      rx="2"
      fill="#a78bfa"
      opacity="0.9"
    />
    <rect
      x="118"
      y="378"
      width="62"
      height="4"
      rx="2"
      fill="#60a5fa"
      opacity="0.9"
    />
    <rect x="96" y="406" width="168" height="9" rx="4" fill="#1e293b" />
    {/* Hands */}
    <circle cx="108" cy="344" r="15" fill="#C68642" />
    <circle cx="252" cy="344" r="15" fill="#C68642" />
    {/* Floating AI badge */}
    <g transform="translate(42,260)">
      <rect x="-22" y="-22" width="44" height="44" rx="10" fill="#7c3aed" />
      <text
        x="-10"
        y="8"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        AI
      </text>
    </g>
    {/* Floating Pr badge */}
    <g transform="translate(318,260)">
      <rect x="-22" y="-22" width="44" height="44" rx="10" fill="#9999ff" />
      <text
        x="-10"
        y="8"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial,sans-serif"
      >
        Pr
      </text>
    </g>
    {/* Sparkles */}
    <g transform="translate(52,140)" fill="#f97316" opacity="0.7">
      <polygon points="0,-7 1.8,-1.8 7,0 1.8,1.8 0,7 -1.8,1.8 -7,0 -1.8,-1.8" />
    </g>
    <g transform="translate(308,140)" fill="#f97316" opacity="0.5">
      <polygon points="0,-5 1.2,-1.2 5,0 1.2,1.2 0,5 -1.2,1.2 -5,0 -1.2,-1.2" />
    </g>
    <g transform="translate(310,340)" fill="#f97316" opacity="0.4">
      <polygon points="0,-5 1.2,-1.2 5,0 1.2,1.2 0,5 -1.2,1.2 -5,0 -1.2,-1.2" />
    </g>
  </svg>
);

function SectionTitle({ pre, highlight, sub }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        {pre}{" "}
        <span
          style={{
            background: "linear-gradient(135deg,#f97316,#fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {highlight}
        </span>
      </h2>
      <div
        className="w-16 h-1 mx-auto rounded-full"
        style={{ background: "#f97316" }}
      />
      {sub && (
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">{sub}</p>
      )}
    </div>
  );
}

function Fade({ children, id, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${className}`}
    >
      {children}
    </section>
  );
}

function SkillBar({ name, pct, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="text-sm font-semibold text-orange-400">{pct}%</span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: "#162040" }}
      >
        <div
          className="h-2 rounded-full"
          style={{
            width: inView ? `${pct}%` : "0%",
            background: "linear-gradient(90deg,#f97316,#fb923c)",
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s",
          }}
        />
      </div>
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Certificates",
    "Contact",
  ];

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 50);
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(links[i].toLowerCase());
          break;
        }
      }
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      style={{
        background: scrolled ? "rgba(10,15,30,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => go("home")} className="text-xl font-bold">
            <span
              style={{
                background: "linear-gradient(135deg,#f97316,#fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Portfolio
            </span>
            <span className="text-orange-500">.</span>
          </button>
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => go(l.toLowerCase())}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active === l.toLowerCase() ? "text-orange-400 bg-orange-500/10" : "text-slate-300 hover:text-orange-400 hover:bg-orange-500/5"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://linkedin.com/in/krishna-pandav-b87a562a6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10"
            >
              <LI />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400 transition-colors p-2 rounded-lg hover:bg-orange-500/10"
            >
              <GH />
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-300 hover:text-orange-400 p-2"
          >
            {open ? <CloseIco /> : <MenuIco />}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          background: "rgba(13,21,38,0.98)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(100,116,139,0.2)",
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => go(l.toLowerCase())}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all ${active === l.toLowerCase() ? "text-orange-400 bg-orange-500/10" : "text-slate-300 hover:text-orange-400 hover:bg-orange-500/5"}`}
            >
              {l}
            </button>
          ))}
          <div
            className="flex gap-4 px-4 pt-3 mt-2"
            style={{ borderTop: "1px solid rgba(100,116,139,0.2)" }}
          >
            <a
              href="https://linkedin.com/in/krishna-pandav-b87a562a6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400"
            >
              <LI />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-orange-400"
            >
              <GH />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [ref, inView] = useInView(0.05);
  const d = (n) =>
    `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  const grad = {
    background: "linear-gradient(135deg,#f97316,#fb923c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };
  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "rgba(249,115,22,0.05)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{ background: "rgba(249,115,22,0.04)", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "rgba(249,115,22,0.03)", filter: "blur(100px)" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className={`${d()} delay-100`}>
              <span
                className="inline-block px-4 py-2 rounded-full text-orange-400 text-sm font-medium mb-6"
                style={{
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                }}
              >
                👋 Welcome to my portfolio
              </span>
            </div>
            <div className={`${d()} delay-200`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Hi, I'm <span style={grad}>Krishna Pandav</span>
              </h1>
            </div>
            <div className={`${d()} delay-300`}>
              <p className="text-lg sm:text-xl text-slate-300 font-medium mb-5">
                Frontend Software Engineer –{" "}
                <span className="text-orange-400">Angular</span> |{" "}
                <span className="text-orange-400">React</span> |{" "}
                <span className="text-orange-400">Spring Boot</span>
              </p>
            </div>
            <div className={`${d()}`} style={{ transitionDelay: "400ms" }}>
              <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                Frontend-focused Software Engineer with 1+ year of experience in
                Angular (v16+), React.js, and Java Spring Boot for building
                scalable, cloud-ready web applications. Experienced in REST API
                integration, responsive UI development, and performance
                optimization.
              </p>
            </div>
            <div className={`${d()}`} style={{ transitionDelay: "500ms" }}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#"
                  className="flex items-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "#f97316" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ea6c0a";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(249,115,22,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f97316";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <DlIco /> Download CV
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center gap-2 px-8 py-3.5 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-orange-400 hover:text-orange-300"
                  style={{ border: "2px solid rgba(249,115,22,0.5)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#f97316";
                    e.currentTarget.style.background = "rgba(249,115,22,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(249,115,22,0.5)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div
              className={`mt-10 ${inView ? "opacity-100" : "opacity-0"} transition-opacity duration-700 hidden lg:flex`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="flex items-center gap-2 text-slate-500">
                <div
                  className="w-12 h-px animate-pulse"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(249,115,22,0.6), transparent)",
                  }}
                />
                <span className="text-xs uppercase tracking-widest">
                  Scroll Down
                </span>
              </div>
            </div>
          </div>

          {/* Right – 3D Cartoon Avatar */}
          <div
            className={`flex justify-center order-1 lg:order-2 ${d()}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div
              className="relative w-72 h-72 sm:w-96 sm:h-96"
              style={{
                filter: "drop-shadow(0 8px 32px rgba(249,115,22,0.25))",
              }}
            >
              <HeroAvatar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  const grad = {
    background: "linear-gradient(135deg,#f97316,#fb923c)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };
  const stats = [
    { v: "1+", l: "Years Experience" },
    { v: "2", l: "Projects Completed" },
    { v: "3", l: "Certificates" },
  ];
  return (
    <Fade id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle pre="About" highlight="Me" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80"
              style={{ filter: "drop-shadow(0 6px 24px rgba(249,115,22,0.2))" }}
            >
              <AboutAvatar />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Frontend Software Engineer
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              Frontend-focused Software Engineer experienced in Angular, React,
              and Spring Boot. Skilled in REST API integration, responsive UI,
              Agile methodologies, CI/CD pipelines, and cloud-native application
              concepts.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300 cursor-default"
                  style={{ background: "#0d1526" }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">
                    {s.v}
                  </div>
                  <div className="text-xs text-slate-400 leading-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                {
                  ico: <MailIco />,
                  label: "Email",
                  val: "krishnapandavv06@gmail.com",
                  href: "mailto:krishnapandavv06@gmail.com",
                },
                {
                  ico: <PhoneIco />,
                  label: "Phone",
                  val: "9624630783",
                  href: "tel:9624630783",
                },
                { ico: <LocIco />, label: "Location", val: "Ahmedabad, India" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-orange-400 flex-shrink-0">
                    {item.ico}
                  </span>
                  <span className="text-slate-500 text-sm w-16 flex-shrink-0">
                    {item.label}:
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-300 hover:text-orange-400 transition-colors text-sm break-all"
                    >
                      {item.val}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm">{item.val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  const [ref, inView] = useInView();
  const groups = [
    {
      cat: "Frontend",
      skills: [
        { n: "Angular v16+", p: 90 },
        { n: "React.js", p: 80 },
        { n: "JavaScript ES6+", p: 85 },
        { n: "TypeScript", p: 80 },
        { n: "HTML5", p: 95 },
        { n: "CSS3 / SCSS", p: 90 },
      ],
    },
    {
      cat: "Backend",
      skills: [
        { n: "Java", p: 65 },
        { n: "Spring Boot", p: 60 },
        { n: "REST API Development", p: 70 },
      ],
    },
    {
      cat: "UI Libraries",
      skills: [
        { n: "Material UI", p: 75 },
        { n: "Bootstrap", p: 85 },
        { n: "PrimeNG", p: 70 },
      ],
    },
    {
      cat: "Cloud & DevOps",
      skills: [
        { n: "Git / GitHub", p: 85 },
        { n: "Docker", p: 50 },
        { n: "CI/CD GitHub Actions", p: 55 },
      ],
    },
    {
      cat: "Database",
      skills: [
        { n: "SQL", p: 70 },
        { n: "PostgreSQL", p: 60 },
        { n: "H2", p: 55 },
      ],
    },
    {
      cat: "Tools",
      skills: [
        { n: "VS Code", p: 95 },
        { n: "IntelliJ IDEA", p: 80 },
        { n: "JIRA", p: 75 },
        { n: "npm", p: 85 },
      ],
    },
  ];
  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          pre="My"
          highlight="Skills"
          sub="Technologies and tools I work with"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <div
              key={gi}
              className="p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300"
              style={{ background: "#0d1526" }}
            >
              <h3 className="text-orange-400 font-semibold text-xs uppercase tracking-wider mb-5 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: "#f97316" }}
                />
                {g.cat}
              </h3>
              {g.skills.map((s, si) => (
                <SkillBar key={si} name={s.n} pct={s.p} inView={inView} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: "Hospital Management System (BMC)",
      period: "Nov 2024 – Dec 2025",
      tech: ["Angular", "Spring Boot", "REST API", "ABDM Integration"],
      desc: "Contributed to digital modernization of 170+ municipal hospitals through HMIS-2 platform. Replaced manual case papers with a secure paperless digital system. Digitized patient registration, consultation notes, prescriptions, and treatment history. Integrated with Ayushman Bharat Digital Mission (ABDM) enabling unique health IDs and mobile access to complete medical histories. Implemented interactive dashboards and data visualization for doctors and administrative staff. Unified 170+ hospitals under a single digital ecosystem ensuring transparency, traceability, and eco-friendly healthcare management.",
    },
    {
      title: "3D Web Experience",
      period: "Jun 2024 – Aug 2024",
      tech: ["React.js", "Three.js", "JavaScript", "CSS3"],
      desc: "Developed an interactive 3D web experience using React.js with modern 3D rendering libraries. Focused on component-based architecture, performance optimization, and immersive UI/UX design. Demonstrated ability to work with cutting-edge frontend technologies beyond standard 2D interfaces.",
    },
  ];

  const cardStyle = {
    background: "#0d1526",
    border: "1px solid rgba(100,116,139,0.2)",
  };

  return (
    <Fade id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle pre="My" highlight="Projects" sub="Things I've built" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 group"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(249,115,22,0.35)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(249,115,22,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border =
                  "1px solid rgba(100,116,139,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white leading-tight pr-2">
                  {p.title}
                </h3>
                <span className="text-xs text-slate-500 flex-shrink-0 mt-1">
                  {p.period}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t, ti) => (
                  <span
                    key={ti}
                    className="px-2.5 py-1 text-xs font-medium rounded-full text-orange-400"
                    style={{
                      background: "rgba(249,115,22,0.1)",
                      border: "1px solid rgba(249,115,22,0.2)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function Experience() {
  const jobs = [
    {
      company: "Artem Healthtech Pvt. Ltd.",
      role: "Associate Frontend Developer",
      period: "07/2025 – 12/2025",
      location: "Ahmedabad",
      points: [
        "Developed scalable web applications using Angular (v16+) following component-based architecture",
        "Collaborated with backend teams working on Spring Boot APIs to ensure seamless data flow",
        "Participated in Agile sprint cycles, contributing to feature development and problem-solving discussions",
        "Debugged and optimized application performance, improving UI responsiveness",
      ],
    },
    {
      company: "Artem Healthtech Pvt. Ltd.",
      role: "Angular Developer Intern",
      period: "11/2024 – 06/2025",
      location: "Ahmedabad",
      points: [
        "Built and enhanced healthcare application features based on user requirements",
        "Worked on UI components, improving usability and workflow efficiency",
        "Assisted in API integration and data handling for dynamic applications",
        "Supported team in resolving bugs and improving performance",
      ],
    },
    {
      company: "Kryptoninc Infolab LLP",
      role: "React Developer Intern",
      period: "02/2024 – 09/2024",
      location: "Ahmedabad",
      points: [
        "Developed dynamic user interfaces using React.js (hooks, state, props)",
        "Implemented REST API integration for real-time data handling",
        "Applied responsive design principles for cross-device compatibility",
        "Optimized application performance and fixed UI-related issues",
      ],
    },
  ];

  return (
    <Fade id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          pre="Work"
          highlight="Experience"
          sub="My professional journey"
        />
        <div className="relative">
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #f97316, rgba(249,115,22,0.1))",
            }}
          />
          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative pl-12 sm:pl-20">
                <div
                  className="absolute left-2 sm:left-6 top-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: "#0a0f1e",
                    border: "2px solid #f97316",
                    boxShadow: "0 0 12px rgba(249,115,22,0.4)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#f97316" }}
                  />
                </div>
                <div
                  className="p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300"
                  style={{ background: "#0d1526" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {job.role}
                      </h3>
                      <p className="text-orange-400 font-medium text-sm">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-slate-400 text-sm">{job.period}</p>
                      <p className="text-slate-500 text-xs">{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((pt, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-2 text-slate-400 text-sm"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#f97316" }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

// ── EDUCATION ─────────────────────────────────────────────────────────────────
function Education() {
  return (
    <Fade id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionTitle pre="My" highlight="Education" />
        <div className="relative pl-12 sm:pl-20">
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #f97316, rgba(249,115,22,0.1))",
            }}
          />
          <div
            className="absolute left-2 sm:left-6 top-1.5 w-5 h-5 rounded-full flex items-center justify-center"
            style={{
              background: "#0a0f1e",
              border: "2px solid #f97316",
              boxShadow: "0 0 12px rgba(249,115,22,0.4)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#f97316" }}
            />
          </div>
          <div
            className="p-5 sm:p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300"
            style={{ background: "#0d1526" }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-white">
                  B.Tech in Computer Engineering
                </h3>
                <p className="text-orange-400 font-medium text-sm mt-1">
                  L J University
                </p>
                <p className="text-slate-500 text-sm mt-1">Ahmedabad, India</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span
                  className="inline-block px-3 py-1 text-xs font-medium rounded-full text-orange-400"
                  style={{
                    background: "rgba(249,115,22,0.1)",
                    border: "1px solid rgba(249,115,22,0.2)",
                  }}
                >
                  Nov 2021 – May 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

// ── CERTIFICATES ──────────────────────────────────────────────────────────────
function Certificates() {
  const certs = [
    {
      title: "Software Engineering Job Simulation",
      issuer: "JPMorgan Chase & Co.",
      color: "#0a3d62",
    },
    {
      title: "Internship Completion Certificate",
      issuer: "Angular Development",
      color: "#1a1a2e",
    },
    {
      title: "Internship Completion Certificate",
      issuer: "React.js Development",
      color: "#16213e",
    },
  ];
  return (
    <Fade id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          pre="My"
          highlight="Certificates"
          sub="Achievements and recognitions"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              style={{ background: "#0d1526" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(249,115,22,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-orange-400"
                style={{
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                }}
              >
                <CertIco />
              </div>
              <h3 className="text-white font-bold text-base mb-2 leading-tight">
                {c.title}
              </h3>
              <p className="text-orange-400 text-sm font-medium">{c.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputStyle = {
    background: "#111d35",
    border: "1px solid rgba(100,116,139,0.3)",
    color: "#e2e8f0",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <Fade id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          pre="Get In"
          highlight="Touch"
          sub="Let's work together"
        />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a
              question, a project idea, or just want to say hi — my inbox is
              always open!
            </p>
            <div className="space-y-5">
              {[
                {
                  ico: <MailIco />,
                  label: "Email",
                  val: "krishnapandavv06@gmail.com",
                  href: "mailto:krishnapandavv06@gmail.com",
                },
                {
                  ico: <PhoneIco />,
                  label: "Phone",
                  val: "9624630783",
                  href: "tel:9624630783",
                },
                { ico: <LocIco />, label: "Location", val: "Ahmedabad, India" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-800"
                  style={{ background: "#0d1526" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-400"
                    style={{ background: "rgba(249,115,22,0.1)" }}
                  >
                    {item.ico}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-200 hover:text-orange-400 transition-colors text-sm font-medium"
                      >
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm font-medium">
                        {item.val}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com/in/krishna-pandav-b87a562a6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl text-slate-300 hover:text-orange-400 transition-all duration-200"
                style={{
                  background: "#0d1526",
                  border: "1px solid rgba(100,116,139,0.2)",
                }}
              >
                <LI /> LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl text-slate-300 hover:text-orange-400 transition-all duration-200"
                style={{
                  background: "#0d1526",
                  border: "1px solid rgba(100,116,139,0.2)",
                }}
              >
                <GH /> GitHub
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className="p-6 sm:p-8 rounded-2xl border border-slate-800"
            style={{ background: "#0d1526" }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-orange-400"
                  style={{ background: "rgba(249,115,22,0.1)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="w-8 h-8"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-slate-400 text-sm">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      required
                      placeholder="Krishna Pandav"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(100,116,139,0.3)")
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(100,116,139,0.3)")
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91 9624630783"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(100,116,139,0.3)")
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#f97316")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(100,116,139,0.3)")
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "#f97316" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ea6c0a";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(249,115,22,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f97316";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <SendIco /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-8 px-4 text-center"
      style={{ borderTop: "1px solid rgba(100,116,139,0.15)" }}
    >
      <p className="text-slate-400 text-sm">
        Made with <span className="text-red-400">❤️</span> by{" "}
        <span className="text-orange-400 font-medium">Krishna Pandav</span>
      </p>
      <p className="text-slate-600 text-xs mt-1">© 2026 All rights reserved.</p>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      style={{ background: "#0a0f1e", minHeight: "100vh", color: "#e2e8f0" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
