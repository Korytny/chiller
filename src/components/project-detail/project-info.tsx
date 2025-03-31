
import React from 'react';
import { MapPin, Calendar, Maximize2, Phone } from 'lucide-react';
import { Project, companyInfo } from '@/lib/data';

interface ProjectInfoProps {
  project: Project;
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">{project.title}</h1>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {project.category}
          </span>
          <span className="inline-flex items-center text-sm text-muted-foreground">
            <MapPin size={16} className="mr-1" />
            {project.location}
          </span>
          <span className="inline-flex items-center text-sm text-muted-foreground">
            <Calendar size={16} className="mr-1" />
            {project.year}
          </span>
          <span className="inline-flex items-center text-sm text-muted-foreground">
            <Maximize2 size={16} className="mr-1" />
            {project.size}
          </span>
        </div>

        <div className="prose max-w-none text-muted-foreground">
          <p className="text-lg">{project.description}</p>
        </div>
      </div>

      <div className="rounded-lg bg-secondary p-6">
        <h3 className="mb-4 text-xl font-semibold">Интересует похожий проект?</h3>
        <p className="mb-4 text-muted-foreground">
          Свяжитесь с нами сегодня, чтобы обсудить, как мы можем создать для вас индивидуальную деревянную конструкцию.
        </p>
        <a
          href={`tel:${companyInfo.phone}`}
          className="btn-primary inline-flex items-center gap-2"
        >
          <Phone size={16} />
          Связаться с нами
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <h4 className="mb-2 text-sm font-medium uppercase text-muted-foreground">
            Категория
          </h4>
          <p className="text-lg font-medium">{project.category}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <h4 className="mb-2 text-sm font-medium uppercase text-muted-foreground">
            Местоположение
          </h4>
          <p className="text-lg font-medium">{project.location}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-center">
          <h4 className="mb-2 text-sm font-medium uppercase text-muted-foreground">
            Год завершения
          </h4>
          <p className="text-lg font-medium">{project.year}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
