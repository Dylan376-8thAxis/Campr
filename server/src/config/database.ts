import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Campsite } from '../models/Campsite';
import { Passport } from '../models/Passport';
import { Visit } from '../models/Visit';
import { Badge } from '../models/Badge';

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [User, Campsite, Passport, Visit, Badge],
});

export default sequelize;