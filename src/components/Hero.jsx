import { motion } from 'framer-motion'
import profilePhoto from '../assets/profile-photo.jpeg'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiTerminal, FiStar } from 'react-icons/fi'
import { SiPython, SiDocker, SiSelenium, SiTensorflow, SiPytorch, SiPandas, SiScikitlearn } from 'react-icons/si'
import { FaAws, FaMicrosoft } from 'react-icons/fa6'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const devopsStack = [
  { icon: SiDocker, color: '#2496ED', glow: 'rgba(36, 150, 237, 0.4)', name: 'Docker' },
  { icon: FaAws, color: '#FF9900', glow: 'rgba(255, 153, 0, 0.4)', name: 'AWS' },
  { icon: FaMicrosoft, color: '#0078D4', glow: 'rgba(0, 120, 212, 0.4)', name: 'Azure' },
  { icon: SiSelenium, color: '#43B02A', glow: 'rgba(67, 176, 42, 0.4)', name: 'Selenium' },
]

const aiStack = [
  { icon: SiPython, color: '#3776AB', glow: 'rgba(55, 118, 171, 0.4)', name: 'Python' },
  { icon: SiTensorflow, color: '#FF6F00', glow: 'rgba(255, 111, 0, 0.4)', name: 'TensorFlow' },
  { icon: SiPytorch, color: '#EE4C2C', glow: 'rgba(238, 76, 44, 0.4)', name: 'PyTorch' },
  { icon: SiPandas, color: '#150458', glow: 'rgba(21, 4, 88, 0.4)', name: 'Pandas' },
  { icon: SiScikitlearn, color: '#F7931E', glow: 'rgba(247, 147, 30, 0.4)', name: 'Scikit' },
]

const TechIcon = ({ icon: Icon, color, glow, name }) => (
  <div className="group relative flex flex-col items-center gap-1.5">
    <div
      className="p-2 sm:p-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 group-hover:border-pink-300/25 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300"
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 18px ${glow}`}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      <Icon className="w-4 h-4 sm:w-6 sm:h-6" style={{ color }} />
    </div>
    <span className="text-[8px] sm:text-xs text-pink-200/40 group-hover:text-accent-pink transition-colors font-mono">{name}</span>
  </div>
)

const Sparkle = ({ className, delay = 0, size = 12 }) => (
  <motion.div
    className={`absolute pointer-events-none hidden sm:block ${className}`}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], rotate: [0, 180, 360] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: 'easeInOut' }}
  >
    <FiStar size={size} className="text-accent-pink/60" fill="currentColor" />
  </motion.div>
)

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations.hero[lang]

  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-8 bg-section-a overflow-hidden min-h-dvh">
      <Sparkle className="top-28 left-[10%]" delay={0} size={10} />
      <Sparkle className="top-40 right-[15%]" delay={1.5} size={14} />
      <Sparkle className="top-[60%] left-[5%]" delay={0.8} size={8} />
      <Sparkle className="top-32 left-[45%]" delay={2.2} size={11} />
      <Sparkle className="top-[70%] right-[8%]" delay={0.4} size={9} />
      <Sparkle className="bottom-40 left-[20%]" delay={1.8} size={12} />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Mobile photo */}
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="flex justify-center w-full lg:hidden">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-pink/25 via-accent-purple/15 to-accent-blue/25 rounded-full blur-2xl animate-pulse-slow" />
            <img src={profilePhoto} alt="María Fernanda" className="relative w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-full shadow-2xl ring-[3px] ring-accent-pink/20 ring-offset-3 ring-offset-dark-900" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs sm:text-sm text-accent-pink mb-4 sm:mb-6 font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
            {t.badge}
          </motion.div>

          <p className="text-sm sm:text-xl text-accent-pink/60 font-mono mb-1 sm:mb-2">{t.greeting}</p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-7xl font-bold leading-tight mb-2 sm:mb-4">
            <span className="gradient-text glow-text">María Fernanda</span>
          </h1>

          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 justify-center lg:justify-start">
            <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-accent-pink/50 to-transparent" />
            <h2 className="text-base sm:text-2xl md:text-3xl text-pink-200/60 font-light">
              <span className="text-accent-purple font-medium">{t.subtitle1}</span>
              {' '}&{' '}
              <span className="text-accent-pink font-medium">{t.subtitle2}</span>
            </h2>
          </div>

          <p className="text-pink-100/40 text-sm sm:text-lg md:text-xl leading-relaxed max-w-lg mb-6 sm:mb-8 mx-auto lg:mx-0">
            {t.bio}{' '}
            <span className="text-accent-purple/80">{t.bioHighlight}</span>{' '}
            {t.bioEnd}
          </p>

          <div className="flex flex-wrap gap-3 mb-6 sm:mb-8 justify-center lg:justify-start">
            <a href="#projects" className="group px-5 sm:px-7 py-2.5 sm:py-3.5 bg-gradient-to-r from-accent-pink/90 to-accent-purple/90 rounded-lg font-semibold text-white text-sm sm:text-base hover:shadow-lg hover:shadow-pink-400/25 transition-all duration-300 hover:-translate-y-0.5">
              {t.cta1} <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="px-5 sm:px-7 py-2.5 sm:py-3.5 border border-pink-300/20 rounded-lg text-pink-200/60 font-semibold text-sm sm:text-base hover:border-accent-pink/40 hover:text-accent-pink transition-all duration-300 hover:-translate-y-0.5">
              {t.cta2}
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            {[
              { icon: FiGithub, href: 'https://github.com/Mariagato', label: 'GitHub' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mariafernandahurtadogomez/', label: 'LinkedIn' },
              { icon: FiMail, href: 'mailto:marishg32@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg glass text-pink-200/40 hover:text-accent-pink hover:scale-110 transition-all duration-200" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Desktop photo + terminal */}
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:flex flex-col items-center w-full">
          <div className="relative mb-36">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent-pink/25 via-accent-purple/15 to-accent-blue/25 rounded-full blur-2xl animate-pulse-slow" />
            <img src={profilePhoto} alt="María Fernanda" className="relative w-72 h-72 object-cover rounded-full shadow-2xl ring-[3px] ring-accent-pink/20 ring-offset-4 ring-offset-dark-900" />
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-[300px] glass-strong rounded-xl p-4 glow-pink z-10">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-rose/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-green/60" />
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <FiTerminal size={11} className="text-accent-green" />
                  <span className="text-[11px] font-mono text-accent-green">currently_building.sh</span>
                </div>
              </div>
              <ul className="space-y-1.5">
                {t.building.map((item, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.15 }} className="flex items-start gap-2 text-[13px] font-mono">
                    <span className="text-accent-pink mt-0.5">▸</span>
                    <span className="text-pink-100/55">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile terminal */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="lg:hidden w-full max-w-sm mx-auto mt-6 glass-strong rounded-xl p-3 glow-pink">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1.5"><span className="w-2 h-2 rounded-full bg-accent-rose/60" /><span className="w-2 h-2 rounded-full bg-yellow-400/60" /><span className="w-2 h-2 rounded-full bg-accent-green/60" /></div>
          <div className="flex items-center gap-1.5 ml-2"><FiTerminal size={10} className="text-accent-green" /><span className="text-[10px] font-mono text-accent-green">currently_building.sh</span></div>
        </div>
        <ul className="space-y-1.5">
          {t.building.map((item, i) => (
            <motion.li key={`m-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 + i * 0.15 }} className="flex items-start gap-2 text-[11px] font-mono">
              <span className="text-accent-pink mt-0.5">▸</span><span className="text-pink-100/55">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Tech stack bar */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }} className="max-w-6xl mx-auto w-full mt-8 sm:mt-14 lg:mt-16">
        <div className="glass rounded-xl sm:rounded-2xl px-4 sm:px-8 lg:px-10 py-4 sm:py-7 lg:py-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 lg:gap-12">
          <div className="flex-1 w-full">
            <span className="text-[10px] sm:text-sm font-mono text-accent-purple mb-2 sm:mb-4 block tracking-wider uppercase font-semibold">{t.techAI}</span>
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 flex-wrap">{aiStack.map((tech) => <TechIcon key={tech.name} {...tech} />)}</div>
          </div>
          <div className="hidden sm:block w-px h-16 lg:h-20 bg-pink-300/10" />
          <div className="w-full sm:hidden h-px bg-pink-300/10" />
          <div className="flex-1 w-full">
            <span className="text-[10px] sm:text-sm font-mono text-accent-pink mb-2 sm:mb-4 block tracking-wider uppercase font-semibold">{t.techDevops}</span>
            <div className="flex items-center gap-2 sm:gap-4 lg:gap-5 flex-wrap">{devopsStack.map((tech) => <TechIcon key={tech.name} {...tech} />)}</div>
          </div>
        </div>
      </motion.div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="mt-6 sm:mt-10">
        <a href="#about" className="text-pink-300/30 hover:text-accent-pink transition-colors"><FiArrowDown size={22} /></a>
      </motion.div>
    </section>
  )
}
