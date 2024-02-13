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
      <img
        className="flex flex-col mx-auto w-[169px] h-[169px] overflow-hidden object-contain "
        alt=""
        src="/bobacup.png"
      />

      
      <div className="flex flex-col mx-auto font-semibold text-material-theme-sys-light-primary inline-block w-[480px] h-[61px]">
        
      <p>Matcha&Tea</p>
        <p>เรานำชามาให้คุณ</p>
        <form >

            
        <div className="= flex flex-col mx-auto gap-5">

        <input 
            
            className="outline outline-2 outline-offset-2"
            placeholder="Email " 
            name="email"
            onChange={handleChange}/>
            


           <input 
            className="outline outline-2 outline-offset-2"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}/>
          
          </div >
         <div className=" flex gap-5 mt-[30px] mx-[180px]">
         <button type="submit" onClick={Hadlelogin} 
         className="bg-green-800 size-12 ">
           Login
        </button>

          
          <button type="Submit" onClick={ HandleRegister}>
          signUp
          </button>


         </div>
          
          
        </form>


      </div>
      
       
  
      
      <div className="absolute top-[138px] left-[174px] w-[86px] h-[94px] overflow-hidden" />
    </div>
  );
};

export default LandingPage;
