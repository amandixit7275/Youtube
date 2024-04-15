import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVideoId } from "../utils/appSlice";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className=" cursor-pointer p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li> {statistics.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;
