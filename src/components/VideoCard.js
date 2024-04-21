import React from "react";

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

export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-300">
      <VideoCard info={info} />
      <div className="pl-3 font-bold shadow-xl ">
        Ad :
        <span className="font-extralight pl-1 ">
          {info?.snippet?.channelTitle}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
