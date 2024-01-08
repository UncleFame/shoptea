import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onText2Click = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-center text-lg text-black font-inter">
      <div className="absolute top-[230px] left-[78px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-64 h-[37px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-64 h-[37px] border-[1px] border-solid border-gray-300" />
      </div>
      <div className="absolute top-[316px] left-[78px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-64 h-[37px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white box-border w-64 h-[37px] border-[1px] border-solid border-gray-300" />
      </div>
      <div className="absolute top-[466px] left-[149px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[109px] h-[37px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white w-[109px] h-[37px]" />
      </div>
      <div className="absolute top-[621px] left-[153px] w-px h-px overflow-hidden" />
      <div className="absolute top-[237px] left-[105px] inline-block w-[196px] h-[33px]">
        ร้านค้า
      </div>
      <div className="absolute top-[321px] left-[80px] inline-block w-[250px] h-[34px]">
        ผู้ใช้ทั่วไป
      </div>
      <div
        className="absolute top-[473px] left-[74px] inline-block w-[250px] h-[34px] cursor-pointer"
        onClick={onText2Click}
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
