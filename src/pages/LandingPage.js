import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { loginWithGoogle, logout } from "./loginsystem";



const LandingPage = () => {
  const navigate = useNavigate();
  
  async function HandleSignIN() {
    await loginWithGoogle(); 
    // navigate("/Register");     
  }

  const onFrameContainerClick = useCallback(() => {
    navigate("/Register");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-center text-13xl text-gray-200 font-inter">
      <div className="absolute top-[348px] left-[41px] font-extrabold inline-block w-[348px] h-[61px]">{`MatCha&Tea`}</div>
      <div className="absolute top-[409px] left-[-25px] font-semibold text-material-theme-sys-light-primary inline-block w-[480px] h-[61px]">
        เรานำชามาให้คุณนะkrubpomna
      </div>
      <img
        className="absolute top-[149px] left-[131px] w-[169px] h-[169px] overflow-hidden object-cover"
        alt=""
        src="/epicetea@2x.png"
      />
      <div className="absolute top-[0px] left-[-57px] w-[430px] h-[76px] text-base text-dimgray-200">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[430px] h-[76px] border-[1px] border-solid border-gray-300" />
        <div className="absolute top-[43.9px] left-[calc(50% - 52px)] font-extrabold inline-block w-[103px] h-[11.8px]">
          Login
        </div>
      </div>
      <div
        className="absolute top-[500px] left-[59px] w-[312px] h-[71px] cursor-pointer"
        onClick={ HandleSignIN}
      >
        
        <img
          className="absolute top-[0px] left-[0px] w-[312px] h-[71px] object-cover"
          alt=""
          src="/image-1@2x.png"
        />
      </div> 
  
      
      <div className="absolute top-[138px] left-[174px] w-[86px] h-[94px] overflow-hidden" />
    </div>
  );
};

export default LandingPage;
