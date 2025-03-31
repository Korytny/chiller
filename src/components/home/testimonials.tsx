
import React from 'react';
import { testimonials } from '@/lib/data';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 gradient-bg-4">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
            Отзывы
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Что говорят наши клиенты</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Мы гордимся тем, что наши клиенты остаются довольны нашей работой.
            Вот что они говорят о нашей компании и наших проектах.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex flex-col bg-white rounded-lg p-6 shadow-sm hover-scale border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border border-gray-700">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={index < testimonial.rating ? "fill-gold text-gold" : "text-muted"}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground flex-1">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
