export interface Campsite {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  description: string;
  amenities: string[];
  images: string[];
  rating: number;
  reviews: Review[];
}

export interface Review {
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}