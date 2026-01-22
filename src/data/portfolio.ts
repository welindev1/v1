export interface Experience {
  id: string;
  date: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export const profileData = {
  name: 'WelinDev',
  role: 'Web Developer',
  description: 'Creo experiencias digitales accesibles y con píxeles perfectos para la web.',
  resumeUrl: '/CVs.pdf',
};

export const navigationItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
];

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: '#', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', href: '#', icon: 'linkedin' },
  // { id: 'twitter', label: 'Twitter', href: '#', icon: 'twitter' },
];

export const aboutContent = [
  "Soy <strong>desarrollador web</strong>, enfocado en crear <strong>interfaces intuitivas y optimizadas</strong>. Disfruto trabajar en la intersección entre diseño y desarrollo, donde una gran experiencia de usuario se combina con código sólido, limpio y escalable.",
  "Actualmente me encuentro <strong>abierto a nuevas oportunidades profesionales</strong>, con interés en seguir creciendo y aportar valor en proyectos desafiantes.",
  "He trabajado en una amplia variedad de entornos, desde <strong>estudios de producto hasta startups</strong>, colaborando con equipos multidisciplinarios. Además de mi experiencia profesional, me mantengo en <strong>aprendizaje constante</strong>, explorando nuevas tecnologías, buenas prácticas y tendencias del desarrollo web para seguir mejorando la calidad de los productos que construyo."
];

export const experiences: Experience[] = [
  {
    id: 'compassion-cdi-dr0436',
    date: 'Junio 2025',
    title: 'Junior Software Developer',
    company: 'Compassion (CDI DR0436)',
    description:
      'Desarrollo y liderazgo técnico en aplicaciones full-stack, trabajando con equipos multidisciplinarios para crear soluciones escalables y seguras en un entorno multi-cloud.',
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'NestJS',
      'PostgreSQL',
      'Azure',
      'AWS'
    ],
  },
];


export const projects: Project[] = [
  {
    id: 'welinstore-app',
    title: 'WelinStore',
    description:
      'E-commerce platform for selling products online for MTA: San Andreas.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    image: 'https://imgur.com/jDHxQwk.png',
    link: 'https://welinstore.online',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Shadcn UI', 'PHP'],
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: ['Node.js', 'NestJS',  'PostgreSQL', 'REST APIs'],
  },
  {
    id: 'tools',
    name: 'Herramientas',
    skills: ['Git', 'GitHub', 'Cursor', 'Docker', 'Azure', 'AWS', 'Shopify'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'javascrippt-cert',
    name: 'JavaScript: De cero a experto',
    issuer: 'Udemy',
    date: '2025',
    credentialUrl: 'https://www.udemy.com/certificate/UC-6da53923-0f03-44d0-b3f7-faf6dab85362/',
    image: 'https://imgur.com/EERn9wC.jpg',
  },
  {
    id: 'design-cert',
    name: 'Tecnico en Diseño de Paginas Web',
    issuer: 'CENTU',
    date: '2024',
    credentialUrl: 'https://imgur.com/APDPS2H.png',
    image: 'https://imgur.com/APDPS2H.png',
  },
  {
    id: 'responsive-design-cert',
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2023',
    credentialUrl: 'https://www.freecodecamp.org/certification/fcc0693b03e-293d-4a2d-8d20-1e0e795760e7/responsive-web-design',
    image: 'https://imgur.com/AhxeSyz.png',
  }
];
