import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLine } from "../redux/action/postAction";

import ModalPost from "./ModalPost";
import PostCard from "./PostCard";
import WritePost from "./WritePost";

const MainContent = () => {
  const USER = useSelector((state) => state.userState);
  const POST = useSelector((state) => state.timeLineState);

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

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
            return <PostCard key={index} data={data}></PostCard>;
          })}
        <div style={{ height: 50 }}></div>
      </div>
      {showModal && <ModalPost showModalPost={showModalPost}></ModalPost>}
    </div>
  );
};

export default MainContent;
