import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LandingPageForReal = () => {
  const navigate = useNavigate();

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
    <div className="relative bg-white w-full h-[957px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="absolute top-[50px] left-[6px] inline-block w-[215px] h-[111px] text-gray-100">
        <p className="m-0">{`MatCha&Tea`}</p>
        <p className="m-0 text-seagreen">เรานำชามาให้คุณ</p>
      </div>
      <img
        className="absolute top-[57px] left-[342px] w-8 h-9 object-cover"
        alt=""
        src="/vector-search-icon-1@2x.png"
      />
      <img
        className="absolute top-[59px] left-[390px] w-[33px] h-[33px] object-cover cursor-pointer"
        alt=""
        src="/9131529-1@2x.png"
        onClick={onIconClick}
      />
      <div className="absolute top-[111px] left-[-856px] bg-gainsboro w-[3108px] h-[197px]" />
      <div
        className="absolute rounded-2xl top-[380px] left-[20px] bg-gainsboro w-[139px] h-[121px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute rounded-2xl top-[531px] left-[20px] bg-gainsboro w-[139px] h-[121px]" />
      <div className="absolute top-[322px] left-[15px] text-sm inline-block w-[98px] h-[17px]">{`recommended `}</div>
      <div className="absolute top-[322px] left-[180px] text-sm inline-block w-44 h-[17px]">
        customer recommended
      </div>
      <div
        className="absolute top-[368px] left-[172px] inline-block w-[253px] h-44 cursor-pointer text-darkslategray"
        onClick={onSoulGoodMatchacoffeeClick}
      >
        <p className="m-0 text-black text-[16px]">{`soul good matcha&coffee`}</p>
        <p className="m-0 text-black">&nbsp;</p>
        <p className="m-0 text-sm">open 8.00-18.00น</p>
        <p className="m-0 text-sm">Matcha%coffee</p>
        <p className="m-0 text-sm">ราคา$$-$$</p>
        <p className="m-0 text-sm">ระยะทาง ?? km.</p>
        <p className="m-0 text-sm">จ.ชลบุลี</p>
      </div>
      <div className="absolute top-[518px] left-[172px] inline-block w-[253px] h-44 text-darkslategray">
        <p className="m-0 text-black text-[16px]">{`soul good matcha&coffee`}</p>
        <p className="m-0 text-black">&nbsp;</p>
        <p className="m-0 text-sm">open 8.00-18.00น</p>
        <p className="m-0 text-sm">Matcha%coffee</p>
        <p className="m-0 text-sm">ราคา$$-$$</p>
        <p className="m-0 text-sm">ระยะทาง ?? km.</p>
        <p className="m-0 text-sm">จ.ชลบุลี</p>
      </div>
      <div className="absolute top-[322px] left-[134px] text-sm inline-block w-[27px] h-[17px]">
        all
      </div>
      <div
        className="absolute top-[912px] left-[-8px] w-[468px] h-[42.9px]"
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
          className="absolute top-[2.6px] left-[127.7px] w-[66.3px] h-[39.5px] object-cover"
          alt=""
          src="/reviewicon-1@2x.png"
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
