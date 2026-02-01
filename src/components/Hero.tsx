import Image from 'next/image'
import { Property } from '@/types/api'

interface HeroProps {
  property: Property
}

export default function Hero({ property }: HeroProps) {
  const heroImage = property.images[0] || {
    url: '/images/placeholder.jpg',
    alt: 'Property image'
  }

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {property.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            {property.location.city}, {property.location.state}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#property"
              className="btn-primary text-lg px-8 py-4"
            >
              View Details
            </a>
            <a
              href="https://www.airbnb.com/rooms/34537012"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-lg hover:bg-opacity-30 transition-all duration-200 text-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a
          href="#property"
          className="text-white animate-bounce"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}