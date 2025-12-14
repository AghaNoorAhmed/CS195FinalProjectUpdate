import { useEffect, useState } from "react";
import api from "../api";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import WeeklyChart from "./WeeklyChart";

export default function Home() {
  const [habits, setHabits] = useState([]);
  const [stats, setStats] = useState([]);

  const loadData = async () => {
    try {
      const [habitsRes, statsRes] = await Promise.all([
        api.get("/habits"),
        api.get("/habits/stats/weekly")
      ]);
      setHabits(habitsRes.data);
      setStats(statsRes.data);
    } catch (error) {
      console.error("Failed to load data", error);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Your Daily Habits</h1>
        <HabitForm onAdd={loadData} />
        <HabitList habits={habits} onUpdate={loadData} />
      </div>
      <div className="card">
        <WeeklyChart data={stats} />
      </div>
    </div>
  );
}
