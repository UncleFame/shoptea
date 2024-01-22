import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { insertNewUser } from "../models/users";
import { supabase } from "./loginsystem";


const Register = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState(null)
  const {user} = useUser();
  

  console.log(user)
  console.log(accountType)

  async function handleCreateAccount(){
    try {
      if (!accountType) return alert("กรุณาเลือกประเภทของบัญชี")
      // create a new user
    
      // insert a new user
      const { error } = await supabase
      .from('users')
      .update({ type : accountType })
      .eq('id', user.id )
      navigate("/landing-page-for-real");
      
      if (error) throw new Error(error.message)

    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-center text-lg text-black font-inter">
      <div className="absolute top-[230px] left-[78px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-64 h-[37px] active:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] active:opacity-[1]">
        <div className={`absolute top-[0px] left-[0px] rounded-lg ${accountType === "ร้านค้า" ? "bg-sky-400 text-white" : ""} box-border w-64 h-[37px] border-[1px] border-solid border-gray-300`} />
      </div>
      <div className="absolute top-[316px] left-[78px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-64 h-[37px] active:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] active:opacity-[1]">
        <div className={`absolute top-[0px] left-[0px] rounded-lg ${accountType === "ผู้ใช้ทั่วไป" ? "bg-sky-400 text-white" : ""} box-border w-64 h-[37px] border-[1px] border-solid border-gray-300`} />
      </div>
      <div className="absolute top-[466px] left-[149px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[109px] h-[37px]">
        <div className={`absolute top-[0px] left-[0px] rounded-lg w-[109px] h-[37px]`} />
      </div>
      <div className="absolute top-[621px] left-[153px] w-px h-px overflow-hidden" />
      <div
        onClick={()=>setAccountType("ร้านค้า")}
        className={`absolute top-[237px] left-[165px] w-[77px] h-[30px] ${accountType === "ร้านค้า" ? "text-white" : "text-black"}`}>
        ร้านค้า
      </div>
      <div
        onClick={()=>setAccountType("ผู้ใช้ทั่วไป")}
        className={`absolute top-[327px] left-[144px] w-[119px] h-[22px] ${accountType === "ผู้ใช้ทั่วไป" ? "text-white" : "text-black"}`}>
        ผู้ใช้ทั่วไป
      </div>
      <div
        className="absolute top-[473px] left-[74px] inline-block w-[250px] h-[34px] cursor-pointer"
        onClick={handleCreateAccount}
      >
        เสร็จ
      </div>
      <div className="absolute top-[-38px] left-[0px] w-[430px] h-[116px] text-base text-dimgray-200">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-gray-300" />
        <div className="absolute top-[67px] left-[calc(50%_-_62.3px)] font-extrabold inline-block w-[108.5px] h-[18px]">
          Register
        </div>
      </div>
    </div>
  );
};


export default Register;
