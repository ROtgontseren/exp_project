import React from "react";
import Barchart from "../Chart/Barchart";

const Four = () => {
  return (
    <div className="w-2/5 h-[250px] bg-white rounded-2xl">
      <div className="flex justify-between px-6 py-2">
        <h1 className="text-lg font-semibold">Income - Expense</h1>
      </div>
      <hr />
      <div className="h-48 flex justify-center items-center">
        <Barchart />
      </div>
    </div>
  );
};

export default Four;
