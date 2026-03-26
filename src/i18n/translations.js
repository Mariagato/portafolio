const translations = {
  navbar: {
    en: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact', resume: 'Resume' },
    es: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', resume: 'CV' },
  },
  hero: {
    en: {
      badge: 'Open to AI & Data Science roles',
      greeting: "Hello world! I'm",
      subtitle1: 'DevOps',
      subtitle2: 'AI Engineer',
      bio: "From pipelines to predictions — I design systems that scale and models that learn. Currently doing my",
      bioHighlight: "Master's in AI",
      bioEnd: 'while researching biodiversity with data.',
      cta1: 'Explore AI Projects',
      cta2: "Let's Build Something",
      techAI: 'AI & Data Science',
      techDevops: 'DevOps & Cloud',
      building: [
        'Training ML models for biodiversity prediction',
        'Automating DevOps pipelines with IaC',
        'Exploring LLMs & AI agent systems',
      ],
    },
    es: {
      badge: 'Abierta a roles de IA y Data Science',
      greeting: 'Hola mundo! Soy',
      subtitle1: 'DevOps',
      subtitle2: 'Ingeniera IA',
      bio: 'De pipelines a predicciones — diseño sistemas que escalan y modelos que aprenden. Actualmente cursando mi',
      bioHighlight: 'Maestría en IA',
      bioEnd: 'mientras investigo biodiversidad con datos.',
      cta1: 'Explorar Proyectos IA',
      cta2: 'Construyamos Algo',
      techAI: 'IA & Ciencia de Datos',
      techDevops: 'DevOps & Nube',
      building: [
        'Entrenando modelos ML para predicción de biodiversidad',
        'Automatizando pipelines DevOps con IaC',
        'Explorando LLMs y sistemas de agentes IA',
      ],
    },
  },
  about: {
    en: {
      title: 'About Me',
      p1: 'I started in tech because I wanted to understand how things work behind the scenes — not just use tools, but build the pipelines that make everything run. That curiosity led me to DevOps, where I learned to automate, deploy, and keep systems alive at scale.',
      p2pre: "But somewhere along the way, I realized the most interesting problems weren't about keeping servers up — they were about what the",
      p2highlight: 'data',
      p2post: "running through those servers could tell us. That's when I fell in love with machine learning and AI.",
      p3pre: "Right now, I'm pursuing a",
      p3h1: "Master's in Artificial Intelligence",
      p3mid: 'while working as a researcher at the',
      p3h2: 'Von Humboldt Institute',
      p3post: ", where I use data science to help understand and protect Colombia's biodiversity.",
      p4: "I sit at the intersection of infrastructure, data, and intelligence — and I think that's exactly where the future is headed.",
      cards: [
        { label: 'DevOps Engineer', desc: 'CI/CD, cloud, automation' },
        { label: "Master's in AI", desc: 'Currently studying' },
        { label: 'Data & ML', desc: 'Python, models, analytics' },
        { label: 'Research', desc: 'Biodiversity & data science' },
      ],
    },
    es: {
      title: 'Sobre Mí',
      p1: 'Empecé en tecnología porque quería entender cómo funcionan las cosas detrás de escena — no solo usar herramientas, sino construir los pipelines que hacen que todo funcione. Esa curiosidad me llevó a DevOps, donde aprendí a automatizar, desplegar y mantener sistemas a escala.',
      p2pre: 'Pero en el camino, me di cuenta de que los problemas más interesantes no eran mantener servidores andando — sino lo que los',
      p2highlight: 'datos',
      p2post: 'que corrían por esos servidores podían decirnos. Ahí fue cuando me enamoré del machine learning y la IA.',
      p3pre: 'Actualmente estoy cursando una',
      p3h1: 'Maestría en Inteligencia Artificial',
      p3mid: 'mientras trabajo como investigadora en el',
      p3h2: 'Instituto Von Humboldt',
      p3post: ', donde uso ciencia de datos para ayudar a entender y proteger la biodiversidad de Colombia.',
      p4: 'Estoy en la intersección de infraestructura, datos e inteligencia — y creo que es exactamente hacia donde va el futuro.',
      cards: [
        { label: 'Ingeniera DevOps', desc: 'CI/CD, nube, automatización' },
        { label: 'Maestría en IA', desc: 'Estudiando actualmente' },
        { label: 'Datos & ML', desc: 'Python, modelos, analítica' },
        { label: 'Investigación', desc: 'Biodiversidad y data science' },
      ],
    },
  },
  skills: {
    en: {
      title: 'Skills & Tools',
      subtitle: 'From deploying containers to training classifiers — these are the tools I work with daily.',
      categories: ['DevOps & Cloud', 'Data & Analytics', 'AI & Machine Learning'],
    },
    es: {
      title: 'Habilidades & Herramientas',
      subtitle: 'Desde desplegar contenedores hasta entrenar clasificadores — estas son las herramientas con las que trabajo a diario.',
      categories: ['DevOps & Nube', 'Datos & Analítica', 'IA & Machine Learning'],
    },
  },
  projects: {
    en: {
      title: 'Projects',
      subtitle: "A mix of what I've built — from ML models that predict species habitats to pipelines that ship code faster. Here's the work that keeps me up at night (in a good way).",
      items: [
        { title: 'Species Distribution Predictor', description: 'ML model to predict the geographic distribution of endangered species using environmental and climate data. Built as part of my research at the Von Humboldt Institute to support conservation decisions.', impact: '87% accuracy in predicting habitat suitability for 12 key species' },
        { title: 'Biodiversity Analytics Dashboard', description: 'Interactive Power BI dashboard visualizing biodiversity metrics across Colombian ecosystems. Connected to live PostgreSQL databases with automated ETL pipelines for daily data refresh.', impact: 'Used by 3 research teams to track 50+ biodiversity indicators in real time' },
        { title: 'CI/CD Pipeline Automation Suite', description: 'End-to-end CI/CD pipeline system with automated testing, container builds, and multi-environment deployments. Reduced deployment time from hours to minutes with zero-downtime releases.', impact: 'Cut deployment time by 85% and reduced production incidents by 40%' },
        { title: 'Customer Churn Prediction Model', description: 'Classification model predicting customer churn for a telecom dataset. Full pipeline from data cleaning and feature engineering to model selection, hyperparameter tuning, and evaluation.', impact: 'Achieved 92% recall on churn detection with optimized threshold tuning' },
        { title: 'Infrastructure Monitoring & Alerting', description: 'Observability stack with custom Grafana dashboards, Prometheus metrics, and intelligent alerting rules. Monitors 200+ microservices across staging and production environments.', impact: 'Reduced mean time to detection (MTTD) by 60%' },
      ],
    },
    es: {
      title: 'Proyectos',
      subtitle: 'Una mezcla de lo que he construido — desde modelos ML que predicen hábitats de especies hasta pipelines que envían código más rápido.',
      items: [
        { title: 'Predictor de Distribución de Especies', description: 'Modelo ML para predecir la distribución geográfica de especies en peligro usando datos ambientales y climáticos. Construido como parte de mi investigación en el Instituto Von Humboldt para apoyar decisiones de conservación.', impact: '87% de precisión prediciendo idoneidad de hábitat para 12 especies clave' },
        { title: 'Dashboard de Analítica de Biodiversidad', description: 'Dashboard interactivo en Power BI visualizando métricas de biodiversidad en ecosistemas colombianos. Conectado a bases PostgreSQL con pipelines ETL automatizados para actualización diaria.', impact: 'Usado por 3 equipos de investigación para rastrear 50+ indicadores en tiempo real' },
        { title: 'Suite de Automatización CI/CD', description: 'Sistema CI/CD de punta a punta con pruebas automatizadas, builds de contenedores y despliegues multi-ambiente. Redujo el tiempo de despliegue de horas a minutos con cero tiempo de inactividad.', impact: 'Redujo tiempo de despliegue 85% e incidentes en producción 40%' },
        { title: 'Modelo de Predicción de Churn', description: 'Modelo de clasificación prediciendo churn de clientes para un dataset de telecom. Pipeline completo desde limpieza de datos e ingeniería de features hasta selección de modelo y evaluación.', impact: '92% de recall en detección de churn con optimización de umbral' },
        { title: 'Monitoreo y Alertas de Infraestructura', description: 'Stack de observabilidad con dashboards Grafana personalizados, métricas Prometheus y reglas de alertas inteligentes. Monitorea 200+ microservicios en staging y producción.', impact: 'Redujo el tiempo medio de detección (MTTD) en 60%' },
      ],
    },
  },
  experience: {
    en: {
      title: 'Experience',
      items: [
        {
          role: 'DevOps Engineer', company: 'Tech Company', period: '2022 — Present',
          description: [
            'Designed and maintained CI/CD pipelines serving 15+ development teams, cutting release cycles from weekly to daily deploys.',
            'Automated infrastructure provisioning with Terraform across AWS and Azure, managing 200+ cloud resources.',
            'Built monitoring and alerting systems with Grafana and Prometheus, reducing incident response time by 60%.',
            'Championed containerization strategy, migrating 30+ services to Docker and Kubernetes.',
          ],
        },
        {
          role: 'Data Science Researcher', company: 'Instituto Alexander von Humboldt', period: '2023 — Present',
          description: [
            'Developing ML models to predict species distribution patterns using environmental and climate datasets.',
            'Built interactive dashboards (Power BI) for research teams to visualize biodiversity metrics across Colombian ecosystems.',
            'Designed ETL pipelines in Python to clean, transform, and load ecological data from multiple field sources.',
            'Collaborating with biologists and ecologists to translate research questions into data-driven solutions.',
          ],
        },
        {
          role: "Master's in Artificial Intelligence", company: 'University', period: '2024 — Present',
          description: [
            'Studying advanced topics in machine learning, deep learning, NLP, and computer vision.',
            'Building end-to-end ML projects from data collection to model deployment.',
            'Exploring the intersection of AI and environmental science for my thesis research.',
          ],
        },
      ],
    },
    es: {
      title: 'Experiencia',
      items: [
        {
          role: 'Ingeniera DevOps', company: 'Empresa Tech', period: '2022 — Presente',
          description: [
            'Diseñé y mantuve pipelines CI/CD para 15+ equipos de desarrollo, reduciendo ciclos de release de semanal a diario.',
            'Automaticé aprovisionamiento de infraestructura con Terraform en AWS y Azure, gestionando 200+ recursos cloud.',
            'Construí sistemas de monitoreo y alertas con Grafana y Prometheus, reduciendo tiempo de respuesta a incidentes 60%.',
            'Lideré estrategia de contenedorización, migrando 30+ servicios a Docker y Kubernetes.',
          ],
        },
        {
          role: 'Investigadora en Ciencia de Datos', company: 'Instituto Alexander von Humboldt', period: '2023 — Presente',
          description: [
            'Desarrollando modelos ML para predecir patrones de distribución de especies usando datos ambientales y climáticos.',
            'Construí dashboards interactivos (Power BI) para equipos de investigación para visualizar métricas de biodiversidad.',
            'Diseñé pipelines ETL en Python para limpiar, transformar y cargar datos ecológicos de múltiples fuentes.',
            'Colaborando con biólogos y ecólogos para traducir preguntas de investigación en soluciones basadas en datos.',
          ],
        },
        {
          role: 'Maestría en Inteligencia Artificial', company: 'Universidad', period: '2024 — Presente',
          description: [
            'Estudiando temas avanzados en machine learning, deep learning, NLP y visión por computadora.',
            'Construyendo proyectos ML de punta a punta desde recolección de datos hasta despliegue de modelos.',
            'Explorando la intersección de IA y ciencias ambientales para mi investigación de tesis.',
          ],
        },
      ],
    },
  },
  contact: {
    en: {
      title: "Let's Connect",
      subtitle: "I'm always open to discussing AI projects, data science collaborations, or opportunities where DevOps meets machine learning. Don't be a stranger.",
      cta: 'Say Hello',
    },
    es: {
      title: 'Conectemos',
      subtitle: 'Siempre estoy abierta a discutir proyectos de IA, colaboraciones en data science, u oportunidades donde DevOps se encuentra con machine learning.',
      cta: 'Saluda',
    },
  },
  footer: {
    en: { built: 'Built with', by: 'by María Fernanda', copy: 'Designed & coded from scratch' },
    es: { built: 'Hecho con', by: 'por María Fernanda', copy: 'Diseñado y programado desde cero' },
  },
}

export default translations
