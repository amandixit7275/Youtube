import React from "react";
import Button from "./Button";

function ButtonList() {
  const btnName = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "Cooking",
    "All",
    "Gaming",
  ];

  return (
    <div className="flex scroll-smooth focus:scroll-auto ">
      {btnName.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
}

export default ButtonList;
