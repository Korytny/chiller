
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { applicationTypes } from '@/lib/data';

const ApplicationTypes = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden gradient-bg-1">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
            Возможности применения
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Варианты использования наших шатров</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Наши деревянные конструкции универсальны и могут быть адаптированы под различные нужды.
            Вот несколько популярных вариантов применения:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applicationTypes.map((type) => (
            <div 
              key={type.id} 
              className="relative overflow-hidden rounded-lg hover-scale bg-white shadow-md border border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-bold">{type.title}</h3>
                <p className="mb-4 text-muted-foreground">{type.description}</p>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 text-primary font-medium"
                >
                  Узнать больше
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationTypes;
