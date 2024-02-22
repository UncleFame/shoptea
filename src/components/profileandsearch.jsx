import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

export const ProfileAndSearch = ({
  isTitleVisible = false,
  header,
  graybar = false,
}) => {
  const navigate = useNavigate();

  return (
    <nav className={`flex relative items-center w-full justify-between gap-4 py-5 box-border px-5 ${graybar ? "border-solid border-b-2 border-gray-300" : ""}`}>
      {isTitleVisible && (
        <div className="flex flex-col gap-y-2">
          <p className="m-0 text-[16px] font-bold text-gray-200">MatCha&Tea</p>
          <p className="m-0 text-green-700 font-semibold text-[16px]">
            เรานำชามาให้คุณ
          </p>
        </div>
      )}
      <p className="absolute left-1/2 translate-x-[-50%] text-gray-500 font-bold font-sans">
        {header}
      </p>
      <span
        className={`flex gap-x-2.5 ${isTitleVisible ? "" : "ml-auto"} justify-end`}
      >
        <IoSearchOutline
          className="text-black bg-gray-300 p-[9px] rounded-full"
          size={17}
          onClick={() => navigate("/All")}
        />
        <ProfileImage onClick={() => navigate("/profile")} />
      </span>
    </nav>
  );
};

export const ProfileImage = ({ onClick, size = 35 }) => {
  return (
    <img
      style={{
        width : `${size}px`,
        heigth :  `${size}px`
      }}
      className="object-cover rounded-full"
      onClick={onClick}
      src="https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-624x702.jpg"
    />
  );
};

export default ProfileAndSearch;
