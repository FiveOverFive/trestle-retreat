import { Review } from '@/types/api'

interface ReviewsProps {
  reviews: Review[]
}

export default function Reviews({ reviews }: ReviewsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  if (reviews.length === 0) {
    return (
      <section id="reviews" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
            <p className="text-gray-600">No reviews yet. Be the first to stay and leave a review!</p>
          </div>
        </div>
      </section>
    )
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <section id="reviews" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {renderStars(Math.round(averageRating))}
            </div>
            <span className="text-xl font-semibold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-gray-600">
              ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-500">
              {/* Header with platform badge */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{review.guestName}</h4>
                    {review.platform && (
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        review.platform === 'Airbnb' ? 'bg-[#FF385C] text-white' :
                        review.platform === 'VRBO' ? 'bg-[#1E40AF] text-white' :
                        'bg-[#00A3A3] text-white'
                      }`}>
                        {review.platform}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {new Date(review.date).toLocaleDateString()}
                    {review.stayLength && ` • ${review.stayLength}`}
                  </div>
                </div>
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Title */}
              {review.title && (
                <h5 className="font-semibold text-gray-900 mb-3">{review.title}</h5>
              )}

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-4">{review.comment}</p>

              {/* Liked features */}
              {review.liked && review.liked.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Liked:</p>
                  <div className="flex flex-wrap gap-1">
                    {review.liked.map((item, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Images */}
              {review.images && review.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {review.images.slice(0, 2).map((image, index) => (
                    <div key={image.id} className="relative aspect-video">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="object-cover rounded w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}