import { Fragment } from "react";
// import { IoLocationOutline } from "react-icons/io5";
// import { FaRegEdit } from "react-icons/fa";
// import React from "react";
const Location = ({ hashtags }) => {
  return (
    <Fragment>
      <div className="fixed top-[-22px] left-0 w-full bg-white">
        <div className="flex items-between justify-center px-10 mt-20"></div>
        <div
          className="mt-2 flex gap-10 overflow-x-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            overflowY: "hidden",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
        <div className="flex justify-between px-10 p-2">
          {hashtags.map((tag, index) => (
            <div
              key={index}
              className="text-sm font-semibold border-2 rounded-lg px-2 p-0.5 shadow-md cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
        </div>
        <hr />
      </div>
    </Fragment>
  );
};
export default Location;
