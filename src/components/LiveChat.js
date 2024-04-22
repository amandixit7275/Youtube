import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  console.log(typeof chatMessages);

  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      dispatch(
        addMessages({
          name: generateRandomName(),
          message:
            generateRandomMessages() + " " + generateRandomName().split(" ")[0],
          //str.split(' ')[0]
        })
      );
      return () => {
        clearInterval(i);
      };
    }, 2000);
  }, []);

  return (
    <div className="pl-4 pr-4">
      <div className="border border-black  h-[700px]  bg-slate-50 rounded-lg  ">
        <h4 className=" text-lg font-serif p-1 m-1">Live Chat </h4>
        <hr />
        <div className="pl-2 ml-2  h-[650px] flex flex-col-reverse  overflow-y-auto  ">
          <div>
            {chatMessages.map((c, index) => (
              //Never use4 index as a key
              <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveChat;
