
import React, { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './project-card';

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="container-custom py-12">
      {/* Category filter */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1.5 text-sm transition-all ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {category === 'all' ? 'Все проекты' : category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: `${filteredProjects.indexOf(project) * 0.1}s`,
              animationFillMode: 'forwards'
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="my-20 text-center">
          <p className="text-xl text-muted-foreground">Проектов в данной категории не найдено.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
