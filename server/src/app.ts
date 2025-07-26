import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { json, urlencoded } from 'express';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import campsiteRoutes from './routes/campsites';
import passportRoutes from './routes/passports';
import visitRoutes from './routes/visits';
import { errorHandler } from './middleware/errorHandler';
import { corsOptions } from './config/cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/campsites', campsiteRoutes);
app.use('/api/passports', passportRoutes);
app.use('/api/visits', visitRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;