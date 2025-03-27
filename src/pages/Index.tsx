
import React, { useEffect } from 'react';
import Hero from '@/components/home/hero';
import FeaturedProjects from '@/components/home/featured-projects';
import AboutSection from '@/components/home/about-section';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
