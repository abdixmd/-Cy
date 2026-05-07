
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ThreatChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Threat Activity",
        data: [12, 19, 8, 15, 22],
        borderColor: "cyan",
      },
    ],
  };

  return (
    <div className="bg-slate-800 p-5 rounded-xl border border-cyan-500">
      <h2 className="text-xl mb-4">Threat Analytics</h2>
      <Line data={data} />
    </div>
  );
}
