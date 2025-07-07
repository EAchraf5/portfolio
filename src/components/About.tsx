import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

// Sous-composant Avatar professionnel
interface AvatarProps {
  src?: string;
  alt: string;
  fallback: string;
}
const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => (
  <div className="relative">
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 bg-gray-900"
        onError={e => (e.currentTarget.style.display = 'none')}
      />
    ) : (
      <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
          <span className="text-8xl font-bold text-white">{fallback}</span>
        </div>
      </div>
    )}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
      <span className="text-2xl" aria-hidden>🚀</span>
    </div>
  </div>
);

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="about-title" className="section-title">{t('about_title')}</h2>
          <p className="section-subtitle">
            {t('about_subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Avatar pro, fallback initiale */}
            <motion.div
              className="flex justify-center"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Avatar
                src={personalInfo.avatar}
                alt={`Photo de profil de ${personalInfo.name}`}
                fallback={personalInfo.name.charAt(0)}
              />
            </motion.div>

            {/* Contenu */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {personalInfo.description}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Passionné par les nouvelles technologies et l'innovation, je m'efforce de créer des solutions 
                qui allient performance, esthétique et expérience utilisateur. Mon approche combine 
                créativité technique et rigueur méthodologique pour livrer des projets d'excellence.
              </p>
              {/* Points clés */}
              <ul className="space-y-4" aria-label="Points clés">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden></span>
                  <span className="text-gray-300">
                    <strong className="text-white">5+ années</strong> d'expérience en développement web
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full" aria-hidden></span>
                  <span className="text-gray-300">
                    <strong className="text-white">50+ projets</strong> réalisés avec succès
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden></span>
                  <span className="text-gray-300">
                    <strong className="text-white">15+ technologies</strong> maîtrisées
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full" aria-hidden></span>
                  <span className="text-gray-300">
                    <strong className="text-white">100% client</strong> satisfait
                  </span>
                </li>
              </ul>
              {/* Bouton CTA */}
              <motion.button
                className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Voir mes projets
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 