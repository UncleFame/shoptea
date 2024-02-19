import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../utils/auth";
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io";


const Profile = () => {
  const [mrETCValue, setMrETCValue] = useState("");
  const [favoriteValue, setFavoriteValue] = useState("");
  const navigate = useNavigate();

  function handleSignOut(){
    try {
      signOut();

      alert("ออกจากระบบสำเร็จ")

      setTimeout(()=>{
        window.location.href = "/"
      }, 1000)
    } catch (error) {
      alert(error.message)
    }
  }

  function handleEdit(){
    try {
      
    } catch (error) {
      alert(error.message)
    }
  }

  const onRectangleClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  const onBacktohome1ImageClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-ful overflow-hidden text-left  font-inter">
          <div className="flex flex-row items-center justify-start w-f">
              <p  className="" onClick={onBacktohome1ImageClick}><IoChevronBack />Home</p>    
          </div>
                  <div className="   border-solid  border-4 flex flex-col text-center item-center w-full justify-center gap-y-[px] ">
                      <FaUserCircle size={80} />  

                      <p>Username</p>
                      <p>เเนะนำตัว</p>
                      <p className="rounded-lg bg-gray-500  text-center">แก้ไข</p>
                      
                      <div className="flex flex-row items-center gap-y-[50px]">
                      <IoLogoFacebook className="text-blue-500"  size={50}/>

                        <p>facebbok</p>
                      </div>
                     
                  </div>
                  
                        <div className=" pt-6 w-full bg-white  box-border w-full h-[2px] gap-y-5 border-solid border-gray-400" />
                        <div className="   w-full bg-darkgray box-border w-full h-[2px] gap-y-5 border-solid border-gray-400" />

                    <div>
                      <button className="text-center bg-gray-200 cursor-pointer" 
                      onClick={handleSignOut}
                      >ออกระบบ</button>
                    </div>
     </div>
  );
};

export default Profile;
