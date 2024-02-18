import React from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";

export const ProfileAndSearch = ({isTitleVisible = false, header}) => {
  const navigate = useNavigate();

  return (
    
    <nav className="flex relative items-center w-full justify-between gap-4 py-3 box-border px-5">
      {
        isTitleVisible &&
        <div className="flex flex-col ">
        <p className="m-0 ">{`MatCha&Tea`}</p>
        <p className="m-0 text-seagreen">เรานำชามาให้คุณ</p>
      </div>
      }
      <p className="absolute left-1/2 translate-x-[-50%]">
        {header}
      </p>
      <span className={`flex gap-x-4 ${isTitleVisible ? "" : "ml-auto"}`}>
        <IoSearchOutline className='text-black bg-gray-300 p-3 rounded-full' size={20} onClick={()=>navigate("/All")}/>
        <CgProfile size={45} onClick={()=>navigate("/profile")}/>
      </span>
    </nav>
  )
}

export default ProfileAndSearch