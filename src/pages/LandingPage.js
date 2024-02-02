import React ,{ useEffect, useState} from "react";
import { useCallback } from "react";
import { Form, useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";
import { doesUserExist, insertNewUser } from "../models/users";
import { useUser } from "../hooks/useUser";

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:"" ,password:""
  });
  const {email, password} = formData;
  const {user, loading} = useUser();

  // logic for navigating users if they are authenticated
  useEffect(()=>{
    // navigate to landing-page-for-real if the user is authenticated
    if (loading) return
    if (user) return navigate('/landing-page-for-real')
  },[user])

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value

      }  
    })
  }

  async function HandleRegister(event) {
    
    event.preventDefault();
    try {
      const newUser = {
        email,
        password
      }

      if (!email || !password) return alert("กรุณาใส่ email และ password")

      const userExist = await doesUserExist(email);

      if (userExist) return alert("มีผู้ใช้นี้อยู่แล้ว")

      const data = await insertNewUser(newUser)
      
      localStorage.setItem("email", newUser.email);  
      localStorage.setItem("id" ,  data.id);
     
      navigate("/Register");
  
    } catch (error) {
      alert(error.message)
    }
  }


 async function Hadlelogin(event){
  event.preventDefault()
  try {
    // STEP 1: Check if the user exists
    const { data : fetchedUser, error } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();

    if (!fetchedUser) return alert("ไม่มีผู้ใช้นี้อยู่ในระบบ")

    
    localStorage.setItem("email", fetchedUser.email);  
    localStorage.setItem("id" ,  fetchedUser.id);

    navigate("/landing-page-for-real");
    
  } catch (error) {
       console.error('Supabase error:', error.message);
  }
  
 }

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-center text-13xl text-gray-200 font-inter">
      <div className="absolute top-[0px] w-full h-[76px] text-base text-dimgray-200">
        <div className="absolute top-[0px] bg-white box-border w-screen h-[76px] border-[1px] border-solid border-gray-300" />
        <div className="absolute top-[43.9px] left-[165px] font-extrabold inline-block w-[110px] h-[11.8px]">
          Login
        </div>
      </div>
      <div className="absolute top-[348px] left-[41px] font-extrabold inline-block w-[348px] h-[61px]">{`MatCha&Tea`}</div>
      <div className="absolute top-[409px] left-[-25px] font-semibold text-material-theme-sys-light-primary inline-block w-[480px] h-[61px]">
        เรานำชามาให้คุณ
      </div>
      <img
        className="absolute top-[149px] left-[131px] w-[169px] h-[169px] overflow-hidden object-contain"
        alt=""
        src="/bobacup.png"
      />
      <div className="absolute top-[500px] left-[131px] w-[169px] h-[169px] ">
        <form >
          <input 
            placeholder="Email"
            name="email"
            onChange={handleChange}/>


           <input 
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}/>
            
          <button type="Submit" onClick={Hadlelogin }>
          login
          </button>

          <button type="Submit" onClick={ HandleRegister}>
          signUp
          </button>
          
        </form>
        </div> 
  
      
      <div className="absolute top-[138px] left-[174px] w-[86px] h-[94px] overflow-hidden" />
    </div>
  );
};

export default LandingPage;
