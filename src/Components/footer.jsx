import { Fragment } from "react";
import { GoHome } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <Fragment>
      <div className=" flex justify-center gap-12 sm:gap-20 py-4 px-10 fixed bottom-0 left-0 w-full bg-white shadow-md border-t-2">
        <div className=" cursor-pointer" onClick={Navigate("/")}>
          <GoHome size={30} onClick={()=>Navigate("/")}/>
        </div>
        <div onClick={()=>Navigate("/shop")} className=" cursor-pointer">
          <RiShoppingBag3Line size={30} onClick={Navigate("/shop")}/>
        </div>
        <AiOutlineGift size={30} />
        <CgProfile size={30} />
      </div>
    </Fragment>
  );
};

export default Footer;
