import { FaTruck } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between text-white  max-w-screen-2xl mx-auto sm:px-0 lg:px-20 bg-[#010F1C] py-[5px]">
      <h3 className="flex items-center gap-2 text-gray-300 text-xs font-semibold">
        <FaTruck className="text-orange-400" size={25} /> FREE Express Shopping
        On Orders $570+
      </h3>
      <div className="flex items-center gap-8 text-xs">
        <p className="flex items-center border-r-2 border-slate-400 gap-2 font-semibold">
          English
          <FaAngleDown className="mr-5"/>
        </p>
        <p className="flex items-center border-r-2 border-slate-400 gap-2 font-semibold">
          USD
          <FaAngleDown className="mr-5"/>
         
        </p>
        <p className="flex items-center border-r-2 border-slate-400 gap-2 font-semibold">
          Setting
          <FaAngleDown className="mr-5"/>
         
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
