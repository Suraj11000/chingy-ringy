import { Fragment } from "react";

const Channel = () => {
  return (
    <Fragment>
      <div className="mt-2 px-4 md:px-10">
        <h1 className=" text-xl font-bold">Channels:</h1>
        <div
          className="mt-2 flex gap-10 overflow-x-auto"
          style={{
            WebkitOverflowScrolling: "touch",
            overflowY: "hidden",
            overflowX: "scroll",
            scrollbarWidth: "none",
          }}
        >
          <div className="flex items-center w-full justify-center gap-10">
            <iframe
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              className="rounded-2xl sm:w-180 sm:h-200 w-160 h-180"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
            <iframe
              width="180"
              height="200"
              src="https://www.youtube.com/embed/NGx_AdbTAWI"
              allowfullscreen
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Channel;
