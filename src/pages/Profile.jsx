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

  const onTextClick = useCallback(() => {
    navigate("/EditProfile");
  }, [navigate]);

  const onBacktohome1ImageClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-ful overflow-hidden text-left  font-inter">
          <div className="flex flex-row items-center justify-start w-f">
              <p  className="" onClick={onBacktohome1ImageClick}><IoChevronBack />Home</p>    
          </div>
                  <div className="   flex-col border-solid  border-4 text-center item-center w-full justify-center gap-y-[px] ">
                      <FaUserCircle size={80} />  

                      <p>Username</p>
                      <p>เเนะนำตัว</p>
                      <div class="container py-10 mx-0 min-w-full flex flex-col items-center">
                      <p className="text-center button-center  py-2 px-4 mt-3 rounded-lg  cursor-pointer   border-solid border-2  text-gray-200 " 
                      onClick={onTextClick}
                      >แก้ไข</p>
                    </div>

                      
                      <div className="flex flex-row items-center mt-4">
                      <IoLogoFacebook className="text-blue-500"  size={50}/>

                        <p className="text-gray-200">facebook/profile</p>
                      </div>
                     
                  </div>
                  
                        <div className="  w-full bg-white  box-border mt-4  h-[2px] gap-y-5 border-solid border-gray-400" />
                        <div className="   w-full bg-darkgray box-border h-[2px] gap-y-5 border-solid border-gray-400" />

                    <div class="w-full flex flex-col items-center px-4 mt-4]">
                    <p className=" rounded-lg mx-auto w-[450px]  cursor-pointer text-center border-solid border-2 text-gray-200 " 
                    onClick={handleSignOut}>ออกระบบ</p>

                    </div>
     </div>
  );
};

export default Profile;
