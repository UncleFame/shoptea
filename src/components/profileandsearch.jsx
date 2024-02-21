import React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

export const ProfileAndSearch = ({
  isTitleVisible = false,
  header,
  graybar = false,
}) => {
  const navigate = useNavigate();

  return (
    <nav className="flex relative items-center w-full justify-between gap-4 py-5 box-border px-5">
      {isTitleVisible && (
        <div className="flex flex-col gap-y-2">
          <p className="m-0 text-[16px] font-bold text-gray-200">MatCha&Tea</p>
          <p className="m-0 text-green-700 font-semibold text-[16px]">
            เรานำชามาให้คุณ
          </p>
        </div>
      )}
      <p className="absolute left-1/2 translate-x-[-50%] text-gray-500 font-semibold">
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

const ProfileImage = ({ onClick }) => {
  return (
    <img
      className="w-[35px] h-[35px] object-cover rounded-full"
      onClick={onClick}
      src="https://cdn2.momjunction.com/wp-content/uploads/2021/02/What-Is-A-Sigma-Male-And-Their-Common-Personality-Trait-624x702.jpg"
    />
  );
};

export default ProfileAndSearch;
