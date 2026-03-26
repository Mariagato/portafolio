import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython, SiDocker, SiKubernetes, SiGithubactions,
  SiTerraform, SiPostgresql, SiJupyter, SiScikitlearn,
  SiPandas, SiNumpy, SiGit, SiLinux, SiJenkins, SiGrafana,
  SiApacheairflow
} from 'react-icons/si'
import { FiCloud, FiServer, FiDatabase, FiCpu, FiBarChart2 } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import translations from '../i18n/translations'

const categories = [
  {
    icon: FiServer,
    color: 'accent-purple',
    skills: [
      { name: 'Docker', icon: SiDocker }, { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'AWS', icon: FiCloud }, { name: 'Azure', icon: FiCloud },
      { name: 'Terraform', icon: SiTerraform }, { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Jenkins', icon: SiJenkins }, { name: 'Linux', icon: SiLinux },
      { name: 'Grafana', icon: SiGrafana }, { name: 'Airflow', icon: SiApacheairflow },
    ],
  },
  {
    icon: FiDatabase,
    color: 'accent-pink',
    skills: [
      { name: 'Python', icon: SiPython }, { name: 'SQL / PostgreSQL', icon: SiPostgresql },
      { name: 'Power BI', icon: FiBarChart2 }, { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy }, { name: 'Jupyter', icon: SiJupyter },
      { name: 'Git', icon: SiGit },
    ],
  },
  {
    icon: FiCpu,
    color: 'accent-green',
    skills: [
      { name: 'Scikit-learn', icon: SiScikitlearn }, { name: 'XGBoost', icon: SiPython },
      { name: 'Data Preprocessing', icon: SiPandas }, { name: 'Feature Engineering', icon: SiNumpy },
      { name: 'Model Evaluation', icon: SiJupyter }, { name: 'NLP Basics', icon: SiPython },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { lang } = useLanguage()
  const t = translations.skills[lang]

  return (
    <section id="skills" className="py-24 px-6 relative bg-section-a section-divider">
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-3"><span className="gradient-text">{t.title}</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full mb-4" />
          <p className="text-pink-100/40 mb-12 max-w-xl text-base">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div key={catIndex} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.15 }} className="glass rounded-2xl p-8 hover:glow-pink transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-${cat.color}/10`}><cat.icon className={`text-${cat.color}`} size={28} /></div>
                <h3 className="text-xl font-bold text-pink-50">{t.categories[catIndex]}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.3, delay: 0.3 + catIndex * 0.1 + i * 0.05 }} className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-dark-800/50 hover:bg-dark-700/50 border border-white/5 hover:border-accent-pink/20 transition-all duration-200 group/skill">
                    <skill.icon className="text-pink-200/30 group-hover/skill:text-accent-pink transition-colors shrink-0" size={22} />
                    <span className="text-base text-pink-100/50 group-hover/skill:text-pink-50 transition-colors truncate">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
