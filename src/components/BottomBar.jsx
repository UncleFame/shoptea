import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

export const BottomBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { pathname } = location;
  const currentPage = pathname.split("/")[1];
  const iconSize = 25;
  return (
    <div className="flex flex-col sticky bg-white bottom-0 w-full box-border border-t border-solid border-gray-300 h-[10%] px-24">
      <ul className="flex items-center w-full justify-between h-full p-0 m-0">
        <FaHome
          size={iconSize}
          className={`${currentPage === "landing-page-for-real" ? "text-[#B9CCB5]" : "text-black"}`}
          onClick={() => navigate("/landing-page-for-real")}
        />
        <MdOutlineRateReview
          size={iconSize}
          className={`cursor-pointer ${currentPage === "res-preupload" ? "text-[#B9CCB5]" : "text-black"}`}
          onClick={() => navigate("/res-preupload")}
        />
      </ul>
    </div>
  );
};

export default BottomBar;
