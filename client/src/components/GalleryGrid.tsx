import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Gallery images - add your photos here
const galleryImages = [
  "IMG_0395.jpeg",
  "IMG_0409.jpeg",
  "IMG_0410.jpeg",
  "IMG_0412.jpg",
  "IMG_0427.jpg",
  "IMG_0432.jpeg",
  "IMG_0436.jpg",
  "IMG_0444.jpg",
  "IMG_0446.jpg",
  "Yaleo25-27.jpg",
  "Yaleo25-32.jpg",
  "Yaleo25-33.jpg",
  "Yaleo25-34.JPEG",
  "Yaleo25-35.jpg",
  "Yaleo25-36.jpg",
  "Yaleo25-38.jpg",
  "Yaleo25-45.jpg",
  "Yaleo25-46.jpg",
  "Yaleo25-51.jpg",
  "Yaleo25-53.jpg",
  "Yaleo25-55.jpg",
  "Yaleo25-56.jpg",
  "Yaleo25-58.jpg",
  "Yaleo25-62.jpg",
  "Yaleo25-63.jpg",
  "Yaleo25-64.jpg",
  "Yaleo25-73.jpg",
  "Yaleo25-74.jpg",
  "Yaleo25-76.jpg",
  "Yaleo25-78.jpg",
  "Yaleo25-79.jpg",
  "Yaleo25-82.jpg",
  "Yaleo25-83.jpg",
  "Yaleo25-87.jpg",
  "Yaleo25-93.jpg",
  "Yaleo25-98.jpg",
  "Yaleo25-99.jpg",
];

export default function GalleryGrid() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Handle image load
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev === null ? null : (prev + 1) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  // Navigate to previous image
  const goToPrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  // Navigate to next image
  const goToNext = () => {
    setSelectedImageIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all hover:scale-105 cursor-pointer group relative"
            onClick={() => setSelectedImageIndex(index)}
          >
            {/* Skeleton Loader */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 bg-gradient-to-br from-card/50 via-card/30 to-card/50 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
              </div>
            )}
            
            {/* Image */}
            <img
              src={`/gallery/${image}`}
              alt={`Yaleo performance ${index + 1}`}
              className={`w-full h-full object-cover group-hover:opacity-90 transition-opacity ${
                loadedImages.has(index) ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(index)}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2 rounded-full hover:bg-white/10"
            onClick={() => setSelectedImageIndex(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 p-2 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 p-2 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Main Image */}
          <img
            src={`/gallery/${galleryImages[selectedImageIndex]}`}
            alt={`Yaleo performance ${selectedImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

