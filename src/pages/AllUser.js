import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeftSidebar from "../parts/LeftSidebar";
import Navbar from "../parts/Navbar";
import RightSidebar from "../parts/RightSidebar";
import UserContent from "../parts/UsersContent";

import { getUsers } from "../redux/action/userAction";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const THEME = useSelector((state) => state.themeState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(setUsers));
  }, [dispatch]);

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
        <UserContent data={users}></UserContent>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default AllUser;
