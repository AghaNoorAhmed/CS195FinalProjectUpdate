# Deployment Guide

This project is set up for deployment. The frontend is optimized for Vercel/Netlify, and the backend for Render/Railway.

## 1. Backend Deployment (Render)

1.  Create a new **Web Service** on [Render](https://render.com/).
2.  Connect your GitHub repository.
3.  Configure the service:
    *   **Root Directory**: `backend`
    *   **Build Command**: `npm install`
    *   **Start Command**: `npm start`
4.  **Environment Variables**:
    *   Add `MONGO_URI`: Your MongoDB Atlas connection string.
    *   Add `CLIENT_URL`: The URL of your deployed frontend (e.g., `https://your-app.vercel.app`).
    *   Add `PORT`: `5000` (Render sets this automatically usually, but good to have).

## 2. Frontend Deployment (Vercel)

1.  Create a new Project on [Vercel](https://vercel.com/).
2.  Connect your GitHub repository.
3.  Configure the project:
    *   **Root Directory**: `frontend`
    *   **Framework Preset**: Vite
    *   **Build Command**: `vite build` (or `npm run build`)
    *   **Output Directory**: `dist`
4.  **Environment Variables**:
    *   Add `VITE_API_URL`: The URL of your deployed backend (e.g., `https://your-api.onrender.com/api`).
        *   *Note: Ensure you include `/api` if your backend routes are prefixed with it.*

## 3. Final Connection

1.  Once both are deployed, verify that the `CLIENT_URL` in Backend matches the Frontend URL.
2.  Verify that `VITE_API_URL` in Frontend matches the Backend URL.
3.  Ensure your MongoDB Atlas Network Access whitelist includes `0.0.0.0/0` (Allow Access from Anywhere) so Render can connect.
