
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/data';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <section className="section bg-secondary">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
            Наши работы
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Избранные проекты</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Познакомьтесь с нашими лучшими деревянными конструкциями, каждая из которых создана с тщательным вниманием к деталям и гармонично вписывается в окружающую среду.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl bg-background transition-all duration-300 hover:shadow-lg"
            >
              <Link to={`/projects/${project.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center text-sm text-primary">
                    <span className="font-medium">Смотреть проект</span>
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Смотреть все проекты
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
