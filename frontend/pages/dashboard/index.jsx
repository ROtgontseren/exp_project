import React from 'react';
import Header from "@/components/Header";
import One from "@/components/Folder/one";
import Three from "@/components/Folder/Three";
import Two from "@/components/Folder/Two";
import Five from "@/components/Folder/Five";
import Four from "@/components/Folder/Four";
import Six from "@/components/Folder/six";

const Dashboard = () => {
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
  )
}

export default Dashboard;
