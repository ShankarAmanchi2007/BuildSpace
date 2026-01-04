
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { MOCK_PROJECTS } from '../constants';
import { Project } from '../types';
import { Plus, BarChart3, Eye, Download, Star, Settings, Trash2, Edit2, X, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export const DashboardPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS.slice(0, 2));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Modal Form State
  const [newProject, setNewProject] = useState({
    title: '',
    techStack: '',
    shortDescription: '',
    type: 'Free' as 'Free' | 'Paid'
  });

  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const project: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title: newProject.title,
      shortDescription: newProject.shortDescription,
      longDescription: 'This is a detailed description of your new project.',
      image: `https://picsum.photos/seed/${newProject.title}/800/600`,
      techStack: newProject.techStack.split(',').map(s => s.trim()),
      type: newProject.type,
      developerId: 'dev-1',
      demoUrl: '#',
      likes: 0
    };
    setProjects([project, ...projects]);
    setIsModalOpen(false);
    setNewProject({ title: '', techStack: '', shortDescription: '', type: 'Free' });
  };

  const generateAIDescription = async () => {
    if (!newProject.title) return;
    setIsGenerating(true);
    try {
      // Initialize GoogleGenAI strictly with process.env.API_KEY as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Write a professional, 1-sentence catchy marketing description for a developer project named "${newProject.title}" built with "${newProject.techStack}". Keep it under 150 characters.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      
      // Use the .text property directly from the response
      const text = response.text || "A revolutionary project built with modern tech.";
      setNewProject(prev => ({ ...prev, shortDescription: text.trim() }));
    } catch (error) {
      console.error("AI Generation failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">Developer Dashboard</h1>
            <p className="text-zinc-500">Manage your submissions and track your project performance.</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 !px-8 !py-4 text-lg font-bold">
            <Plus size={20} /> Add New Project
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Views', value: '45.2k', icon: Eye, color: 'text-blue-500' },
            { label: 'Project Likes', value: '2.1k', icon: Star, color: 'text-amber-500' },
            { label: 'Demo Taps', value: '890', icon: BarChart3, color: 'text-emerald-500' },
            { label: 'Sales/Downloads', value: '142', icon: Download, color: 'text-purple-500' },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 bg-zinc-950 rounded-2xl ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <span className="text-emerald-500 text-xs font-bold">+12%</span>
              </div>
              <span className="block text-2xl font-black text-white">{stat.value}</span>
              <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Projects List */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="p-8 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">My Projects</h2>
            <Button variant="ghost" className="text-sm">View All</Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 text-[10px] uppercase font-bold text-zinc-500 tracking-widest">
                  <th className="px-8 py-4">Project</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Type</th>
                  <th className="px-8 py-4">Likes</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {projects.map(project => (
                  <tr key={project.id} className="group hover:bg-zinc-950 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <img src={project.image} alt={project.title} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <span className="block font-bold text-white group-hover:text-emerald-500 transition-colors">{project.title}</span>
                          <span className="text-xs text-zinc-500">{project.techStack.slice(0, 2).join(', ')}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        Active
                      </span>
                    </td>
                    <td className="px-8 py-6 text-zinc-300 font-medium">{project.type}</td>
                    <td className="px-8 py-6 text-zinc-300 font-medium">{project.likes}</td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="secondary" className="!p-2"><Edit2 size={16} /></Button>
                        <Button onClick={() => handleDelete(project.id)} variant="secondary" className="!p-2 text-red-500 hover:text-red-400">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-[2.5rem] shadow-2xl p-8 relative overflow-hidden">
             <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
               <X size={24} />
             </button>

             <h2 className="text-2xl font-black text-white mb-2">Add New Project</h2>
             <p className="text-zinc-500 text-sm mb-8">Fill in the details to showcase your work to the community.</p>

             <form onSubmit={handleAddProject} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Title</label>
                    <input 
                      required
                      value={newProject.title}
                      onChange={e => setNewProject({...newProject, title: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                      placeholder="e.g. Neon Dash"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Type</label>
                    <select 
                      value={newProject.type}
                      onChange={e => setNewProject({...newProject, type: e.target.value as 'Free' | 'Paid'})}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Free">Free</option>
                      <option value="Paid">Paid</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Tech Stack (comma separated)</label>
                  <input 
                    required
                    value={newProject.techStack}
                    onChange={e => setNewProject({...newProject, techStack: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                    placeholder="React, Node.js, Tailwind"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Short Description</label>
                    <button 
                      type="button"
                      onClick={generateAIDescription}
                      disabled={isGenerating || !newProject.title}
                      className="text-emerald-500 text-xs font-bold flex items-center gap-1 hover:text-emerald-400 disabled:opacity-50 transition-colors"
                    >
                      {isGenerating ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                      AI Suggest
                    </button>
                  </div>
                  <textarea 
                    required
                    value={newProject.shortDescription}
                    onChange={e => setNewProject({...newProject, shortDescription: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 h-24 resize-none" 
                    placeholder="Briefly explain what this project does..."
                  />
                </div>

                <div className="pt-4 flex gap-4">
                  <Button type="submit" fullWidth className="py-4">Upload Project</Button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};
