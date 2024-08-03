import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";

const MiddleHeader = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-3  h-[100px]  p-1 border-b-2">
        {/* left side */}
      <div className="flex items-center h-[80px] ">
        <Image src={logo} alt="logo" className="w-32" />
        <h2 className="text-3xl font-bold mt-2 -ml-5">Panda Tech.</h2>
      </div>
      {/* Middle part */}
      <div className="border-2 border-[#0989FF] py-5 h-[50px] flex items-center mt-5 w-[500px]">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for Products..."
            className="h-[35px] mt-[6px] px-5  border-r-2 border-gray-300 placeholder:ml-3 w-[120px]] placeholder:text-sm "
          />
           {/* <PiLineVerticalThin size={55}/> */}
          <p className="flex items-center justify-center w-full">
            <span className="flex items-center justify-center text-sm font-semibold w-full mx-auto">
             <span className="ml-3"> Select Category</span>
              <FaAngleDown size={20} className="ml-2" />
            </span>
            <span className="bg-[#0989FF] text-white h-[50px] w-28 ml-14 flex justify-center items-center ">
              <FiSearch size={25} className="font-bold cursor-pointer" />
            </span>
          </p>
        </div>
      </div>

{/* left side */}
      <div className="flex items-center gap-5 lg:ml-32">
        <FaRegCircleUser size={30} className=" cursor-pointer" />
        <div className=" cursor-pointer">
          <p className="text-sm font-semibold text-gray-400">Hello, Sign In</p>
          <p className="text-sm font-semibold">Your Account</p>
        </div>
        <div className="flex items-center gap-6 ml-3 lg:ml-9">
          <LuArrowDownUp
            size={25}
            className=" cursor-pointer hover:text-sky-500 transition-all duration-200"
          />
          <div>
            <span className="relative">
              <GrFavorite
                size={25}
                className=" cursor-pointer hover:text-sky-500 transition-all duration-200"
              />
              <p className="absolute top-0 left-4 -mt-2 bg-red-500 rounded-full text-white h-5 w-5 flex items-center justify-center">
                3
              </p>
            </span>
          </div>
          <div>
            <span className="relative">
              <HiOutlineShoppingBag
                size={25}
                className=" cursor-pointer hover:text-sky-500 transition-all duration-200"
              />
              <p className="absolute top-0 left-3 -mt-2 bg-red-500 rounded-full text-white h-5 w-5 flex items-center justify-center">
                8
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
