
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  images: string[];
  title: string;
}

const Gallery = ({ images, title }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div>
      {/* Featured image */}
      <div 
        className="relative mb-4 h-96 cursor-pointer overflow-hidden rounded-lg"
        onClick={() => openLightbox(0)}
      >
        <img
          src={images[0]}
          alt={`${title} - main view`}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100">
          <span className="rounded-md bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            View Gallery
          </span>
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative h-40 cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightbox(index + 1)}
          >
            <img
              src={image}
              alt={`${title} - view ${index + 2}`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <button
            className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="relative mx-auto max-h-[90vh] max-w-[90vw]">
            <img
              src={images[currentImageIndex]}
              alt={`${title} - view ${currentImageIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
