# Portfolio Personnel

Un portfolio moderne et professionnel développé avec React, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** : Interface élégante avec animations fluides
- **Responsive** : Optimisé pour tous les appareils
- **Sections complètes** :
  - Hero avec présentation personnelle
  - Projets avec filtres et liens
  - Expérience professionnelle avec timeline
  - Compétences avec barres de progression
  - Formulaire de contact
- **Animations** : Utilisation de Framer Motion pour des transitions fluides
- **Performance** : Optimisé pour les performances web

## 🛠️ Technologies utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations
- **React Icons** - Icônes

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone <votre-repo>
   cd portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez le fichier `src/data/portfolio.ts` pour personnaliser :

- **Informations personnelles** : Nom, titre, description, localisation
- **Contact** : Email, téléphone, réseaux sociaux
- **Projets** : Ajoutez vos propres projets
- **Expérience** : Votre parcours professionnel
- **Compétences** : Vos compétences techniques

### 2. Styling

- **Couleurs** : Modifiez `tailwind.config.js` pour changer la palette
- **Fonts** : Changez la police dans `public/index.html`
- **Animations** : Ajustez les animations dans les composants

### 3. Images

- Remplacez les images par défaut dans le dossier `public/`
- Ajoutez votre photo de profil
- Ajoutez des captures d'écran de vos projets

## 📁 Structure du projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Section d'accueil
│   ├── Projects.tsx    # Section projets
│   ├── Experience.tsx  # Section expérience
│   ├── Skills.tsx      # Section compétences
│   └── Contact.tsx     # Section contact
├── data/
│   └── portfolio.ts    # Données du portfolio
├── types/
│   └── index.ts        # Types TypeScript
├── App.tsx             # Composant principal
└── index.tsx           # Point d'entrée
```

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Installer Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Déployer**
   ```bash
   vercel
   ```

### Netlify

1. **Build du projet**
   ```bash
   npm run build
   ```

2. **Déployer le dossier `build` sur Netlify**

### GitHub Pages

1. **Ajouter dans package.json**
   ```json
   "homepage": "https://votre-username.github.io/votre-repo",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

2. **Installer gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Déployer**
   ```bash
   npm run deploy
   ```

## 📝 Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Build pour la production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration (irréversible)

## 🎯 Fonctionnalités à venir

- [ ] Mode sombre/clair
- [ ] Blog intégré
- [ ] Téléchargement de CV en PDF
- [ ] Intégration avec un CMS
- [ ] Analytics
- [ ] SEO optimisé

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Si vous avez des questions ou besoin d'aide :

- Ouvrez une issue sur GitHub
- Contactez-moi via le formulaire de contact du portfolio

---

**Bon développement ! 🚀** 