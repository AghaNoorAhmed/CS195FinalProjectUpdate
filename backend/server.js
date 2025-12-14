import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import habitRoutes from "./routes/habits.js";


dotenv.config();
console.log("URI:", process.env.MONGO_URI); // DEBUG LINE


const app = express();

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    // Allow all vercel.app domains and localhost
    if (origin.endsWith('.vercel.app') || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/habits", habitRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
