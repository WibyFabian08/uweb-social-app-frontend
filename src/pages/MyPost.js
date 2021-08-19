import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  createPost,
  deletePost,
  getMyPost,
  likePost,
} from "../redux/action/postAction";

import ModalPost from "../parts/ModalPost";
import PostCard from "../parts/PostCard";
import WritePost from "../parts/WritePost";

import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import LanguageIcon from "@material-ui/icons/Language";
import PhoneIcon from "@material-ui/icons/Phone";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const MyPost = ({ match }) => {
  // const USER = useSelector((state) => state.userState);
  const MYPOST = useSelector((state) => state.myPostState);

  const modalRef = useRef(null);

  const [USER, setUSER] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [postBody, setPostBody] = useState({
    desc: "",
    image: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPostBody({
      ...postBody,
      [e.target.name]: e.target.value,
    });
  };

  const showModalPost = () => {
    setShowModal(!showModal);
  };

  const onSubmit = () => {
    const data = new FormData();

    data.append("userId", USER._id);
    data.append("body", postBody.desc);
    data.append("image", postBody.image[0]);
    dispatch(
      createPost(data, setIsloading, setShowModal, USER, setPostBody, postBody)
    );
    dispatch(getMyPost(match ? match.params.username : ""));
  };

  const handleLike = (data) => {
    dispatch(likePost(data, USER));
    dispatch(getMyPost(match ? match.params.username : ""));
  };

  const handleDelete = (data) => {
    dispatch(deletePost(data, setShowDelete, USER));
    dispatch(getMyPost(match ? match.params.username : ""));
  };

  function handleClickOutside(event) {
    if (modalRef?.current && !modalRef?.current?.contains?.(event.target)) {
      setShowModal(false);
    }
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
    dispatch(getMyPost(match ? match.params.username : ""));
  }, [match, dispatch]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      style={{
        backgroundColor: "#1c1e21",
      }}
      className="relative"
    >
      <div className="container px-40 mx-auto">
        <div className="flex justify-center">
          <div className="w-2/5">
            <div
              className="p-5 mt-5 mr-5 rounded-lg"
              style={{ backgroundColor: "#242526" }}
            >
              <h2 className="mb-3 text-xl font-bold text-white">Intro</h2>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <LanguageIcon style={{ color: "white" }}></LanguageIcon>
                  <p className="ml-1 text-white">Situs : </p>
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
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <PhoneIcon style={{ color: "white" }}></PhoneIcon>
                  <p className="ml-1 text-white">Phone : </p>
                </div>
                <p className="text-white">089663191201</p>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <SupervisorAccountIcon
                    style={{ color: "white" }}
                  ></SupervisorAccountIcon>
                  <p className="ml-1 text-white">Status : </p>
                </div>
                <p className="text-white">Menikah</p>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <SportsBasketballIcon
                    style={{ color: "white" }}
                  ></SportsBasketballIcon>
                  <p className="ml-1 text-white">Hobby : </p>
                </div>
                <p className="text-white">Olahraga</p>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center">
                  <ImportContactsIcon
                    style={{ color: "white" }}
                  ></ImportContactsIcon>
                  <p className="ml-1 text-white">Alamat : </p>
                </div>
                <p className="text-white">Garut</p>
              </div>
            </div>
          </div>
          <div className="w-3/5">
            {match.params.username === USER?.username && (
              <WritePost showModalPost={showModalPost}></WritePost>
            )}
            {MYPOST.length > 0 ? (
              MYPOST.map((data, index) => {
                return (
                  <PostCard
                    key={index}
                    data={data}
                    handleLike={handleLike}
                    setShowDelete={setShowDelete}
                    showDelete={showDelete}
                    handleDelete={handleDelete}
                  ></PostCard>
                );
              })
            ) : (
              <div className="mt-5">
                <h2 className="text-xl font-bold text-center text-white">
                  Belum Ada Postingan
                </h2>
              </div>
            )}
            {showModal && (
              <ModalPost
                modalRef={modalRef}
                showModalPost={showModalPost}
                setShowModal={setShowModal}
                postBody={postBody}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                onSubmit={onSubmit}
                handleChange={handleChange}
                isLoading={isLoading}
              ></ModalPost>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MyPost);
