import React, { FC } from "react";
import { FaStar } from "react-icons/fa";

export const Star = ({ rating, textColor = "text-gray-500" }) => {
  const isNumber = Math.floor(rating) === rating;
  return (
    <div className="flex items-center justify-start gap-x-2 h-[20px]">
      {rating > 0 && (
        <ul className="flex p-0 m-0 gap-x-1">
          {Array.from({ length: rating }, (_, index) => {
            return <FaStar key={index} className="text-yellow-400" />;
          })}
        </ul>
      )}
      <p className={`${textColor ? textColor : "text-gray-300"} text-sm font-semibold`}>
        {isNumber ? `${rating}.0` : rating}
      </p>
    </div>
  );
};
