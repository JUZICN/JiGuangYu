import React from 'react';
import { Cpu, Globe, Lightbulb, Code, Rocket, Palette } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: '技术创新',
    description: '运用前沿技术，打造卓越解决方案',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: '全球视野',
    description: '连接世界，创造无界数字体验',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: '创意设计',
    description: '融合艺术与科技，实现独特创意',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: '优质代码',
    description: '精心打磨每一行代码，追求卓越品质',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: '快速迭代',
    description: '敏捷开发，持续优化升级',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: '用户体验',
    description: '专注细节，打造极致体验',
    gradient: 'from-indigo-500 to-violet-500'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            我们的优势
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div 
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 text-white transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-violet-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};