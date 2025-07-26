export type User = {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Campsite = {
  id: string;
  name: string;
  location: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Passport = {
  id: string;
  userId: string;
  campsiteIds: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Visit = {
  id: string;
  userId: string;
  campsiteId: string;
  visitDate: Date;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  criteria: string;
};