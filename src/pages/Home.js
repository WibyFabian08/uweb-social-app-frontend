import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LeftSidebar from "../parts/LeftSidebar";
import MainContent from "../parts/MainContent";
import Navbar from "../parts/Navbar";
import RightSidebar from "../parts/RightSidebar";

const Home = () => {
  const THEME = useSelector((state) => state.themeState);
  const history = useHistory();
  useEffect(() => {
    let USER = JSON.parse(localStorage.getItem("user"));

    if (USER === null) {
      history.push("/login");
    }
  }, [history]);
  return (
    <div
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        backgroundColor: THEME ? "#edf0f5" : "#1c1e21",
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
