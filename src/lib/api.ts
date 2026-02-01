import axios, { AxiosInstance } from 'axios';
import {
  GetPropertyResponse,
  GetAvailabilityResponse,
  GetReviewsResponse,
  ContactForm,
  SubmitContactResponse,
  ApiError
} from '@/types/api';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = '/api') {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.data) {
          throw error.response.data as ApiError;
        }
        throw error;
      }
    );
  }

  async getProperty(): Promise<GetPropertyResponse> {
    const response = await this.client.get('/property');
    return response.data;
  }

  async getAvailability(startDate: string, endDate: string): Promise<GetAvailabilityResponse> {
    const response = await this.client.get('/availability', {
      params: { startDate, endDate }
    });
    return response.data;
  }

  async getReviews(): Promise<GetReviewsResponse> {
    const response = await this.client.get('/reviews');
    return response.data;
  }

  async submitContact(contactForm: ContactForm): Promise<SubmitContactResponse> {
    const response = await this.client.post('/contact', contactForm);
    return response.data;
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export class for custom instances
export { ApiClient };