import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import LeftSidebar from "../parts/LeftSidebar";
import Navbar from "../parts/Navbar";
import RightSidebar from "../parts/RightSidebar";
import UserContent from "../parts/UsersContent";

import { getUsers } from "../redux/action/userAction";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(setUsers));
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
        <UserContent data={users}></UserContent>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default AllUser;
