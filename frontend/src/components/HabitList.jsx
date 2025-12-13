import api from "../api";

export default function HabitList({ habits, onUpdate }) {
  return (
    <ul>
      {habits.map(h => (
        <li key={h._id}>
          <input
            type="checkbox"
            checked={h.completed}
            onChange={() => api.put(`/habits/${h._id}`).then(onUpdate)}
          />
          {h.name}
          <button onClick={() => api.delete(`/habits/${h._id}`).then(onUpdate)}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
