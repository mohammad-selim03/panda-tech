import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { FiSearch  } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";

const MiddleHeader = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-3  h-[100px]  p-5">
      <div className="flex items-center h-[80px] ">
        <Image src={logo} alt="logo" className="w-52" />
        <h2 className="text-3xl font-bold mt-2 -ml-10">Panda Tech.</h2>
      </div>
      <div className="border-2 border-[#0989FF] py-5 h-[50px] flex items-center mt-5 w-[500px]">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for Products..."
            className="h-[46px] mt-[2px] px-5 border-r-2 border-gray-300 placeholder:ml-3 w-[120px]] placeholder:text-sm"
          />
          <p className="flex items-center justify-between w-full">
            <span className="flex items-center justify-center text-sm font-semibold w-full mx-auto">
              Select Category
              <FaAngleDown size={20} className="ml-2" />
            </span>
            <span className="bg-[#0989FF] text-white h-[50px] w-32 ml-14 flex justify-center items-center">
              <FiSearch  size={30} className="font-bold" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 lg:ml-20">
        <FaRegCircleUser size={30}  className=" cursor-pointer"/>
        <div className=" cursor-pointer">
          <p className="text-sm">Hello, Sign In</p>
          <p className="text-sm font-semibold">Your Account</p>
        </div>
        <LuArrowDownUp size={25} className=" cursor-pointer hover:text-sky-500 transition-all duration-200" />
        <GrFavorite size={25} className=" cursor-pointer hover:text-sky-500 transition-all duration-200" />
        <HiOutlineShoppingBag size={25} className=" cursor-pointer hover:text-sky-500 transition-all duration-200" />
      </div>
    </div>
  );
};

export default MiddleHeader;
