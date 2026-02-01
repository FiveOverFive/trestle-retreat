interface BookingPlatformsProps {
  airbnbUrl?: string
  vrboUrl?: string
  evolveUrl?: string
}

const platforms = [
  {
    name: 'Airbnb',
    color: 'bg-[#FF385C] hover:bg-[#E31C5F]',
    textColor: 'text-white',
  },
  {
    name: 'VRBO',
    color: 'bg-[#1E40AF] hover:bg-[#1E3A8A]',
    textColor: 'text-white',
  },
  {
    name: 'Evolve',
    color: 'bg-[#00A3A3] hover:bg-[#008B8B]',
    textColor: 'text-white',
  }
]

export default function BookingPlatforms({
  airbnbUrl = "https://www.airbnb.com/rooms/34537012",
  vrboUrl = "https://www.vrbo.com/7833000ha",
  evolveUrl = "https://evolve.com/vacation-rentals/430273"
}: BookingPlatformsProps) {

  const bookingLinks = [
    { ...platforms[0], url: airbnbUrl },
    { ...platforms[1], url: vrboUrl },
    { ...platforms[2], url: evolveUrl }
  ]

  return (
    <>
      <div id="booking" style={{ paddingTop: '50px', marginTop: '-50px' }}></div>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Direct</h3>
      <p className="text-gray-600 mb-6">
        Perfect for 2-3 families! Choose your preferred booking platform for instant confirmation.
      </p>

      <div className="space-y-3">
        {bookingLinks.map((platform, index) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${platform.color} ${platform.textColor} font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center text-center w-full block hover:shadow-lg transform hover:-translate-y-0.5`}
          >
            <span className="mr-2">
              {platform.name === 'Airbnb' && (
                <svg className="w-5 h-5 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 16.3c-.4.8-1.2 1.4-2.1 1.4-.6 0-1.2-.3-1.6-.8l-1.8-2.7-1.8 2.7c-.4.5-1 .8-1.6.8-.9 0-1.7-.6-2.1-1.4-.3-.6-.3-1.3.1-1.9L9.5 9.8c.5-.8 1.4-1.3 2.5-1.3s2 .5 2.5 1.3l2.9 4.6c.4.6.4 1.3.1 1.9z"/>
                </svg>
              )}
              {platform.name === 'VRBO' && (
                <svg className="w-5 h-5 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              )}
              {platform.name === 'Evolve' && (
                <svg className="w-5 h-5 inline" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              )}
            </span>
            Book on {platform.name}
          </a>
        ))}
      </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>All platforms offer secure booking with instant confirmation</p>
        </div>
      </div>
    </>
  )
}