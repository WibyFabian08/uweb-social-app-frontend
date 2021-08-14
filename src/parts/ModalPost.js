import React from "react";
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
}) => {
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
            <InputPost
              value={postBody.desc}
              onChange={(e) => handleChange(e)}
            ></InputPost>
            {imagePreview && (
              <>
                <h2 className="text-white my-3">Preview Image</h2>
                <div className="flex flex-col items-center">
                  <img
                    width={200}
                    className="object-cover rounded-lg"
                    src={imagePreview}
                    alt="preview"
                  />
                </div>
              </>
            )}
            <InputFile
              value={postBody.imgae}
              onChange={(e) => handleChange(e)}
              setImagePreview={setImagePreview}
            ></InputFile>
            {(postBody.desc.length > 1 || postBody.image) && (
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
