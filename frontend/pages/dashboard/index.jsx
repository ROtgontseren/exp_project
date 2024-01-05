import React from "react";
import Header from "@/components/header";
import One from "@/components/Folder/One";
import Three from "@/components/Folder/Three";
import Two from "@/components/Folder/Two";
import Five from "@/components/Folder/Five";
import Four from "@/components/Folder/Four";
import Six from "@/components/Folder/Six";

const dashboard = () => {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <Header />
      <div className="flex flex-col px-[120px]">
        <div className="flex justify-evenly py-6 w-full px-3">
          <One />
          <Two />
          <Three />
        </div>
        <div className="flex justify-evenly">
          <Four />
          <Five />
        </div>
        <div className="flex justify-center">
          <Six />
        </div>
      </div>
    </div>
  );
};

export default dashboard;
