
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '@/lib/data';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 700, 0.2);
      const translateY = scrollY * 0.4;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/hd11.jpg"
          alt="Фоновое изображение деревянных конструкций"
          className="h-full w-full object-cover"
          onError={(e) => console.error('Failed to load hero image', e)}
        />
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="container relative z-10 px-4 pb-16 text-center"
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-blue-950 sm:text-5xl md:text-6xl">
            Уникальные деревянные <span className="block">шатры и навесы</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-blue-800 md:text-lg">
            Мы проектируем и создаем красивые деревянные конструкции, сочетающие в себе традиционное мастерство и современный дизайн, создавая идеальные пространства для любого окружения.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-950 transition-all hover:bg-opacity-90"
            >
              Смотреть проекты
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center gap-2 rounded-md bg-transparent px-6 py-3 text-base font-semibold text-white ring-1 ring-white/60 transition-all hover:bg-white/10"
            >
              Связаться с нами
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-14 w-8 rounded-full border-2 border-white/60 p-1">
          <div className="h-2 w-2 animate-[slow-spin_5s_linear_infinite] rounded-full bg-white delay-1000" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
