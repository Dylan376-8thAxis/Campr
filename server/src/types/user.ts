export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  bio?: string;
  profilePictureUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}