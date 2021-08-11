import React from "react";
import AuthCard from "../parts/AuthCard";

const Register = () => {
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
          <AuthCard type="register"></AuthCard>
        </div>
      </div>
    </div>
  );
};

export default Register;
