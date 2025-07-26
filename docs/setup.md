# Setup Instructions for Digital Campsite Passport

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js (version 14 or higher)
- npm (Node Package Manager)
- TypeScript (optional, if you want to compile TypeScript files)
- MongoDB (or any other database you plan to use)

## Project Setup

### 1. Clone the Repository
Clone the project repository from GitHub:
```bash
git clone https://github.com/yourusername/digital-campsite-passport.git
cd digital-campsite-passport
```

### 2. Install Client Dependencies
Navigate to the client directory and install the required dependencies:
```bash
cd client
npm install
```

### 3. Install Server Dependencies
Navigate to the server directory and install the required dependencies:
```bash
cd ../server
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the `server` directory and add your environment variables. Here’s an example:
```
MONGODB_URI=mongodb://localhost:27017/digital-campsite-passport
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 5. Run Database Migrations (if applicable)
If you are using migrations, run the following command to set up your database:
```bash
npm run migrate
```

### 6. Start the Development Servers
You can run both the client and server in development mode. Open two terminal windows:

**For the Client:**
```bash
cd client
npm start
```

**For the Server:**
```bash
cd server
npm run dev
```

### 7. Access the Application
Once both servers are running, you can access the application in your web browser at:
```
http://localhost:3000
```

## Additional Notes
- Make sure to check the `README.md` files in both the client and server directories for more detailed instructions and configurations.
- For production deployment, refer to the `docs/deployment.md` file for instructions on how to deploy the application.

## Troubleshooting
If you encounter any issues, please check the following:
- Ensure all dependencies are installed correctly.
- Verify that your MongoDB server is running.
- Check the console for any error messages and address them accordingly.

This setup guide should help you get started with the Digital Campsite Passport project. Happy coding!