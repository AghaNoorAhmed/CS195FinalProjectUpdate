import api from "../api";

export default function HabitList({ habits, onUpdate }) {
  return (
    <ul className="habit-list">
      {habits.map(h => (
        <li key={h._id} className="habit-item">
          <input
            type="checkbox"
            className="habit-checkbox"
            checked={h.completed}
            onChange={() => api.put(`/habits/${h._id}`).then(onUpdate)}
          />
          <span className={`habit-name ${h.completed ? 'habit-completed' : ''}`}>
            {h.name} <span className="habit-category">{h.category}</span>
          </span>
          <button 
            className="btn btn-danger"
            onClick={() => api.delete(`/habits/${h._id}`).then(onUpdate)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
