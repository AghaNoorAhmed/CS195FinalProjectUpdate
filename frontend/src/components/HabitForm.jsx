import { useState } from "react";
import api from "../api";

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const submit = async e => {
    e.preventDefault();
    await api.post("/habits", { name, category });
    setName(""); setCategory("");
    onAdd();
  };

  return (
    <form onSubmit={submit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Habit" />
      <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" />
      <button>Add</button>
    </form>
  );
}
