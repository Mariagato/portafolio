import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const links = [
  { name: 'Email', value: 'mafe.hurtado@example.com', href: 'mailto:mafe.hurtado@example.com', icon: FiMail, color: '#c084fc' },
  { name: 'GitHub', value: 'github.com/mafehurtado', href: 'https://github.com/mafehurtado', icon: FiGithub, color: '#e8e0f0' },
  { name: 'LinkedIn', value: 'María Fernanda Hurtado', href: 'https://linkedin.com/in/mariafernandahurtado', icon: FiLinkedin, color: '#f9a8d4' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const { lang } = useLanguage()
  const t = translations.contact[lang]

  return (
    <section id="contact" className="py-24 px-6 relative bg-section-a section-divider">
      <div className="max-w-3xl mx-auto text-center relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-3"><span className="gradient-text">{t.title}</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full mb-6 mx-auto" />
          <p className="text-pink-100/40 text-lg mb-12 max-w-lg mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {links.map((link, i) => (
            <motion.a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }} className="glass rounded-2xl p-6 hover:glow-pink transition-all duration-300 group flex flex-col items-center gap-3">
              <link.icon size={28} className="group-hover:scale-110 transition-transform duration-200" style={{ color: link.color }} />
              <div>
                <p className="text-base font-semibold text-pink-50 mb-1">{link.name}</p>
                <p className="text-sm text-pink-200/30 group-hover:text-accent-pink transition-colors flex items-center gap-1">{link.value}<FiArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <a href="mailto:mafe.hurtado@example.com" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-pink to-accent-purple rounded-lg font-semibold text-white text-lg hover:shadow-lg hover:shadow-pink-400/25 transition-all duration-300 hover:-translate-y-0.5">
            <FiMail size={20} />{t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
