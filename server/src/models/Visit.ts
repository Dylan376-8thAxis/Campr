import { Schema, model, Document } from 'mongoose';

interface IVisit extends Document {
  userId: string;
  campsiteId: string;
  visitDate: Date;
  duration: number; // duration in hours
  notes?: string;
}

const VisitSchema = new Schema<IVisit>({
  userId: { type: String, required: true },
  campsiteId: { type: String, required: true },
  visitDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  notes: { type: String, optional: true }
});

const Visit = model<IVisit>('Visit', VisitSchema);

export default Visit;