import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthCard from "../parts/AuthCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { daftar } from "../redux/action/authAction";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { error, loading } = useSelector((state) => state.globalState);
  const history = useHistory();
  const dispatch = useDispatch();
  const notify = () => toast.error(error);

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const data = {
      username: register.username,
      email: register.email,
      password: register.password,
    };

    dispatch(daftar(data, notify, history));
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
            type="register"
            value={register}
            onChange={(e) => handleChange(e)}
            onClick={() => submit()}
            loading={loading}
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

export default Register;
