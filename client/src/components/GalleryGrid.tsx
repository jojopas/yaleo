import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Gallery images - shuffled mix of all photos
const galleryImages = [
  // New photos (June 2026)
  "yaleo-new-1.jpg",
  "yaleo-new-2.jpg",
  "yaleo-new-3.jpg",
  "yaleo-new-4.jpg",
  "yaleo-new-5.jpg",
  "yaleo-new-6.jpg",
  "yaleo-new-7.jpg",
  "yaleo-new-8.jpg",
  "yaleo-new-9.jpg",
  "yaleo-new-10.jpg",
  "yaleo-new-11.jpg",
  "yaleo-new-12.jpg",
  "yaleo-new-13.jpg",
  "yaleo-new-14.jpg",
  "yaleo-new-15.jpg",
  "yaleo-new-16.jpg",
  "yaleo-new-17.jpg",
  "yaleo-new-18.jpg",
  "yaleo-new-19.jpg",
  "yaleo-new-20.jpg",
  "yaleo-new-21.jpg",
  "yaleo-new-22.jpg",
  "yaleo-new-23.jpg",
  "yaleo-new-24.jpg",
  // Group shots featured first
  "group shot -2.jpg",
  "grpip--shot--1.jpg",
  // Mixed gallery - new and classic photos interleaved
  "Yaleo25-76.jpg",
  "IMG_1668.JPG",
  "Yaleo25-38.jpg",
  "IMG_0446.jpg",
  "yaleo1225-77.jpg",
  "Yaleo25-93.jpg",
  "IMG_1664.JPG",
  "Yaleo25-53.jpg",
  "IMG_0432.jpeg",
  "yaleo1225-75.jpg",
  "Yaleo25-79.jpg",
  "IMG_3164.JPG",
  "yaleo1225-71.jpg",
  "Yaleo25-27.jpg",
  "IMG_0410.jpeg",
  "IMG_1660.JPG",
  "Yaleo25-64.jpg",
  "yaleo1225-74.jpg",
  "IMG_0444.jpg",
  "Yaleo25-46.jpg",
  "yaleo1225-73.jpg",
  "IMG_7898.jpg",
  "Yaleo25-98.jpg",
  "yaleo1225-89.jpg",
  "IMG_1652.JPG",
  "Yaleo25-35.jpg",
  "yaleo1225-102.jpg",
  "IMG_0412.jpg",
  "Yaleo25-82.jpg",
  "yaleo1225-84.jpg",
  "IMG_1663.JPG",
  "Yaleo25-56.jpg",
  "yaleo1225-81.jpg",
  "IMG_0436.jpg",
  "Yaleo25-99.jpg",
  "yaleo1225-80.jpg",
  "IMG_1655.JPG",
  "Yaleo25-33.jpg",
  "yaleo1225-94.jpg",
  "IMG_0427.jpg",
  "Yaleo25-73.jpg",
  "yaleo1225-92.jpg",
  "471823028_122132867636515476_5593223506300339203_n.jpg",
  "Yaleo25-62.jpg",
  "yaleo1225-98.jpg",
  "IMG_1666.JPG",
  "Yaleo25-45.jpg",
  "yaleo1225-47.jpg",
  "IMG_0395.jpeg",
  "Yaleo25-87.jpg",
  "yaleo1225-38.jpg",
  "IMG_1667.JPG",
  "Yaleo25-58.jpg",
  "yaleo1225-37.jpg",
  "IMG_3156.JPG",
  "Yaleo25-34.JPEG",
  "yaleo1225-24.jpg",
  "IMG_0409.jpeg",
  "Yaleo25-74.jpg",
  "yaleo1225-17.jpg",
  "IMG_1662.JPG",
  "Yaleo25-51.jpg",
  "yaleo1225-13.jpg",
  "IMG_3176.JPG",
  "Yaleo25-83.jpg",
  "yaleo1225-6.jpg",
  "IMG_1653.JPG",
  "Yaleo25-36.jpg",
  "Yaleo25-63.jpg",
  "Yaleo25-32.jpg",
  "Yaleo25-78.jpg",
  "Yaleo25-55.jpg",
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

