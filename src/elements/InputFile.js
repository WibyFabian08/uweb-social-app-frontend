import React, { useRef } from "react";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const InputFile = ({ onChange, setImagePreview }) => {
  const uploadImage = useRef(null);

  const getFile = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    onChange({
      target: {
        name: e.target.name,
        value: e.target.files,
      },
    });
  };
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
      <input
        type="file"
        name="image"
        onChange={(e) => getFile(e)}
        id=""
        ref={uploadImage}
        className="hidden"
      />
    </div>
  );
};

export default InputFile;
