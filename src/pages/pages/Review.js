import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Review = () => {
  const navigate = useNavigate();

  const onBacktohome1ImageClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[1216px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[93px] left-[23px] w-[378px] h-[222.9px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[378px] h-[222.9px]" />
      </div>
      <div className="absolute top-[706px] left-[23px] w-[105px] h-[159px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[105px] h-[159px]" />
      </div>
      <div className="absolute top-[706px] left-[143px] w-[102px] h-[159px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[67.4px] h-[159px]" />
        <div className="absolute top-[0px] left-[34.6px] w-[67.4px] h-[159px]">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[67.4px] h-[159px]" />
        </div>
      </div>
      <div className="absolute top-[707px] left-[282px] w-[102px] h-[159px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[67.4px] h-[159px]" />
        <div className="absolute top-[0px] left-[34.6px] w-[67.4px] h-[159px]">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[67.4px] h-[159px]" />
        </div>
      </div>
      <div
        className="absolute top-[1162px] left-[-13px] w-[430px] h-[42.9px]"
        fasd="fdas"
      >
        <img
          className="absolute top-[0px] left-[0px] w-[430px] h-[41.6px] object-cover"
          alt=""
          src="/whitehouseplanbusinesshotelamtrakwhitebar-1@2x.png"
        />
        <img
          className="absolute top-[6.8px] left-[44.8px] w-[40.3px] h-[31.2px] object-cover"
          alt=""
          src="/houseicon-1@2x.png"
        />
        <img
          className="absolute top-[1.8px] left-[349.2px] w-[53.5px] h-[39.5px] object-cover"
          alt=""
          src="/setting-icon-1@2x.png"
        />
        <img
          className="absolute top-[2.6px] left-[117.4px] w-[60.9px] h-[39.5px] object-cover"
          alt=""
          src="/reviewicon-1@2x.png"
        />
        <img
          className="absolute top-[6px] left-[195.3px] w-[46.1px] h-[36.9px] object-cover"
          alt=""
          src="/favicon-1@2x.png"
        />
        <img
          className="absolute top-[2.6px] left-[275.2px] w-[31.8px] h-[38px] object-cover"
          alt=""
          src="/bellicon-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[103px] left-[23px] w-[374px] h-[213px] object-contain"
        alt=""
      />
      <img
        className="absolute top-[92px] left-[27px] w-[357px] h-[223px] object-contain"
        alt=""
      />
      <div className="absolute top-[333px] left-[80px] inline-block w-[287px] h-[73px]">{`soul good matcha&coffee`}</div>
      <div className="absolute top-[431px] left-[76px] text-darkslategray inline-block w-[287px] h-[163px]">
        <p className="m-0">open 8.00-18.00น</p>
        <p className="m-0">Matcha%coffee</p>
        <p className="m-0">ราคา$$-$$</p>
        <p className="m-0">ระยะทาง ?? km.</p>
        <p className="m-0">จ.ชลบุลี</p>
      </div>
      <div className="absolute top-[587px] left-[56px] inline-block w-[307px] h-[102px]">
        <p className="m-0">{`recommended `}</p>
        <p className="m-0">
          <span>macha orange</span>
          <span className="text-lime">160บาท</span>
        </p>
        <p className="m-0 text-lime">{` `}</p>
      </div>
      <div className="absolute top-[898px] left-[15px] inline-block w-[137px] h-10">
        location
      </div>
      <div className="absolute top-[943px] left-[54px] inline-block w-[124px] h-[37px]">
        จ.ชลบุรี
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

export default Review;
