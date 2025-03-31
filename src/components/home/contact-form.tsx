
import React, { useState } from 'react';
import { Check, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/lib/data';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      toast({
        title: "Форма отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 gradient-bg-5">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
              Связаться с нами
            </span>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Обсудим ваш проект</h2>
            <p className="mb-8 max-w-md text-muted-foreground">
              Готовы воплотить в жизнь вашу мечту о качественной деревянной конструкции? 
              Заполните форму, и мы свяжемся с вами для обсуждения деталей.
            </p>
            
            <div className="mb-6 space-y-4">
              <div className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-primary" />
                <div>
                  <h3 className="text-base font-medium">Телефон</h3>
                  <a 
                    href={`tel:${companyInfo.phone}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-primary" />
                <div>
                  <h3 className="text-base font-medium">Email</h3>
                  <a 
                    href={`mailto:${companyInfo.email}`} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary" />
                <div>
                  <h3 className="text-base font-medium">Адрес</h3>
                  <p className="text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Введите ваш телефон"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="Опишите ваш проект"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span>Отправка...</span>
                ) : isSuccess ? (
                  <>
                    <Check size={18} /> 
                    <span>Отправлено</span>
                  </>
                ) : (
                  <span>Отправить заявку</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
