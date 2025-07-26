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
  createdAt: Date;
  updatedAt: Date;
}