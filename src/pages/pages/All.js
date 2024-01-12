import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const All = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-xs text-material-theme-sys-light-outline-variant font-inter">
      <div className="absolute top-[181px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[366px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[551px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[736px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[921px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[1106px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[1291px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[1476px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[1661px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[1846px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[2031px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[2216px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[2401px] left-[22px] w-[535px] h-40">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gainsboro w-[172px] h-40" />
        <div className="absolute top-[4px] left-[179px] w-[356px] h-[154px]">
          <img
            className="absolute top-[23px] left-[0px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[21px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[44px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[66px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <img
            className="absolute top-[23px] left-[86px] w-4 h-4 overflow-hidden object-cover"
            alt=""
            src="/iconoirstarsolid@2x.png"
          />
          <b className="absolute top-[23px] left-[108px] inline-block w-[38px] h-4">
            5.0
          </b>
          <b className="absolute top-[46px] left-[0px] inline-block whitespace-pre-wrap w-[212px] h-4 text-material-theme-sys-light-outline">
            <span>Open</span>
            <span className="text-dimgray-300">{` `}</span>
            <span>{` `}</span>
            <span className="text-material-theme-sys-light-outline-variant">
              8:00-18:00น.
            </span>
          </b>
          <b className="absolute top-[69px] left-[0px] inline-block w-[212px] h-4">{`Matcha&Coffee`}</b>
          <b className="absolute top-[92px] left-[0px] inline-block w-[212px] h-4">
            ราคา$$-$$
          </b>
          <b className="absolute top-[115px] left-[1px] inline-block w-[212px] h-4">
            ระยะทาง ?? km.
          </b>
          <b className="absolute top-[138px] left-[0px] inline-block w-[212px] h-4">
            จ.ชลบุรี
          </b>
          <b className="absolute top-[0px] left-[0px] text-base inline-block text-material-theme-sys-light-outline w-[356px] h-4">{`Soul Good Matcha&Coffee`}</b>
        </div>
      </div>
      <div className="absolute top-[116px] left-[-17px] w-[435px] h-5 text-center text-[10px] text-gray-200">
        <input
          className="[border:none] [outline:none] bg-whitesmoke absolute top-[0px] left-[29px] rounded-8xs w-[406px] h-5"
          type="text"
          value={rectangleInputValue}
          onChange={(event) => setRectangleInputValue(event.target.value)}
        />
        <img
          className="absolute top-[3px] left-[415px] w-[15px] h-[15px] overflow-hidden object-cover"
          alt=""
          src="/fluentsearch24regular@2x.png"
        />
        <div className="absolute top-[4px] left-[0px] font-medium inline-block w-40 h-3.5">
          ค้นหา ชื่อร้าน จังหวัด
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[430px] h-[116px] text-center text-base text-gray-200">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-gray-700" />
        <b className="absolute top-[63px] left-[110px] inline-block w-[209px] h-[18px]">
          All
        </b>
      </div>
      <div
        className="absolute top-[27px] left-[18px] w-[218px] h-[30.2px] cursor-pointer text-base text-material-theme-sys-light-outline"
        onClick={onHomeContainerClick}
      >
        <b className="absolute top-[9px] left-[16.5px] inline-block w-[201.5px] h-4">
          Home
        </b>
        <img
          className="absolute top-[0px] left-[0px] w-[18.3px] h-[30.2px] overflow-hidden object-contain"
          alt=""
          src="/iconamoonarrowup2@2x.png"
        />
      </div>
    </div>
  );
};

export default All;
