import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../utils/auth";

const Profile = () => {
  const [mrETCValue, setMrETCValue] = useState("");
  const [favoriteValue, setFavoriteValue] = useState("");
  const navigate = useNavigate();

  function handleSignOut(){
    try {
      signOut();

      alert("ออกจากระบบสำเร็จ")

      setTimeout(()=>{
        window.location.href = "/"
      }, 1000)
    } catch (error) {
      alert(error.message)
    }
  }

  function handleEdit(){
    try {
      
    } catch (error) {
      alert(error.message)
    }
  }

  const onRectangleClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    navigate("/edit-profile");
  }, [navigate]);

  const onBacktohome1ImageClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-left text-xl text-darkslategray font-inter">
      <img
        className="absolute top-[50px] left-[174px] w-[81px] h-[81px] object-cover"
        alt=""
        src="/9131529-1@2x.png"
      />
      <input
        className="[border:none] [outline:none] font-inter text-13xl bg-[transparent] absolute top-[253px] left-[174px] text-black text-left inline-block w-[133px] h-12"
        placeholder="mr.ETC."
        type="text"
        value={mrETCValue}
        onChange={(event) => setMrETCValue(event.target.value)}
      />
      <div
        className="absolute top-[395px] left-[44px] rounded-81xl bg-gainsboro w-[359px] h-[34px] cursor-pointer"
        onClick={onRectangleClick}
      />
      <input
        className="[border:none] [outline:none] font-inter text-13xl bg-[transparent] absolute top-[565px] left-[16px] text-black text-left inline-block w-[133px] h-12"
        placeholder="favorite"
        type="text"
        value={favoriteValue}
        onChange={(event) => setFavoriteValue(event.target.value)}
      />
      <div className="absolute top-[674px] left-[11px] bg-gainsboro w-[139px] h-[121px]" />
      <div className="absolute top-[668px] left-[177px] inline-block w-[253px] h-44">
        <p className="m-0 text-black">{`soul good matcha&coffee`}</p>
        <p className="m-0 text-black">&nbsp;</p>
        <p className="m-0">open 8.00-18.00น</p>
        <p className="m-0">Matcha%coffee</p>
        <p className="m-0">ราคา$$-$$</p>
        <p className="m-0">ระยะทาง ?? km.</p>
        <p className="m-0">จ.ชลบุลี</p>
      </div>
      <button
        className="absolute left-[50%] translate-x-[-50%] bg-gainsboro rounded-full top-[341px] w-[80%] text-5xl text-black inline-block h-[35px] cursor-pointer"
        onClick={handleSignOut}
      >
        ออกจากระบบ
      </button>
      <div
        className="absolute top-[401px] left-[193px] text-5xl text-black inline-block w-[83px] h-[23px] cursor-pointer"
        onClick={onTextClick}
      >
        แก้ไข
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[93px] h-[35px] object-cover cursor-pointer"
        alt=""
        src="/backtohome-1@2x.png"
        onClick={onBacktohome1ImageClick}
      />
    </div>
  );
};

export default Profile;
