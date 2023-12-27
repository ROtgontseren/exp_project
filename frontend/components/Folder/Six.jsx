import React from "react";
import { TransactionContext } from "@/context/TransactionContext";
import { useContext } from "react";
import Record from "../record";

const Six = () => {
  const { transactions } = useContext(TransactionContext);
  return (
    <div className="w-[87%] h-[400px] bg-white my-8 rounded-3xl flex flex-col">
      <h1 className="text-base font-semibold p-6">Last Records</h1>
      <hr />
      {transactions.map((transaction) => (
        <Record transaction={transaction} />
      ))}
    </div>
  );
};

export default Six;

{
  /* <div className="flex justify-between p-6">
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full">
            <img className="rounded-full w-[60%] h-[60%]" src="minus.png" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">Lending Renting</h1>
            <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
          </div>
        </div>
        <h2 className="text-green-600">- 1,000₮</h2>
      </div> */
}
