import React, { FC } from "react";
import { FaStar } from "react-icons/fa";

export const StarInput = ({ rating, onClick }) => {
  return (
    <div className="flex items-center justify-start gap-x-2 h-[20px] cursor-pointer">
      <ul className="flex p-0 m-0 gap-x-1">
        {Array.from({ length: 5 }, (_, index) => {
          if (index <= rating - 1) {
            return <FaStar onClick={()=>onClick(index + 1)} key={index} className="text-yellow-400" />;
          }
          return <FaStar onClick={()=>onClick(index + 1)} key={index} className="text-gray-300" />;
        })}
      </ul>
    </div>
  );
};
