# React Application for User Management with Reqres API

## Project Overview
This project is a React application that integrates with the Reqres API to perform basic user management functions. The application consists of three levels:
1. Authentication screen with login functionality.
2. Paginated user list display.
3. User edit and delete functionalities.

## Prerequisites
Ensure you have the following installed before proceeding:
- Node.js (v14 or later)
- npm or yarn

## Installation Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## Running the Project
To start the development server, run:
```sh
npm run dev
# or
yarn dev
```
The application will be accessible at `http://localhost:3000/`.

## Features and API Endpoints
### Level 1: Authentication Screen
- The application provides a login form where users enter their email and password.
- Authentication is performed using the following endpoint:
  ```sh
  POST https://reqres.in/api/login
  ```
  **Example Credentials:**
  ```json
  {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
  }
  ```
- On successful login, the API returns a token, which is stored in local storage.
- Upon authentication, the user is redirected to the Users List page.

### Level 2: List All Users
- After login, the application fetches user data from:
  ```sh
  GET https://reqres.in/api/users?page=1
  ```
- Users are displayed in a paginated view using either pagination or lazy loading.
- Each user entry consists of:
  - First name
  - Last name
  - Avatar

### Level 3: Edit, Delete, and Update Users
- **Edit User:**
  - Clicking "Edit" opens a form with pre-filled user details.
  - The updated user data is sent to:
    ```sh
    PUT https://reqres.in/api/users/{id}
    ```
- **Delete User:**
  - Clicking "Delete" removes the user from the list.
  - The request is sent to:
    ```sh
    DELETE https://reqres.in/api/users/{id}
    ```

## Assumptions and Considerations
- The authentication token is stored in local storage and used for session management.
- API responses are mocked and do not persist changes.
- Error handling and loading states are implemented for a smooth user experience.
- Basic styling is applied, but customization can be done as needed.

## License
This project is open-source. Modify and use it as per your requirements.

## Contact
Email: contact@vishalsharmadev.in
Website: vishalsharmadev.in

