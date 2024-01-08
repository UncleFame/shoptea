import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ onClose }) => {
  const [mrETCValue, setMrETCValue] = useState("");
  const [mrETC1Value, setMrETC1Value] = useState("");
  const navigate = useNavigate();

  const onTextClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="bg-white w-[430px] h-[932px] overflow-hidden max-w-full max-h-full text-left text-13xl text-black font-inter">
      <img
        className="absolute top-[82px] left-[174px] w-[81px] h-[81px] object-cover"
        alt=""
        src="/9131529-1@2x.png"
      />
      <div
        className="absolute top-[19px] left-[326px] text-forestgreen inline-block w-[121px] h-10 cursor-pointer"
        onClick={onTextClick}
      >
        บันทึก
      </div>
      <div
        className="absolute top-[19px] left-[5px] text-5xl text-dimgray-100 inline-block w-[159px] h-10 cursor-pointer"
        onClick={onClose}
      >{`< profile`}</div>
      <div className="absolute top-[370px] left-[14px] rounded-81xl bg-gainsboro w-[333px] h-[33px]" />
      <div className="absolute top-[370px] left-[14px] rounded-81xl bg-gainsboro w-[333px] h-[33px]" />
      <div className="absolute top-[567px] left-[14px] rounded-81xl bg-gainsboro w-[333px] h-[33px]" />
      <div className="absolute top-[311px] left-[25px] inline-block w-[61px] h-[37px]">
        ชื่อ
      </div>
      <input
        className="[border:none] [outline:none] font-inter text-5xl bg-[transparent] absolute top-[370px] left-[35px] text-black text-left inline-block w-[291px] h-6"
        placeholder="mr.ETC."
        type="text"
        value={mrETCValue}
        onChange={(event) => setMrETCValue(event.target.value)}
      />
      <div className="absolute top-[516px] left-[25px] inline-block w-[195px] h-[17px]">
        เเนะนำตัว
      </div>
      <input
        className="[border:none] [outline:none] font-inter text-5xl bg-[transparent] absolute top-[567px] left-[24px] text-black text-left inline-block w-[302px] h-[17px]"
        placeholder="mr.ETC."
        type="text"
        value={mrETC1Value}
        onChange={(event) => setMrETC1Value(event.target.value)}
      />
    </div>
  );
};

export default EditProfile;
