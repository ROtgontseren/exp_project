import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnurChart = ({ categoryData }) => {
  const data2 = {
    datasets: [
      {
        data: categoryData?.data,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: categoryData?.labels,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="card bg-white flex justify-center items-center p-4 ">
      <div className="h-96 w-96 ">
        {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex justify-center items-center gap-4 w-full h-full">
            <div className="skeleton h-24 w-24 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoughnurChart;
// import React, { useRef, useEffect } from "react";
// import Chart from "chart.js/auto";

// export default function PieChart() {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   useEffect(() => {
//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }
//     const myChartRef = chartRef.current.getContext("2d");

//     chartInstance.current = new Chart(myChartRef, {
//       type: "doughnut",
//       data: {
//         datasets: [
//           {
//             data: [20, 20, 20, 20, 20],
//             backgroundColor: [
//               "rgb(255, 99, 132)",
//               "rgb(54, 162, 235)",
//               "rgb(255, 205, 86)",
//               "rgb(255, 118, 20)",
//               "rgb(54, 162, 180)",
//             ],
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
//   return (
//     <div className="w-[200px] h-[200px]">
//       <canvas ref={chartRef} style={{ width: "300px", height: "100px" }} />
//     </div>
//   );
// }
