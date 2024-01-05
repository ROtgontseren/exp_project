// import React from "react";
// import { UserContext } from "@/context/UserProvider";
// import { useContext } from "react";

// const profile = () => {
//   const { user, logout } = useContext(UserContext);
//   return (
//     <div>
//       <button
//         className="btn btn-ghost"
//         onClick={() => document.getElementById("my_modal_4").showModal()}
//       >
//         {user.name}
//       </button>
//       <dialog id="my_modal_4" className="modal">
//         <div className="modal-box w-11/12 max-w-5xl">
//           <div className="flex justify-evenly">
//             <div className="flex items-center">
//               <img
//                 className="w-32 h-32 rounded-full bg-black"
//                 src="profile.jpg"
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <div className="flex items-center gap-24">
//                 <h1>Name</h1>
//                 <input
//                   className="border border-black px-2 rounded-2xl"
//                   type="text"
//                   value={user.name}
//                 />
//               </div>
//               <div className="flex items-center gap-[100px]">
//                 <h1>Email</h1>
//                 <input
//                   className="border border-black px-2 rounded-2xl"
//                   type="text"
//                   value={user.email}
//                 />
//               </div>
//               <div className="flex items-center gap-2">
//                 <h1>Current Password</h1>
//                 <input
//                   className="border border-black px-2 rounded-2xl"
//                   type="text"
//                 />
//               </div>
//               <div className="flex items-center gap-8">
//                 <h1>New Password</h1>
//                 <input
//                   className="border border-black px-2 rounded-2xl"
//                   type="text"
//                 />
//               </div>
//               <div className="flex items-center gap-2">
//                 <h1>New Re Password</h1>
//                 <input
//                   className="border border-black px-2 rounded-2xl"
//                   type="text"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2 flex-start justify-center">
//               <button className="btn btn-success text-white">Save</button>
//               <form method="dialog">
//                 <button className="btn btn-neutral text-white">Close</button>
//               </form>
//               <button className="btn btn-error text-white" onClick={logout}>
//                 logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default profile;
