import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Property, Review } from '@/types/api'
import { apiClient } from '@/lib/api'
import Hero from '@/components/Hero'
import PropertyDetails from '@/components/PropertyDetails'
import PhotoGallery from '@/components/PhotoGallery'
import Reviews from '@/components/Reviews'
import Navigation from '@/components/Navigation'
import BookingPlatforms from '@/components/BookingPlatforms'

export default function Home() {
  const [property, setProperty] = useState<Property | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [propertyData, reviewsData] = await Promise.all([
          apiClient.getProperty(),
          apiClient.getReviews()
        ])
        setProperty(propertyData)
        setReviews(reviewsData)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Available</h1>
          <p className="text-gray-600">We're having trouble loading the property information.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <Hero property={property} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
            <div className="lg:col-span-2 space-y-8">
              <PropertyDetails property={property} />
              <PhotoGallery images={property.images} />
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <BookingPlatforms />
              </div>
            </div>
          </div>
        </div>

        <Reviews reviews={reviews} />
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Trestle Retreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}