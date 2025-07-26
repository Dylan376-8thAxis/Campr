# Digital Campsite Passport

Welcome to the Digital Campsite Passport project! This web application is designed to help users manage their camping experiences, track visits, and earn rewards through a digital passport system.

## Features

- **User Authentication**: Users can sign up, log in, and manage their profiles.
- **Campsite Management**: Users can view, search, and explore various campsites.
- **Passport System**: Users can create and manage their digital passports, which track their visits to campsites.
- **Visit Logging**: Users can log their visits to campsites and view their visit history.
- **Rewards System**: Users can earn badges and track their progress towards rewards.
- **Responsive Design**: The application is designed to be mobile-friendly and accessible.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client is built using React and TypeScript. It includes:

- **Components**: Reusable UI components for various functionalities.
- **Pages**: Different pages for user interactions, such as login, signup, and dashboards.
- **Hooks**: Custom hooks for managing state and API interactions.
- **Services**: API services for handling requests to the server.
- **Context**: Context providers for managing global state.

### Server

The server is built using Node.js and Express. It includes:

- **Controllers**: Handle incoming requests and business logic.
- **Models**: Define the data structure for users, campsites, passports, and visits.
- **Routes**: Define the API endpoints for the client to interact with.
- **Middleware**: Handle authentication, validation, and error management.
- **Services**: Manage business logic and interactions with external services.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd digital-campsite-passport
   ```

2. **Install dependencies**:
   - For the client:
     ```
     cd client
     npm install
     ```
   - For the server:
     ```
     cd server
     npm install
     ```

3. **Run the application**:
   - Start the server:
     ```
     cd server
     npm run dev
     ```
   - Start the client:
     ```
     cd client
     npm start
     ```

4. **Access the application**: Open your browser and navigate to `http://localhost:3000`.

## Documentation

For more detailed information, refer to the following documentation files:

- [API Documentation](docs/api.md)
- [Setup Instructions](docs/setup.md)
- [Deployment Instructions](docs/deployment.md)

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.