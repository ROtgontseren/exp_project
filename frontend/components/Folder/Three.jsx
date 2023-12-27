import React from "react";
import { useState, useEffect } from "react";
import myAxios from "@/utils/axios";

const Three = ({ totalExpense }) => {
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    const {
      data: { totalExpense },
    } = await myAxios.get("/transaction/total");
    setTotals({ ...totals, totalExpense });
    console.log("EXP", totalExpense);
  };

  useEffect(() => {
    getTotalIncExp();
  }, []);
  return (
    <div className="w-1/4 h-[200px] bg-white rounded-2xl">
      <div className="flex items-center px-6 gap-2 my-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#0166FF" />
        </svg>
        <h1 className="text-lg font-semibold">Total Expenses</h1>
      </div>
      <hr />
      {totals.totalExpense > 0 && (
        <span className="font-bold lg:text-4xl md:text-2xl text-xl text-red-400 mx-6 my-4">
          -{totals.totalExpense}₮
        </span>
      )}
      {!totals.totalExpense && (
        <div className="skeleton h-9 w-[93%] mx-4 my-4"></div>
      )}
      <h2 className="px-6 text-slate-400 my-4">Your Income Amount</h2>
      <div className="flex items-center gap-2 px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21.75C10.0716 21.75 8.18657 21.1782 6.58319 20.1068C4.97982 19.0355 3.73013 17.5127 2.99218 15.7312C2.25422 13.9496 2.06114 11.9892 2.43735 10.0979C2.81355 8.20655 3.74215 6.46927 5.10571 5.10571C6.46928 3.74215 8.20656 2.81355 10.0979 2.43734C11.9892 2.06114 13.9496 2.25422 15.7312 2.99218C17.5127 3.73013 19.0355 4.97981 20.1068 6.58319C21.1782 8.18657 21.75 10.0716 21.75 12C21.7473 14.585 20.7192 17.0634 18.8913 18.8913C17.0634 20.7192 14.585 21.7473 12 21.75ZM15.5306 12.2194C15.461 12.1496 15.3783 12.0943 15.2872 12.0566C15.1962 12.0188 15.0986 11.9994 15 11.9994C14.9014 11.9994 14.8038 12.0188 14.7128 12.0566C14.6218 12.0943 14.539 12.1496 14.4694 12.2194L12.75 13.9397V8.25C12.75 8.05109 12.671 7.86032 12.5303 7.71967C12.3897 7.57902 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.57902 11.4697 7.71967C11.329 7.86032 11.25 8.05109 11.25 8.25V13.9397L9.53063 12.2194C9.3899 12.0786 9.19903 11.9996 9 11.9996C8.80098 11.9996 8.61011 12.0786 8.46938 12.2194C8.32865 12.3601 8.24959 12.551 8.24959 12.75C8.24959 12.949 8.32865 13.1399 8.46938 13.2806L11.4694 16.2806C11.539 16.3504 11.6218 16.4057 11.7128 16.4434C11.8038 16.4812 11.9014 16.5006 12 16.5006C12.0986 16.5006 12.1962 16.4812 12.2872 16.4434C12.3783 16.4057 12.461 16.3504 12.5306 16.2806L15.5306 13.2806C15.6004 13.211 15.6557 13.1283 15.6934 13.0372C15.7312 12.9462 15.7506 12.8486 15.7506 12.75C15.7506 12.6514 15.7312 12.5538 15.6934 12.4628C15.6557 12.3717 15.6004 12.289 15.5306 12.2194Z"
            fill="#84CC16"
          />
        </svg>
        <h3>32% from last month</h3>
      </div>
    </div>
  );
};

export default Three;
