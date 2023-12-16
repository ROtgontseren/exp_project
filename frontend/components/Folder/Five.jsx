import React from "react";
import PieChart from "../Chart/PieChart";

const Five = () => {
  return (
    <div className="w-2/5 h-[250px] bg-white rounded-2xl flex flex-col">
      <div className="flex justify-between px-6 py-2">
        <h1 className="text-lg font-semibold">Income - Expense</h1>
        <h1 className="text-slate-400">Jun 1 - Nov 30</h1>
      </div>
      <hr />
      <div className="flex ">
        <div className="px-10">
          <PieChart />
        </div>
        <div className="flex flex-col items-center p-8">
          <div className="flex gap-24">
            <div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#1C64F2" />
                </svg>{" "}
                <h1>Bills</h1>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#E74694" />
                </svg>
                <h1>Food</h1>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#FDBA8C" />
                </svg>
                <h1>Shopping</h1>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#16BDCA" />
                </svg>
                <h1>Insurance</h1>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle cx="6" cy="6" r="6" fill="#F2901C" />
                </svg>
                <h1>Clothing</h1>
              </div>
            </div>
            <div>
              <h2>5’000’000₮</h2>
              <h2>5’000’000₮</h2>
              <h2>5’000’000₮</h2>
              <h2>5’000’000₮</h2>
              <h2>5’000’000₮</h2>
            </div>
            <div>
              <h2>15.50%</h2>
              <h2>15.50%</h2>
              <h2>15.50%</h2>
              <h2>15.50%</h2>
              <h2>15.50%</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
