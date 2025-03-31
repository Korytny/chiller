
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
                src="/img/bs1.jpg"
                alt="Наша команда мастеров"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden h-64 w-64 rounded-lg md:block"
              style={{
                backgroundImage: "url('/img/bs2.JPG')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>
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
                  <div className="mr-4 rounded-md bg-background p-2 shadow-sm">
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
