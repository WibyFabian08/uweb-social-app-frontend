import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthCard from "../parts/AuthCard";
import { masuk } from "../redux/action/authAction";

const Login = () => {
  const { error, loading } = useSelector((state) => state.globalState);
  const history = useHistory();
  const dispatch = useDispatch();
  const notify = () => toast.error(error);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const signin = () => {
    const data = {
      email: login.email,
      password: login.password,
    };

    dispatch(masuk(data, history, notify));
  };

  return (
    <div className="h-screen" style={{ backgroundColor: "#edf0f5" }}>
      <div className="container px-40 mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          <div className="w-3/5">
            <h2 className="text-blue-500 text-6xl font-bold">facebook</h2>
            <p className="text-black text-3xl mt-3">
              Facebook membantu Anda terhubung <br /> dan berbagi dengan
              orang-orang dalam <br /> kehidupan Anda.
            </p>
          </div>
          <AuthCard
            loading={loading}
            onClick={() => signin()}
            value={login}
            onChange={(e) => handleChange(e)}
          ></AuthCard>
        </div>
      </div>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Login;
