import axios from 'axios';
import { Campsite } from '../types/campsite';
import { Passport } from '../types/passport';

const API_BASE_URL = 'https://api.digitalcampsitepassport.com'; // Replace with your actual API base URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API call to get all campsites
export const getCampsites = async (): Promise<Campsite[]> => {
  try {
    const response = await apiClient.get('/campsites');
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching campsites: ' + error.message);
  }
};

// Example API call to get a specific campsite by ID
export const getCampsiteById = async (id: string): Promise<Campsite> => {
  try {
    const response = await apiClient.get(`/campsites/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching campsite: ' + error.message);
  }
};

// Example API call to get all passports for the user
export const getUserPassports = async (): Promise<Passport[]> => {
  try {
    const response = await apiClient.get('/passports');
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching passports: ' + error.message);
  }
};

// Example API call to get all visit history for the user
export const getVisitHistory = async (): Promise<any[]> => {
  try {
    const response = await apiClient.get('/visits');
    return response.data;
  } catch (error: any) {
    throw new Error('Error fetching visit history: ' + error.message);
  }
};

// Example API call to create a new passport
export const createPassport = async (passportData: any) => {
  try {
    const response = await apiClient.post('/passports', passportData);
    return response.data;
  } catch (error: any) {
    throw new Error('Error creating passport: ' + error.message);
  }
};

// Example API call to log a visit
export const logVisit = async (visitData: any) => {
  try {
    const response = await apiClient.post('/visits', visitData);
    return response.data;
  } catch (error: any) {
    throw new Error('Error logging visit: ' + error.message);
  }
};

// Add more API functions as needed

export default apiClient;