import { Fragment } from "react";

const Stories = ({ story }) => {
  return (
    <Fragment>
      <div className="mt-[64px] px-4 sm:px-10">
        <h1 className="text-xl font-bold">Stories :</h1>
        <div
          className="mt-2 flex gap-10 overflow-x-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            overflowY: "hidden",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex mt-2 ">
            {story.map((tag, index) => (
              <div
                key={index}
                className="font-semibold text-center px-2  cursor-pointer"
              >
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="min-w-16 h-16 rounded-3xl border-[3px] border-blue-600"
                />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Stories;
