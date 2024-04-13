import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 ">
      <div className=" flex col-span-1">
        <img
          className="h-14 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/large_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt=""
        />
        <img
          className="h-14 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg"
          alt=""
        />
      </div>
      <div className="col-span-10  ">
        <input
          className="w-1/2
         px-5 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 p-2 bg-gray-100 rounded-r-full">
          {" "}
          🔍{" "}
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
