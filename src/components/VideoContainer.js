import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  async function getVideos() {
    let response = await fetch(YOUTUBE_API);
    let result = await response.json();
    setVideos(result?.items);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
