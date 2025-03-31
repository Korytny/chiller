
import React from 'react';
import { Gem, Compass, Award, Leaf } from 'lucide-react';
import { companyInfo } from '@/lib/data';

const AboutSection = () => {
  const values = [
    {
      icon: <Gem className="text-primary" size={24} />,
      title: companyInfo.values[0].title,
      description: companyInfo.values[0].description,
    },
    {
      icon: <Leaf className="text-primary" size={24} />,
      title: companyInfo.values[1].title,
      description: companyInfo.values[1].description,
    },
    {
      icon: <Compass className="text-primary" size={24} />,
      title: companyInfo.values[2].title,
      description: companyInfo.values[2].description,
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: companyInfo.values[3].title,
      description: companyInfo.values[3].description,
    },
  ];

  return (
    <section className="section bg-texture">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg md:ml-12 border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                alt="Craftsman working on wooden structure"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-64 w-64 rounded-lg bg-accent md:block"></div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
              О нас
            </span>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Самые красивые шатры с 2020 года
            </h2>
            <p className="mb-6 text-muted-foreground">
              {companyInfo.description}
            </p>
            <p className="mb-8 text-muted-foreground">
              {companyInfo.mission}
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 rounded-md bg-background p-2 shadow-sm border border-gray-700">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
