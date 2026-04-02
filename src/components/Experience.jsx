import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiServer, FiGlobe, FiBookOpen, FiCode } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const meta = [
  { icon: FiServer, color: '#c084fc' },
  { icon: FiCode, color: '#67e8f9' },
  { icon: FiGlobe, color: '#6ee7b7' },
  { icon: FiBookOpen, color: '#f9a8d4' },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { lang } = useLanguage()
  const t = translations.experience[lang]

  return (
    <section id="experience" className="py-24 px-6 relative bg-section-b section-divider">
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-3"><span className="gradient-text">{t.title}</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-pink via-accent-green to-accent-purple opacity-20" />
          <div className="space-y-12">
            {t.items.map((exp, i) => {
              const m = meta[i]
              return (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }} className="relative pl-16">
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 bg-dark-900 flex items-center justify-center" style={{ borderColor: m.color }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                  </div>
                  <div className="glass rounded-2xl p-6 hover:glow-pink transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <m.icon size={20} style={{ color: m.color }} />
                      <h3 className="text-lg font-bold text-pink-50">{exp.role}</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="text-sm text-accent-pink font-medium">{exp.company}</span>
                      <span className="text-sm text-pink-300/20">•</span>
                      <span className="text-sm text-pink-200/30">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-sm text-pink-100/40 leading-relaxed flex gap-2">
                          <span className="text-accent-pink/40 mt-1 shrink-0">▹</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
