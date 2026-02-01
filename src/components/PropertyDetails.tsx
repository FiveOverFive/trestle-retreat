import { Property } from '@/types/api'

interface PropertyDetailsProps {
  property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <section id="property" className="bg-white">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About This Property</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {property.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h3>
          <div className="grid grid-cols-2 gap-3">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">King Bed Suites</span>
              <span className="font-medium">2</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Queen Suite</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bunk Bed Room</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Loft</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Bathrooms</span>
              <span className="font-medium">{property.bathrooms}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Max Guests</span>
              <span className="font-medium">{property.maxGuests}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Location & Nearby</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="mb-4">
            <p className="text-gray-700">
              {property.location.city}, {property.location.state}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Nearby Attractions</h4>
            <div className="flex flex-wrap gap-2">
              {property.location.nearbyAttractions.map((attraction, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                >
                  {attraction}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {property.houseRules.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">House Rules</h3>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <ul className="space-y-2">
              {property.houseRules.map((rule, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}