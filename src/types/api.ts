export interface Property {
  id: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  pricePerNight: number;
  amenities: string[];
  images: Image[];
  location: Location;
  houseRules: string[];
}

export interface Image {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
  nearbyAttractions: string[];
}

export interface Availability {
  dates: DateAvailability[];
}

export interface DateAvailability {
  date: string; // ISO date format
  available: boolean;
  price: number;
  minStay?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  checkIn?: string; // ISO date format
  checkOut?: string; // ISO date format
  guests?: number;
  message: string;
}

export interface ContactResponse {
  id: string;
  status: string;
  message: string;
}

export interface Review {
  id: string;
  guestName: string;
  rating: number; // 1-5
  comment: string;
  date: string; // ISO date format
  platform?: string; // Airbnb, VRBO, Evolve
  title?: string;
  stayLength?: string;
  liked?: string[];
  images?: Image[];
}

export interface ApiError {
  code: string;
  message: string;
  details?: string[];
}

// API Response types
export type GetPropertyResponse = Property;
export type GetAvailabilityResponse = Availability;
export type GetReviewsResponse = Review[];
export type SubmitContactResponse = ContactResponse;