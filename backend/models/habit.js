import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Habit name is required"], 
    trim: true 
  },
  category: { 
    type: String, 
    required: [true, "Category is required"], 
    trim: true 
  },
  duration: { 
    type: Number, 
    default: 0, 
    min: [0, "Duration cannot be negative"] 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  completed: { 
    type: Boolean, 
    default: false 
  }
});

export default mongoose.model("Habit", habitSchema);
