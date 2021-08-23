import React from "react";
import { useHistory, withRouter } from "react-router";

const Button = ({ type, label, path, onClick }) => {
  const history = useHistory();
  if (type === "blue") {
    return (
      <button
        className="w-full py-3 text-xl font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  if (type === "green") {
    return (
      <button
        className="w-full py-3 text-xl font-bold text-white rounded-md"
        style={{ backgroundColor: "#42b72a" }}
        onClick={() => history.push(path)}
      >
        {label}
      </button>
    );
  }

  if (type === "forgetPassword") {
    return (
      <a href="/" className="mx-auto text-sm text-blue-400 hover:underline">
        Lupa Kata Sandi?
      </a>
    );
  }

  if (type === "post") {
    return (
      <button
        className="w-full px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-400"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      className="w-full py-3 text-xl font-bold text-white bg-blue-600 rounded-md hover:bg-blue-500"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default withRouter(Button);
