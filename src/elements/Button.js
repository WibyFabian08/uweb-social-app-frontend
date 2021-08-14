import React from "react";
import { useHistory, withRouter } from "react-router";

const Button = ({ type, label, path, onClick }) => {
  const history = useHistory();
  if (type === "blue") {
    return (
      <button
        className="text-white font-bold text-xl bg-blue-600 hover:bg-blue-500 w-full rounded-md py-3"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  if (type === "green") {
    return (
      <button
        className="text-white font-bold text-xl w-full rounded-md py-3"
        style={{ backgroundColor: "#42b72a" }}
        onClick={() => history.push(path)}
      >
        {label}
      </button>
    );
  }

  if (type === "forgetPassword") {
    return (
      <a href="/" className="mx-auto text-blue-400 hover:underline text-sm">
        Lupa Kata Sandi?
      </a>
    );
  }

  if (type === "post") {
    return (
      <button
        className="w-full bg-blue-500 hover:bg-blue-400 text-white rounded-lg px-4 py-2 mt-2"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      className="text-white font-bold text-xl bg-blue-600 hover:bg-blue-500 w-full rounded-md py-3"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default withRouter(Button);
