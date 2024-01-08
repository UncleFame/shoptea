import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const onBacktohome1ImageClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-left text-17xl text-black font-inter">
      <div className="absolute top-[112px] left-[138px] whitespace-pre-wrap inline-block w-[163px] h-[97px]">
        <p className="m-0">sign up</p>
        <p className="m-0">customer</p>
        <p className="m-0">{`    `}</p>
      </div>
      <img
        className="absolute top-[664px] left-[36px] rounded-[43.5px] w-[354px] h-[87px] object-cover active:[filter:drop-shadow(0px_4px_4px_rgba(71,_71,_71,_0.25))]"
        alt=""
        src="/images--2-removebgpreview-1-1@2x.png"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[93px] h-[35px] object-cover cursor-pointer"
        alt=""
        src="/backtohome-1@2x.png"
        onClick={onBacktohome1ImageClick}
      />
      <div className="absolute top-[235px] left-[57px] text-[15px] inline-block w-[72px] h-[21px]">
        emai
      </div>
      <div className="absolute top-[266px] left-[33px] rounded-81xl bg-gainsboro w-[359px] h-[34px]" />
      <input
        className="[border:none] [outline:none] font-inter text-5xl bg-[transparent] absolute top-[273px] left-[52px] text-black text-left inline-block w-[325px] h-[21px]"
        placeholder="email"
        type="text"
        value={emailValue}
        onChange={(event) => setEmailValue(event.target.value)}
      />
      <div className="absolute top-[489px] left-[33px] rounded-81xl bg-gainsboro w-[359px] h-[34px]" />
      <input
        className="[border:none] [outline:none] font-inter text-5xl bg-[transparent] absolute top-[489px] left-[42px] text-black text-left inline-block w-[335px] h-[21px]"
        placeholder="password."
        type="text"
        value={passwordValue}
        onChange={(event) => setPasswordValue(event.target.value)}
      />
      <div className="absolute top-[456px] left-[52px] text-xl inline-block w-[121px] h-4">
        password
      </div>
    </div>
  );
};

export default SigninPage;
