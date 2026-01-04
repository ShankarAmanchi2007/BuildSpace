
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { MOCK_DEVELOPERS, MOCK_PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';
import { Github, Twitter, Linkedin, MessageSquare, Briefcase } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { id } = useParams();
  const developer = useMemo(() => MOCK_DEVELOPERS.find(d => d.id === id), [id]);
  const projects = useMemo(() => MOCK_PROJECTS.filter(p => p.developerId === id), [id]);

  if (!developer) return <div className="p-10 text-white">Developer not found.</div>;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Profile Header Hero */}
      <div className="relative h-64 bg-zinc-900 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute -bottom-1/2 left-1/4 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full"></div>
      </div>

      <main className="container mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Info Column (Left) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center lg:text-left">
              <img src={developer.avatar} alt={developer.name} className="w-32 h-32 rounded-3xl mx-auto lg:mx-0 mb-6 border-4 border-black ring-2 ring-emerald-500/50" />
              <h1 className="text-2xl font-black text-white mb-2">{developer.name}</h1>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                {developer.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {developer.bio}
              </p>
              
              <div className="space-y-3">
                <Button fullWidth className="flex items-center justify-center gap-2">
                  <MessageSquare size={18} /> Hire Me
                </Button>
                <div className="flex gap-2">
                   <Button variant="secondary" className="flex-1 !p-2 flex items-center justify-center"><Github size={20} /></Button>
                   <Button variant="secondary" className="flex-1 !p-2 flex items-center justify-center"><Twitter size={20} /></Button>
                   <Button variant="secondary" className="flex-1 !p-2 flex items-center justify-center"><Linkedin size={20} /></Button>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800 flex justify-between">
                <div className="text-center flex-1 border-r border-zinc-800">
                  <span className="block text-xl font-bold text-white">{developer.projectsCount}</span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Projects</span>
                </div>
                <div className="text-center flex-1">
                  <span className="block text-xl font-bold text-white">4.9k</span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Followers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Column (Right) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-emerald-500">
                  <Briefcase size={24} />
                </div>
                <div>
                   <h2 className="text-2xl font-black text-white tracking-tight">Portfolio</h2>
                   <p className="text-zinc-500 text-sm">Showing {projects.length} featured works</p>
                </div>
              </div>
              <div className="hidden sm:flex gap-4">
                <select className="bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm px-4 py-2 rounded-xl focus:outline-none focus:border-emerald-500">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
