import express from "express";
import Habit from "../models/habit.js";

const router = express.Router();

// Get all habits
router.get("/", async (req, res) => {
  try {
    const habits = await Habit.find().sort({ date: -1 });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create habit
router.post("/", async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Toggle completion
router.put("/:id", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    habit.completed = !habit.completed;
    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete habit
router.delete("/:id", async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id);
    if (!habit) return res.status(404).json({ message: "Habit not found" });

    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Weekly stats (ADVANCED FEATURE)
router.get("/stats/weekly", async (req, res) => {
  try {
    const start = new Date();
    start.setDate(start.getDate() - 6);

    const habits = await Habit.find({
      completed: true,
      date: { $gte: start }
    });

    const stats = {};
    habits.forEach(h => {
      const day = h.date.toISOString().split("T")[0];
      stats[day] = (stats[day] || 0) + 1;
    });

    const result = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split("T")[0];
      result.push({ day: key, completed: stats[key] || 0 });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
