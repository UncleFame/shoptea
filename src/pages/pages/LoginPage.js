import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const onImages2RemovebgPreview1Click = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-left text-17xl text-black font-inter">
      <div
        className="absolute top-[331px] left-[38px] w-[354px] h-[93px] cursor-pointer"
        onClick={onImages2RemovebgPreview1Click}
      />
      <div className="absolute top-[59px] left-[170px] inline-block w-[90px] h-11">
        login
      </div>
    </div>
  );
};

export default LoginPage;
