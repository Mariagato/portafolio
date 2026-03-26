import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang } = useLanguage()
  const t = translations.navbar[lang]

  const navLinks = [
    { name: t.about, href: '#about' },
    { name: t.skills, href: '#skills' },
    { name: t.projects, href: '#projects' },
    { name: t.experience, href: '#experience' },
    { name: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1a0e2e]/90 backdrop-blur-xl shadow-lg shadow-purple-900/20 border-b border-purple-400/10'
          : 'bg-[#1a0e2e]/70 backdrop-blur-md border-b border-purple-400/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 sm:py-6 flex items-center justify-between">
        <a href="#" className="text-2xl sm:text-3xl font-bold gradient-text font-mono">
          {'<MF />'}
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base lg:text-lg text-purple-200/60 hover:text-accent-pink transition-colors duration-200 relative group font-medium"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-purple group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <LanguageToggle />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-base lg:text-lg border border-accent-pink/30 text-accent-pink rounded-lg hover:bg-accent-pink/10 hover:border-accent-pink/50 transition-all duration-200 font-medium"
          >
            {t.resume}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-2 p-2"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-7 h-0.5 bg-purple-300" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-7 h-0.5 bg-purple-300" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-7 h-0.5 bg-purple-300" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a0e2e]/95 backdrop-blur-xl border-t border-purple-400/10"
          >
            <div className="px-6 py-5 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-xl text-purple-200/70 hover:text-accent-pink transition-colors font-medium">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
