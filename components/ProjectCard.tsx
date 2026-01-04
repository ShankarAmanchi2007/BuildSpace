
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart } from 'lucide-react';
import { Project } from '../types';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-3 py-1 text-xs font-bold rounded-full ${project.type === 'Free' ? 'bg-emerald-500 text-black' : 'bg-amber-500 text-black'}`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-500 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-zinc-500 text-sm">
            <Heart size={14} fill="currentColor" className="text-zinc-600" />
            {project.likes}
          </div>
        </div>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 text-[10px] font-medium bg-zinc-800 text-zinc-300 rounded uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <Link to={`/project/${project.id}`} className="flex-1">
            <Button variant="secondary" fullWidth className="!text-sm">Details</Button>
          </Link>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" fullWidth className="!text-sm flex items-center justify-center gap-2">
              <ExternalLink size={14} /> Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
