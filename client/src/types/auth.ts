export interface User {
  id: string;
  username: string;
  email: string;
  fullName?: {
    firstName: string;
    lastName: string;
  };
  profilePhoto?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  username: string;
  email: string;
  password: string;
}