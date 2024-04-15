import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("/"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>WatchPage</div>;
}

export default WatchPage;
