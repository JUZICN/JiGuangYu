import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <ParticleBackground />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;