import React from "react";

const InputText = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div className="w-full mb-5">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-solid border-gray-300 rounded-md w-full focus:outline-none px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputText;
