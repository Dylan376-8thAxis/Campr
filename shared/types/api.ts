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
  name: string;
  email: string;
}

export interface CampsiteApiResponse {
  id: string;
  name: string;
  location: string;
  description: string;
  amenities: string[];
}

export interface PassportApiResponse {
  id: string;
  userId: string;
  campsiteId: string;
  visitDate: string;
  status: string;
}

export interface VisitApiResponse {
  id: string;
  userId: string;
  campsiteId: string;
  checkInTime: string;
  checkOutTime: string;
}