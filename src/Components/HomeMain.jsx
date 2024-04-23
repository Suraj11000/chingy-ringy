import { Fragment, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
const HomeMain = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const expandPost = () => {
    setIsFullscreen(!isFullscreen);
  };
  return (
    <Fragment>
      <div className="gap-10 px-5 sm:px-10 justify-center items-center grid md:grid-cols-2 lg:grid-cols-3 mb-20 mt-36">
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-2 rounded-2xl shadow-xl ${
            isFullscreen
              ? "fixed top-15 left-2 right-2 bottom-14 z-50 gap-2 text-white bg-black sm:flex justify-center items-center"
              : ""
          }`}
        >
          <div className="">
            <img
              src="https://wallpaperaccess.com/full/13642.jpg"
              alt=""
              className={`h-72 w-full rounded-t-2xl cursor-pointer ${
                isFullscreen ? "sm:h-[35rem] h-[26rem] rounded-2xl" : ""
              }`}
              onClick={expandPost}
            />
          </div>
          <div className="px-5">
            <div className="flex justify-between items-center mt-2">
              <h1 className="text-lg font-bold">Muscle Car</h1>
              <div className="flex gap-5">
                <FaRegHeart size={20} />
                <IoChatboxOutline size={20} />
                <IoBookmarkOutline size={20} />
              </div>
            </div>
            <div className="flex justify-between mt-2 mb-2">
              <p>#Cars</p>
              <p>9 days ago</p>
            </div>
            <hr className="border-1 mb-2 border-gray-400" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between gap-2 items-center">
                <img
                  src="https://wallpapercave.com/wp/wp4041550.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <h1 className="text-lg font-bold">Muscle Blaze</h1>
              </div>

              <div className="flex justify-center gap-2 items-center">
                <div
                  className={`border-2 border-black rounded-full p-1 ${
                    isFullscreen ? " border-white" : ""
                  }`}
                >
                  <IoShareSocialOutline size={20} className="" />
                </div>
                <BsThreeDotsVertical size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeMain;
