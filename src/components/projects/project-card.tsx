
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-white transition-all duration-500 hover:shadow-xl">
      <Link to={`/projects/${project.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 right-4 z-20 rounded-full bg-white p-2 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight size={18} className="text-primary" />
          </div>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {project.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
