import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiTerminal, FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi'
import avatar from '../avatar.png'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const icons = [FiTerminal, FiCpu, FiDatabase, FiGlobe]
const colors = ['#c084fc', '#f9a8d4', '#67e8f9', '#6ee7b7']

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const { lang } = useLanguage()
  const t = translations.about[lang]

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 relative bg-section-b section-divider">
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-3"><span className="gradient-text">{t.title}</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full mx-auto" />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-accent-pink/20 via-accent-purple/15 to-accent-blue/20 rounded-full blur-2xl animate-pulse-slow" />
            <img src={avatar} alt="María Fernanda avatar" className="relative w-40 h-44 sm:w-48 sm:h-52 object-contain object-bottom drop-shadow-2xl" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }} className="max-w-2xl mx-auto text-center space-y-5 mb-16">
          <p className="text-pink-100/50 text-base sm:text-lg leading-relaxed">{t.p1}</p>
          <p className="text-pink-100/50 text-base sm:text-lg leading-relaxed">
            {t.p2pre} <span className="text-accent-cyan font-medium">{t.p2highlight}</span> {t.p2post}
          </p>
          <p className="text-pink-100/50 text-base sm:text-lg leading-relaxed">
            {t.p3pre} <span className="text-accent-purple font-semibold">{t.p3h1}</span> {t.p3mid}{' '}
            <span className="text-accent-green font-semibold">{t.p3h2}</span>{t.p3post}
          </p>
          {t.p4 && <p className="text-pink-200/30 italic text-base sm:text-lg">{t.p4}</p>}
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.cards.map(({ label, desc }, i) => {
            const Icon = icons[i]
            const color = colors[i]
            return (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} className="glass rounded-2xl p-5 sm:p-6 hover:glow-pink transition-all duration-300 group text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110" style={{ backgroundColor: `${color}15` }}>
                  <Icon size={24} style={{ color }} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-pink-50 mb-1">{label}</h3>
                <p className="text-xs sm:text-sm text-pink-200/30">{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
