import React from "react";
import { useSelector } from "react-redux";

const InputPost = ({value, onChange}) => {
  const THEME = useSelector((state) => state.themeState);
  return (
    <textarea
      name="desc"
      onChange={onChange}
      rows="5"
      value={value}
      className="px-5 py-2 text-xl bg-transparent border-0 focus:outline-none"
      placeholder="Apa yang Anda pikirkan?"
      style={{ width: "100%", height: "100%", color: THEME ? "black" : "white" }}
    ></textarea>
  );
};

export default InputPost;
