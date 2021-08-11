import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import FacebookIcon from "@material-ui/icons/Facebook";

const NavBrand = () => {
  return (
    <div className="flex items-center">
      <FacebookIcon style={{ color: "white" }} fontSize="large"></FacebookIcon>
      <div
        className="w-3/4 ml-2 rounded-full"
        style={{ backgroundColor: "#4a4a4a" }}
      >
        <div className="flex justify-center items-center py-1">
          <SearchIcon style={{ color: "white" }}></SearchIcon>
          <input
            className="rounded-full px-4 bg-transparent text-white w-5/6 border-none focus:outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default NavBrand;
