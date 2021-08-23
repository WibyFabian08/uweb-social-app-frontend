import React, { useRef } from "react";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { useSelector } from "react-redux";

const InputFile = ({ onChange, setImagePreview }) => {
  const uploadImage = useRef(null);
  const THEME = useSelector((state) => state.themeState);

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
        style={{color: THEME ? '#4267b2' : "white"}}
        fontSize="large"
      ></VideoLibraryIcon>
      <h2 className="ml-2 font-bold" style={{color: THEME ? 'black' : "white"}}>Add Image</h2>
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
