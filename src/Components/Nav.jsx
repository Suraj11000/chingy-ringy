import { Fragment } from "react";
import { RiInfinityLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
const Nav = () => {
  return (
    <Fragment>
      <div className="flex justify-between px-10 fixed top-0 left-0 w-full bg-[#003585] text-white p-2 z-50">
        <div className=" flex justify-center items-center gap-5">
          <RiInfinityLine size={40} className="border rounded-full bg-white text-[#003585]"/>
          <h1 className=" text-2xl">Affiliate</h1>
        </div>
        <div className="flex justify-center items-center gap-10">
          <FiSearch size={25}/>
          <IoMdAddCircleOutline size={25} />
          <IoMdNotificationsOutline size={25}/>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
