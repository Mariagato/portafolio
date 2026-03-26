export default function PixelAvatar({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1e22" />
          <stop offset="100%" stopColor="#1a1218" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fce8da" />
          <stop offset="100%" stopColor="#f5daca" />
        </linearGradient>
        <linearGradient id="laptopGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#d0d4dc" />
          <stop offset="100%" stopColor="#b8bcc4" />
        </linearGradient>
        <linearGradient id="laptopEdge" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#a8acb4" />
          <stop offset="100%" stopColor="#909498" />
        </linearGradient>
        <radialGradient id="irisL" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#d4a040" />
          <stop offset="40%" stopColor="#c08030" />
          <stop offset="100%" stopColor="#885820" />
        </radialGradient>
        <radialGradient id="irisR" cx="45%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#d4a040" />
          <stop offset="40%" stopColor="#c08030" />
          <stop offset="100%" stopColor="#885820" />
        </radialGradient>
        <radialGradient id="blushL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0a0a0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f0a0a0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blushR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0a0a0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f0a0a0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="clothGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#1a1a28" />
          <stop offset="100%" stopColor="#101018" />
        </linearGradient>
      </defs>

      {/* Hair back - long sides */}
      <ellipse cx="100" cy="88" rx="72" ry="78" fill="url(#hairGrad)" />
      {/* Hair extensions down sides */}
      <path d="M32 85 Q28 120 30 150 Q32 165 40 170 Q46 168 44 150 Q42 125 38 95 Z" fill="url(#hairGrad)" />
      <path d="M168 85 Q172 120 170 150 Q168 165 160 170 Q154 168 156 150 Q158 125 162 95 Z" fill="url(#hairGrad)" />

      {/* Neck */}
      <rect x="85" y="140" width="30" height="20" rx="6" fill="url(#skinGrad)" />

      {/* Clothes / shoulders */}
      <ellipse cx="100" cy="195" rx="55" ry="32" fill="url(#clothGrad)" />
      <path d="M50 180 Q60 165 85 160 L115 160 Q140 165 150 180 Q155 190 155 200 L45 200 Q45 190 50 180 Z" fill="url(#clothGrad)" />

      {/* Face */}
      <ellipse cx="100" cy="105" rx="52" ry="55" fill="url(#skinGrad)" />

      {/* Blush */}
      <ellipse cx="64" cy="120" rx="12" ry="8" fill="url(#blushL)" />
      <ellipse cx="136" cy="120" rx="12" ry="8" fill="url(#blushR)" />

      {/* Left eye */}
      <ellipse cx="78" cy="108" rx="14" ry="15" fill="white" />
      <ellipse cx="79" cy="109" rx="10" ry="11" fill="url(#irisL)" />
      <circle cx="79" cy="109" r="5.5" fill="#1a1018" />
      <circle cx="75" cy="105" r="3" fill="white" opacity="0.9" />
      <circle cx="83" cy="113" r="1.5" fill="white" opacity="0.5" />
      {/* Left eyelashes */}
      <path d="M64 100 Q68 96 72 98" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 97 Q72 93 77 96" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M74 95 Q80 92 85 95" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M82 95 Q87 93 91 97" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Left upper lid line */}
      <path d="M64 102 Q78 93 92 102" stroke="#1a1018" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Right eye */}
      <ellipse cx="122" cy="108" rx="14" ry="15" fill="white" />
      <ellipse cx="121" cy="109" rx="10" ry="11" fill="url(#irisR)" />
      <circle cx="121" cy="109" r="5.5" fill="#1a1018" />
      <circle cx="117" cy="105" r="3" fill="white" opacity="0.9" />
      <circle cx="125" cy="113" r="1.5" fill="white" opacity="0.5" />
      {/* Right eyelashes */}
      <path d="M109 97 Q113 93 117 96" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M115 95 Q120 92 126 95" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M123 96 Q128 93 132 97" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M130 98 Q133 96 136 100" stroke="#1a1018" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Right upper lid line */}
      <path d="M108 102 Q122 93 136 102" stroke="#1a1018" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Eyebrows */}
      <path d="M64 92 Q72 86 90 90" stroke="#1a1018" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M136 92 Q128 86 110 90" stroke="#1a1018" strokeWidth="2.8" fill="none" strokeLinecap="round" />

      {/* Hair top */}
      <path
        d="M30 95 Q30 30 100 20 Q170 30 170 95 Q165 75 145 65 Q125 55 100 58 Q75 55 55 65 Q35 75 30 95 Z"
        fill="url(#hairGrad)"
      />
      {/* Hair volume top highlight */}
      <path
        d="M55 70 Q70 42 100 35 Q110 34 105 40 Q85 50 68 75 Z"
        fill="#352830"
        opacity="0.5"
      />

      {/* Bangs / Capul - straight across */}
      <path
        d="M42 90 Q42 68 60 58 Q70 53 80 56 Q75 60 65 72 Q58 82 52 92 Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M52 88 Q55 65 72 55 Q82 50 92 54 Q85 58 76 68 Q68 78 62 90 Z"
        fill="#221820"
      />
      <path
        d="M62 86 Q67 62 85 53 Q95 49 105 53 Q97 56 88 66 Q80 76 74 88 Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M74 85 Q80 62 98 52 Q108 48 118 52 Q110 55 100 65 Q92 75 86 87 Z"
        fill="#221820"
      />
      <path
        d="M86 86 Q92 64 108 54 Q118 50 128 55 Q120 58 112 67 Q104 76 98 88 Z"
        fill="url(#hairGrad)"
      />
      <path
        d="M98 88 Q105 68 120 58 Q130 54 140 60 Q132 63 124 72 Q116 80 110 90 Z"
        fill="#221820"
      />
      <path
        d="M110 90 Q118 72 132 62 Q142 57 152 65 Q145 70 138 78 Q130 86 125 94 Z"
        fill="url(#hairGrad)"
      />

      {/* Laptop */}
      <rect x="22" y="140" width="156" height="44" rx="4" fill="url(#laptopGrad)" stroke="url(#laptopEdge)" strokeWidth="2" />
      {/* Laptop shine */}
      <rect x="30" y="143" width="40" height="3" rx="1.5" fill="white" opacity="0.2" />
      {/* Apple logo */}
      <g transform="translate(100, 162)" fill="#a0a4ac">
        <ellipse cx="0" cy="0" rx="5" ry="6" />
        <path d="M0 -6 Q3 -10 5 -8" stroke="#a0a4ac" strokeWidth="1.5" fill="none" />
      </g>
      {/* Laptop bottom edge */}
      <rect x="18" y="182" width="164" height="6" rx="2" fill="url(#laptopEdge)" />
    </svg>
  )
}
