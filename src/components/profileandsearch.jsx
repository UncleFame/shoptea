import React from 'react'
import {useNavigate, useLocation} from "react-router-dom"
import { IoSearchCircle } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export const ProfileAndSearch = () => {
  const navigate = useNavigate();


  
  return (
    
    <nav className="flex fixed  w-full justify-end gap-4 py-3 box-border ">
        <IoSearchCircle size="50" className='top-[5px]' onClick={()=>navigate("/All")}/>
        <CgProfile size="48" onClick={()=>navigate("/profile")}/>

    </nav>
  )
}

export default ProfileAndSearch