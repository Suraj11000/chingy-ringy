import { Fragment } from "react";
import { GoHome } from "react-icons/go";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineGift } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Footer = () => {
  return (
    <Fragment>
      <div className=" flex justify-center gap-20 px-10 fixed bottom-0 left-0 w-full bg-white shadow-md p-3 border-t-2">
        <GoHome size={30} className=""/>
        <RiShoppingBag3Line size={30} />
        <AiOutlineGift size={30}/>
        <CgProfile size={30}/>
      </div>
    </Fragment>
  );
};

export default Footer;
