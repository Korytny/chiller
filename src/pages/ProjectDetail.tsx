
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import Gallery from '@/components/project-detail/gallery';
import ProjectInfo from '@/components/project-detail/project-info';
import { projects } from '@/lib/data';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find(p => p.id === id));
  const navigate = useNavigate();

  // Redirect if project not found
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return null;

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 md:pt-36">
        <div className="container-custom">
          <Link 
            to="/projects" 
            className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft size={16} className="mr-1" />
            Назад к проектам
          </Link>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Gallery - 8 columns on large screens */}
            <div className="lg:col-span-8">
              <Gallery images={project.images} title={project.title} />
            </div>
            
            {/* Project Info - 4 columns on large screens */}
            <div className="lg:col-span-4">
              <ProjectInfo project={project} />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default ProjectDetail;
