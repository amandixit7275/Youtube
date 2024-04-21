import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div>
      <div className="p-2 shadow-sm flex items-center ">
        <img
          className="h-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt=""
        />
        <span className=" px-2 font-bold text-sm ">{name}</span>
        <p className="text-sm"> {message} </p>
      </div>
    </div>
  );
}

export default ChatMessage;
