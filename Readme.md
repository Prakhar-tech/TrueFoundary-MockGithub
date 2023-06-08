# My GitHub App

This is a mock GitHub app that allows users to log in via GitHub authentication and create repositories.

# Acknowledgements

This project was developed as part of a task assigned by TrueFoundary Company. Special thanks to them for providing the opportunity.

## Technologies Used

- Frontend: React
- Backend: NestJS

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm package manager

### Frontend

1. Open a terminal and navigate to the `frontend` folder.
2. Install the dependencies by running the following command: `npm install`
3. Start the development server by running the following command : npm run start
4. The frontend application will be accessible at http://localhost:3000.

### Backend

1. Open another terminal and navigate to the backend folder.
2. Install the dependencies by running the following command:`npm install`
3. Start the backend server in development mode by running the following command: `npm run start:dev`
4. The backend server will be accessible at http://localhost:8000

## Usage

1. Open your web browser and go to http://localhost:3000.
2. Click on the "Login with GitHub" button to authenticate with your GitHub account.
3. Once logged in, you can create repositories by following the provided interface.

The backend server will use `Octokit Library` communicate with the GitHub API to create repositories in your GitHub account.

## Feel free to use this README.md template and adjust it as needed for your project.
