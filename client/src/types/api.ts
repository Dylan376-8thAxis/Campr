export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
}

export interface UserApiResponse {
  id: string;
  username: string;
  email: string;
}

export interface CampsiteApiResponse {
  id: string;
  name: string;
  location: string;
  description: string;
  images: string[];
}

export interface PassportApiResponse {
  id: string;
  userId: string;
  campsiteId: string;
  visitDate: string;
  badgesEarned: string[];
}