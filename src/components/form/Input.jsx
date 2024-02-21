import React from "react";

const Input = ({ onChange, value, name }) => {
  return (
    <input
      name={name}
      className="[outline:none] bg-white rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
