export interface User {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Campsite {
  id: string;
  name: string;
  location: string;
  description: string;
  amenities: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Passport {
  id: string;
  userId: string;
  campsiteIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Visit {
  id: string;
  userId: string;
  campsiteId: string;
  visitDate: Date;
  notes?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  criteria: string;
  createdAt: Date;
  updatedAt: Date;
}