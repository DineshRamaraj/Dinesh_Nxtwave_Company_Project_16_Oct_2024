import React, { useState } from "react";
import Header from "../Header";
import SideMenuBar from "../SideMenuBar";

const MainHeader = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div>
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <SideMenuBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
};

export default MainHeader;
