# API Documentation for Digital Campsite Passport

## Overview
The Digital Campsite Passport API provides endpoints for managing user authentication, campsite information, passport details, visit logging, and rewards tracking. This documentation outlines the available endpoints, their methods, request parameters, and response formats.

## Base URL
The base URL for all API requests is:
```
http://localhost:5000/api
```

## Authentication
All endpoints except for authentication require a valid JWT token. The token should be included in the `Authorization` header as follows:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Login
- **Endpoint:** `/auth/login`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **200 OK**
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "id": "user_id",
        "email": "user@example.com"
      }
    }
    ```
  - **401 Unauthorized**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

#### Signup
- **Endpoint:** `/auth/signup`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "User created successfully"
    }
    ```
  - **400 Bad Request**
    ```json
    {
      "message": "Email already exists"
    }
    ```

### Users

#### Get User Profile
- **Endpoint:** `/users/me`
- **Method:** GET
- **Response:**
  - **200 OK**
    ```json
    {
      "id": "user_id",
      "email": "user@example.com"
    }
    ```

### Campsites

#### Get All Campsites
- **Endpoint:** `/campsites`
- **Method:** GET
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "id": "campsite_id",
        "name": "Campsite Name",
        "location": "Location",
        "description": "Description"
      }
    ]
    ```

#### Get Campsite by ID
- **Endpoint:** `/campsites/:id`
- **Method:** GET
- **Response:**
  - **200 OK**
    ```json
    {
      "id": "campsite_id",
      "name": "Campsite Name",
      "location": "Location",
      "description": "Description"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Campsite not found"
    }
    ```

### Passports

#### Get All Passports
- **Endpoint:** `/passports`
- **Method:** GET
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "id": "passport_id",
        "userId": "user_id",
        "campsiteId": "campsite_id",
        "dateIssued": "2023-01-01"
      }
    ]
    ```

#### Get Passport by ID
- **Endpoint:** `/passports/:id`
- **Method:** GET
- **Response:**
  - **200 OK**
    ```json
    {
      "id": "passport_id",
      "userId": "user_id",
      "campsiteId": "campsite_id",
      "dateIssued": "2023-01-01"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Passport not found"
    }
    ```

### Visits

#### Log a Visit
- **Endpoint:** `/visits`
- **Method:** POST
- **Request Body:**
  ```json
  {
    "campsiteId": "campsite_id",
    "visitDate": "2023-01-01"
  }
  ```
- **Response:**
  - **201 Created**
    ```json
    {
      "message": "Visit logged successfully"
    }
    ```

### Rewards

#### Get User Rewards
- **Endpoint:** `/rewards`
- **Method:** GET
- **Response:**
  - **200 OK**
    ```json
    [
      {
        "id": "reward_id",
        "name": "Reward Name",
        "description": "Description",
        "earned": true
      }
    ]
    ```

## Error Handling
All error responses will include a `message` field describing the error.

## Conclusion
This API documentation provides a comprehensive overview of the endpoints available in the Digital Campsite Passport application. For further details, please refer to the specific endpoint descriptions above.