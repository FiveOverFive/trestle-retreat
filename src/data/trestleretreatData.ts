import { Property, Review, DateAvailability } from '@/types/api'

export const mockProperty: Property = {
  id: "prop-123",
  title: "Trestle Retreat",
  description: "Luxurious Trestle Retreat in Fraser, Colorado, just 5 minutes from Winter Park Resort! Featuring 4 spacious bedrooms and 4 full bathrooms, this stunning mountain property is perfect for 2-3 families. Enjoy the private hot tub, heated garage, indoor fireplace, and all the premium amenities you need for an unforgettable ski vacation or summer mountain getaway.",
  bedrooms: 4,
  bathrooms: 4,
  maxGuests: 10,
  pricePerNight: 120.00,
  amenities: [
    "Private Hot Tub",
    "Heated Garage Parking",
    "Full Kitchen",
    "WiFi & Ethernet",
    "Washer & Dryer",
    "Indoor Fireplace",
    "BBQ Grill (Gas)",
    "Patio/Balcony",
    "Private Entrance",
    "Bathtub in Master",
    "Hair Dryer",
    "Coffee Maker",
    "Cooking Basics Provided",
    "Iron & Hangers",
    "Pack 'n Play Available",
    "Ceiling Fans",
    "Fire Safety Equipment",
    "First Aid Kit",
    "All Linens & Towels"
  ],
  images: [
    {
      id: "img-1",
      url: "/images/Front.jpeg",
      alt: "Trestle Retreat exterior view",
      caption: "Welcome to Trestle Retreat"
    },
    {
      id: "img-2",
      url: "/images/KingSuite_1_Bedroom.jpeg",
      alt: "First King Suite bedroom",
      caption: "King Suite Bedroom"
    },
    {
      id: "img-3",
      url: "/images/KingSuite_1_Bathroom.jpeg",
      alt: "First King Suite bathroom",
      caption: "King Suite - Private Bathroom"
    },
    {
      id: "img-4",
      url: "/images/KingSuite_2_Bathroom.jpeg",
      alt: "Second King Suite bathroom",
      caption: "King Suite - Private Bathroom"
    },
    {
      id: "img-5",
      url: "/images/QueenSuite.jpeg",
      alt: "Queen Suite bedroom",
      caption: "Queen Suite - Comfortable queen bedroom"
    },
    {
      id: "img-6",
      url: "/images/QueenSuite_Bathroom.jpeg",
      alt: "Queen Suite bathroom",
      caption: "Queen Suite - Private bathroom"
    },
    {
      id: "img-7",
      url: "/images/Loft.jpeg",
      alt: "Bunk room loft area",
      caption: "Loft - Perfect for kids"
    },
    {
      id: "img-8",
      url: "/images/Main_Bathroom.jpeg",
      alt: "Main bathroom",
      caption: "Main bathroom"
    },
    {
      id: "img-9",
      url: "/images/Dinning.jpeg",
      alt: "Dining area",
      caption: "Dining area - Perfect for family meals"
    },
    {
      id: "img-10",
      url: "/images/HotTub.jpeg",
      alt: "Hot tub area",
      caption: "Private hot tub - Relax after a day on the slopes or trails"
    },
    {
      id: "img-13",
      url: "/images/a0Ff200000LtOphEAF.jpeg",
      alt: "Additional room view",
      caption: "Front Porch"
    },
    {
      id: "img-14",
      url: "/images/a0Ff200000LtOpKEAV.jpeg",
      alt: "Kitchen area",
      caption: "Laundry Room"
    },
    {
      id: "img-15",
      url: "/images/a0Ff200000LtOplEAF.jpeg",
      alt: "Living space",
      caption: "Heated Garage"
    },
    {
      id: "img-16",
      url: "/images/a0Ff200000LtOpmEAF.jpeg",
      alt: "Another bedroom view",
      caption: "Loft Area"
    },
    {
      id: "img-19",
      url: "/images/a0Ff200000LtOpPEAV.jpeg",
      alt: "Bedroom details",
      caption: "Kitchen"
    },
    {
      id: "img-21",
      url: "/images/a0Ff200000LtOpREAV.jpeg",
      alt: "Room layout",
      caption: "Family Room"
    },
    {
      id: "img-22",
      url: "/images/a0Ff200000LtOpTEAV.jpeg",
      alt: "Additional space",
      caption: "2nd King Suite"
    },
    {
      id: "img-24",
      url: "/images/a0Ff200000LtOpVEAV.jpeg",
      alt: "Interior detail",
      caption: "Bunk Room"
    },
    {
      id: "img-26",
      url: "/images/a0Ff200000LtOpREAV.jpeg",
      alt: "Family room view",
      caption: "Family Room"
    }
  ],
  location: {
    address: "",
    city: "Fraser",
    state: "Colorado",
    zipCode: "80442",
    latitude: 39.9427,
    longitude: -105.8173,
    nearbyAttractions: [
      "Winter Park Resort (5 min drive)",
      "Fraser River Trail",
      "Devil's Thumb Ranch",
      "Granby Ranch (15 min drive)",
      "Fraser Valley Recreation Center",
      "Safeway Grocery Store",
      "Fraser Historic Church",
      "Mountain Biking Trails",
      "Cross Country Skiing",
      "Rocky Mountain National Park"
    ]
  },
  houseRules: []
}

export const mockReviews: Review[] = [
  {
    id: "review-1",
    guestName: "Yohan K.",
    rating: 5,
    comment: "Great location. Clean property. We enjoyed it so much!",
    date: "2025-08-17",
    platform: "VRBO",
    stayLength: "3 nights",
    liked: ["cleanliness", "check-in", "communication", "location", "listing accuracy"]
  },
  {
    id: "review-2",
    guestName: "Sarah",
    rating: 5,
    comment: "Wonderful place! Great full bathrooms, lots of storage compartments in the house and the hot tub worked perfectly after our ski days!",
    date: "2025-03-15",
    platform: "Airbnb",
    stayLength: "Group trip"
  },
  {
    id: "review-3",
    guestName: "David W.",
    rating: 5,
    comment: "We enjoyed staying at the house with 3 three couples and 3 kids. Great for ski week in Winter Park.",
    date: "2025-03-21",
    title: "Great House for a Ski Trip",
    platform: "VRBO",
    stayLength: "7 nights",
    liked: ["cleanliness", "check-in", "communication", "location", "listing accuracy"]
  },
  {
    id: "review-4",
    guestName: "Adam",
    rating: 5,
    comment: "Nice location between fraser and winterpark. Everything clean, updated, and ready to go at check in.",
    date: "2025-02-15",
    platform: "Airbnb",
    stayLength: "Stayed with kids"
  },
  {
    id: "review-5",
    guestName: "Stephen",
    rating: 5,
    comment: "This is one of the more prepared airbnbs I've stayed in. The kitchen was stocked with tons of glassware, condiments, pots and pans, and even 4 types of vinegar! This was a great place to spend New Years Eve and cook a dinner for a larger group of people. It was only 15 mins from the mountain and has great hot tub views.",
    date: "2024-01-15",
    platform: "Airbnb",
    stayLength: "Group trip"
  },
  {
    id: "review-6",
    guestName: "Dan E.",
    rating: 5,
    comment: "My wife and I come to CO regularly during the ski season but this time we came with a group of family that had never experienced the mountains. We all had a great time and the house was perfect for our needs. Very comfortable and well maintained. Great location between Winter Park and Fraser. Just a few minutes to all the needs and activities. Highly recommend and will definitely come back again. Thanks!",
    date: "2024-03-23",
    title: "Family trip to the mountains",
    platform: "VRBO",
    stayLength: "4 nights",
    liked: ["cleanliness", "check-in", "communication", "location", "listing accuracy"]
  },
  {
    id: "review-7",
    guestName: "Chris",
    rating: 5,
    comment: "This place is even better than advertised. Very close to winter park. Top notch property with all the modern touches. 10/10",
    date: "2022-11-15",
    platform: "Airbnb",
    stayLength: "Stayed with kids"
  },
  {
    id: "review-8",
    guestName: "Jason F.",
    rating: 5,
    comment: "This house in Fraser is PERFECT. It is on the valley floor - ie flat and bikeable, you can easily ride to rec center or to town. The house is awesome - lots of room, our son loved the bunks, the house has all the conveniences you would want, including a large, clean, garage to keep your bikes and other stuff. Kitchen was great for cooking. Overall, this house exceeded our expectations. Will be back.",
    date: "2020-10-20",
    title: "Book an extra day, you won't want to leave",
    platform: "VRBO",
    stayLength: "4 nights",
    liked: ["cleanliness", "check-in", "communication", "location", "listing accuracy"]
  },
  {
    id: "review-9",
    guestName: "Anna",
    rating: 5,
    comment: "This place is roughly 10-15 minutes to Winterpark which was great for us because we stayed here mainly for skiing/snowboarding. The heated garage was AMAZING! The home was extremely spacious with our 10 guests. The beds were very comfortable & they had accommodations such as a pack n play for our 16 month old. Everything was very clean & we were provided a lot of what we needed. The hot tub was great after long days on the slopes & the kitchen was great for cooking, lots of space! We loved this place. Would def stay here again.",
    date: "2022-01-15",
    platform: "Airbnb",
    stayLength: "Stayed with kids"
  }
]

export const mockAvailability: DateAvailability[] = [
  // Generate mock availability for the next 90 days
  ...Array.from({ length: 90 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)

    // Make some random dates unavailable (already booked)
    const unavailableDates = [5, 6, 12, 13, 14, 25, 26, 27, 35, 42, 43, 55, 56, 57, 58]
    const isUnavailable = unavailableDates.includes(index)

    // Vary prices slightly for weekends
    const isWeekend = date.getDay() === 0 || date.getDay() === 6
    const basePrice = 120
    const weekendSurcharge = isWeekend ? 30 : 0

    return {
      date: date.toISOString().split('T')[0],
      available: !isUnavailable,
      price: basePrice + weekendSurcharge,
      minStay: isWeekend ? 2 : 1
    }
  })
]