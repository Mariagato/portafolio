import { useEffect, useState } from 'react'

function Pikachu({ f }) {
  const y = f === 0 ? 0 : -1
  return (
    <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
      <path d="M12,18 L8,2 L18,14Z" fill="#FDD835" />
      <path d="M10,8 L8,2 L14,10Z" fill="#222" />
      <path d="M40,18 L44,2 L34,14Z" fill="#FDD835" />
      <path d="M42,8 L44,2 L38,10Z" fill="#222" />
      <ellipse cx="26" cy="22" rx="14" ry="12" fill="#FDD835" />
      <ellipse cx="20" cy="20" rx="2.5" ry="3" fill="#222" />
      <ellipse cx="32" cy="20" rx="2.5" ry="3" fill="#222" />
      <circle cx="19" cy="19" r="1" fill="#fff" />
      <circle cx="31" cy="19" r="1" fill="#fff" />
      <circle cx="14" cy="25" r="3.5" fill="#E65100" opacity="0.45" />
      <circle cx="38" cy="25" r="3.5" fill="#E65100" opacity="0.45" />
      <path d="M23,27 Q26,30 29,27" stroke="#222" strokeWidth="0.8" fill="none" />
      <ellipse cx="26" cy="25" rx="1" ry="0.7" fill="#222" />
      <ellipse cx="26" cy="38" rx="11" ry="9" fill="#FDD835" />
      <ellipse cx="26" cy="39" rx="6" ry="5" fill="#FFF9C4" />
      <ellipse cx="14" cy="35" rx="3" ry="5" fill="#FDD835" transform="rotate(-15 14 35)" />
      <ellipse cx="38" cy="35" rx="3" ry="5" fill="#FDD835" transform="rotate(15 38 35)" />
      <ellipse cx={20 + (f === 0 ? 1 : -1)} cy={47 + y} rx="4" ry="2.5" fill="#C8A415" />
      <ellipse cx={32 - (f === 0 ? 1 : -1)} cy={47 - y} rx="4" ry="2.5" fill="#C8A415" />
      <path d="M38,30 L44,22 L42,28 L48,18 L44,26 L46,20" stroke="#FDD835" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44,22 L42,28 L48,18" fill="#C8A415" />
    </svg>
  )
}

function Eevee({ f }) {
  const y = f === 0 ? 0 : -1
  return (
    <svg width="36" height="36" viewBox="0 0 52 52" fill="none">
      <ellipse cx="12" cy="10" rx="6" ry="10" fill="#B87741" transform="rotate(-15 12 10)" />
      <ellipse cx="12" cy="10" rx="4" ry="7" fill="#FFCC80" transform="rotate(-15 12 10)" />
      <ellipse cx="40" cy="10" rx="6" ry="10" fill="#B87741" transform="rotate(15 40 10)" />
      <ellipse cx="40" cy="10" rx="4" ry="7" fill="#FFCC80" transform="rotate(15 40 10)" />
      <ellipse cx="26" cy="22" rx="13" ry="11" fill="#B87741" />
      <ellipse cx="20" cy="21" rx="2.8" ry="3.2" fill="#222" />
      <ellipse cx="32" cy="21" rx="2.8" ry="3.2" fill="#222" />
      <circle cx="19" cy="20" r="1.1" fill="#fff" />
      <circle cx="31" cy="20" r="1.1" fill="#fff" />
      <ellipse cx="26" cy="25" rx="1.5" ry="1" fill="#222" />
      <path d="M24,27 Q26,29 28,27" stroke="#222" strokeWidth="0.6" fill="none" />
      <ellipse cx="26" cy="33" rx="14" ry="6" fill="#FFF8E1" />
      <ellipse cx="26" cy="40" rx="10" ry="8" fill="#B87741" />
      <ellipse cx={19 + (f === 0 ? 1 : -1)} cy={47 + y} rx="4" ry="2.5" fill="#8B5E34" />
      <ellipse cx={33 - (f === 0 ? 1 : -1)} cy={47 - y} rx="4" ry="2.5" fill="#8B5E34" />
      <ellipse cx="42" cy="36" rx="6" ry="4" fill="#FFF8E1" transform="rotate(-20 42 36)" />
    </svg>
  )
}

function Gengar({ f }) {
  const y = f === 0 ? 0 : -1
  return (
    <svg width="38" height="36" viewBox="0 0 56 52" fill="none">
      <path d="M10,18 L4,4 L18,14Z" fill="#5C3D7A" />
      <path d="M46,18 L52,4 L38,14Z" fill="#5C3D7A" />
      <ellipse cx="28" cy="30" rx="20" ry="18" fill="#6A4C93" />
      <ellipse cx="28" cy="24" rx="16" ry="13" fill="#7B5EA7" />
      <ellipse cx="20" cy="22" rx="4.5" ry="4" fill="#fff" />
      <ellipse cx="36" cy="22" rx="4.5" ry="4" fill="#fff" />
      <ellipse cx="21" cy="22" rx="3" ry="3.2" fill="#E53935" />
      <ellipse cx="37" cy="22" rx="3" ry="3.2" fill="#E53935" />
      <circle cx="20" cy="21" r="1.5" fill="#222" />
      <circle cx="36" cy="21" r="1.5" fill="#222" />
      <circle cx="19.3" cy="20.3" r="0.7" fill="#fff" />
      <circle cx="35.3" cy="20.3" r="0.7" fill="#fff" />
      <path d="M16,30 Q22,38 28,30 Q34,38 40,30" fill="#222" />
      <path d="M16,30 L19,33 L22,30 L25,33 L28,30 L31,33 L34,30 L37,33 L40,30" fill="#fff" />
      <path d="M8,28 L3,24 L6,30 L2,30 L8,34Z" fill="#5C3D7A" />
      <path d="M48,28 L53,24 L50,30 L54,30 L48,34Z" fill="#5C3D7A" />
      <ellipse cx={21 + (f === 0 ? 1 : -1)} cy={47 + y} rx="5" ry="2.5" fill="#5C3D7A" />
      <ellipse cx={35 - (f === 0 ? 1 : -1)} cy={47 - y} rx="5" ry="2.5" fill="#5C3D7A" />
    </svg>
  )
}

function Snorlax({ f }) {
  const y = f === 0 ? 0 : -0.5
  return (
    <svg width="40" height="38" viewBox="0 0 60 56" fill="none">
      <ellipse cx="14" cy="10" rx="5" ry="4" fill="#1A4A5E" />
      <ellipse cx="46" cy="10" rx="5" ry="4" fill="#1A4A5E" />
      <ellipse cx="30" cy="16" rx="16" ry="12" fill="#1A4A5E" />
      <ellipse cx="30" cy="18" rx="12" ry="9" fill="#D4C5A9" />
      <path d="M21,16 Q24,14 27,16" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M33,16 Q36,14 39,16" stroke="#222" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="30" cy="19" rx="1.2" ry="0.8" fill="#222" />
      <path d="M25,22 Q30,26 35,22" stroke="#222" strokeWidth="0.8" fill="none" />
      <ellipse cx="30" cy="38" rx="22" ry="16" fill="#1A4A5E" />
      <ellipse cx="30" cy="38" rx="15" ry="12" fill="#D4C5A9" />
      <path d="M22,34 Q30,30 38,34" stroke="#BDB398" strokeWidth="0.8" fill="none" />
      <path d="M24,38 Q30,35 36,38" stroke="#BDB398" strokeWidth="0.8" fill="none" />
      <ellipse cx="8" cy="34" rx="5" ry="7" fill="#1A4A5E" transform="rotate(-15 8 34)" />
      <ellipse cx="52" cy="34" rx="5" ry="7" fill="#1A4A5E" transform="rotate(15 52 34)" />
      <circle cx="5" cy="29" r="1.2" fill="#D4C5A9" />
      <circle cx="7" cy="28" r="1.2" fill="#D4C5A9" />
      <circle cx="53" cy="28" r="1.2" fill="#D4C5A9" />
      <circle cx="55" cy="29" r="1.2" fill="#D4C5A9" />
      <ellipse cx={22 + (f === 0 ? 0.5 : -0.5)} cy={52 + y} rx="6" ry="3" fill="#1A4A5E" />
      <ellipse cx={38 - (f === 0 ? 0.5 : -0.5)} cy={52 - y} rx="6" ry="3" fill="#1A4A5E" />
      <ellipse cx={22 + (f === 0 ? 0.5 : -0.5)} cy={52 + y} rx="4" ry="2" fill="#D4C5A9" />
      <ellipse cx={38 - (f === 0 ? 0.5 : -0.5)} cy={52 - y} rx="4" ry="2" fill="#D4C5A9" />
    </svg>
  )
}

const pokeComponents = [Pikachu, Eevee, Gengar, Snorlax]

export default function RunningPokemon() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setFrame(f => (f + 1) % 2), 280)
    return () => clearInterval(interval)
  }, [])

  const sequence = []
  for (let i = 0; i < 20; i++) {
    sequence.push(pokeComponents[i % pokeComponents.length])
  }

  return (
    <div className="w-full overflow-hidden py-2 opacity-40 hover:opacity-70 transition-opacity duration-500" aria-hidden="true">
      <div className="pokemon-marquee flex items-end gap-6">
        {sequence.map((Poke, i) => (
          <div
            key={`a-${i}`}
            className="shrink-0"
            style={{ animation: `pokebounce 0.5s ease-in-out ${i * 0.07}s infinite` }}
          >
            <Poke f={frame} />
          </div>
        ))}
        {sequence.map((Poke, i) => (
          <div
            key={`b-${i}`}
            className="shrink-0"
            style={{ animation: `pokebounce 0.5s ease-in-out ${i * 0.07}s infinite` }}
          >
            <Poke f={frame} />
          </div>
        ))}
      </div>
    </div>
  )
}
