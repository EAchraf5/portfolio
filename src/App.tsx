import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      {/* Bouton Admin flottant */}
      <button
        className="fixed bottom-6 right-6 z-[999] bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700 transition-all"
        onClick={() => setAdminOpen(true)}
        title="Mode Admin"
      >
        Admin
      </button>
      {adminOpen && <AdminPanel onClose={() => setAdminOpen(false)} />}
    </div>
  );
};

export default App; 