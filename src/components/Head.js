import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  async function getSearchSuggestions() {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      console.log(json);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    console.log(searchQuery);
    getSearchSuggestions();
  }, searchQuery);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
    <div className=" shadow-md grid grid-flow-col p-5 m-2 ">
      <div className=" flex col-span-1">
        <img
          className="h-14 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/large_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt=""
        />
        <a href="/">
          <img
            className="h-14 cursor-pointer"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt=""
          />
        </a>
      </div>
      <div className="col-span-10  ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
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
