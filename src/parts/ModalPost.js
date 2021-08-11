import React from "react";
import Button from "../elements/Button";
import InputFile from "../elements/InputFile";
import InputPost from "../elements/InputPost";

const ModalPost = ({ showModalPost }) => {
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
            <InputPost></InputPost>
            <InputFile></InputFile>
            <Button type="post" label="Kirim"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
