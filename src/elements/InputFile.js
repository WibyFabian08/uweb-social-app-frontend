import React, { useRef } from "react";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const InputFile = () => {
  const uploadImage = useRef(null);
  return (
    <div
      className="flex items-center my-2"
      style={{ cursor: "pointer" }}
      onClick={() => uploadImage.current.click()}
    >
      <VideoLibraryIcon
        style={{ color: "white" }}
        fontSize="large"
      ></VideoLibraryIcon>
      <h2 className="text-white ml-2">Add Image</h2>
      <input type="file" name="" id="" ref={uploadImage} className="hidden" />
    </div>
  );
};

export default InputFile;
