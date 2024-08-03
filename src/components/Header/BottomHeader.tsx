import { RiMenu2Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";


const BottomHeader = () => {
  const menus = [
    // {
    //     title : 'All Departments',
    //     path: ''
    // },
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Coupons",
      path: "/coupons",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className=" max-w-screen-2xl mx-auto px-32 flex items-center justify-between">
      <p className="flex item-center justify-between w-[350px] gap-3 font-bold text-white bg-sky-500  py-3 px-5">
       <span className="flex items-center gap-2 text-sm"> <RiMenu2Line size={26} />All Departments</span>
         <span><IoIosArrowDown size={20}/></span>
      </p>
      <p className="flex items-center gap-7">
        {menus.map((menu) => (
          <p className="flex items-center gap-1 font-semibold text-sm">{menu.title} <IoIosArrowDown size={15} className="mt-1"/></p>
        ))}
      </p>
      <div className="flex items-center gap-2 text-sm">
        <FiPhoneCall size={28} className="text-sky-400" />
        <div>
          <p className="text-gray-400 ">Hotline : </p>
          <p className="font-semibold ">+(402) 758 569 96</p>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
