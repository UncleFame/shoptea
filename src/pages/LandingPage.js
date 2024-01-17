import React ,{ useState} from "react";
import { useCallback } from "react";
import { Form, useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";


const LandingPage = () => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({
    email:"" ,password:""
  });
  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value

      }  
    })
  }
  async function HandleSubmit() 
{
const { data, error } = await supabase.auth.signUp({
  email: formData.email,
  password: formData.password,
  })
  }

  const onFrameContainerClick = useCallback(() => {
    navigate("/Register");
  }, [navigate]);

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
        <form onSubmit={HandleSubmit}>
          <input 
            placeholder="Email"
            name="email"
            onChange={handleChange}/>


           <input 
            placeholder="Password"
            name="password"
            onChange={handleChange}/>

          <button type="Submit" onClick={() => navigate("/Register")}>
          signUp
          </button>
        </form>
        </div> 
  
      
      <div className="absolute top-[138px] left-[174px] w-[86px] h-[94px] overflow-hidden" />
    </div>
  );
};

export default LandingPage;
