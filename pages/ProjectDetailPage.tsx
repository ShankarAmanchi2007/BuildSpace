
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { MOCK_PROJECTS, MOCK_DEVELOPERS } from '../constants';
import { Button } from '../components/Button';
import { ExternalLink, Github, MessageCircle, ShoppingBag, ArrowLeft, Heart, Share2 } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const project = useMemo(() => MOCK_PROJECTS.find(p => p.id === id), [id]);
  const developer = useMemo(() => MOCK_DEVELOPERS.find(d => d.id === project?.developerId), [project]);

  if (!project) return <div className="p-10 text-white">Project not found.</div>;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <Link to="/home" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors mb-8 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Feed
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h1 className="text-4xl font-black text-white">{project.title}</h1>
                <div className="flex gap-2">
                   <Button variant="secondary" className="!p-3"><Heart size={20} /></Button>
                   <Button variant="secondary" className="!p-3"><Share2 size={20} /></Button>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  {project.longDescription}
                </p>
              </div>

              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-emerald-500">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Actions (Right) */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sticky top-28">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest block mb-1">Pricing</span>
                  <span className="text-3xl font-black text-white">{project.type === 'Free' ? 'FREE' : project.price}</span>
                </div>
                <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold">
                  Instant Access
                </div>
              </div>

              <div className="space-y-4">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button fullWidth className="py-4 text-lg flex items-center justify-center gap-3 mb-4">
                    <ExternalLink size={20} /> Live Demo
                  </Button>
                </a>
                
                {project.type === 'Paid' && (
                   <Button fullWidth variant="outline" className="py-4 text-lg flex items-center justify-center gap-3">
                    <ShoppingBag size={20} /> Purchase Now
                  </Button>
                )}

                <div className="pt-8 mt-8 border-t border-zinc-800">
                  <Link to={`/profile/${developer?.id}`} className="flex items-center gap-4 group">
                    <img src={developer?.avatar} alt={developer?.name} className="w-12 h-12 rounded-full ring-2 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all" />
                    <div>
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest block">Created By</span>
                      <span className="text-white font-bold block group-hover:text-emerald-500 transition-colors">{developer?.name}</span>
                    </div>
                  </Link>
                  <p className="text-zinc-500 text-sm mt-4 line-clamp-2">
                    {developer?.bio}
                  </p>
                  
                  <div className="flex gap-2 mt-6">
                    <Button variant="secondary" className="flex-1 text-sm flex items-center justify-center gap-2">
                      <MessageCircle size={16} /> Contact
                    </Button>
                    <a href={developer?.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="secondary" className="w-full text-sm flex items-center justify-center gap-2">
                        <Github size={16} /> GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
