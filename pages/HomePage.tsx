
import React from 'react';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { MOCK_PROJECTS } from '../constants';
import { Terminal, Code2, Globe } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Banner */}
        <div className="relative mb-16 p-8 rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 overflow-hidden text-center md:text-left">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              The ultimate developer community
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
              Showcase your <span className="text-emerald-500">Code.</span><br />
              Launch your <span className="text-emerald-500">Ideas.</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Explore a curated feed of cutting-edge developer projects. Buy templates, try live demos, and connect with elite builders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <Terminal size={18} className="text-emerald-500" />
                Open Source
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <Code2 size={18} className="text-emerald-500" />
                Production Ready
              </div>
              <div className="flex items-center gap-2 text-zinc-500 text-sm">
                <Globe size={18} className="text-emerald-500" />
                Live Demos
              </div>
            </div>
          </div>
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full"></div>
        </div>

        {/* Categories / Filters */}
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {['All Projects', 'Dashboards', 'Mobile Apps', 'Web Experiments', 'Templates', 'Open Source'].map((tab, i) => (
            <button 
              key={tab}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'bg-zinc-900 text-zinc-500 hover:text-white border border-zinc-800'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};
