import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useSelector } from "react-redux";

const NavBrand = () => {
  const THEME = useSelector((state) => state.themeState);
  return (
    <div className="flex items-center">
      <FacebookIcon
        style={{ color: THEME ? "#4267b2" : "white" }}
        fontSize="large"
      ></FacebookIcon>
      <div
        className="w-3/4 ml-2 transition-all duration-300 ease-in-out rounded-full"
        style={{ backgroundColor: THEME ? "white" : "#4a4a4a" }}
      >
        <div className="flex items-center justify-center py-1">
          <SearchIcon style={{ color: THEME ? "gray" : "white" }}></SearchIcon>
          <input
            className="w-5/6 px-4 transition-all duration-300 ease-in-out bg-transparent border-none rounded-full focus:outline-none"
            type="text"
            placeholder="Search..."
            style={{ color: THEME ? "black" : "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBrand;
