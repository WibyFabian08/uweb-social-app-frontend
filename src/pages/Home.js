import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import LeftSidebar from "../parts/LeftSidebar";
import MainContent from "../parts/MainContent";
import Navbar from "../parts/Navbar";
import RightSidebar from "../parts/RightSidebar";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    let USER = JSON.parse(localStorage.getItem("user"));

    console.log(USER);

    if (USER === null) {
      history.push("/login");
    }

    // localStorage.removeItem("user");
  }, []);
  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: "#1c1e21",
        height: "100vh",
      }}
    >
      <Navbar></Navbar>
      <div className="flex">
        <LeftSidebar></LeftSidebar>
        <MainContent></MainContent>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default Home;
