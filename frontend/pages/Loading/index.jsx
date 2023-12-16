import React from "react";
import Logo from "@/component/Logo";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen flex-col gap-12">
      <div className="flex gap-1 items-center">
        <Logo />
        <h1 className="text-4xl font-bold">Geld</h1>
      </div>
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner text-primary"></span>
        <h2 className="font-semibold">Түр хүлээнэ үү.....</h2>
      </div>
    </div>
  );
};

export default Loading;
