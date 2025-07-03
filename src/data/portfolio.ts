import { PersonalInfo, Project, Experience, Education, Skill } from '../types';

export const personalInfo: PersonalInfo = {
  name: "ELAOUALA ACHRAF",
  title: "Étudiant en Ingénierie des Systèmes Informatiques",
  description: "Étudiant motivé, passionné par le développement logiciel, l'intelligence artificielle et l'analyse de données. Je possède une expérience en développement web, desktop et mobile, ainsi qu'une bonne capacité d'adaptation et de travail en équipe.",
  avatar: "/avatar.jpg", // Ajoute ta photo dans public/avatar.jpg
  location: "Meknès, Maroc",
  contact: {
    email: "achraf.elaoula03@gmail.com",
    linkedin: "https://linkedin.com/in/achraf-elaoula",
    github: "https://github.com/achraf-elaoula",
    phone: "+212 618 43 41 58"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Application Desktop de gestion de projets",
    description: "Développement d'une application Desktop pour la gestion de projets (JavaScript, Node.js, SQLite, Electron, JWT, etc.) lors d'un stage à l'Agence Régionale d'Exécution de Projets, Meknès.",
    technologies: ["JavaScript", "Node.js", "SQLite", "Electron", "JWT"],
    image: "/projects/desktop-app.jpg",
    featured: true
  },
  {
    id: "2",
    title: "Application mobile de gestion (stage)",
    description: "Développement d'une application mobile (React Native, Node.js, SQL) lors d'un stage à la Minoterie Othmane, Meknès.",
    technologies: ["React Native", "Node.js", "SQL"],
    image: "/projects/mobile-app.jpg",
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Agence Régionale d'Exécution de Projets, Meknès",
    position: "Stagiaire Développeur Desktop",
    duration: "Fév 2025 – Actualités",
    description: "Stage de trois mois en entreprise. Développement d'une application Desktop (JavaScript, Node.js, SQLite, Electron, JWT, etc.)",
    technologies: ["JavaScript", "Node.js", "SQLite", "Electron", "JWT"],
    achievements: [
      "Développement complet de l'application Desktop",
      "Gestion de la base de données locale avec SQLite",
      "Mise en place de l'authentification JWT"
    ]
  },
  {
    id: "2",
    company: "Minoterie Othmane, Meknès",
    position: "Stagiaire Développeur Mobile",
    duration: "13 mai 2024 – 13 juillet 2024",
    description: "Stage scolaire de deux mois. Développement d'une application mobile (React Native, Node.js, SQL)",
    technologies: ["React Native", "Node.js", "SQL"],
    achievements: [
      "Développement d'une application mobile pour la gestion interne",
      "Connexion à une base de données SQL"
    ]
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Ecole Supérieure de Management, Télécommunications et Informatique, Meknès",
    degree: "Licence en Ingénierie des Systèmes Informatiques",
    field: "Systèmes Informatiques",
    duration: "2021 – 2024",
    description: "Note finale : Bien. Fin des études : juin 2024."
  },
  {
    id: "2",
    institution: "Lycée Mohamed Ajana, Meknès",
    degree: "Baccalauréat Sciences PHYSIQUES",
    field: "Sciences Physiques",
    duration: "2018 – 2021",
    description: "Fin des études : Juin 2021."
  }
];

export const skills: Skill[] = [
  // Langues
  { name: "Allemand", level: 70, category: "other" }, // Suffisant - Telc B2
  { name: "Anglais", level: 80, category: "other" }, // Bon
  { name: "Français", level: 65, category: "other" }, // Suffisant
  { name: "Arabe", level: 100, category: "other" }, // Langue maternelle

  // Programmation
  { name: "Python", level: 85, category: "backend" },
  { name: "Java", level: 75, category: "backend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "SQL", level: 80, category: "database" },
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },

  // Outils & Tech
  { name: "Visual Studio", level: 70, category: "other" },
  { name: "Code::Blocks", level: 60, category: "other" },
  { name: "VirtualBox", level: 60, category: "other" },
  { name: "Electron", level: 70, category: "backend" },
  { name: "React Native", level: 70, category: "frontend" },
  { name: "JWT", level: 60, category: "backend" },
  { name: "SQLite", level: 70, category: "database" },
  { name: "Linux", level: 70, category: "other" },
  { name: "Windows", level: 80, category: "other" },
  { name: "macOS", level: 60, category: "other" },
  { name: "CCNA", level: 50, category: "other" },
  { name: "Machine Learning (Python)", level: 60, category: "other" },
  { name: "Statistiques/DataViz", level: 60, category: "other" },
  // Soft skills
  { name: "Travail d'équipe", level: 90, category: "other" },
  { name: "Leadership", level: 80, category: "other" },
  { name: "Résolution de problèmes", level: 85, category: "other" },
  { name: "Adaptabilité", level: 85, category: "other" }
];

// Ajout d'une section "certificats" et "loisirs" possible dans d'autres fichiers ou composants si besoin 