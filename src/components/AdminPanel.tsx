import React, { useState, useEffect } from 'react';
import { personalInfo as defaultPersonalInfo, projects as defaultProjects, experiences as defaultExperiences, education as defaultEducation, skills as defaultSkills } from '../data/portfolio';
import { PersonalInfo, Project, Experience, Education, Skill } from '../types';

const LOCAL_KEY = 'portfolio_admin_data_v1';
const ADMIN_EMAIL = 'achraf.elaoula03@gmail.com';
const ADMIN_PASSWORD = 'Aktiont04';
const SESSION_KEY = 'portfolio_admin_logged_in';

interface AdminData {
  personalInfo: PersonalInfo;
  projects: Project[];
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

const getInitialData = (): AdminData => {
  const saved = localStorage.getItem(LOCAL_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // fallback
    }
  }
  return {
    personalInfo: defaultPersonalInfo,
    projects: defaultProjects,
    experiences: defaultExperiences,
    education: defaultEducation,
    skills: defaultSkills,
  };
};

const AdminPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [data, setData] = useState<AdminData>(getInitialData());
  const [tab, setTab] = useState<'personal' | 'projects' | 'experiences' | 'education' | 'skills'>('personal');
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }, [data]);

  // --- Auth ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      sessionStorage.setItem(SESSION_KEY, '1');
      setError('');
    } else {
      setError('Email ou mot de passe incorrect');
    }
  };
  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem(SESSION_KEY);
    setEmail('');
    setPassword('');
  };

  if (!loggedIn) {
    return (
      <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center">
        <form className="bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-sm" onSubmit={handleLogin}>
          <h2 className="text-2xl font-bold text-white mb-6">Connexion Admin</h2>
          <label className="block text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full mb-4 px-3 py-2 rounded bg-gray-800 text-white" value={email} onChange={e => setEmail(e.target.value)} required />
          <label className="block text-gray-300 mb-2">Mot de passe</label>
          <input type="password" className="w-full mb-4 px-3 py-2 rounded bg-gray-800 text-white" value={password} onChange={e => setPassword(e.target.value)} required />
          {error && <div className="text-red-400 mb-4">{error}</div>}
          <div className="flex justify-between">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Se connecter</button>
            <button type="button" className="px-4 py-2 bg-gray-700 text-white rounded" onClick={onClose}>Fermer</button>
          </div>
        </form>
      </div>
    );
  }

  // --- Handlers génériques ---
  const handleChange = <T,>(section: keyof AdminData, value: T) => {
    setData((prev) => ({ ...prev, [section]: value }));
  };

  const handleReset = () => {
    localStorage.removeItem(LOCAL_KEY);
    setData(getInitialData());
  };

  // --- UI ---
  return (
    <div className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">&times;</button>
        <button onClick={handleLogout} className="absolute top-4 left-4 text-white text-sm bg-gray-700 px-3 py-1 rounded">Déconnexion</button>
        <h2 className="text-2xl font-bold text-white mb-6">Mode Admin - Édition du Portfolio</h2>
        <div className="flex gap-2 mb-6">
          <button onClick={() => setTab('personal')} className={`px-3 py-1 rounded ${tab==='personal' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>Infos Perso</button>
          <button onClick={() => setTab('projects')} className={`px-3 py-1 rounded ${tab==='projects' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>Projets</button>
          <button onClick={() => setTab('experiences')} className={`px-3 py-1 rounded ${tab==='experiences' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>Expériences</button>
          <button onClick={() => setTab('education')} className={`px-3 py-1 rounded ${tab==='education' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>Parcours</button>
          <button onClick={() => setTab('skills')} className={`px-3 py-1 rounded ${tab==='skills' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}>Compétences</button>
        </div>
        {/* Onglets */}
        {tab === 'personal' && (
          <div>
            <label className="block text-gray-300 mb-2">Nom</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.name} onChange={e => handleChange('personalInfo', { ...data.personalInfo, name: e.target.value })} />
            <label className="block text-gray-300 mb-2">Titre</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.title} onChange={e => handleChange('personalInfo', { ...data.personalInfo, title: e.target.value })} />
            <label className="block text-gray-300 mb-2">Description</label>
            <textarea className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.description} onChange={e => handleChange('personalInfo', { ...data.personalInfo, description: e.target.value })} />
            <label className="block text-gray-300 mb-2">Photo de profil (URL ou chemin)</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.avatar || ''} onChange={e => handleChange('personalInfo', { ...data.personalInfo, avatar: e.target.value })} />
            {data.personalInfo.avatar && (
              <div className="mb-2 flex items-center gap-4">
                <img src={data.personalInfo.avatar} alt="Aperçu avatar" className="w-24 h-24 rounded-full object-cover border-2 border-blue-500" onError={e => (e.currentTarget.style.display = 'none')} />
                <span className="text-gray-400 text-sm">Aperçu</span>
              </div>
            )}
            <label className="block text-gray-300 mb-2">Localisation</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.location} onChange={e => handleChange('personalInfo', { ...data.personalInfo, location: e.target.value })} />
            <label className="block text-gray-300 mb-2">Email</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.contact.email} onChange={e => handleChange('personalInfo', { ...data.personalInfo, contact: { ...data.personalInfo.contact, email: e.target.value } })} />
            <label className="block text-gray-300 mb-2">Téléphone</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.contact.phone || ''} onChange={e => handleChange('personalInfo', { ...data.personalInfo, contact: { ...data.personalInfo.contact, phone: e.target.value } })} />
            <label className="block text-gray-300 mb-2">LinkedIn</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.contact.linkedin || ''} onChange={e => handleChange('personalInfo', { ...data.personalInfo, contact: { ...data.personalInfo.contact, linkedin: e.target.value } })} />
            <label className="block text-gray-300 mb-2">GitHub</label>
            <input className="w-full mb-2 px-3 py-2 rounded bg-gray-800 text-white" value={data.personalInfo.contact.github || ''} onChange={e => handleChange('personalInfo', { ...data.personalInfo, contact: { ...data.personalInfo.contact, github: e.target.value } })} />
          </div>
        )}
        {tab === 'projects' && (
          <ProjectAdmin projects={data.projects} onChange={projs => handleChange('projects', projs)} />
        )}
        {tab === 'experiences' && (
          <ExperienceAdmin experiences={data.experiences} onChange={exps => handleChange('experiences', exps)} />
        )}
        {tab === 'education' && (
          <EducationAdmin education={data.education} onChange={edus => handleChange('education', edus)} />
        )}
        {tab === 'skills' && (
          <SkillAdmin skills={data.skills} onChange={sk => handleChange('skills', sk)} />
        )}
        <div className="mt-8 flex justify-between">
          <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={handleReset}>Réinitialiser</button>
          <button className="px-4 py-2 bg-gray-700 text-white rounded" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
};

// --- Sous-composants d'édition (exemple pour projets, à généraliser) ---
const ProjectAdmin: React.FC<{ projects: Project[]; onChange: (p: Project[]) => void }> = ({ projects, onChange }) => {
  const [edit, setEdit] = useState<Project | null>(null);
  const [form, setForm] = useState<Project | null>(null);

  const handleEdit = (p: Project) => {
    setEdit(p);
    setForm(p);
  };
  const handleSave = () => {
    if (form) {
      if (edit) {
        onChange(projects.map(p => p.id === edit.id ? form : p));
      } else {
        onChange([...projects, { ...form, id: Date.now().toString() }]);
      }
      setEdit(null);
      setForm(null);
    }
  };
  const handleDelete = (id: string) => {
    onChange(projects.filter(p => p.id !== id));
  };
  return (
    <div>
      <h3 className="text-lg text-white mb-2">Projets</h3>
      <ul className="mb-4">
        {projects.map(p => (
          <li key={p.id} className="mb-2 flex items-center justify-between bg-gray-800 rounded p-2">
            <span className="text-white font-medium">{p.title}</span>
            <div>
              <button className="text-blue-400 mr-2" onClick={() => handleEdit(p)}>Modifier</button>
              <button className="text-red-400" onClick={() => handleDelete(p.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mb-4 px-3 py-1 bg-green-600 text-white rounded" onClick={() => { setEdit(null); setForm({ id: '', title: '', description: '', technologies: [], image: '', featured: false }); }}>Ajouter un projet</button>
      {form && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <label className="block text-gray-300 mb-1">Titre</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
          <label className="block text-gray-300 mb-1">Technologies (séparées par virgule)</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.technologies.join(', ')} onChange={e => setForm({ ...form, technologies: e.target.value.split(',').map(s => s.trim()) })} />
          <label className="block text-gray-300 mb-1">Image (chemin)</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} />
          <label className="block text-gray-300 mb-1">Vedette</label>
          <input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} />
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleSave}>Enregistrer</button>
            <button className="px-3 py-1 bg-gray-600 text-white rounded" onClick={() => { setEdit(null); setForm(null); }}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

const ExperienceAdmin: React.FC<{ experiences: Experience[]; onChange: (e: Experience[]) => void }> = ({ experiences, onChange }) => {
  const [edit, setEdit] = useState<Experience | null>(null);
  const [form, setForm] = useState<Experience | null>(null);

  const handleEdit = (e: Experience) => {
    setEdit(e);
    setForm(e);
  };
  const handleSave = () => {
    if (form) {
      if (edit) {
        onChange(experiences.map(e => e.id === edit.id ? form : e));
      } else {
        onChange([...experiences, { ...form, id: Date.now().toString() }]);
      }
      setEdit(null);
      setForm(null);
    }
  };
  const handleDelete = (id: string) => {
    onChange(experiences.filter(e => e.id !== id));
  };
  return (
    <div>
      <h3 className="text-lg text-white mb-2">Expériences</h3>
      <ul className="mb-4">
        {experiences.map(e => (
          <li key={e.id} className="mb-2 flex items-center justify-between bg-gray-800 rounded p-2">
            <span className="text-white font-medium">{e.position} @ {e.company}</span>
            <div>
              <button className="text-blue-400 mr-2" onClick={() => handleEdit(e)}>Modifier</button>
              <button className="text-red-400" onClick={() => handleDelete(e.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mb-4 px-3 py-1 bg-green-600 text-white rounded" onClick={() => { setEdit(null); setForm({ id: '', company: '', position: '', duration: '', description: '', technologies: [], achievements: [] }); }}>Ajouter une expérience</button>
      {form && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <label className="block text-gray-300 mb-1">Poste</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.position} onChange={e => setForm({ ...form, position: e.target.value })} />
          <label className="block text-gray-300 mb-1">Entreprise</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
          <label className="block text-gray-300 mb-1">Durée</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
          <label className="block text-gray-300 mb-1">Technologies (séparées par virgule)</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.technologies.join(', ')} onChange={e => setForm({ ...form, technologies: e.target.value.split(',').map(s => s.trim()) })} />
          <label className="block text-gray-300 mb-1">Réalisations (séparées par point-virgule)</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.achievements.join('; ')} onChange={e => setForm({ ...form, achievements: e.target.value.split(';').map(s => s.trim()) })} />
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleSave}>Enregistrer</button>
            <button className="px-3 py-1 bg-gray-600 text-white rounded" onClick={() => { setEdit(null); setForm(null); }}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

const EducationAdmin: React.FC<{ education: Education[]; onChange: (e: Education[]) => void }> = ({ education, onChange }) => {
  const [edit, setEdit] = useState<Education | null>(null);
  const [form, setForm] = useState<Education | null>(null);

  const handleEdit = (e: Education) => {
    setEdit(e);
    setForm(e);
  };
  const handleSave = () => {
    if (form) {
      if (edit) {
        onChange(education.map(ed => ed.id === edit.id ? form : ed));
      } else {
        onChange([...education, { ...form, id: Date.now().toString() }]);
      }
      setEdit(null);
      setForm(null);
    }
  };
  const handleDelete = (id: string) => {
    onChange(education.filter(e => e.id !== id));
  };
  return (
    <div>
      <h3 className="text-lg text-white mb-2">Parcours académique</h3>
      <ul className="mb-4">
        {education.map(e => (
          <li key={e.id} className="mb-2 flex items-center justify-between bg-gray-800 rounded p-2">
            <span className="text-white font-medium">{e.degree} @ {e.institution}</span>
            <div>
              <button className="text-blue-400 mr-2" onClick={() => handleEdit(e)}>Modifier</button>
              <button className="text-red-400" onClick={() => handleDelete(e.id)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mb-4 px-3 py-1 bg-green-600 text-white rounded" onClick={() => { setEdit(null); setForm({ id: '', institution: '', degree: '', field: '', duration: '', description: '' }); }}>Ajouter un diplôme</button>
      {form && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <label className="block text-gray-300 mb-1">Diplôme</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.degree} onChange={e => setForm({ ...form, degree: e.target.value })} />
          <label className="block text-gray-300 mb-1">Établissement</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.institution} onChange={e => setForm({ ...form, institution: e.target.value })} />
          <label className="block text-gray-300 mb-1">Spécialité</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.field} onChange={e => setForm({ ...form, field: e.target.value })} />
          <label className="block text-gray-300 mb-1">Durée</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleSave}>Enregistrer</button>
            <button className="px-3 py-1 bg-gray-600 text-white rounded" onClick={() => { setEdit(null); setForm(null); }}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

const SkillAdmin: React.FC<{ skills: Skill[]; onChange: (s: Skill[]) => void }> = ({ skills, onChange }) => {
  const [edit, setEdit] = useState<Skill | null>(null);
  const [form, setForm] = useState<Skill | null>(null);

  const handleEdit = (s: Skill) => {
    setEdit(s);
    setForm(s);
  };
  const handleSave = () => {
    if (form) {
      if (edit) {
        onChange(skills.map(sk => sk.name === edit.name ? form : sk));
      } else {
        onChange([...skills, form]);
      }
      setEdit(null);
      setForm(null);
    }
  };
  const handleDelete = (name: string) => {
    onChange(skills.filter(s => s.name !== name));
  };
  return (
    <div>
      <h3 className="text-lg text-white mb-2">Compétences</h3>
      <ul className="mb-4">
        {skills.map(s => (
          <li key={s.name} className="mb-2 flex items-center justify-between bg-gray-800 rounded p-2">
            <span className="text-white font-medium">{s.name} ({s.level}%)</span>
            <div>
              <button className="text-blue-400 mr-2" onClick={() => handleEdit(s)}>Modifier</button>
              <button className="text-red-400" onClick={() => handleDelete(s.name)}>Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mb-4 px-3 py-1 bg-green-600 text-white rounded" onClick={() => { setEdit(null); setForm({ name: '', level: 50, category: 'other' }); }}>Ajouter une compétence</button>
      {form && (
        <div className="bg-gray-800 p-4 rounded mb-4">
          <label className="block text-gray-300 mb-1">Nom</label>
          <input className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <label className="block text-gray-300 mb-1">Niveau (%)</label>
          <input type="number" min={0} max={100} className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.level} onChange={e => setForm({ ...form, level: Number(e.target.value) })} />
          <label className="block text-gray-300 mb-1">Catégorie</label>
          <select className="w-full mb-2 px-2 py-1 rounded bg-gray-700 text-white" value={form.category} onChange={e => setForm({ ...form, category: e.target.value as Skill['category'] })}>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="database">Base de données</option>
            <option value="devops">DevOps</option>
            <option value="other">Autres</option>
          </select>
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleSave}>Enregistrer</button>
            <button className="px-3 py-1 bg-gray-600 text-white rounded" onClick={() => { setEdit(null); setForm(null); }}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel; 