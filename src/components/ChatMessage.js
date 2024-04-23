import React from "react";
import { USER_IMAGE } from "../utils/constant";

function ChatMessage({ name, message }) {
  return (
    <div>
      <div className="p-2 shadow-sm flex items-center ">
        <img className="h-6 cursor-pointer" src={USER_IMAGE} alt="" />
        <span className=" px-2 font-bold text-sm ">{name}</span>
        <p className="text-sm"> {message} </p>
      </div>
    </div>
  );
}

export default ChatMessage;
