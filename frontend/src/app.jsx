import { useEffect, useState } from "react";
import api from "./api";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import WeeklyChart from "./components/WeeklyChart";

function App() {
  const [habits, setHabits] = useState([]);

  const loadHabits = async () => {
    const res = await api.get("/habits");
    setHabits(res.data);
  };

  useEffect(() => { loadHabits(); }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Daily Habits</h1>
      <HabitForm onAdd={loadHabits} />
      <HabitList habits={habits} onUpdate={loadHabits} />
      <WeeklyChart />
    </div>
  );
}

export default App;
