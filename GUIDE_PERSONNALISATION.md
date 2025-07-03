# 🎨 Guide de Personnalisation du Portfolio

Ce guide vous accompagne pour personnaliser votre portfolio et le rendre unique !

## 📝 1. Informations Personnelles

### Modifier `src/data/portfolio.ts`

```typescript
export const personalInfo: PersonalInfo = {
  name: "Votre Nom", // 👈 Votre nom complet
  title: "Développeur Full Stack", // 👈 Votre titre professionnel
  description: "Votre description personnelle...", // 👈 Votre pitch
  avatar: "/avatar.jpg", // 👈 Chemin vers votre photo
  location: "Paris, France", // 👈 Votre localisation
  contact: {
    email: "votre.email@example.com", // 👈 Votre email
    linkedin: "https://linkedin.com/in/votre-profil", // 👈 Votre LinkedIn
    github: "https://github.com/votre-username", // 👈 Votre GitHub
    twitter: "https://twitter.com/votre-username", // 👈 Votre Twitter
    phone: "+33 6 12 34 56 78" // 👈 Votre téléphone
  }
};
```

## 🚀 2. Vos Projets

### Ajouter vos projets dans `src/data/portfolio.ts`

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Nom de votre projet", // 👈 Nom du projet
    description: "Description détaillée...", // 👈 Description
    technologies: ["React", "Node.js", "MongoDB"], // 👈 Technologies utilisées
    image: "/projects/projet1.jpg", // 👈 Image du projet
    githubUrl: "https://github.com/votre-username/projet", // 👈 Lien GitHub
    liveUrl: "https://votre-projet.com", // 👈 Lien live
    featured: true // 👈 Projet vedette (true/false)
  },
  // Ajoutez autant de projets que vous voulez !
];
```

### Ajouter des images de projets

1. Créez un dossier `public/projects/`
2. Ajoutez vos images de projets
3. Mettez à jour les chemins dans `portfolio.ts`

## 💼 3. Votre Expérience

### Modifier votre expérience professionnelle

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    company: "Nom de l'entreprise", // 👈 Nom de l'entreprise
    position: "Votre poste", // 👈 Votre titre
    duration: "2022 - Présent", // 👈 Période
    description: "Description de votre rôle...", // 👈 Description
    technologies: ["React", "Node.js", "AWS"], // 👈 Technologies
    achievements: [
      "Réalisation 1", // 👈 Vos accomplissements
      "Réalisation 2",
      "Réalisation 3"
    ]
  }
];
```

## 🎯 4. Vos Compétences

### Personnaliser vos compétences

```typescript
export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend" }, // 👈 Nom et niveau (0-100)
  { name: "TypeScript", level: 85, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  
  // Base de données
  { name: "MongoDB", level: 80, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  
  // DevOps
  { name: "Docker", level: 70, category: "devops" },
  { name: "AWS", level: 65, category: "devops" },
  
  // Autres
  { name: "Figma", level: 60, category: "other" },
  { name: "Agile/Scrum", level: 85, category: "other" }
];
```

## 🎨 5. Personnalisation Visuelle

### Changer les couleurs dans `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // 👈 Personnalisez votre palette de couleurs
        primary: {
          500: '#3B82F6', // Bleu principal
          600: '#2563EB',
        },
        secondary: {
          500: '#8B5CF6', // Violet secondaire
          600: '#7C3AED',
        }
      }
    }
  }
}
```

### Changer la police dans `public/index.html`

```html
<link href="https://fonts.googleapis.com/css2?family=Votre-Police:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Puis dans `tailwind.config.js` :
```javascript
fontFamily: {
  sans: ['Votre-Police', 'sans-serif'],
}
```

## 📸 6. Ajouter vos Images

### Structure recommandée :
```
public/
├── avatar.jpg          # 👈 Votre photo de profil
├── projects/           # 👈 Images de vos projets
│   ├── projet1.jpg
│   ├── projet2.jpg
│   └── projet3.jpg
├── favicon.ico         # 👈 Icône du site
└── logo192.png         # 👈 Logo pour PWA
```

## 🔧 7. Fonctionnalités Avancées

### Ajouter un CV téléchargeable

1. Placez votre CV en PDF dans `public/cv.pdf`
2. Modifiez la fonction dans `src/components/Hero.tsx` :

```typescript
const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'CV-VotreNom.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

### Intégrer un service d'email

Pour le formulaire de contact, vous pouvez utiliser :
- **EmailJS** : Service gratuit pour les petits volumes
- **Formspree** : Service simple et gratuit
- **Netlify Forms** : Si déployé sur Netlify

Exemple avec EmailJS :
```bash
npm install emailjs-com
```

## 🚀 8. Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Vercel détectera automatiquement React
3. Déploiement automatique à chaque push

### Netlify
1. Build command : `npm run build`
2. Publish directory : `build`
3. Déployez !

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🎯 9. SEO et Performance

### Optimiser le SEO

Dans `public/index.html` :
```html
<title>Votre Nom - Développeur Full Stack</title>
<meta name="description" content="Portfolio de Votre Nom, développeur full stack spécialisé en React, Node.js et technologies web modernes.">
<meta name="keywords" content="développeur, full stack, React, Node.js, portfolio">
```

### Ajouter Google Analytics

1. Créez un compte Google Analytics
2. Ajoutez le script dans `public/index.html`

## 🔍 10. Tests et Validation

### Tester votre portfolio

1. **Responsive** : Testez sur mobile, tablette, desktop
2. **Performance** : Utilisez Lighthouse
3. **Accessibilité** : Vérifiez avec les outils de dev
4. **Liens** : Testez tous les liens externes

### Commandes utiles

```bash
npm start          # Développement local
npm run build      # Build de production
npm test           # Tests
npm run eject      # Éjecter la config (irréversible)
```

## 🎉 11. Prochaines Étapes

Une fois votre portfolio personnalisé :

1. **Ajoutez du contenu** : Projets réels, expériences authentiques
2. **Optimisez les images** : Compressez pour de meilleures performances
3. **Ajoutez des animations** : Personnalisez les animations Framer Motion
4. **Intégrez un blog** : Ajoutez une section blog
5. **Analytics** : Suivez les visites
6. **Backup** : Sauvegardez régulièrement

## 🆘 Besoin d'aide ?

- 📖 **Documentation React** : https://reactjs.org/docs/
- 🎨 **Tailwind CSS** : https://tailwindcss.com/docs/
- 🎭 **Framer Motion** : https://www.framer.com/motion/
- 🚀 **Vercel** : https://vercel.com/docs

---

**Bon développement ! Votre portfolio sera bientôt en ligne ! 🚀** 