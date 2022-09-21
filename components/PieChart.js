import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: "Packaged Products Monthly",
      font: {
        size: 15,
      },
    },
  },
};

export const data = {
  labels: [
    "All Season",
    "Fair Trade",
    "Mexican",
    "Italian",
    "Brazilian",
    "French",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
      borderColor: ["black", "black", "black", "black", "black", "black"],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return <Pie options={options} data={data} />;
}
