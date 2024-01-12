import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPageForReal = () => {
  const navigate = useNavigate();

  const onVectorSearchIcon1Click = useCallback(() => {
    navigate("/");
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

  const onReviewicon1ImageClick = useCallback(() => {
    navigate("/res-preupload");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[957px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[20px] left-[6px] inline-block w-[215px] h-[111px] text-gray-100">
        <p className="m-0">{`MatCha&Tea`}</p>
        <p className="m-0 text-seagreen">เรานำชามาให้คุณ</p>
      </div>
      <img
        className="absolute top-[57px] left-[342px] w-8 h-9 object-cover cursor-pointer"
        alt=""
        src="/vector-search-icon-1@2x.png"
        onClick={onVectorSearchIcon1Click}
      />
      <img
        className="absolute top-[59px] left-[390px] w-[33px] h-[33px] object-cover cursor-pointer"
        alt=""
        src="/9131529-1@2x.png"
        onClick={onIconClick}
      />
      <div className="absolute top-[171px] left-[56px] bg-gainsboro w-[318px] h-[197px]" />
      <div
        className="absolute top-[524px] left-[6px] bg-gainsboro w-[139px] h-[121px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[780px] left-[12px] bg-gainsboro w-[139px] h-[121px]" />
      <div className="absolute top-[412px] left-[15px] text-sm inline-block w-[98px] h-[17px]">{`recommended `}</div>
      <div className="absolute top-[412px] left-[180px] text-sm inline-block w-44 h-[17px]">
        customer recommended
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
      <div className="absolute top-[412px] left-[124px] text-sm inline-block w-[27px] h-[17px]">
        all
      </div>
      <div
        className="absolute top-[914px] left-[-38px] w-[468px] h-[42.9px]"
        fasd="fdas"
      >
        <img
          className="absolute top-[0px] left-[0px] w-[468px] h-[41.6px] object-cover"
          alt=""
          src="/whitehouseplanbusinesshotelamtrakwhitebar-1@2x.png"
        />
        <img
          className="absolute top-[6.8px] left-[48.8px] w-[43.9px] h-[31.2px] object-cover"
          alt=""
          src="/houseicon-1@2x.png"
        />
        <img
          className="absolute top-[1.8px] left-[380px] w-[58.3px] h-[39.5px] object-cover"
          alt=""
          src="/setting-icon-1@2x.png"
        />
        <img
          className="absolute top-[2.6px] left-[127.7px] w-[66.3px] h-[39.5px] object-cover cursor-pointer"
          alt=""
          src="/reviewicon-1@2x.png"
          onClick={onReviewicon1ImageClick}
        />
        <img
          className="absolute top-[6px] left-[212.6px] w-[50.2px] h-[36.9px] object-cover"
          alt=""
          src="/favicon-1@2x.png"
        />
        <img
          className="absolute top-[2.6px] left-[299.6px] w-[34.6px] h-[38px] object-cover"
          alt=""
          src="/bellicon-1@2x.png"
        />
      </div>
    </div>
  );
};

export default LandingPageForReal;
