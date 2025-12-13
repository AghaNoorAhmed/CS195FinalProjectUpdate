import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false }
});

export default mongoose.model("Habit", habitSchema);
