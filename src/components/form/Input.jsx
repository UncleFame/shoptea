import React from "react";

const Input = ({ onChange, value, name, label }) => {
  return (
    <div className="flex flex-col items-start w-full">
      { label && <b className="inline-block w-full h-[25px]">{label}</b>}
      <input
        name={name}
        className="[outline:none] bg-white rounded-8xs box-border w-full h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
