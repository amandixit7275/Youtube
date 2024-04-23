import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import {
  HUMBERGER_MENU,
  USER_IMAGE,
  YOUTUBE_API,
  YOUTUBE_LOGO,
} from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const cacheSearch = useSelector((store) => store.search);

  async function getSearchSuggestions() {
    console.log("Api Called - " + searchQuery);
    const data = await fetch(
      "complete/search?client=firefox&ds=yt&q=" + searchQuery
    );
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  }

  useEffect(() => {
    //make an api call after every  200ms
    // but if the difference between two api call is <200 ms decline the api call

    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestions(cacheSearch[searchQuery]);
      } else {
        getSearchSuggestions();
      }

      return () => {
        clearTimeout(timer);
      };
    }, 200);
  }, [searchQuery]);

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }
  return (
    <div className=" shadow-md grid grid-flow-col p-5 m-2 ">
      <div className=" flex col-span-1">
        <img
          className="h-14 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src={HUMBERGER_MENU}
          alt=""
        />
        <a href="/">
          <img className="h-14 cursor-pointer" src={YOUTUBE_LOGO} alt="" />
        </a>
      </div>
      <div className="col-span-10  ">
        <input
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          value={searchQuery}
          className="w-1/2
         px-5 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />

        <button className="border border-gray-400 px-5 p-2 bg-gray-100 rounded-r-full">
          {" "}
          🔍{" "}
        </button>
        {showSuggestions && (
          <div className="py-2 fixed bg-white w-[44rem] rounded-lg px-5 p-2">
            {suggestions.map((value) => {
              return (
                <ul>
                  <li key={value} className="px-3 py-2   hover:bg-gray-100">
                    🔍 {value}{" "}
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src={USER_IMAGE} alt="" />
      </div>
    </div>
  );
};

export default Head;
