import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 20,
        },
      },
    },
    title: {
      display: true,
      text: "Packaged Products Monthly",
      font: {
        size: 30,
      },
    },
  },
};

export const data = {
  labels: [
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
  ],
  datasets: [
    {
      fill: true,
      id: 1,
      label: "All Seasons",
      data: [
        244, 28, 15, 232, 57, 558, 43, 743, 463, 84, 87, 5, 12, 51, 633, 124,
        59, 45,
      ],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      fill: true,
      id: 2,
      label: "Fair Trade",
      data: [
        24, 287, 105, 2, 547, 558, 413, 74, 46, 841, 817, 567, 132, 551, 63,
        128, 549, 245,
      ],
      borderColor: "rgb(225, 162, 235)",
      backgroundColor: "rgba(225, 162, 235, 0.5)",
    },
  ],
};

export default function AreaChart() {
  return <Line options={options} data={data} />;
}
