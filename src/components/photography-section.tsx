import BlurFade from "@/components/magicui/blur-fade";
import SectionLabel from "@/components/ui/section-label";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // Import navigation icons
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

const images = [
  "/photography/covid.JPEG",
  "/photography/camera-water.JPEG",
  "/photography/boat.JPEG",
  "/photography/camera.JPEG",
  "/photography/human-bird.JPEG",
  "/photography/jeeps.JPEG",
  "/photography/levitate.JPEG",
  "/photography/sparks.JPEG",
  "/photography/road-love.JPEG",
];

export default function PhotographySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (image: string) => {
    const index = images.indexOf(image);
    setSelectedIndex(index);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    const newIndex = direction === 'prev' 
      ? (selectedIndex - 1 + images.length) % images.length 
      : (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (event.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, navigateImage]);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="photography" className="space-y-12 w-full py-12">
      <BlurFade delay={0.04 * 17}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <SectionLabel text="Photography" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Capturing Moments
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Some of my personal photography and digital art creations.
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={0.04 * 18}>
        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group aspect-square relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image
                src={image}
                alt={`Photography ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Full Size
                </span>
              </div>
            </div>
          ))}
          {showHint && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full animate-pulse">
                Click an image to view full size
              </div>
            </div>
          )}
        </div>
      </BlurFade>
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative z-10 max-w-4xl max-h-[90vh] w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Selected photography"
              layout="responsive"
              width={1200}
              height={800}
              objectFit="contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
              onClick={() => navigateImage('prev')}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 transition-colors"
              onClick={() => navigateImage('next')}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}