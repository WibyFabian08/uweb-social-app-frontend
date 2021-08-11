import React, { useState } from "react";

import ModalPost from "./ModalPost";
import PostCard from "./PostCard";
import WritePost from "./WritePost";

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalPost = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-1/2 px-20 mb-20">
      <div className="h-screen overflow-y-auto mb-20">
        <WritePost showModalPost={showModalPost}></WritePost>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <div style={{ height: 50 }}></div>
      </div>
      {showModal && <ModalPost showModalPost={showModalPost}></ModalPost>}
    </div>
  );
};

export default MainContent;
