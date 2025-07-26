export interface Passport {
  id: string;
  userId: string;
  campsiteId: string;
  visitDate: Date;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface PassportDetails extends Passport {
  campsiteName: string;
  userName: string;
  badgesEarned: string[];
}