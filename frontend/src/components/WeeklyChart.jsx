import { useEffect, useState } from "react";
import api from "../api";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function WeeklyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/habits/stats/weekly").then(res => setData(res.data));
  }, []);

  return (
    <>
      <h2>Weekly Progress</h2>
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line dataKey="completed" stroke="#8884d8" />
      </LineChart>
    </>
  );
}
