import { useId, type ReactNode } from "react";

/**
 * Illustrated artwork used where real photographs are not yet available.
 * Every scene is plain SVG (no images to download), drawn in the site palette so the set
 * looks consistent. Swap a scene for a real <img> later without touching the page layout.
 */

const C = {
  deep: "#141c4f", lapis: "#26357f", sky: "#3f56b5", turq: "#1b9aa5", turqLight: "#7bd3d2",
  gold: "#dcaa3e", goldDark: "#a97a1f", clay: "#b4502a", clayDark: "#7d3318", sand: "#efe1c4",
  cream: "#fbf3e1", palm: "#2f7d5b", ink: "#1c1a17", white: "#ffffff", wheat: "#d9b26a", rose: "#c9577a",
};

export type ArtKind =
  | "ziggurat" | "tablet" | "gate" | "winged" | "arch" | "basra" | "round" | "skyline" | "bridge"
  | "masgouf" | "dolma" | "kubba" | "tashreeb" | "rice" | "samoon" | "kahi" | "kleicha" | "baklava" | "tea" | "coffee"
  | "mosque" | "church" | "lalish" | "mandi" | "kakai" | "shrine" | "bahai" | "zoro"
  | "cave" | "citadel" | "minaret" | "marsh" | "lake" | "waterfall" | "mountain" | "market";

type Tone = "lapis" | "clay" | "gold" | "turq";
const SKY: Record<Tone, [string, string]> = {
  lapis: [C.sky, C.deep], clay: ["#d98a4e", C.clayDark], gold: ["#f1cf7a", "#b4502a"], turq: [C.turqLight, "#0f5d6a"],
};
const FOOD_BG: [string, string] = ["#e29a5a", "#8d3b1c"];

function star(n: number, cx: number, cy: number, R: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const rad = i % 2 ? r : R;
    const a = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
  }
  return pts.join(" ");
}

const Waves = ({ y = 232, color = C.turq }: { y?: number; color?: string }) => (
  <g>
    <rect x="0" y={y} width="400" height={300 - y} fill={color} />
    {[0, 1, 2].map((i) => (
      <path key={i} d={`M-10 ${y + 16 + i * 18} q25 -12 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t30 0`} fill="none" stroke={C.cream} strokeOpacity={0.35} strokeWidth="2" />
    ))}
  </g>
);

const Palm = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-3 0 Q-6 -45 0 -90 L4 -90 Q-1 -45 4 0Z" fill={C.clayDark} />
    {[-70, -40, -10, 20, 50, 80, 110].map((r) => (
      <path key={r} transform={`translate(2 -90) rotate(${r - 90})`} d="M0 0 Q28 -14 56 6 Q28 -4 0 0Z" fill={C.palm} />
    ))}
    <circle cx="-2" cy="-86" r="3" fill={C.gold} /><circle cx="6" cy="-84" r="3" fill={C.gold} />
  </g>
);

const Dome = ({ x, y, w = 70, color = C.turq }: { x: number; y: number; w?: number; color?: string }) => (
  <g>
    <path d={`M${x - w / 2} ${y} Q${x - w / 2} ${y - w * 0.75} ${x} ${y - w * 0.8} Q${x + w / 2} ${y - w * 0.75} ${x + w / 2} ${y}Z`} fill={color} />
    <rect x={x - 1.5} y={y - w * 0.8 - 18} width="3" height="18" fill={C.gold} />
    <circle cx={x} cy={y - w * 0.8 - 20} r="3.5" fill={C.gold} />
  </g>
);

const Minaret = ({ x, y, h = 120, w = 14 }: { x: number; y: number; h?: number; w?: number }) => (
  <g>
    <rect x={x - w / 2} y={y - h} width={w} height={h} fill={C.sand} />
    <rect x={x - w} y={y - h * 0.72} width={w * 2} height="5" fill={C.gold} />
    <path d={`M${x - w / 2} ${y - h} Q${x} ${y - h - 34} ${x + w / 2} ${y - h}Z`} fill={C.turq} />
    <circle cx={x} cy={y - h - 28} r="2.5" fill={C.gold} />
  </g>
);

const Moon = ({ x, y, r = 22 }: { x: number; y: number; r?: number }) => (
  <g><circle cx={x} cy={y} r={r} fill={C.gold} /><circle cx={x + r * 0.4} cy={y - r * 0.2} r={r * 0.85} fill={C.lapis} fillOpacity="0" /></g>
);

const Plate = ({ children }: { children: ReactNode }) => (
  <g>
    <ellipse cx="200" cy="262" rx="120" ry="14" fill="#000" opacity="0.22" />
    <circle cx="200" cy="160" r="112" fill={C.cream} />
    <circle cx="200" cy="160" r="96" fill="none" stroke={C.gold} strokeWidth="3" />
    <circle cx="200" cy="160" r="90" fill="none" stroke={C.turq} strokeWidth="1.5" strokeDasharray="3 5" />
    {children}
  </g>
);

function Scene({ kind }: { kind: ArtKind }): ReactNode {
  switch (kind) {
    /* ---------- History ---------- */
    case "ziggurat":
      return (<>
        <circle cx="305" cy="85" r="36" fill={C.gold} />
        <path d="M0 250 Q100 215 200 240 T400 232 V300 H0Z" fill={C.wheat} />
        <rect x="90" y="196" width="220" height="44" fill={C.clay} />
        <rect x="118" y="160" width="164" height="40" fill="#c8643a" />
        <rect x="148" y="126" width="104" height="38" fill="#d97a4a" />
        <rect x="176" y="100" width="48" height="28" fill={C.turq} />
        <path d="M188 240 L212 240 L207 126 L193 126Z" fill={C.sand} opacity="0.85" />
        <path d="M0 262 Q120 238 240 258 T400 250 V300 H0Z" fill={C.goldDark} opacity="0.55" />
      </>);
    case "tablet":
      return (<>
        <rect x="95" y="55" width="210" height="190" rx="22" fill={C.wheat} />
        <rect x="95" y="55" width="210" height="190" rx="22" fill="none" stroke={C.goldDark} strokeWidth="4" />
        {Array.from({ length: 6 }).map((_, r) => Array.from({ length: 8 }).map((__, k) => (
          <path key={`${r}-${k}`} transform={`translate(${120 + k * 22 + ((r * 7) % 5)} ${85 + r * 26})`} d={(r + k) % 3 === 0 ? "M0 0 l12 4 -12 4z M14 -3 l4 10" : (r + k) % 3 === 1 ? "M0 0 l4 12 M6 0 l4 12 M0 6 l12 0" : "M0 0 l12 4 -12 4z"}
            fill={C.clayDark} stroke={C.clayDark} strokeWidth="2" strokeLinecap="round" />
        )))}
        <circle cx="330" cy="62" r="26" fill={C.gold} opacity="0.9" />
      </>);
    case "gate":
      return (<>
        <rect x="0" y="236" width="400" height="64" fill={C.wheat} />
        <rect x="60" y="80" width="80" height="160" fill={C.lapis} /><rect x="260" y="80" width="80" height="160" fill={C.lapis} />
        <rect x="52" y="68" width="96" height="16" fill={C.turq} /><rect x="252" y="68" width="96" height="16" fill={C.turq} />
        {[60, 100].map((y) => <rect key={y} x="60" y={y + 30} width="80" height="6" fill={C.gold} />)}
        {[60, 100].map((y) => <rect key={y} x="260" y={y + 30} width="80" height="6" fill={C.gold} />)}
        <path d="M140 240 V150 Q200 90 260 150 V240Z" fill={C.deep} />
        <path d="M140 150 Q200 90 260 150" fill="none" stroke={C.turq} strokeWidth="10" />
        {[75, 105, 275, 305].map((x, i) => (
          <g key={x} fill={C.gold}><ellipse cx={x} cy={120 + (i % 2) * 40} rx="11" ry="7" /><rect x={x - 9} y={124 + (i % 2) * 40} width="3" height="9" /><rect x={x + 6} y={124 + (i % 2) * 40} width="3" height="9" /><circle cx={x + 11} cy={115 + (i % 2) * 40} r="4" /></g>
        ))}
        <rect x="186" y="180" width="28" height="60" fill={C.turqLight} opacity="0.25" />
      </>);
    case "winged":
      return (<>
        <circle cx="200" cy="120" r="30" fill={C.gold} stroke={C.cream} strokeWidth="4" />
        <circle cx="200" cy="120" r="14" fill={C.clay} />
        {[-1, 1].map((d) => (
          <g key={d} transform={`translate(200 120) scale(${d} 1)`}>
            {[0, 1, 2, 3, 4].map((i) => (
              <path key={i} d={`M30 ${-4 + i * 7} Q${80 + i * 8} ${-24 + i * 10} ${130 - i * 10} ${-6 + i * 12}`} fill="none" stroke={i % 2 ? C.turqLight : C.cream} strokeWidth="6" strokeLinecap="round" />
            ))}
          </g>
        ))}
        <rect x="70" y="170" width="44" height="90" fill={C.wheat} /><rect x="286" y="170" width="44" height="90" fill={C.wheat} />
        <rect x="64" y="164" width="56" height="12" fill={C.goldDark} /><rect x="280" y="164" width="56" height="12" fill={C.goldDark} />
        <rect x="0" y="260" width="400" height="40" fill={C.goldDark} opacity="0.6" />
      </>);
    case "arch":
      return (<>
        <path d="M0 250 H400 V300 H0Z" fill={C.wheat} />
        <path d="M60 250 V140 Q60 40 200 40 Q340 40 340 140 V250Z" fill={C.clay} />
        <path d="M120 250 V150 Q120 80 200 80 Q280 80 280 150 V250Z" fill={C.deep} />
        <path d="M120 150 Q120 80 200 80 Q280 80 280 150" fill="none" stroke={C.gold} strokeWidth="5" />
        {[78, 322].map((x) => [0, 1, 2].map((i) => <path key={`${x}${i}`} d={`M${x - 10} ${120 + i * 40} v-14 q10 -14 20 0 v14z`} fill={C.clayDark} />))}
        <Moon x={340} y={60} r={16} />
      </>);
    case "basra":
      return (<>
        <circle cx="90" cy="80" r="28" fill={C.gold} />
        <path d="M0 232 H400" stroke={C.wheat} strokeWidth="2" />
        <Palm x={50} y={236} s={1.1} /><Palm x={120} y={238} s={0.8} /><Palm x={345} y={238} s={1} />
        <Waves y={232} />
        <path d="M185 244 Q235 270 300 244Z" fill={C.clayDark} />
        <path d="M242 244 V150 L292 240Z" fill={C.cream} /><path d="M236 244 V160 L196 240Z" fill={C.sand} />
        <rect x="241" y="146" width="2" height="100" fill={C.clayDark} />
      </>);
    case "round":
      return (<>
        <rect y="250" width="400" height="50" fill={C.turq} />
        <circle cx="200" cy="150" r="116" fill={C.wheat} />
        {[108, 80, 52].map((r, i) => <circle key={r} cx="200" cy="150" r={r} fill="none" stroke={i % 2 ? C.clay : C.goldDark} strokeWidth="5" />)}
        {[0, 90, 180, 270].map((a) => <rect key={a} x="192" y="30" width="16" height="22" fill={C.lapis} transform={`rotate(${a} 200 150)`} />)}
        <Dome x={200} y={168} w={64} />
        <Moon x={340} y={50} r={18} />
      </>);
    case "skyline":
      return (<>
        <Moon x={320} y={62} r={22} />
        <rect y="236" width="400" height="64" fill={C.deep} />
        <Minaret x={70} y={236} h={110} /><Minaret x={330} y={236} h={96} />
        <rect x="120" y="190" width="160" height="50" fill={C.sand} />
        <Dome x={200} y={190} w={110} /><Dome x={138} y={196} w={36} color={C.gold} /><Dome x={262} y={196} w={36} color={C.gold} />
        {[150, 190, 230].map((x) => <path key={x} d={`M${x} 240 v-24 q8 -12 16 0 v24z`} fill={C.lapis} />)}
        <Waves y={248} color={C.turq} />
      </>);
    case "bridge":
      return (<>
        <circle cx="300" cy="80" r="30" fill={C.gold} />
        {[40, 78, 112, 150, 262, 300, 336].map((x, i) => <rect key={x} x={x} y={170 - (i % 3) * 22} width="26" height={80 + (i % 3) * 22} fill={C.lapis} opacity="0.85" />)}
        <rect x="0" y="206" width="400" height="9" fill={C.cream} />
        {[90, 200, 310].map((x) => <rect key={x} x={x - 4} y="120" width="8" height="90" fill={C.cream} />)}
        <path d="M0 205 Q45 118 90 120 Q145 160 200 120 Q255 160 310 120 Q355 118 400 205" fill="none" stroke={C.gold} strokeWidth="3" />
        {[30, 60, 120, 150, 170, 230, 250, 280, 340, 370].map((x) => <line key={x} x1={x} y1="206" x2={x} y2={150 - Math.abs(((x % 110) - 55)) * 0.1} stroke={C.cream} strokeOpacity="0.5" />)}
        <Waves y={226} />
      </>);

    /* ---------- Food ---------- */
    case "masgouf":
      return (<Plate>
        <path d="M120 160 Q165 108 238 140 Q262 150 285 128 L280 160 L285 192 Q262 170 238 180 Q165 212 120 160Z" fill={C.goldDark} />
        <path d="M130 160 Q168 120 236 146 Q172 134 130 160Z" fill={C.gold} opacity="0.7" />
        {[170, 192, 214].map((x) => <path key={x} d={`M${x} 132 Q${x + 10} 160 ${x} 188`} fill="none" stroke={C.clayDark} strokeWidth="3" />)}
        <circle cx="140" cy="154" r="5" fill={C.ink} />
        {([[160, 214], [200, 222], [238, 214]] as [number, number][]).map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r="13" fill="#f4d34e" /><circle cx={x} cy={y} r="8" fill="none" stroke={C.cream} strokeWidth="1.5" /></g>)}
        <circle cx="262" cy="102" r="8" fill={C.rose} opacity="0.85" /><circle cx="140" cy="104" r="8" fill={C.rose} opacity="0.85" />
      </Plate>);
    case "dolma":
      return (<Plate>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i / 6) * Math.PI * 2;
          const x = 200 + Math.cos(a) * 46, y = 160 + Math.sin(a) * 46;
          return <rect key={i} x={x - 24} y={y - 11} width="48" height="22" rx="11" fill={i % 2 ? C.palm : "#3d9468"} transform={`rotate(${(a * 180) / Math.PI + 90} ${x} ${y})`} />;
        })}
        <circle cx="200" cy="160" r="20" fill="#d9472b" /><circle cx="194" cy="154" r="5" fill="#f08a6e" />
        <circle cx="200" cy="160" r="20" fill="none" stroke={C.clayDark} strokeWidth="2" />
      </Plate>);
    case "kubba":
      return (<Plate>
        {([[160, 135], [240, 135], [200, 205]] as [number, number][]).map(([x, y], i) => (
          <g key={i}><ellipse cx={x} cy={y} rx="40" ry="30" fill={C.goldDark} />{[0, 1, 2, 3, 4].map((k) => <circle key={k} cx={x - 20 + k * 10} cy={y - 8 + (k % 2) * 14} r="3" fill={C.gold} />)}</g>
        ))}
        <path d="M168 205 a32 24 0 0 1 64 0" fill={C.clay} /><path d="M176 205 a24 17 0 0 1 48 0z" fill="#6d3a1c" />
        <circle cx="190" cy="198" r="3" fill={C.cream} /><circle cx="208" cy="194" r="3" fill={C.cream} />
      </Plate>);
    case "tashreeb":
      return (<Plate>
        <path d="M110 150 H290 Q290 232 200 232 Q110 232 110 150Z" fill={C.turq} />
        <ellipse cx="200" cy="150" rx="90" ry="22" fill="#c9792c" />
        <ellipse cx="200" cy="150" rx="82" ry="17" fill="#a8541c" />
        {([[165, 148], [200, 143], [235, 148], [182, 154], [220, 154]] as [number, number][]).map(([x, y], i) => <rect key={i} x={x - 14} y={y - 5} width="28" height="10" rx="4" fill={C.sand} transform={`rotate(${i * 23} ${x} ${y})`} />)}
        {[150, 215, 250, 185].map((x, i) => <circle key={x} cx={x} cy={152 + (i % 2) * 5} r="5" fill={C.wheat} />)}
        <path d="M110 150 H290" stroke={C.gold} strokeWidth="5" />
      </Plate>);
    case "rice":
      return (<Plate>
        <path d="M105 200 Q110 110 200 105 Q290 110 295 200 Q200 222 105 200Z" fill={C.cream} stroke={C.sand} strokeWidth="3" />
        <path d="M120 195 Q125 125 200 120 Q275 125 280 195 Q200 212 120 195Z" fill="#f0d98a" />
        {Array.from({ length: 28 }).map((_, i) => <ellipse key={i} cx={140 + ((i * 37) % 120)} cy={140 + ((i * 53) % 52)} rx="7" ry="2.6" fill={i % 3 ? C.cream : C.wheat} transform={`rotate(${i * 41} ${140 + ((i * 37) % 120)} ${140 + ((i * 53) % 52)})`} />)}
        {[165, 200, 235, 185, 220].map((x, i) => <ellipse key={x} cx={x} cy={150 + (i % 3) * 14} rx="9" ry="4.5" fill={C.clay} transform={`rotate(${i * 30} ${x} ${150 + (i % 3) * 14})`} />)}
        <circle cx="200" cy="130" r="6" fill={C.palm} />
      </Plate>);
    case "samoon":
      return (<Plate>
        {([[155, 160], [245, 160]] as [number, number][]).map(([x, y], i) => (
          <g key={i}><path d={`M${x} ${y - 52} L${x + 40} ${y} L${x} ${y + 52} L${x - 40} ${y}Z`} fill="#d9953c" stroke={C.goldDark} strokeWidth="3" /><path d={`M${x} ${y - 30} L${x + 22} ${y} L${x} ${y + 30} L${x - 22} ${y}Z`} fill="#eab35c" />
            <path d={`M${x - 14} ${y - 4} h28 M${x - 8} ${y + 8} h16`} stroke={C.goldDark} strokeWidth="2" strokeLinecap="round" /></g>
        ))}
        <circle cx="200" cy="228" r="9" fill={C.palm} /><circle cx="226" cy="224" r="7" fill="#d9472b" />
      </Plate>);
    case "kahi":
      return (<Plate>
        {[0, 1, 2, 3].map((i) => <ellipse key={i} cx="200" cy={190 - i * 14} rx={86 - i * 6} ry="20" fill={i % 2 ? "#eab35c" : "#d9953c"} stroke={C.goldDark} strokeWidth="2" />)}
        <ellipse cx="200" cy="134" rx="60" ry="15" fill={C.cream} />
        <path d="M150 134 Q175 160 200 140 T252 138 Q248 168 232 168 Q214 150 200 170 Q184 152 164 168 Q148 160 150 134Z" fill="#8a4a16" opacity="0.9" />
        <ellipse cx="200" cy="128" rx="34" ry="9" fill={C.white} opacity="0.8" />
      </Plate>);
    case "kleicha":
      return (<Plate>
        {([[150, 135], [250, 135], [200, 185], [135, 200], [265, 200]] as [number, number][]).map(([x, y], i) => (
          <g key={i}><circle cx={x} cy={y} r="31" fill="#d9a05a" stroke={C.goldDark} strokeWidth="3" /><polygon points={star(8, x, y, 19, 8)} fill="#ecc382" />
            <circle cx={x} cy={y} r="4" fill={C.clayDark} /></g>
        ))}
        {[180, 222, 200, 160].map((x, i) => <ellipse key={i} cx={x} cy={118 + i * 22} rx="4" ry="2" fill={C.cream} />)}
      </Plate>);
    case "baklava":
      return (<Plate>
        {[0, 1, 2].map((r) => [0, 1, 2].map((k) => {
          const x = 140 + k * 60 + (r % 2) * 30 - 30, y = 110 + r * 46;
          return <g key={`${r}${k}`}><path d={`M${x} ${y - 28} L${x + 30} ${y} L${x} ${y + 28} L${x - 30} ${y}Z`} fill="#d9953c" stroke={C.goldDark} strokeWidth="2.5" /><path d={`M${x} ${y - 16} L${x + 17} ${y} L${x} ${y + 16} L${x - 17} ${y}Z`} fill="#eab35c" /><circle cx={x} cy={y} r="5" fill={C.palm} /></g>;
        }))}
      </Plate>);
    case "tea":
      return (<>
        <rect width="400" height="300" fill="none" />
        <ellipse cx="200" cy="250" rx="108" ry="16" fill="#000" opacity="0.22" />
        <ellipse cx="200" cy="236" rx="100" ry="18" fill={C.cream} stroke={C.gold} strokeWidth="3" />
        <path d="M148 90 H252 Q238 142 230 168 Q226 186 232 232 H168 Q174 186 170 168 Q162 142 148 90Z" fill={C.cream} fillOpacity="0.25" stroke={C.cream} strokeWidth="4" />
        <path d="M156 118 H244 Q236 142 228 168 Q224 188 228 228 H172 Q176 188 172 168 Q164 142 156 118Z" fill="#a8421a" />
        <path d="M160 118 H240" stroke={C.gold} strokeWidth="3" />
        {[0, 1, 2].map((i) => <path key={i} d={`M${176 + i * 24} 78 q-10 -14 0 -26 q10 -12 0 -24`} fill="none" stroke={C.cream} strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" />)}
        {([[100, 246], [300, 244], [118, 262]] as [number, number][]).map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="9" ry="4" fill={C.palm} transform={`rotate(${i * 40} ${x} ${y})`} />)}
      </>);
    case "coffee":
      return (<>
        <ellipse cx="200" cy="262" rx="130" ry="14" fill="#000" opacity="0.22" />
        <path d="M150 108 H210 L226 206 Q228 250 180 252 Q132 250 134 206Z" fill={C.gold} stroke={C.goldDark} strokeWidth="3" />
        <path d="M144 150 H216 M140 188 H220" stroke={C.goldDark} strokeWidth="3" />
        <path d="M164 108 Q180 66 196 108Z" fill={C.goldDark} /><circle cx="180" cy="62" r="7" fill={C.gold} />
        <path d="M212 132 Q268 112 292 80 L282 76 Q262 104 216 118Z" fill={C.gold} stroke={C.goldDark} strokeWidth="2" />
        <path d="M136 124 Q94 134 100 188 Q104 214 138 218" fill="none" stroke={C.goldDark} strokeWidth="9" strokeLinecap="round" />
        {[270, 322].map((x) => <g key={x}><path d={`M${x - 20} 214 H${x + 20} Q${x + 18} 244 ${x} 246 Q${x - 18} 244 ${x - 20} 214Z`} fill={C.cream} stroke={C.gold} strokeWidth="3" /><ellipse cx={x} cy="214" rx="20" ry="5" fill="#5a2e14" /></g>)}
      </>);

    /* ---------- Religions & communities ---------- */
    case "mosque":
      return (<>
        <Moon x={320} y={58} r={20} />
        <rect y="242" width="400" height="58" fill={C.deep} />
        <Minaret x={95} y={244} h={120} /><Minaret x={305} y={244} h={120} />
        <rect x="140" y="196" width="120" height="50" fill={C.sand} />
        <Dome x={200} y={196} w={100} color={C.gold} />
        {[162, 200, 238].map((x) => <path key={x} d={`M${x - 9} 246 v-26 q9 -14 18 0 v26z`} fill={C.lapis} />)}
      </>);
    case "church":
      return (<>
        <circle cx="90" cy="70" r="24" fill={C.gold} opacity="0.9" />
        <rect y="244" width="400" height="56" fill={C.goldDark} opacity="0.65" />
        <rect x="120" y="120" width="160" height="126" fill={C.sand} />
        <path d="M110 120 L200 56 L290 120Z" fill={C.clay} />
        <rect x="196" y="22" width="8" height="36" fill={C.gold} /><rect x="186" y="32" width="28" height="7" fill={C.gold} />
        <path d="M172 246 V190 Q200 156 228 190 V246Z" fill={C.deep} />
        <circle cx="200" cy="138" r="14" fill={C.turq} stroke={C.gold} strokeWidth="3" />
        {[140, 252].map((x) => <path key={x} d={`M${x} 190 v-22 q8 -12 16 0 v22z`} fill={C.lapis} />)}
      </>);
    case "lalish":
      return (<>
        <circle cx="200" cy="96" r="52" fill={C.gold} opacity="0.95" />
        {Array.from({ length: 16 }).map((_, i) => <line key={i} x1="200" y1="96" x2="200" y2="30" stroke={C.cream} strokeOpacity="0.55" strokeWidth="2" transform={`rotate(${i * 22.5} 200 96)`} />)}
        <path d="M0 252 Q110 210 200 236 T400 226 V300 H0Z" fill={C.palm} />
        {([[150, 250, 1], [250, 252, 1.15]] as [number, number, number][]).map(([x, y, s], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
            <rect x="-30" y="-24" width="60" height="26" fill={C.sand} />
            <path d="M-26 -24 L0 -112 L26 -24Z" fill={C.cream} stroke={C.goldDark} strokeWidth="2" />
            {[-16, -8, 0, 8, 16].map((d) => <path key={d} d={`M${d} -24 L${d * 0.15} -108`} stroke={C.goldDark} strokeWidth="1.5" opacity="0.7" />)}
            <circle cx="0" cy="-116" r="4" fill={C.gold} />
          </g>
        ))}
      </>);
    case "mandi":
      return (<>
        <circle cx="300" cy="72" r="26" fill={C.gold} />
        <path d="M0 220 H400" stroke={C.wheat} strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${60 + i * 14} 232 Q${82 + i * 14} ${150 - i * 4} ${180 - i * 6} 100`} fill="none" stroke={C.wheat} strokeWidth="5" strokeLinecap="round" />)}
        {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${340 - i * 14} 232 Q${318 - i * 14} ${150 - i * 4} ${220 + i * 6} 100`} fill="none" stroke={C.wheat} strokeWidth="5" strokeLinecap="round" />)}
        {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M${68 + i * 6} ${190 - i * 20} Q200 ${130 - i * 24} ${332 - i * 6} ${190 - i * 20}`} fill="none" stroke={C.goldDark} strokeWidth="3" opacity="0.6" />)}
        <Waves y={232} />
      </>);
    case "kakai":
      return (<>
        <circle cx="200" cy="150" r="108" fill={C.turq} opacity="0.35" />
        {Array.from({ length: 12 }).map((_, i) => <line key={i} x1="200" y1="150" x2="200" y2="30" stroke={C.gold} strokeWidth="3" transform={`rotate(${i * 30} 200 150)`} opacity="0.6" />)}
        <g transform="rotate(-28 200 160)">
          <ellipse cx="200" cy="214" rx="46" ry="34" fill={C.clay} stroke={C.clayDark} strokeWidth="3" />
          <circle cx="200" cy="214" r="9" fill={C.clayDark} />
          <rect x="195" y="44" width="10" height="150" rx="4" fill={C.sand} />
          <rect x="188" y="30" width="24" height="20" rx="5" fill={C.clayDark} />
          {[84, 112, 140].map((y) => <rect key={y} x="192" y={y} width="16" height="3" fill={C.gold} />)}
          {[0, 1].map((i) => <line key={i} x1={197 + i * 6} y1="44" x2={197 + i * 6} y2="210" stroke={C.ink} strokeOpacity="0.5" />)}
        </g>
      </>);
    case "shrine":
      return (<>
        <circle cx="90" cy="76" r="22" fill={C.gold} />
        <rect y="244" width="400" height="56" fill={C.goldDark} opacity="0.6" />
        <rect x="130" y="170" width="140" height="76" fill={C.sand} />
        <Dome x={200} y={170} w={110} color={C.turq} />
        <path d="M180 246 V204 Q200 182 220 204 V246Z" fill={C.deep} />
        <Palm x={92} y={248} s={1} /><Palm x={316} y={248} s={0.9} />
      </>);
    case "bahai":
      return (<>
        <circle cx="200" cy="112" r="88" fill={C.gold} opacity="0.25" />
        <polygon points={star(9, 200, 112, 78, 36)} fill={C.gold} stroke={C.cream} strokeWidth="3" />
        <polygon points={star(9, 200, 112, 44, 20)} fill={C.lapis} />
        <rect y="236" width="400" height="64" fill={C.palm} />
        {[60, 108, 156, 244, 292, 340].map((x, i) => <g key={x}><circle cx={x} cy={256 + (i % 2) * 12} r="11" fill={C.rose} /><circle cx={x} cy={256 + (i % 2) * 12} r="5" fill="#f2b6c8" /></g>)}
      </>);
    case "zoro":
      return (<>
        <circle cx="200" cy="120" r="84" fill={C.gold} opacity="0.4" />
        <rect y="248" width="400" height="52" fill={C.deep} />
        <rect x="140" y="222" width="120" height="28" fill={C.sand} /><rect x="156" y="198" width="88" height="26" fill={C.wheat} /><rect x="172" y="180" width="56" height="20" fill={C.cream} />
        <path d="M200 176 Q166 140 192 100 Q196 126 212 114 Q236 146 200 176Z" fill="#f08a2a" />
        <path d="M200 174 Q184 150 200 128 Q214 148 200 174Z" fill="#ffd45e" />
        {[-1, 1].map((d) => <path key={d} d={`M${200 + d * 90} 160 q${d * -30} -50 0 -100`} fill="none" stroke={C.cream} strokeWidth="2" opacity="0.5" />)}
      </>);

    case "cave":
      return (<>
        <circle cx="318" cy="70" r="24" fill={C.gold} />
        <path d="M0 300 V120 Q60 80 120 110 Q170 60 240 96 Q320 70 400 130 V300Z" fill={C.clayDark} />
        <path d="M0 300 V170 Q40 140 90 160 Q130 120 200 150 Q270 118 330 150 Q370 140 400 170 V300Z" fill={C.clay} />
        <path d="M120 300 V210 Q120 128 200 128 Q280 128 280 210 V300Z" fill={C.ink} />
        <path d="M150 300 V220 Q150 160 200 160 Q250 160 250 220 V300Z" fill={C.deep} />
        <path d="M158 300 V226 Q158 184 200 184 Q242 184 242 226 V300Z" fill={C.turqLight} opacity="0.14" />
        <path d="M120 210 Q120 128 200 128 Q280 128 280 210" fill="none" stroke={C.sand} strokeWidth="3" opacity="0.55" />
        <ellipse cx="200" cy="262" rx="26" ry="6" fill={C.gold} opacity="0.5" />
        <rect y="268" width="400" height="32" fill={C.goldDark} opacity="0.55" />
      </>);
    case "citadel":
      return (<>
        <Moon x={330} y={56} r={20} />
        <path d="M0 262 Q60 236 120 246 Q200 190 280 246 Q340 232 400 262 V300 H0Z" fill={C.clayDark} />
        <path d="M70 252 Q120 150 200 140 Q280 150 330 252Z" fill={C.clay} />
        <rect x="104" y="150" width="192" height="92" fill={C.sand} />
        {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={104 + i * 22} y="138" width="12" height="14" fill={C.sand} />)}
        <rect x="104" y="196" width="192" height="6" fill={C.wheat} />
        <path d="M178 244 V204 Q200 180 222 204 V244Z" fill={C.deep} />
        <path d="M178 204 Q200 180 222 204" fill="none" stroke={C.gold} strokeWidth="4" />
        {[128, 272].map((x) => <path key={x} d={`M${x - 8} 190 v-18 q8 -12 16 0 v18z`} fill={C.lapis} />)}
        <rect y="262" width="400" height="38" fill={C.goldDark} opacity="0.55" />
      </>);
    case "minaret":
      return (<>
        <circle cx="86" cy="76" r="26" fill={C.gold} />
        <rect y="246" width="400" height="54" fill={C.goldDark} opacity="0.65" />
        <path d="M168 248 L176 214 H224 L232 248Z" fill={C.clay} />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <path d={`M${178 + i * 4} ${214 - i * 40} H${222 - i * 4} L${220 - i * 4 - 2} ${176 - i * 40} H${180 + i * 4 + 2}Z`} fill={i % 2 ? C.wheat : C.sand} />
            <rect x={174 + i * 4} y={176 - i * 40} width={52 - i * 8} height="5" fill={C.clayDark} />
          </g>
        ))}
        <path d="M188 60 Q200 40 212 60Z" fill={C.turq} />
        <path d="M200 40 v-12" stroke={C.gold} strokeWidth="3" />
        {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${180 + (i % 2) * 40} ${206 - i * 26} l${i % 2 ? -40 : 40} -22`} stroke={C.clayDark} strokeWidth="2.5" fill="none" opacity="0.6" />)}
        <Palm x={310} y={250} s={0.9} /><Palm x={70} y={252} s={0.7} />
      </>);
    case "marsh":
      return (<>
        <circle cx="300" cy="96" r="44" fill={C.gold} opacity="0.9" />
        <rect y="176" width="400" height="124" fill={C.turq} />
        <rect y="176" width="400" height="6" fill={C.turqLight} opacity="0.7" />
        {[0, 1, 2, 3].map((i) => <path key={i} d={`M-10 ${196 + i * 22} q25 -9 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t30 0`} fill="none" stroke={C.cream} strokeOpacity={0.35} strokeWidth="2" />)}
        {[40, 62, 84, 330, 352, 372].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 190 Q${x + (i % 2 ? 6 : -6)} 130 ${x + (i % 2 ? 14 : -10)} ${100 + (i % 3) * 12}`} stroke={C.palm} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <ellipse cx={x + (i % 2 ? 14 : -10)} cy={96 + (i % 3) * 12} rx="3.5" ry="9" fill={C.clayDark} />
          </g>
        ))}
        <path d="M120 232 Q200 262 290 232 L276 246 Q200 270 134 246Z" fill={C.clayDark} />
        <path d="M120 232 Q200 262 290 232" fill="none" stroke={C.gold} strokeWidth="3" />
        <path d="M205 236 V196" stroke={C.clayDark} strokeWidth="3" />
        <path d="M205 196 L246 228 H205Z" fill={C.cream} />
        <path d="M150 236 q10 -22 24 -26 l-4 10 q-8 4 -12 16z" fill={C.sand} opacity="0.9" />
      </>);
    case "lake":
      return (<>
        <circle cx="86" cy="74" r="26" fill={C.gold} />
        <path d="M0 190 L70 120 L120 160 L190 96 L270 168 L330 124 L400 190 V300 H0Z" fill={C.palm} />
        <path d="M190 96 L168 124 L186 118 L196 134 L206 116 L222 126Z" fill={C.cream} opacity="0.85" />
        <path d="M0 190 L70 120 L120 160 L190 96 L270 168 L330 124 L400 190" fill="none" stroke={C.deep} strokeWidth="2" opacity="0.25" />
        <rect y="186" width="400" height="114" fill={C.turq} />
        <path d="M190 190 L172 300 H300 L214 190Z" fill={C.turqLight} opacity="0.25" />
        {[0, 1, 2, 3].map((i) => <path key={i} d={`M-10 ${204 + i * 22} q25 -9 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t30 0`} fill="none" stroke={C.cream} strokeOpacity={0.4} strokeWidth="2" />)}
        <path d="M290 250 l30 -16 l30 16 l-30 6z" fill={C.cream} /><path d="M320 234 v-30 l18 26z" fill={C.sand} />
      </>);
    case "waterfall":
      return (<>
        <path d="M0 0 H400 V300 H0Z" fill="none" />
        <path d="M0 300 V70 Q60 40 110 70 L132 300Z" fill={C.palm} />
        <path d="M400 300 V54 Q340 26 290 62 L268 300Z" fill={C.palm} />
        <path d="M0 300 V150 Q50 120 100 150 L116 300Z" fill="#1f5c43" />
        <path d="M400 300 V140 Q350 110 300 144 L286 300Z" fill="#1f5c43" />
        <path d="M150 20 H252 L270 300 H134Z" fill={C.cream} opacity="0.92" />
        {[162, 184, 206, 228, 246].map((x, i) => <path key={x} d={`M${x} ${30 + (i % 2) * 14} V${250 - (i % 3) * 16}`} stroke={C.turqLight} strokeWidth="5" strokeLinecap="round" opacity="0.8" />)}
        <ellipse cx="202" cy="276" rx="90" ry="16" fill={C.turqLight} opacity="0.7" />
        <ellipse cx="202" cy="280" rx="64" ry="9" fill={C.cream} opacity="0.85" />
        <rect y="284" width="400" height="16" fill={C.turq} />
      </>);
    case "mountain":
      return (<>
        <circle cx="312" cy="70" r="28" fill={C.gold} />
        <path d="M0 220 L80 120 L130 170 L220 60 L310 170 L350 130 L400 200 V300 H0Z" fill={C.lapis} />
        <path d="M220 60 L184 106 L206 100 L218 122 L232 98 L254 108Z" fill={C.cream} />
        <path d="M80 120 L62 142 L80 138 L92 150Z" fill={C.cream} opacity="0.9" />
        <path d="M0 250 L90 176 L170 232 L260 164 L340 226 L400 190 V300 H0Z" fill={C.turq} opacity="0.95" />
        <path d="M0 270 Q100 240 200 262 T400 250 V300 H0Z" fill={C.palm} />
        {[56, 96, 330, 366].map((x, i) => <path key={x} d={`M${x} ${272 - (i % 2) * 4} l9 -26 l9 26z`} fill="#1f5c43" />)}
      </>);
    case "market":
      return (<>
        <rect y="236" width="400" height="64" fill={C.goldDark} opacity="0.6" />
        <path d="M0 74 H400 V90 H0Z" fill={C.deep} />
        {Array.from({ length: 10 }).map((_, i) => <path key={i} d={`M${i * 40} 90 h40 q-20 22 -40 0z`} fill={i % 2 ? C.clay : C.gold} />)}
        <path d="M0 78 Q50 60 100 74 T200 74 T300 74 T400 74" fill="none" stroke={C.gold} strokeWidth="3" />
        {[54, 150, 250, 346].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 118 v22`} stroke={C.goldDark} strokeWidth="2" />
            <path d={`M${x - 14} 150 q14 22 28 0 q-14 -26 -28 0z`} fill={i % 2 ? C.turq : C.clay} stroke={C.gold} strokeWidth="2" />
            <rect x={x - 3} y="136" width="6" height="8" fill={C.gold} />
          </g>
        ))}
        <rect x="40" y="196" width="120" height="48" fill={C.clayDark} /><rect x="240" y="196" width="120" height="48" fill={C.clayDark} />
        {[52, 78, 104, 130, 252, 278, 304, 330].map((x, i) => <rect key={x} x={x} y="176" width="18" height="22" rx="3" fill={[C.turq, C.gold, C.rose, C.wheat][i % 4]} />)}
        <rect x="32" y="192" width="136" height="8" fill={C.goldDark} /><rect x="232" y="192" width="136" height="8" fill={C.goldDark} />
        <path d="M170 244 V160 Q200 128 230 160 V244Z" fill={C.deep} opacity="0.7" />
      </>);
  }
}

/** Decorative illustration with a text alternative. `tone` sets the sky colour for non-food scenes. */
export function Artwork({ kind, label, tone = "lapis", className = "" }: { kind: ArtKind; label: string; tone?: Tone; className?: string }) {
  const id = useId().replace(/:/g, "");
  const food = ["masgouf", "dolma", "kubba", "tashreeb", "rice", "samoon", "kahi", "kleicha", "baklava", "tea", "coffee"].includes(kind);
  const [a, b] = food ? FOOD_BG : SKY[tone];
  return (
    <div className={`zoom-img relative aspect-[4/3] w-full overflow-hidden bg-lapis ${className}`}>
      <svg viewBox="0 0 400 300" role={label ? "img" : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true} className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient>
          <pattern id={`p${id}`} width="32" height="32" patternUnits="userSpaceOnUse"><path d="M16 3 L29 16 L16 29 L3 16Z" fill="none" stroke="#fff" strokeOpacity="0.14" strokeWidth="1.2" /></pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#g${id})`} />
        <rect width="400" height="300" fill={`url(#p${id})`} />
        <Scene kind={kind} />
      </svg>
    </div>
  );
}
