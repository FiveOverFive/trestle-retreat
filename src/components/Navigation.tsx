import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 64 // Navigation height (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight - 20 // Extra 20px breathing room

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">Trestle Retreat</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('property')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Property
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Reviews
              </button>
              <a
                href="https://www.airbnb.com/rooms/34537012"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <button
              onClick={() => scrollToSection('property')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Property
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Reviews
            </button>
            <a
              href="https://www.airbnb.com/rooms/34537012"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block w-full text-center mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}