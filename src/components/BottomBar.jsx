import React from 'react'
import {useNavigate} from "react-router-dom"

import { FaHome } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";


import { GoBookmark } from "react-icons/go";

import { CiBellOn } from "react-icons/ci";


import { LuSettings2 } from "react-icons/lu";


export const BottomBar = () => {
const navigate = useNavigate();


  return (
    


      
    <nav
        className="absolute top-[914px] left-[-38px] w-[468px] h-[42.9px]"
        fasd="fdas"
      >
       
        <img 
          className="absolute top-[0px] left-[0px] w-[468px] h-[41.6px] object-cover"
          alt=""
          src="/whitehouseplanbusinesshotelamtrakwhitebar-1@2x.png"
        />
         <FaHome    className="absolute top-[6.8px] left-[48.8px] w-[43.9px] h-[31.2px] object-cover"
        

          onClick={()=>navigate("/landing-page-for-real")}
        />
        <LuSettings2 
          className="absolute top-[1.8px] left-[380px] w-[58.3px] h-[39.5px] object-cover"
          alt=""
          src="/setting-icon-1@2x.png"
        />
        
        <MdOutlineRateReview    className="absolute top-[2.6px] left-[127.7px] w-[66.3px] h-[39.5px] object-cover cursor-pointer"
          
          
          onClick={()=>navigate("/res-preupload")}
        />

        
        <GoBookmark 
          className="absolute top-[6px] left-[212.6px] w-[50.2px] h-[36.9px] object-cover"
          alt=""
        
        />
        
        <CiBellOn
          className="absolute top-[2.6px] left-[299.6px] w-[34.6px] h-[38px] object-cover"
          alt=""
  
        />
      </nav>
  )
}

export default BottomBar