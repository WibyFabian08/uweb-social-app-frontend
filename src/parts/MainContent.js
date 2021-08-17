import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  createPost,
  deletePost,
  getTimeLine,
  likePost,
} from "../redux/action/postAction";

import ModalPost from "./ModalPost";
import PostCard from "./PostCard";
import WritePost from "./WritePost";

const MainContent = () => {
  const POST = useSelector((state) => state.timeLineState);
  
  const [USER, setUSER] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsloading] = useState(false);
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

  const onSubmit = () => {
    const data = new FormData();

    data.append("userId", USER._id);
    data.append("body", postBody.desc);
    data.append("image", postBody.image[0]);
    dispatch(
      createPost(data, setIsloading, setShowModal, USER, setPostBody, postBody)
    );
  };

  const handleLike = (data) => {
    dispatch(likePost(data, USER));
  };

  const handleDelete = (data) => {
    dispatch(deletePost(data, setShowDelete, USER));
  };

  const showModalPost = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUSER(data);
  }, []);

  useEffect(() => {
    dispatch(getTimeLine(USER ? USER._id : ""));
  }, [dispatch, USER]);

  return (
    <div className="w-1/2 px-20 mb-20">
      <div className="h-screen overflow-y-auto mb-20">
        <WritePost showModalPost={showModalPost}></WritePost>
        {POST.length > 0 &&
          POST.map((data, index) => {
            return (
              <PostCard
                key={index}
                data={data}
                handleLike={handleLike}
                handleDelete={handleDelete}
                showDelete={showDelete}
                setShowDelete={setShowDelete}
              ></PostCard>
            );
          })}
        <div style={{ height: 50 }}></div>
      </div>
      {showModal && (
        <ModalPost
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
  );
};

export default MainContent;
