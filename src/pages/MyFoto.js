import React from "react";
import ImageList from "../parts/ImageList";

const MyFoto = () => {
  return (
    <div
      style={{
        backgroundColor: "#1c1e21",
      }}
    >
      <div className="container mx-auto py-5 px-40">
        <div className="flex justify-center">
          <div className="w-full">
            <ImageList></ImageList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoto;
