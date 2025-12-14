# 📊 Habit & Workout Tracker

A full-stack web application for tracking daily habits and workouts with visual progress monitoring. Built with modern web technologies, this app helps users stay accountable by logging their daily activities and visualizing weekly progress through interactive charts.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🌐 Live Demo

- **Frontend**: [Deployed on Vercel](https://cs-195-final-project-update.vercel.app)
- **Backend API**: Deployed on Render: https://dashboard.render.com/web/srv-d4v7n52li9vc73dillj0/deploys/dep-d4v9156uk2gs73991qf0

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Reflection](#-reflection)

## ✨ Features

### Core Functionality
- ✅ **Create Habits**: Add new habits or workouts with customizable names
- ✅ **Track Completion**: Mark habits as completed for any date
- ✅ **Delete Habits**: Remove habits you no longer want to track
- ✅ **Persistent Storage**: All data saved in MongoDB Atlas

### Advanced Features
- 📈 **Weekly Progress Visualization**: Interactive bar chart showing completion frequency
- 📊 **Data Aggregation**: Smart weekly data processing for insights
- 🎨 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔄 **Real-time Updates**: Instant UI updates when habits are modified

### User Experience
- 🧭 **Intuitive Navigation**: Clean navbar with routing between pages
- 📱 **Mobile-Friendly**: Fully responsive layout
- ⚡ **Fast Performance**: Optimized with React and Vite
- 🎯 **Simple Interface**: Easy to use, minimal learning curve

## 🛠 Tech Stack

### Frontend
- **React 18.2** - UI library for building interactive interfaces
- **Vite 4.5** - Next-generation frontend build tool
- **React Router DOM 7.10** - Client-side routing
- **Axios 1.6** - HTTP client for API requests
- **Recharts 2.9** - Data visualization library for charts
- **CSS3** - Custom styling with modern features

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 4.18** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 7.6** - MongoDB object modeling
- **CORS 2.8** - Cross-origin resource sharing middleware
- **dotenv 16.6** - Environment variable management

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend API hosting
- **MongoDB Atlas** - Cloud database hosting

## 📁 Project Structure

```
CS195FinalProject/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx           # Main habit tracking page
│   │   │   ├── HabitForm.jsx      # Form to create new habits
│   │   │   ├── HabitList.jsx      # Display and manage habits
│   │   │   ├── WeeklyChart.jsx    # Data visualization component
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   └── About.jsx          # About page
│   │   ├── api.js                 # API service functions
│   │   ├── app.jsx                # Main app component with routing
│   │   ├── main.jsx               # React entry point
│   │   └── index.css              # Global styles
│   ├── .env                       # Frontend environment variables
│   ├── .env.example               # Environment variable template
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   ├── vercel.json                # Vercel deployment config
│   └── index.html                 # HTML entry point
│
├── backend/
│   ├── models/
│   │   └── habit.js               # Mongoose habit schema
│   ├── routes/
│   │   └── habits.js              # API route handlers
│   ├── .env                       # Backend environment variables
│   ├── .env.example               # Environment variable template
│   ├── server.js                  # Express server setup
│   └── package.json               # Backend dependencies
│
└── README.md                      # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas Account** - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download here](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AghaNoorAhmed/CS195FinalProjectUpdate.git
   cd CS195FinalProject
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   CLIENT_URL=http://localhost:5173
   ```

3. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the Development Servers**

   In one terminal (backend):
   ```bash
   cd backend
   npm run dev
   ```

   In another terminal (frontend):
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the Application**
   
   Open your browser and navigate to `http://localhost:5173`

## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB Atlas connection string | `mongodb+srv://user:pass@cluster.mongodb.net/habits` |
| `PORT` | Port for Express server | `5000` |
| `CLIENT_URL` | Frontend URL (optional for CORS) | `http://localhost:5173` |

### Frontend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` |

**Important Notes:**
- Never commit `.env` files to version control
- Use `.env.example` files as templates
- Update environment variables in deployment platforms (Vercel, Render)

## 🔌 API Endpoints

### Base URL
- Development: `http://localhost:5000/api`
- Production: `https://your-app.onrender.com/api`

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/habits` | Get all habits | - |
| POST | `/habits` | Create a new habit | `{ "name": "Exercise" }` |
| PUT | `/habits/:id/complete` | Toggle habit completion | `{ "date": "2024-01-15" }` |
| DELETE | `/habits/:id` | Delete a habit | - |

### Example Requests

**Create a Habit**
```javascript
POST /api/habits
Content-Type: application/json

{
  "name": "Morning Workout"
}
```

**Complete a Habit**
```javascript
PUT /api/habits/507f1f77bcf86cd799439011/complete
Content-Type: application/json

{
  "date": "2024-01-15"
}
```

## 🌍 Deployment

### Frontend (Vercel)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Configure build settings:
   - Framework Preset: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables in Vercel dashboard
5. Deploy!

### Backend (Render)

1. Go to [Render](https://render.com) and create a new Web Service
2. Connect your GitHub repository
3. Configure service:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
4. Add environment variables in Render dashboard
5. Deploy!

### Database (MongoDB Atlas)

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Set up database access (username/password)
3. Whitelist IP addresses (or allow access from anywhere for production)
4. Get connection string and add to backend `.env`

## 💭 Reflection

### Challenges Faced
The most challenging aspect of this project was implementing the weekly data aggregation for the visualization component. Properly grouping habit completions by week and ensuring accurate counts required careful consideration of date handling and MongoDB queries. Additionally, managing CORS issues during deployment was initially tricky but was resolved by implementing a flexible origin validation system.

### Proudest Achievement
I'm most proud of building a complete end-to-end application flow - from user input, through API endpoints, to database storage, and back to visual representation in charts. The integration of all these components into a seamless user experience demonstrates a solid understanding of full-stack development principles.

### Lessons Learned
If I were to approach this project again, I would:
- **Deploy earlier** in the development process to catch deployment issues sooner
- **Write tests** for both frontend components and backend API endpoints
- **Implement authentication** to allow multiple users with separate data
- **Add more advanced features** like habit streaks, reminders, and customizable goals

### Feedback Integration
Based on user feedback, I narrowed the project scope to focus on delivering a solid MVP (Minimum Viable Product) with one strong advanced feature - the data visualization component. This allowed me to polish the core functionality rather than spreading effort too thin across multiple incomplete features.

## 🎯 Potential Future Enhancements

- 🔐 User authentication and authorization
- 📧 Email/push notifications for habit reminders
- 🏆 Achievement badges and streak tracking
- 📅 Custom date ranges for charts
- 🎨 Theme customization (dark mode)
- 📊 Additional chart types (line, pie, etc.)
- 📱 Progressive Web App (PWA) support
- 🔄 Data export functionality (CSV, JSON)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Agha Noor Ahmed**

- GitHub: [@AghaNoorAhmed](https://github.com/AghaNoorAhmed)
- Project Link: [CS195FinalProjectUpdate](https://github.com/AghaNoorAhmed/CS195FinalProjectUpdate)

## 🙏 Acknowledgments

- Thanks to Professor Moore for guidance and feedback
- Recharts library for excellent data visualization components
- MongoDB Atlas for reliable cloud database hosting
- Vercel and Render for seamless deployment experiences

---

⭐ If you found this project helpful, please give it a star!
