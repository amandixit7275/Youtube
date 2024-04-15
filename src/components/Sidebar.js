import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!menuOpen) return null;
  return (
    <div className="w-[10%] p-5 shadow-lg ">
      <ul>
        <Link to={"/"}>
          <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
            Home
          </li>
        </Link>
        <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer">
          Shorts
        </li>
        <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer">
          Gaming
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer">
          {" "}
          Movies
        </li>
        <hr />
        <h1 className="font-bold pt-3 pl-4  "> Trending</h1>
        <ul>
          <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
            Music
          </li>
          <li className=" rounded-lg  pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
            Sports
          </li>
          <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
            Gaming
          </li>
          <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
            Movies
          </li>
          <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
            Podcast
          </li>
        </ul>
      </ul>
      <hr />
      <h1 className="font-bold pt-3 pl-4  "> Subscriptions</h1>
      <ul>
        <li className=" rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Music
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Sports{" "}
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Gaming{" "}
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Movies{" "}
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Podcast
        </li>
      </ul>
      <hr />
      <h1 className="font-bold pt-3 pl-4 ">Watch Later</h1>
      <ul>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Music{" "}
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Sports{" "}
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Gaming{" "}
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Movies
        </li>
        <li className="rounded-lg pl-4 p-1 hover:bg-gray-200 cursor-pointer ">
          Drama
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
