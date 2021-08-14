import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserContent = (data) => {
  const USER = useSelector((state) => state.userState);
  console.log(USER);
  const failed = (message) => toast.error(message);
  const success = (message) => toast.info(message);

  const handleFollow = (id) => {
    axios
      .post(`http://localhost:3000/users/follow/${id}`, {
        userId: USER ? USER?._id : "",
      })
      .then((res) => {
          console.log(res.data)
        success(res.data.message);
      })
      .catch((err) => {
        failed(err?.response?.data?.message);
      });
  };

  const handleUnFollow = (id) => {
    axios
    .post(`http://localhost:3000/users/unfollow/${id}`, {
      userId: USER ? USER?._id : "",
    })
    .then((res) => {
        console.log(res.data)
      success(res.data.message);
    })
    .catch((err) => {
      failed(err?.response?.data?.message);
    });
  };

  return (
    <div className="w-1/2 px-5 mb-20 mt-5">
      <h2 className="text-white text-xl font-bold ml-3 mb-5">All Users</h2>
      <div className="h-screen overflow-y-auto mb-20">
        <div className="flex flex-wrap items-center">
          {data &&
            data.data.map((data, index) => {
              return (
                <div className="w-1/2 px-2 mb-4" key={index}>
                  <div className="w-full border border-solid border-gray-200 rounded-lg px-2 py-5">
                    <div className="flex">
                      <div className="flex items-center">
                        <div
                          style={{ width: 70, height: 70 }}
                          className="rounded-lg overflow-hidden"
                        >
                          <img
                            src={
                              data
                                ? `http://localhost:3000/${data.profilePicture}`
                                : ""
                            }
                            className="w-full h-full object-cover"
                            alt="profile"
                          />
                        </div>
                        <div className="ml-2">
                          <h2 className="text-white font-bold  text-sm">
                            {data ? data?.username : "username"}
                          </h2>
                          <div className="flex justify-between mt-2">
                            <div
                              className="bg-indigo-600 hover:bg-indigo-500 text-white text-center text-sm px-2 py-1"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                handleFollow(data ? data?._id : "")
                              }
                            >
                              Follow
                            </div>
                            <div
                              className="bg-red-600 hover:bg-red-500 text-white text-center text-sm px-2 py-1 ml-2"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleUnFollow(data ? data?._id : "")}
                            >
                              UnFollow
                            </div>
                          </div>
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
