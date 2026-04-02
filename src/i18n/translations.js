const translations = {
  navbar: {
    en: { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact', resume: 'Resume' },
    es: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto', resume: 'CV' },
  },
  hero: {
    en: {
      badge: 'AI Student | Computer Vision | ML Research',
      greeting: "Hello world! I'm",
      subtitle1: 'AI',
      subtitle2: 'Software Engineer',
      bio: "Software engineer with DevOps experience, now focused on AI and computer vision. Currently doing my",
      bioHighlight: "Master's in AI",
      bioEnd: 'at Universidad de los Andes.',
      cta1: 'See My Projects',
      cta2: "Let's Connect",
      techAI: 'AI & Data Science',
      techDevops: 'DevOps & Cloud',
      building: [
        'ML models for insect prediction with climate data',
        'Automating infrastructure at DataCRM',
        'Insect identification with computer vision',
      ],
    },
    es: {
      badge: 'Estudiante IA | Visión Computarizada | ML',
      greeting: 'Hola mundo! Soy',
      subtitle1: 'IA',
      subtitle2: 'Ing. de Software',
      bio: 'Ingeniera de software con experiencia en DevOps, ahora enfocada en IA y visión computarizada. Actualmente cursando mi',
      bioHighlight: 'Maestría en IA',
      bioEnd: 'en la Universidad de los Andes.',
      cta1: 'Ver Mis Proyectos',
      cta2: 'Conectemos',
      techAI: 'IA & Ciencia de Datos',
      techDevops: 'DevOps & Nube',
      building: [
        'Modelos ML para predicción de insectos con datos climáticos',
        'Automatizando infraestructura en DataCRM',
        'Identificación de insectos con visión computarizada',
      ],
    },
  },
  about: {
    en: {
      title: 'About Me',
      p1: "I studied Software Engineering and started my career as a developer intern at Rhiss, where I got to work with Python, FastAPI, PHP, and JavaScript — building everything from APIs to simple web pages.",
      p2pre: "That experience made me realize I enjoy the",
      p2highlight: 'operations side',
      p2post: "of software as much as the development side. So I moved into DevOps at DataCRM, where I work with AWS, Azure, Docker, Selenium, JMeter, pipelines, and automation.",
      p3pre: "Now I'm pursuing a",
      p3h1: "Master's in Artificial Intelligence",
      p3mid: 'at Universidad de los Andes, and collaborating with',
      p3h2: 'Universidad Von Humboldt',
      p3post: " on a research project using ML to predict insect presence based on climate conditions.",
      p4: '',
      cards: [
        { label: 'DevOps at DataCRM', desc: 'AWS, Azure, automation' },
        { label: "Master's in AI", desc: 'Currently studying' },
        { label: 'Software Engineer', desc: 'Python, FastAPI, JS' },
        { label: 'AI Research', desc: 'Insects & climate data' },
      ],
    },
    es: {
      title: 'Sobre Mí',
      p1: 'Estudié Ingeniería de Software y empecé mi carrera como practicante desarrolladora en Rhiss, donde trabajé con Python, FastAPI, PHP y JavaScript — construyendo desde APIs hasta páginas web sencillas.',
      p2pre: 'Esa experiencia me hizo darme cuenta de que disfruto el lado de',
      p2highlight: 'operaciones',
      p2post: 'del software tanto como el de desarrollo. Así que me moví a DevOps en DataCRM, donde trabajo con AWS, Azure, Docker, Selenium, JMeter, pipelines y automatización.',
      p3pre: 'Ahora estoy cursando una',
      p3h1: 'Maestría en Inteligencia Artificial',
      p3mid: 'en la Universidad de los Andes, y colaborando con la',
      p3h2: 'Universidad Von Humboldt',
      p3post: ' en un proyecto de investigación usando ML para predecir la presencia de insectos según condiciones climáticas.',
      p4: '',
      cards: [
        { label: 'DevOps en DataCRM', desc: 'AWS, Azure, automatización' },
        { label: 'Maestría en IA', desc: 'Estudiando actualmente' },
        { label: 'Ing. de Software', desc: 'Python, FastAPI, JS' },
        { label: 'Investigación IA', desc: 'Insectos y datos climáticos' },
      ],
    },
  },
  skills: {
    en: {
      title: 'Skills & Tools',
      subtitle: 'From deploying containers to training models — the tools and technologies I work with.',
      categories: ['DevOps & Cloud', 'Development', 'AI & Machine Learning'],
    },
    es: {
      title: 'Habilidades & Herramientas',
      subtitle: 'Desde desplegar contenedores hasta entrenar modelos — las herramientas y tecnologías con las que trabajo.',
      categories: ['DevOps & Nube', 'Desarrollo', 'IA & Machine Learning'],
    },
  },
  projects: {
    en: {
      title: 'Projects',
      subtitle: "AI and computer vision projects — from predicting insect presence to recognizing sign language. Here's what I'm building.",
      items: [
        { title: 'Insect Prediction & Identification', description: 'Research project with Universidad Von Humboldt combining ML prediction of insect presence based on climate conditions with computer vision for species identification through image segmentation.', impact: 'Ongoing research — ML + computer vision pipeline' },
        { title: 'Sign Language Recognition', description: 'Object detection and classification system to identify sign language gestures. Combining computer vision and deep learning techniques.', impact: 'Upcoming project — deep learning & computer vision' },
        { title: 'Object Identification System', description: 'Image classification and object detection project using deep learning models. Part of my computer vision coursework in the AI master\'s program.', impact: 'Upcoming project — object detection with DL' },
      ],
    },
    es: {
      title: 'Proyectos',
      subtitle: 'Proyectos de IA y visión computarizada — desde predecir presencia de insectos hasta reconocer lengua de señas. Esto es lo que estoy construyendo.',
      items: [
        { title: 'Predicción e Identificación de Insectos', description: 'Proyecto de investigación con la Universidad Von Humboldt que combina predicción ML de presencia de insectos según condiciones climáticas con visión computarizada para identificación de especies mediante segmentación de imágenes.', impact: 'Investigación en curso — pipeline ML + visión computarizada' },
        { title: 'Reconocimiento de Lengua de Señas', description: 'Sistema de detección y clasificación de objetos para identificar gestos de lengua de señas. Combinando visión computarizada y deep learning.', impact: 'Proyecto próximo — deep learning y visión computarizada' },
        { title: 'Sistema de Identificación de Objetos', description: 'Proyecto de clasificación de imágenes y detección de objetos usando modelos de deep learning. Parte de mi curso de visión computarizada en la maestría de IA.', impact: 'Proyecto próximo — detección de objetos con DL' },
      ],
    },
  },
  experience: {
    en: {
      title: 'Experience',
      items: [
        {
          role: 'DevOps Engineer', company: 'DataCRM', period: 'Oct 2024 — Present',
          description: [
            'Managing cloud infrastructure on AWS with autoscaling configurations and resource optimization.',
            'Working with Azure services and building CI/CD pipelines for automated deployments.',
            'Automating processes with Python scripts and Docker containerization.',
            'QA automation with Selenium and performance testing with JMeter.',
          ],
        },
        {
          role: 'Software Developer (Intern)', company: 'Rhiss', period: '~12 months',
          description: [
            'Developed backend services with Python and FastAPI, building RESTful APIs.',
            'Built simple web pages using PHP and JavaScript for internal and client-facing tools.',
            'Worked with Docker for development environments and basic containerization.',
          ],
        },
        {
          role: 'AI Research Collaborator', company: 'Universidad Von Humboldt', period: 'Jan 2026 — Present',
          description: [
            'Developing ML models to predict insect presence based on climate and environmental conditions.',
            'Working with ecological datasets — data cleaning, feature engineering, and model training.',
            'Applying machine learning techniques learned in the master\'s program to real-world biodiversity research.',
          ],
        },
        {
          role: "Master's in Artificial Intelligence", company: 'Universidad de los Andes', period: '2024 — Present',
          description: [
            'Studying machine learning, deep learning, computer vision, and data science.',
            'Working on ETL pipelines and data preprocessing for AI projects.',
            'Building projects in image segmentation, object detection, and classification.',
          ],
        },
      ],
    },
    es: {
      title: 'Experiencia',
      items: [
        {
          role: 'Ingeniera DevOps', company: 'DataCRM', period: 'Oct 2024 — Presente',
          description: [
            'Gestionando infraestructura cloud en AWS con configuraciones de autoscaling y optimización de recursos.',
            'Trabajando con servicios de Azure y construyendo pipelines CI/CD para despliegues automatizados.',
            'Automatizando procesos con scripts de Python y contenedorización con Docker.',
            'Automatización de QA con Selenium y pruebas de rendimiento con JMeter.',
          ],
        },
        {
          role: 'Desarrolladora de Software (Practicante)', company: 'Rhiss', period: '~12 meses',
          description: [
            'Desarrollé servicios backend con Python y FastAPI, construyendo APIs RESTful.',
            'Construí páginas web sencillas con PHP y JavaScript para herramientas internas y de clientes.',
            'Trabajé con Docker para ambientes de desarrollo y contenedorización básica.',
          ],
        },
        {
          role: 'Colaboradora de Investigación en IA', company: 'Universidad Von Humboldt', period: 'Ene 2026 — Presente',
          description: [
            'Desarrollando modelos ML para predecir presencia de insectos según condiciones climáticas y ambientales.',
            'Trabajando con datasets ecológicos — limpieza de datos, ingeniería de features y entrenamiento de modelos.',
            'Aplicando técnicas de machine learning aprendidas en la maestría a investigación real de biodiversidad.',
          ],
        },
        {
          role: 'Maestría en Inteligencia Artificial', company: 'Universidad de los Andes', period: '2024 — Presente',
          description: [
            'Estudiando machine learning, deep learning, visión computarizada y ciencia de datos.',
            'Trabajando en pipelines ETL y preprocesamiento de datos para proyectos de IA.',
            'Construyendo proyectos de segmentación de imágenes, detección de objetos y clasificación.',
          ],
        },
      ],
    },
  },
  contact: {
    en: {
      title: "Let's Connect",
      subtitle: "I'm open to discussing AI projects, DevOps collaborations, or just chatting about tech. Feel free to reach out!",
      cta: 'Say Hello',
    },
    es: {
      title: 'Conectemos',
      subtitle: 'Estoy abierta a discutir proyectos de IA, colaboraciones en DevOps, o simplemente hablar de tecnología. ¡No dudes en escribirme!',
      cta: 'Saluda',
    },
  },
  footer: {
    en: { built: 'Built with', by: 'by María Fernanda', copy: 'Designed & coded from scratch' },
    es: { built: 'Hecho con', by: 'por María Fernanda', copy: 'Diseñado y programado desde cero' },
  },
}

export default translations
