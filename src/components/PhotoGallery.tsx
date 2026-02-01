import { useState } from 'react'
import Image from 'next/image'
import { Image as ImageType } from '@/types/api'

interface PhotoGalleryProps {
  images: ImageType[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null)

  // Skip the first image (hero image) for the gallery
  const galleryImages = images.slice(1)

  return (
    <section id="gallery" className="bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Photo Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <p className="text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="object-contain max-h-screen"
              />
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                  <p>{selectedImage.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}