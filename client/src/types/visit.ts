export interface Visit {
  id: string;
  userId: string;
  campsiteId: string;
  campsiteName: string;
  date: string;
  notes?: string;
  photos?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface VisitFormData {
  campsiteId: string;
  date: string;
  notes?: string;
  photos?: File[];
}
