import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ barChartData }) => {
  const data1 = {
    labels: barChartData?.labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "#22C55E",
        data: barChartData?.incomeData,
      },
      {
        label: "Expense",
        backgroundColor: "#F87171",
        data: barChartData?.expenseData,
      },
    ],
  };

  const options1 = {
    responsive: true,
    plugins: {
      title: "CHART",
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="card bg-white flex justify-center items-center p-4">
      {barChartData && <Bar data={data1} options={options1} />}
      {!barChartData && (
        <div className="flex justify-center items-end   gap-4 w-full ">
          <div className="skeleton h-14 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-24 w-4"></div>
          <div className="skeleton h-16 w-4"></div>
          <div className="skeleton h-14 w-4"></div>
        </div>
      )}
    </div>
  );
};

export default BarChart;

// import React, { useRef, useEffect } from "react";
// import Chart from "chart.js/auto";
// import "./style.module.css";
// export default function Barchart() {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }
//     const myChartRef = chartRef.current.getContext("2d");

//     chartInstance.current = new Chart(myChartRef, {
//       type: "bar",
//       data: {
//         labels: [
//           "Jan",
//           "Feb",
//           "Mar",
//           "Apr",
//           "May",
//           "Jun",
//           "Jul",
//           "Aug",
//           "Sep",
//           "Oct",
//           "Nov",
//           "Dec",
//         ],
//         datasets: [
//           {
//             label: "My First Dataset",
//             data: [
//               3000000, 3000000, 3000000, 4000000, 3000000, 3000000, 3000000,
//               3000000, 2000000, 1500000, 2500000, 3500000,
//             ],
//             backgroundColor: ["rgb(85, 232, 12)"],
//             borderWidth: 1,
//           },
//           {
//             data: [
//               1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1500000,
//               1000000, 500000, 2500000, 1500000, 1700000,
//             ],
//             backgroundColor: ["rgb(255, 0, 72)"],
//             borderWidth: 1,
//           },
//         ],
//       },
//     });
//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, []);
//   return <canvas ref={chartRef} />;
// }
