import React from "react";

const Six = () => {
  return (
    <div className="w-[87%] h-[400px] bg-white my-8 rounded-3xl flex flex-col">
      <h1 className="text-base font-semibold p-6">Last Records</h1>
      <hr />
      <div className="flex justify-between p-6">
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full">
            <img className="rounded-full w-[60%] h-[60%]" src="House.png" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">Lending & Renting</h1>{" "}
            <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
          </div>
        </div>
        <h2 className="text-green-600">- 1,000₮</h2>
      </div>
      <hr />
      <div className="flex justify-between p-6">
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full">
            <img className="rounded-full w-[60%] h-[60%]" src="House.png" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">Lending & Renting</h1>{" "}
            <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
          </div>
        </div>
        <h2 className="text-green-600">- 1,000₮</h2>
      </div>
      <hr />
      <div className="flex justify-between p-6">
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full">
            <img className="rounded-full w-[60%] h-[60%]" src="House.png" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold">Lending & Renting</h1>{" "}
            <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
          </div>
        </div>
        <h2 className="text-green-600">- 1,000₮</h2>
      </div>
      <hr />
    </div>
  );
};

export default Six;
