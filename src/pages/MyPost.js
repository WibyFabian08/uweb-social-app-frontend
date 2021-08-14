import React, { useState, useEffect } from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom'

import PostCard from "../parts/PostCard";
import WritePost from "../parts/WritePost";
import ModalPost from "../parts/ModalPost";

import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";

const MyPost = ({match}) => {
  const [showModal, setShowModal] = useState(false);
  const [myPost, setMyPost] = useState([]);

  const showModalPost = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/profile/${match ? match.params.username : ""}`)
      .then((res) => {
        setMyPost(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match]);
  
  return (
    <div
      style={{
        backgroundColor: "#1c1e21",
      }}
      className="relative"
    >
      <div className="container mx-auto px-40">
        <div className="flex justify-center">
          <div className="w-2/5">
            <div
              className="p-5 mt-5 mr-5 rounded-lg"
              style={{ backgroundColor: "#242526" }}
            >
              <h2 className="text-white font-bold text-xl mb-3">Intro</h2>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <LanguageIcon style={{ color: "white" }}></LanguageIcon>
                  <p className="text-white ml-1">Situs : </p>
                </div>
                <a
                  href="https://fabianstek.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://fabianstek.blogspot.com/
                </a>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <PhoneIcon style={{ color: "white" }}></PhoneIcon>
                  <p className="text-white ml-1">Phone : </p>
                </div>
                <p className="text-white">089663191201</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <SupervisorAccountIcon
                    style={{ color: "white" }}
                  ></SupervisorAccountIcon>
                  <p className="text-white ml-1">Status : </p>
                </div>
                <p className="text-white">Menikah</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <SportsBasketballIcon
                    style={{ color: "white" }}
                  ></SportsBasketballIcon>
                  <p className="text-white ml-1">Hobby : </p>
                </div>
                <p className="text-white">Olahraga</p>
              </div>
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                  <ImportContactsIcon
                    style={{ color: "white" }}
                  ></ImportContactsIcon>
                  <p className="text-white ml-1">Alamat : </p>
                </div>
                <p className="text-white">Garut</p>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            <WritePost showModalPost={showModalPost}></WritePost>
            {myPost.length > 0 &&
              myPost.map((data, index) => {
                return <PostCard key={index} data={data}></PostCard>;
              })}
            {showModal && <ModalPost showModalPost={showModalPost}></ModalPost>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MyPost);
