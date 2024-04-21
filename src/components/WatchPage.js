import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const dispatch = useDispatch();
  const [queryParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=" flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            className="rounded-lg"
            width="1400"
            height="700"
            src={"https://www.youtube.com/embed/" + queryParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
}

export default WatchPage;
