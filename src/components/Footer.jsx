import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import RunningPokemon from './RunningPokemon'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations.footer[lang]

  return (
    <footer className="bg-dark-950">
      <div className="border-t border-pink-300/5">
        <RunningPokemon />
      </div>
      <div className="border-t border-pink-300/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-pink-200/30">
            {t.built} <FiHeart className="inline text-accent-pink" size={14} /> {t.by}
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com/Mariagato' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/mariafernandahurtadogomez/' },
              { icon: FiMail, href: 'mailto:marishg32@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-pink-200/20 hover:text-accent-pink transition-colors"><Icon size={18} /></a>
            ))}
          </div>
          <p className="text-xs text-pink-200/20 font-mono">© {new Date().getFullYear()} — {t.copy}</p>
        </div>
      </div>
    </footer>
  )
}
