import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiBarChart2, FiCpu, FiCloud, FiActivity, FiLayers } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const projectsMeta = [
  { tech: ['Python', 'Scikit-learn', 'OpenCV', 'ML', 'Segmentation'], icon: FiCpu, color: 'accent-purple', github: 'https://github.com/Mariagato' },
  { tech: ['Python', 'Deep Learning', 'Computer Vision', 'MediaPipe'], icon: FiActivity, color: 'accent-green', github: 'https://github.com/Mariagato', demo: 'https://huggingface.co/spaces/mariahurtadogomez/SIGNAL-LANG' },
  { tech: ['Python', 'TensorFlow', 'Object Detection', 'CNN'], icon: FiLayers, color: 'accent-pink', github: 'https://github.com/Mariagato', demo: 'https://importprogrammer-ods-classifier.streamlit.app/' },
]

const colorMap = {
  'accent-purple': { bg: 'rgba(192, 132, 252, 0.08)', text: '#c084fc', border: 'rgba(192, 132, 252, 0.18)' },
  'accent-pink': { bg: 'rgba(249, 168, 212, 0.08)', text: '#f9a8d4', border: 'rgba(249, 168, 212, 0.18)' },
  'accent-green': { bg: 'rgba(110, 231, 183, 0.08)', text: '#6ee7b7', border: 'rgba(110, 231, 183, 0.18)' },
  'accent-blue': { bg: 'rgba(165, 180, 252, 0.08)', text: '#a5b4fc', border: 'rgba(165, 180, 252, 0.18)' },
  'accent-cyan': { bg: 'rgba(103, 232, 249, 0.08)', text: '#67e8f9', border: 'rgba(103, 232, 249, 0.18)' },
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const { lang } = useLanguage()
  const t = translations.projects[lang]

  return (
    <section id="projects" className="py-24 px-6 relative bg-section-c bg-sparkle section-divider">
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-3"><span className="gradient-text">{t.title}</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full mb-4" />
          <p className="text-pink-100/40 mb-12 max-w-xl text-base">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsMeta.map((meta, i) => {
            const item = t.items[i]
            const colors = colorMap[meta.color]
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }} className="glass rounded-2xl p-6 hover:glow-pink transition-all duration-300 group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl" style={{ backgroundColor: colors.bg }}><meta.icon size={24} style={{ color: colors.text }} /></div>
                  <div className="flex gap-1">
                    {meta.demo && <a href={meta.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-pink-200/30 hover:text-accent-pink hover:bg-white/5 transition-all" aria-label="View demo"><FiExternalLink size={20} /></a>}
                    <a href={meta.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-pink-200/30 hover:text-accent-pink hover:bg-white/5 transition-all" aria-label="View source"><FiGithub size={20} /></a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-pink-50 mb-2 group-hover:text-accent-pink transition-colors">{item.title}</h3>
                <p className="text-sm text-pink-100/40 leading-relaxed mb-4 flex-grow">{item.description}</p>
                <div className="px-3 py-2 rounded-xl mb-4 text-xs" style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}>
                  <span style={{ color: colors.text }}>↗ </span><span className="text-pink-100/50">{item.impact}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meta.tech.map((t) => <span key={t} className="px-2.5 py-1 rounded-md bg-dark-800/60 text-xs text-pink-200/40 border border-pink-300/8 font-medium">{t}</span>)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
