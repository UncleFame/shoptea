import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage1 = () => {
  const navigate = useNavigate();

  const onImages2RemovebgPreview1Click = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-left text-17xl text-black font-inter">
      <div className="absolute top-[105px] left-[180px] inline-block w-[90px] h-11">
        login
      </div>
      <img
        className="absolute top-[331px] left-[38px] w-[354px] h-[73px] object-cover cursor-pointer"
        alt=""
        src="/images--2-removebgpreview-1-2@2x.png"
        onClick={onImages2RemovebgPreview1Click}
      />
    </div>
  );
};

export default LoginPage1;
