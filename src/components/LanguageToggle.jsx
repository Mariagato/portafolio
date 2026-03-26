import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center w-16 h-8 rounded-full glass cursor-pointer overflow-hidden"
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute w-7 h-6 rounded-full bg-gradient-to-r from-accent-pink/80 to-accent-purple/80"
        animate={{ x: lang === 'en' ? 2 : 30 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
      <span className={`relative z-10 flex-1 text-center text-xs font-bold ${lang === 'en' ? 'text-white' : 'text-pink-200/40'}`}>
        EN
      </span>
      <span className={`relative z-10 flex-1 text-center text-xs font-bold ${lang === 'es' ? 'text-white' : 'text-pink-200/40'}`}>
        ES
      </span>
    </button>
  )
}
