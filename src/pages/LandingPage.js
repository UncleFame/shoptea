import React ,{ useState} from "react";
import { useCallback } from "react";
import { Form, useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";
import { insertNewUser } from "../models/users";




const LandingPage = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:"" ,password:""
  });
  const {email, password} = formData;

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value

      }  
    })
  }

  async function HandleRegister(event) {
    // prevent screen from refreshing after submitting
    event.preventDefault();
    try {
      const newUser = {
        email,
        password
      }
      await insertNewUser(newUser)
  
      navigate("/Register");
  
    } catch (error) {
      throw new Error(error.message)
    }
  }


 async function Hadlelogin(event){
  event.preventDefault()
  try {
    // STEP 1: Check if the user exists
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('email',email)
      .single();
      
     return console.log(data)
    
    
    // STEP 2: If user exists, proceed
    if (data && data.length > 0) {
      // Check if email is present
      if (data[0].email) {
        console.log('Email found');
  
        // STEP 3: Check password
        if (data[0].password) {
          console.log('Password found');
          
          // STEP 4: Check the user type
          if (data[0].type) {
            // STEP 7: If type exists, go to landing page
            console.log('User type found');
            // navigate("/landing-page-for-real");
          } else {
            // STEP 6: If no type, go to registration
            console.log('No user type, go to registration');
            // navigate("/registration-page");
          }
        } else {
          console.log('Error: Password not found');
        }
      } else {
        console.log('Error: Email not found');
      }
    } else {
      // STEP 5: If user does not exist, print an error message
      console.log('Error: User not found');
    }
  } catch (error) {
       console.error('Supabase error:', error.message);
  }
  
 }

  // const onFrameContainerClick = useCallback(() => {
  //   navigate("/Register");
  // }, [navigate]);


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
