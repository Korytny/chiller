
import React, { useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import ProjectGrid from '@/components/projects/project-grid';

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom text-center">
          <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
            Our Work
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Projects</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore our collection of premium wooden structures, each crafted with care and precision to create beautiful outdoor living spaces.
          </p>
        </div>
      </section>
      
      {/* Project grid with filters */}
      <ProjectGrid />
      
      <Footer />
    </main>
  );
};

export default Projects;
