import React from "react";
import Header from "@/components/header";
import RecordBig from "@/components/records/recordLeft/RecordsCategory/RecordBig";
import RecordForm from "@/components/form/addRecordForm";
import { useState } from "react";

const records = () => {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    setOpen(false);
  };
  return (
    <div className="bg-slate-300 w-screen h-screen">
      <Header />
      <div className="flex gap-12 px-[120px]">
        <div className="flex flex-col gap-6 p-6">
          <h1 className="text-xl font-semibold">Records</h1>
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="btn bg-[#0166FF] text-white rounded-full"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 8C15.5 8.16576 15.4342 8.32473 15.3169 8.44194C15.1997 8.55915 15.0408 8.625 14.875 8.625H8.625V14.875C8.625 15.0408 8.55915 15.1997 8.44194 15.3169C8.32473 15.4342 8.16576 15.5 8 15.5C7.83424 15.5 7.67527 15.4342 7.55806 15.3169C7.44085 15.1997 7.375 15.0408 7.375 14.875V8.625H1.125C0.95924 8.625 0.800269 8.55915 0.683058 8.44194C0.565848 8.32473 0.5 8.16576 0.5 8C0.5 7.83424 0.565848 7.67527 0.683058 7.55806C0.800269 7.44085 0.95924 7.375 1.125 7.375H7.375V1.125C7.375 0.95924 7.44085 0.800269 7.55806 0.683058C7.67527 0.565848 7.83424 0.5 8 0.5C8.16576 0.5 8.32473 0.565848 8.44194 0.683058C8.55915 0.800269 8.625 0.95924 8.625 1.125V7.375H14.875C15.0408 7.375 15.1997 7.44085 15.3169 7.55806C15.4342 7.67527 15.5 7.83424 15.5 8Z"
                fill="white"
              />
            </svg>
            ADD
          </button>
          {open && <RecordForm open={open} closeForm={closeForm} />}
          <input
            type="text"
            placeholder="Search"
            className="border border-black rounded-3xl px-3 bg-slate-300"
          />
          <h1 className="text-lg font-semibold">Types</h1>
          <div className="flex gap-3">
            <input type="radio" />
            <span>All</span>
          </div>
          <div className="flex gap-3">
            <input type="radio" />
            <span>Income</span>
          </div>
          <div className="flex gap-3">
            <input type="radio" />
            <span>Expense</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Categories</h1>
            <button className="btn btn-ghost text-slate-400">Clear</button>
          </div>
          <RecordBig />
          <h1 className="text-lg font-semibold">Amount Range</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="1"
              className="w-16 rounded-md px-1"
            />
            <input
              type="text"
              placeholder="1000"
              className="w-16 rounded-md px-1"
            />
          </div>
          <ul class="steps">
            <li data-content="1" class="step step-primary"></li>
            <li data-content="2" class="step step-primary"></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[1500px]">
            <div className="flex justify-between py-6">
              <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Last 30 Days</button>
                <button className="join-item btn">»</button>
              </div>
              <select className="select select-bordered w-full max-w-xs">
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
            <div className="flex bg-white justify-between rounded-2xl items-center">
              <div className="flex gap-4 h-12 items-center p-6">
                <input type="checkbox" checked="checked" class="checkbox" />
                <h1>Select all</h1>
              </div>
              <h1 className="flex items-center p-6 text-slate-400">
                - 35,500₮
              </h1>
            </div>
            <h1 className="text-lg font-semibold p-4">Today</h1>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="House.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">
                      Lending & Renting
                    </h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-green-600">- 1,000₮</h2>
              </div>
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-red-600">- 1,000₮</h2>
              </div>
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-yellow-400">- 1,000₮</h2>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold p-4">Yesterday</h1>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-yellow-400">- 1,000₮</h2>
              </div>
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-yellow-400">- 1,000₮</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default records;
