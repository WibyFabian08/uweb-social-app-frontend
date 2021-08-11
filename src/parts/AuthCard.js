import React from "react";
import Button from "../elements/Button";
import InputText from "../elements/InputText";

const AuthCard = ({ type }) => {
  if (type === "register") {
    return (
      <div className="w-2/5">
        <div
          className="bg-white p-5 rounded-lg"
          style={{
            boxShadow:
              "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0, 0, 0 / 10%)",
          }}
        >
          <InputText type="text" placeholder="Email Address"></InputText>
          <InputText type="password" placeholder="Password"></InputText>
          <div className="w-full mb-5">
            <Button type="blue" label="Buat Akun Baru"></Button>
          </div>
          <div className="flex w-full">
            <Button type="forgetPassword"></Button>
          </div>
          <div
            className="w-full border border-solid border-gray-300 mt-5"
            style={{ height: 1 }}
          ></div>
          <div className="flex justify-center">
            <div className="w-1/2 mt-5">
              <Button type="green" label="Login" path="/login"></Button>
            </div>
          </div>
        </div>
        <p className="text-black mt-5">
          <span className="font-bold text-sm">Buat Halaman</span> untuk
          selebriti, grup musik, atau bisnis.
        </p>
      </div>
    );
  }

  return (
    <div className="w-2/5">
      <div
        className="bg-white p-5 rounded-lg"
        style={{
          boxShadow:
            "0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0, 0, 0 / 10%)",
        }}
      >
        <InputText type="text" placeholder="Email Address"></InputText>
        <InputText type="password" placeholder="Password"></InputText>
        <div className="w-full mb-5">
          <Button type="blue" label="Login"></Button>
        </div>
        <div className="flex w-full">
          <Button type="forgetPassword"></Button>
        </div>
        <div
          className="w-full border border-solid border-gray-300 mt-5"
          style={{ height: 1 }}
        ></div>
        <div className="flex justify-center">
          <div className="w-1/2 mt-5">
            <Button
              type="green"
              label="Buat Akun Baru"
              path="/register"
            ></Button>
          </div>
        </div>
      </div>
      <p className="text-black mt-5">
        <span className="font-bold text-sm">Buat Halaman</span> untuk selebriti,
        grup musik, atau bisnis.
      </p>
    </div>
  );
};

export default AuthCard;
