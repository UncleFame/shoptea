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
    <div className="relative bg-white px-5 box-border w-full h-[932px] overflow-hidden text-center text-13xl text-gray-200 font-inter">
      <img
        className="flex flex-col mx-auto mt-[60px] [169px] h-[169px] overflow-hidden object-contain "
        alt=""
        src="/matchapic.png"
      />

      
      <div className="flex flex-col mx-auto font-semibold text-material-theme-sys-light-primary inline-block w-full">
        
      <p>Matcha&Tea</p>
        <p>เรานำชามาให้คุณ</p>
        <form >

            
        <div className="= flex flex-col w-full">
        <p className="flex flex text-xs   ">email</p>
        <input 
            
            className="outline outline-2 h-[40px] rounded-md outline-gray-400"
            placeholder="Email " 
            name="email"
            onChange={handleChange}/>
            

            <p className="flex text-xs "> 
              password
              </p>
           <input 
            className="outline outline-2 h-[40px] rounded-md outline-gray-400"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}/>
          
          </div >
         <div className=" flex gap-[30px] w-full mt-[30px] ">
         <button type="submit" onClick={Hadlelogin} 
         className="bg-green-800 w-full h-[50px] rounded-md text-blac">
           <p className="text-white">Login</p>  
        </button>

          
          <button type="Submit" onClick={ HandleRegister} className="rounded-md w-full h-[50px] bg-inherit border-2 text-green-800  ">
          SignUp
          </button>


         </div>
          
          
        </form>


      </div>
      
       
  
      
      <div className="absolute top-[138px] left-[174px] w-[86px] h-[94px] overflow-hidden" />
    </div>
  );
};

export default LandingPage;
