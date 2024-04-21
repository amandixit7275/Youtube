import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

function LiveChat() {
  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      return () => {
        clearInterval(i);
      };
    }, 1000);
  });

  return (
    <div className="pl-2 ml-2 h-[700px] rounded-lg border border-black bg-slate-50  ">
      <ChatMessage
        name="Aman Dixit "
        message="Lorem ipsum dolor sit amet consectetur."
      />
    </div>
  );
}

export default LiveChat;
