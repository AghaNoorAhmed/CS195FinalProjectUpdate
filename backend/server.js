import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import habitRoutes from "./routes/habits.js";


dotenv.config();
console.log("URI:", process.env.MONGO_URI); // DEBUG LINE


const app = express();
const allowedOrigins = [
  process.env.CLIENT_URL,
  "https://cs-195-final-project-update-j2swvxtyo-aghanoorahmeds-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    console.log("Request origin:", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/habits", habitRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
