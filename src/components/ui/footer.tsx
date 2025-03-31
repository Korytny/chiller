
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './logo';
import { companyInfo } from '@/lib/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-gray-800 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="max-w-xs text-sm text-gray-300">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={companyInfo.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={companyInfo.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Проекты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-primary" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a 
                  href={`tel:${companyInfo.phone}`} 
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a 
                  href={`mailto:${companyInfo.email}`} 
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Рассылка</h3>
            <p className="mb-4 text-sm text-gray-300">
              Подпишитесь на нашу рассылку, чтобы получать обновления о новых проектах и предложениях.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="rounded-md border border-gray-700 bg-gray-700 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                required
              />
              <button type="submit" className="btn-primary">
                Подписаться
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} {companyInfo.name}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
