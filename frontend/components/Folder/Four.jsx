import React from "react";
import Barchart from "../Chart/Barchart";
import { useState, useEffect } from "react";
import myAxios from "@/utils/axios";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Four = () => {
  const [barChartData, setBarChartData] = useState(null);
  const getChartData = async () => {
    try {
      const {
        data: { barChart },
      } = await myAxios.get("/transaction/");
      console.log("BAR-DATA", barChart);

      setBarChartData(barChart);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("E2");
    getChartData();
  }, []);
  return (
    <div className="w-2/5 h-[250px] bg-white rounded-2xl">
      <div className="flex justify-between px-6 py-2">
        <h1 className="text-lg font-semibold">Income - Expense</h1>
      </div>
      <hr />
      <div className="h-48 flex justify-center items-center">
        <Barchart barChartData={barChartData} />
      </div>
    </div>
  );
};

export default Four;
