import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-600 relative overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <span>by</span>
        <a
          href="https://juz1.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:text-violet-700 underline decoration-dotted relative group"
        >
          Juzi
          <span className="absolute inset-x-0 -bottom-0.5 h-px bg-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
        </a>
      </div>
      <p className="mt-2">Copyright © 2024</p>
    </footer>
  );
};