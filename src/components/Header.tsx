import React from "react";
import TopHeader from "./Header/TopHeader";
import MiddleHeader from "./Header/MiddleHeader";
import BottomHeader from "./Header/BottomHeader";

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <TopHeader />
      {/* Middle Header */}
      <MiddleHeader />
      {/* Bottom Header */}
      <BottomHeader />
    </div>
  );
};

export default Header;
