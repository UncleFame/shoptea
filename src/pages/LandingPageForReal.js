import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import BottomBar from "../components/BottomBar";


const LandingPageForReal = () => {
  const navigate = useNavigate();
  const {user, loading} = useUser();

  // Handle user authentication navigation
  useEffect(()=>{
    if (loading) return
    if (!user) return navigate("/")
  }, [loading])

  const onVectorSearchIcon1Click = useCallback(() => {
    navigate("/All");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  const onSoulGoodMatchacoffeeClick = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  return (
    <div className="flexrelative bg-white w-full h-[957px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="flex[20px] left-[6px] inline-block w-[215px] h-[111px] text-gray-100">
        <p className="m-0">{`MatCha&Tea`}</p>
        <p className="m-0 text-seagreen">เรานำชามาให้คุณ</p>
      </div>
      <div className="flex flex-row-reverse gap-3  h-9 object-cover cursor-pointer">
        
      <img
        
        alt=""
        src="/vector-search-icon-1@2x.png"
        onClick={onVectorSearchIcon1Click}
      />
       <img
        className="flex flex-row reverse w-[33px] h-[33px] object-cover cursor-pointer"
        alt=""
        src="profileicon.png"
        onClick={onIconClick}

     
     
           //first box under
      />
        
        </div>


      <div className="mx-auto bg-gainsboro w-full  h-[197px]" />
      
      <div
        className="absolute top-[524px] left-[6px] bg-gainsboro w-[139px] h-[121px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[780px] left-[12px] bg-gainsboro w-[139px] h-[121px]" />
      <div className=" flex flex-row gap-5  mt-3 mx-auto [412px] left-[180px] text-sm inline-block w-44 h-[17px]">
        
      <div>
      recommended  
      </div>
      all
      <div
        onClick={onVectorSearchIcon1Click}>
        
      </div>
      </div>
      
      <div
        className="absolute top-[518px] left-[172px] inline-block w-[253px] h-44 cursor-pointer text-darkslategray"
        onClick={onSoulGoodMatchacoffeeClick}
      >
        <p className="m-0 text-black">{`soul good matcha&coffee`}</p>
        <p className="m-0 text-black">&nbsp;</p>
        <p className="m-0">open 8.00-18.00น</p>
        <p className="m-0">Matcha%coffee</p>
        <p className="m-0">ราคา$$-$$</p>
        <p className="m-0">ระยะทาง ?? km.</p>
        <p className="m-0">จ.ชลบุลี</p>
      </div>
      <div className="absolute top-[738px] left-[172px] inline-block w-[253px] h-44 text-darkslategray">
        <p className="m-0 text-black">{`soul good matcha&coffee`}</p>
        <p className="m-0 text-black">&nbsp;</p>
        <p className="m-0">open 8.00-18.00น</p>
        <p className="m-0">Matcha%coffee</p>
        <p className="m-0">ราคา$$-$$</p>
        <p className="m-0">ระยะทาง ?? km.</p>
        <p className="m-0">จ.ชลบุลี</p>
      </div>

      <BottomBar />
    </div>
    
  );
};

export default LandingPageForReal;
