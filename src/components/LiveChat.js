import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/helper";

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState("");
  console.log(liveMessage);
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
    }, 3000);
  }, []);

  function addMessage(e) {
    e.preventDefault();
    dispatch(
      addMessages({
        name: "You",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  }

  return (
    <div className="pl-4 pr-4">
      <div className="border border-black  h-[700px]  bg-slate-50 rounded-t-lg  ">
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
      <form
        className="w-full p-2  border border-black rounded-b-lg "
        onSubmit={(e) => addMessage(e)}
      >
        <input
          className="w-72 p-2 rounded-xl "
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="mx-4 text-lg bg-green-200 px-4 py-2 rounded-xl ">
          Send
        </button>
      </form>
    </div>
  );
}

export default LiveChat;
