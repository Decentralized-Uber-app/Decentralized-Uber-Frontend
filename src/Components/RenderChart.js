import React, { useState } from "react";
import { Dashboard } from "../utils/Dashboard";
import LineChart from "../Components/LineChart";
import { DashboardData } from "../utils/DashboardData";

const RenderChart = () => {
  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      // {
      //   label: "Users Gained ",
      //   data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      //   backgroundColor: [
      //     "rgba(75,192,192,1)",
      //     "#ecf0f1",
      //     "#50AF95",
      //     "#f3ba2f",
      //     "#2a71d0",
      //   ],
      //   borderColor: "black",
      //   borderWidth: 1,
      //   steppedLine: false,
      //   lineTension: 0.8,
      //   type: "bar",
      // },
      {
        data: [1000, 1200],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
        steppedLine: false,
        lineTension: 0.8,
      },
      {
        data: [
          1000, 1800, 2300, 2700, 2300, 1500, 1000, 3000, 3500, 2900, 2300,
          3800,
        ],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "green",
        borderWidth: 2,
        steppedLine: false,
        lineTension: 0.4,
      },
      {
        data: [
          1000, 1800, 2300, 2700, 2300, 1500, 1000, 3000, 3500, 2900, 2300,
          5000,
        ],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "green",
        borderWidth: 0,
        steppedLine: false,
        lineTension: 0.4,
      },
    ],
  });

  return (
    <div className="h-full w-full">
      <LineChart chartData={chartData} />
    </div>
  );
};

export default RenderChart;
