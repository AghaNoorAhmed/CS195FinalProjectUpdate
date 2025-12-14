import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function WeeklyChart({ data }) {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2>Weekly Progress</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line dataKey="completed" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
