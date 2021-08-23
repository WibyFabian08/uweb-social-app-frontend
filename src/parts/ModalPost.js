import React from "react";
import { useSelector } from "react-redux";
import Button from "../elements/Button";
import InputFile from "../elements/InputFile";
import InputPost from "../elements/InputPost";

const ModalPost = ({
  showModalPost,
  onSubmit,
  handleChange,
  isLoading,
  imagePreview,
  setImagePreview,
  postBody,
  modalRef,
}) => {
  const THEME = useSelector((state) => state.themeState);
  return (
    <div
      className="absolute inset-0 z-10 transition-all duration-300"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div
          className="w-1/3 opacity-100 rounded-xl"
          style={{ backgroundColor: THEME ? "#edf0f5" : "#242526" }}
          ref={modalRef}
        >
          <div className="flex items-center p-2">
            <div style={{ flex: 2 }}></div>
            <div style={{ flex: 6 }}>
              <h1
                className="text-2xl font-bold text-center text-white"
                style={{ color: THEME ? "black" : "white" }}
              >
                Buat Postingan
              </h1>
            </div>
            <div style={{ flex: 2 }}>
              <h1
                className="mr-2 text-3xl text-right text-white"
                onClick={() => showModalPost()}
                style={{ cursor: "pointer", color: THEME ? "black" : "white" }}
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
            <InputPost
              value={postBody && postBody?.desc}
              onChange={(e) => handleChange(e)}
            ></InputPost>
            {imagePreview && (
              <>
                <h2 className="w-full my-3 text-white">Preview Image</h2>
                <div className="relative w-9/12 mx-auto">
                  <div
                    className="absolute right-0 px-3 py-1 bg-black rounded-full opacity-30"
                    style={{ cursor: "pointer" }}
                    onClick={() => setImagePreview("")}
                  >
                    <div className="mx-1 mb-1 text-xl text-white">x</div>
                  </div>
                  <img
                    height={50}
                    className="object-cover w-full rounded-lg"
                    src={imagePreview}
                    alt="preview"
                  />
                </div>
              </>
            )}
            <InputFile
              value={postBody && postBody?.imgae}
              onChange={(e) => handleChange(e)}
              setImagePreview={setImagePreview}
            ></InputFile>
            {((postBody && postBody?.desc.length > 1) || postBody?.image) && (
              <Button
                type="post"
                label={isLoading ? "Loading..." : "Kirim"}
                onClick={() => onSubmit()}
              ></Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
