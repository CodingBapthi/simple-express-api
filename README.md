# Simple Express API
This repository contains a simple REST API built with Express, a popular web framework for Node.js. The API allows users to perform basic CRUD (create, read, update, delete) operations on a resource representing a user. It includes support for HTTP requests, route handling, and input validation.

## Features
- Endpoints for managing users:
  - GET /users: retrieves a list of all users
  - GET /users/:id: retrieves a specific user by ID
  - POST /users: creates a new user
  - PUT /users/:id: updates an existing user
  - DELETE /users/:id: deletes a user
- Validates user input to ensure that required fields are present
- Uses cors to allow cross-origin requests
- Uses dotenv to load environment variables from a .env file

## Prerequisites
  - Node.js
  - npm (should be installed with Node.js)

## Installation
1. Clone or download this repository
2. Navigate to the root directory of the project
3. Install dependencies by running npm install
4. Create a .env file in the root directory and set the PORT environment variable (e.g. PORT=3001)
4. Start the API by running npm start

## Usage

You can use the following examples to interact with the API using [cURL|https://curl.haxx.se/]:

### Get a list of all users
```
curl -X GET http://localhost:3001/users
```
### Get a specific user by ID
```
curl -X GET http://localhost:3001/users/1
```

### Create a new user
```
curl -X POST -H "Content-Type: application/json" -d '{
  "name": {
    "first": "Jane",
    "last": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "123456"
}' http://localhost:3001/users
```

### Update an existing user
```
curl -X PUT -H "Content-Type: application/json" -d '{
  "name": {
    "first": "John",
    "last": "Smith"
  },
  "email": "john.smith@example.com"
}' http://localhost:3001/users/1
```

### Delete a user
```
curl -X DELETE http://localhost:3001/users/1
```