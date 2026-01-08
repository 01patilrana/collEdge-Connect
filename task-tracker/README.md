# Task Tracker Web Application

A full-stack Task Tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to create, view, update, and delete daily tasks with features like filtering, sorting, and status management.

## Features

- **Task Management**: Create, read, update, and delete tasks
- **Client-side Validation**: Form validation with error messages
- **Filtering**: Filter tasks by status (All, Pending, Completed)
- **Sorting**: Sort tasks by due date
- **Responsive Design**: Works on all screen sizes
- **Real-time Updates**: Dynamic updates without page reload
- **Notifications**: Success and error alerts for user actions

## Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **State Management**: React useState

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd task-tracker
   ```

2. Install backend dependencies:
   ```
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd client
   npm install
   cd ..
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
     ```
     MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/tasktracker?retryWrites=true&w=majority
     PORT=5000
     ```

## Running Locally

1. Start the backend server:
   ```
   npm run dev
   ```

2. In a new terminal, start the frontend:
   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `GET /api/tasks` - Fetch all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update task status
- `DELETE /api/tasks/:id` - Delete a task

## Deployment

### Backend Deployment (Heroku)

1. Create a Heroku account and install Heroku CLI
2. Login to Heroku:
   ```
   heroku login
   ```
3. Create a new Heroku app:
   ```
   heroku create your-app-name
   ```
4. Set environment variables:
   ```
   heroku config:set MONGO_URI=your-mongodb-atlas-uri
   ```
5. Deploy:
   ```
   git push heroku main
   ```

### Frontend Deployment (Vercel)

1. Create a Vercel account
2. Install Vercel CLI:
   ```
   npm i -g vercel
   ```
3. Deploy from the client directory:
   ```
   cd client
   vercel
   ```
4. Update API calls in the frontend to use the deployed backend URL

## Project Structure

```
task-tracker/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskItem.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── models/
│   └── Task.js
├── routes/
│   └── tasks.js
├── .env
├── package.json
├── server.js
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.
