import React from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GoBookmark } from "react-icons/go";
import { CiBellOn } from "react-icons/ci";
import { LuSettings2 } from "react-icons/lu";


export const BottomBar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const {pathname} = location;
  const currentPage = pathname.split("/")[1];
  const iconSize = 35
  return (
    
    <nav className="flex fixed bg-white bottom-0 w-full justify-between py-3 box-border px-8">

      <FaHome size={iconSize} className={`${currentPage === "landing-page-for-real" ? "text-[#B9CCB5]" : "text-black" }`}
        onClick={()=>navigate("/landing-page-for-real")}
      />
       <MdOutlineRateReview size={iconSize} className={`cursor-pointer ${currentPage === "res-preupload" ? "text-[#B9CCB5]" : "text-black"}`}
        onClick={()=>navigate("/res-preupload")}
      />
      
      <GoBookmark 
        size={iconSize}
        className=""
      />

      <CiBellOn
        size={iconSize}
        className=""
      />

      <LuSettings2 
        size={iconSize}
        className=""
      />
      
    </nav>
  )
}

export default BottomBar