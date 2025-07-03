import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiAward } from 'react-icons/fi';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Expérience Professionnelle</h2>
          <p className="section-subtitle">
            Mon parcours professionnel et mes réalisations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: any;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      className="relative mb-12"
      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900"></div>

      <div className="ml-16">
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {experience.position}
              </h3>
              <p className="text-blue-400 font-medium">
                {experience.company}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 md:mt-0">
              <FiCalendar size={16} />
              {experience.duration}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies utilisées :</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-2">
              <FiAward size={16} />
              Réalisations principales :
            </h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement: string, idx: number) => (
                <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience; 