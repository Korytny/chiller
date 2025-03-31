
import React from 'react';
import { projectImages } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectCarousel = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-xs font-medium">
            Наши проекты
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Выполненные работы</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ознакомьтесь с некоторыми из наших недавно реализованных проектов. 
            Каждая конструкция уникальна и создана с учетом индивидуальных пожеланий заказчика.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projectImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="p-3 bg-white">
                        <h3 className="font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static translate-y-0 mx-2" />
              <CarouselNext className="static translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
