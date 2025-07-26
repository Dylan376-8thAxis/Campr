module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/digital-campsite-passport',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'your_email_service',
  EMAIL_USER: process.env.EMAIL_USER || 'your_email@example.com',
  EMAIL_PASS: process.env.EMAIL_PASS || 'your_email_password',
};