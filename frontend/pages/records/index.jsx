import React from "react";
import Header from "@/components/header";
import RecordBig from "@/components/records/recordLeft/RecordsCategory/RecordBig";
import RecordForm from "@/components/form/addRecordForm";
import { useState } from "react";

const Records = () => {
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

export default Records;

{
  /* <label
htmlFor="my_modal_7"
className="bg-blue-700 text-white rounded-full flex items-center justify-center w-64 h-12 text-xl"
>
+Add
</label>
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
<div className="modal-box">
  <div className="flex justify-between">
    <h3 className="text-lg font-bold">Add Records</h3>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.5459 17.954C19.7572 18.1653 19.876 18.452 19.876 18.7509C19.876 19.0497 19.7572 19.3364 19.5459 19.5477C19.3346 19.7591 19.0479 19.8778 18.749 19.8778C18.4501 19.8778 18.1635 19.7591 17.9521 19.5477L12 13.5937L6.0459 19.5459C5.83455 19.7572 5.54791 19.8759 5.24902 19.8759C4.95014 19.8759 4.66349 19.7572 4.45215 19.5459C4.2408 19.3345 4.12207 19.0479 4.12207 18.749C4.12207 18.4501 4.2408 18.1635 4.45215 17.9521L10.4062 11.9999L4.45402 6.04586C4.24268 5.83451 4.12395 5.54787 4.12395 5.24898C4.12395 4.9501 4.24268 4.66345 4.45402 4.45211C4.66537 4.24076 4.95201 4.12203 5.2509 4.12203C5.54978 4.12203 5.83643 4.24076 6.04777 4.45211L12 10.4062L17.954 4.45117C18.1654 4.23983 18.452 4.12109 18.7509 4.12109C19.0498 4.12109 19.3364 4.23983 19.5478 4.45117C19.7591 4.66251 19.8778 4.94916 19.8778 5.24804C19.8778 5.54693 19.7591 5.83358 19.5478 6.04492L13.5937 11.9999L19.5459 17.954Z"
          fill="#0F172A"
        />
      </svg>
    </button>
  </div>
  <div className="flex p-6">
    <div className="flex flex-col gap-2">
      <div className="flex gap-6">
        <button className="btn btn-primary">Expense</button>
        <button className="btn btn-success">Income</button>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Amount</span>
        </label>
        <input
          type="text"
          placeholder="T 000.00"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <h1>Category</h1>
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Choose
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <div className="flex justify-between">
        <div>
          <h1>date</h1>
        </div>
        <div>
          <h1>date</h1>
        </div>
      </div>
      <button className="btn btn-primary w-full rounded-3xl">
        Add Records
      </button>
    </div>
    <div className="flex flex-col gap-6 items-center px-6">
      <select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Write Here
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="Bio"
      ></textarea>
    </div>
  </div>
</div>
</div>
<label className="modal-backdrop" htmlFor="my_modal_7">
Close
</label> */
}
