import React, { useRef } from "react";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

const ModalPost = ({ showModalPost }) => {
  const uploadImage = useRef(null);

  return (
    <div
      className="absolute inset-0 z-10 transition-all duration-300"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <div
          className="w-1/3 opacity-100 rounded-xl"
          style={{ backgroundColor: "#242526" }}
        >
          <div className="flex items-center p-2">
            <div style={{ flex: 2 }}></div>
            <div style={{ flex: 6 }}>
              <h1 className="text-white text-2xl font-bold text-center">
                Buat Postingan
              </h1>
            </div>
            <div style={{ flex: 2 }}>
              <h1
                className="text-white text-right text-3xl mr-2"
                onClick={() => showModalPost()}
                style={{ cursor: "pointer" }}
              >
                x
              </h1>
            </div>
          </div>
          <div
            style={{ border: "0.025px solid gray" }}
            className="w-full"
          ></div>
          <div className="p-5">
            <textarea
              name=""
              rows="5"
              className="px-5 py-2 bg-transparent focus:outline-none border-0 text-white text-xl"
              placeholder="Apa yang Anda pikirkan?"
              style={{ width: "100%", height: "100%" }}
            ></textarea>
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
                name=""
                id=""
                ref={uploadImage}
                className="hidden"
              />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2 mt-2">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
