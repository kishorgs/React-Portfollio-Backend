# Portfolio Website (Backend)

This repository contains the backend for my portfolio website. It provides APIs for managing and serving project data and other necessary functionalities.

## Live Demo 🌐

The backend is integrated with the frontend. You can access the live version of the portfolio website here: [https://kishor-g-s.netlify.app/](https://kishor-g-s.netlify.app/)

## Features

- RESTful API for project management
- Database integration with MongoDB
- Environment variable management

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup Instructions 🛠️

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_BACKEND_REPO_NAME.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd YOUR_BACKEND_REPO_NAME
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the server**

   ```bash
   npm start
   ```

6. **Open your browser or API client**
   Access the API at `http://localhost:5000` to interact with the backend services.

## API Endpoints 📡

### Get All Projects
- **URL**: `/api/projects`
- **Method**: `GET`
- **Description**: Retrieve all projects.

### Get Project by ID
- **URL**: `/api/projects/:id`
- **Method**: `GET`
- **Description**: Retrieve a project by its ID.

### Create New Project
- **URL**: `/api/projects`
- **Method**: `POST`
- **Description**: Create a new project.
- **Request Body**:
  ```json
  {
    "title": "Project Title",
    "description": "Project Description",
    "link": "Project Link"
  }
  ```

### Update Project
- **URL**: `/api/projects/:id`
- **Method**: `PUT`
- **Description**: Update a project by its ID.

### Delete Project
- **URL**: `/api/projects/:id`
- **Method**: `DELETE`
- **Description**: Delete a project by its ID.

## Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.
```
