import React, { useEffect, useRef } from 'react';
import { Code2, Sparkles, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-title');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none" />
      <div className="relative z-10 text-center px-4 transform">
        <div className="flex items-center justify-center mb-6 animate-float">
          <Code2 className="w-12 h-12 text-violet-600 mr-2 animate-pulse" />
          <Sparkles className="w-8 h-8 text-violet-400 animate-spin-slow" />
        </div>
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 mb-6 opacity-0"
        >
          极光域
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 animate-fade-in">
          探索技术的无限可能，创造数字世界的璀璨未来
        </p>
        <button
          onClick={scrollToFeatures}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all transform hover:scale-105 opacity-0 animate-fade-in-delayed"
        >
          <span className="font-medium">探索更多</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
    </section>
  );
};