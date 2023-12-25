import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "./style.module.css";
export default function Barchart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "bar",
      data: {
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
          {
            label: "My First Dataset",
            data: [
              3000000, 3000000, 3000000, 4000000, 3000000, 3000000, 3000000,
              3000000, 2000000, 1500000, 2500000, 3500000,
            ],
            backgroundColor: ["rgb(85, 232, 12)"],
            borderWidth: 1,
          },
          {
            data: [
              1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1500000,
              1000000, 500000, 2500000, 1500000, 1700000,
            ],
            backgroundColor: ["rgb(255, 0, 72)"],
            borderWidth: 1,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return <canvas ref={chartRef} />;
}
