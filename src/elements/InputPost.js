import React from "react";

const InputPost = ({value, onChange}) => {
  return (
    <textarea
      name="desc"
      onChange={onChange}
      rows="5"
      value={value}
      className="px-5 py-2 bg-transparent focus:outline-none border-0 text-white text-xl"
      placeholder="Apa yang Anda pikirkan?"
      style={{ width: "100%", height: "100%" }}
    ></textarea>
  );
};

export default InputPost;
