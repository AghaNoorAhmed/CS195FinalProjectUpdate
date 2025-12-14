import { useState } from "react";
import api from "../api";

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const n = name.trim();
    const c = category.trim();
    if (!n || !c) return;

    try {
      await api.post("/habits", { name: n, category: c });
      setName("");
      setCategory("");
      onAdd();
    } catch (error) {
      console.error("Failed to add habit", error);
      alert("Failed to add habit");
    }
  };

  return (
    <form onSubmit={submit} className="habit-form">
      <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Habit" />
      <input className="input" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
}
