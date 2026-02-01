interface EvolveCalendarProps {
  evolveUrl?: string
}

export default function EvolveCalendar({
  evolveUrl = "https://evolve.com/vacation-rentals/430273"
}: EvolveCalendarProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Check Availability</h3>
      <p className="text-gray-600 mb-6">
        View availability and book directly through our booking platforms for instant confirmation.
      </p>

      <a
        href={evolveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#00A3A3] hover:bg-[#008B8B] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 w-full text-center block"
      >
        <span className="mr-2">
          <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </span>
        Check Availability on Evolve
      </a>
    </div>
  )
}