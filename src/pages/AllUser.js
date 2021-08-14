import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import LeftSidebar from "../parts/LeftSidebar";
import Navbar from "../parts/Navbar";
import RightSidebar from "../parts/RightSidebar";
import UserContent from "../parts/UsersContent";

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users)
      })
      .catch((err) => {
        console.log(err);
      });
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
