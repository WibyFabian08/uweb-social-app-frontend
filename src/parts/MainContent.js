import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { getTimeLine } from "../redux/action/postAction";

import ModalPost from "./ModalPost";
import PostCard from "./PostCard";
import WritePost from "./WritePost";

const MainContent = () => {
  const USER = useSelector((state) => state.userState);
  const POST = useSelector((state) => state.timeLineState);

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
    setIsloading(true);
    const data = new FormData();

    data.append("userId", USER._id);
    data.append("body", postBody.desc);
    data.append("image", postBody.image[0]);

    axios
      .post("http://localhost:3000/posts", data, {
        headers: {
          "Content-Type": "Multipart/Form-Data",
        },
      })
      .then((res) => {
        dispatch(getTimeLine(USER ? USER._id : null));
        setIsloading(false);
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        setIsloading(false);
        setShowModal(false);
      });
  };

  const handleLike = (data) => {
    axios
      .post(`http://localhost:3000/posts/${data ? data._id : ""}`, {
        userId: USER ? USER._id : "",
      })
      .then((res) => {
        dispatch(getTimeLine(USER ? USER._id : null));
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };

  const handleDelete = (data) => {
    axios
      .delete(`http://localhost:3000/posts/${data._id}`)
      .then((res) => {
        dispatch(getTimeLine(USER ? USER._id : null));
        setShowDelete(false)
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };

  const showModalPost = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(getTimeLine(USER ? USER._id : null));
  }, [USER, dispatch]);

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
