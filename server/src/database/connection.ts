import { createConnection } from 'typeorm';
import { User } from '../models/User';
import { Campsite } from '../models/Campsite';
import { Passport } from '../models/Passport';
import { Visit } from '../models/Visit';
import { Badge } from '../models/Badge';
import { environment } from '../config/environment';

const connection = createConnection({
  type: 'postgres', // or your database type
  host: environment.DB_HOST,
  port: Number(environment.DB_PORT),
  username: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: environment.DB_NAME,
  entities: [User, Campsite, Passport, Visit, Badge],
  synchronize: true, // set to false in production
  logging: false,
});

export default connection;