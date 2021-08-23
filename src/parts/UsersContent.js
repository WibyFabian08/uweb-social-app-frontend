import React, { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const UserContent = (data) => {
  const THEME = useSelector((state) => state.themeState);
  const [USER, setUSER] = useState({});
  const failed = (message) => toast.error(message);
  const success = (message) => toast.info(message);

  const handleFollow = (id) => {
    axios
      .post(`http://localhost:3000/users/follow/${id}`, {
        userId: USER ? USER?._id : "",
      })
      .then((res) => {
        console.log(res.data);
        success(res.data.message);
      })
      .catch((err) => {
        failed(err?.response?.data?.message);
      });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
  }, []);

  return (
    <div className="w-1/2 h-screen px-5 mt-5 mb-20 overflow-y-auto">
      <h2
        className="mb-5 ml-3 text-xl font-bold"
        style={{ color: THEME ? "black" : "white" }}
      >
        All Users
      </h2>
      <div className="mb-32">
        <div className="flex flex-wrap items-center h-full">
          {data &&
            data.data.map((data, index) => {
              return (
                <div className="w-1/2 px-2 mb-4" key={index}>
                  <div
                    className="w-full p-5 transition-all duration-300 ease-in-out border border-gray-200 border-solid rounded-lg"
                    style={{
                      backgroundColor: THEME ? "white" : "#1c1e21",
                    }}
                  >
                    <div
                      style={{ width: "100%", height: 200 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src={
                          data
                            ? `http://localhost:3000/${data.profilePicture}`
                            : ""
                        }
                        className="object-cover w-full h-full"
                        alt="profile"
                      />
                    </div>
                    <div className="mt-2">
                      <h2
                        className="text-xl font-bold"
                        style={{ color: THEME ? "black" : "white" }}
                      >
                        {data ? data?.username : "username"}
                      </h2>
                      <div className="flex justify-between mt-2">
                        <div
                          className="w-full px-2 py-1 text-sm font-bold text-center text-white bg-blue-500 rounded-md hover:bg-blue-400"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleFollow(data ? data?._id : "")}
                        >
                          Follow
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
};

export default UserContent;
