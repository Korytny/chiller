
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './logo';
import { companyInfo } from '@/lib/data';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/80 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'relative px-1 py-2 text-sm font-medium transition-colors',
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-foreground',
                      'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="btn-primary inline-flex items-center"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden animate-fade-in">
          <nav className="container-custom py-5">
            <ul className="flex flex-col space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'block py-2 text-lg font-medium transition-colors',
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="btn-primary inline-flex w-full justify-center"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
