import React, { useState } from "react";
import profile from "../assets/images/profile.jpg";

import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import { useEffect } from "react";
import axios from "axios";

const FriendList = ({ data }) => {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${data}`)
      .then((res) => {
        setFriend(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  return (
    <div
      className="mb-5 w-full rounded-lg"
      style={{ backgroundColor: "#242526" }}
    >
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-xl">Followers</h2>
          <MoreHorizTwoToneIcon
            style={{ color: "white" }}
            fontSize="large"
          ></MoreHorizTwoToneIcon>
        </div>
        <div className="flex flex-wrap items-center justify-start mt-5">
          <div
            className="w-1/2 p-5 border-2 rounded-lg mb-2"
            style={{ border: "0.005px solid gray" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ width: 100, height: 100 }}
                >
                  <img
                    src={
                      friend
                        ? `http://localhost:3000/${friend.profilePicture}`
                        : profile
                    }
                    className="object-cover w-full h-full"
                    alt="profile"
                  />
                </div>
                <h2 className="text-white font-bold ml-2">
                  {friend && friend?.username}
                </h2>
              </div>
              <MoreHorizTwoToneIcon
                style={{ color: "white" }}
                fontSize="large"
              ></MoreHorizTwoToneIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
