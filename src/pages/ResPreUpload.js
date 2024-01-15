import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const ResPreupload = () => {
  
    const navigate = useNavigate();
  const imagePublicUrl = supabase.storage.from('Shoplist').getPublicUrl(`path/restaurants/samira/${mainzaza.png}`);
  setImageUrl(imagePublicUrl);
  const onReviewbottomContainerClick = useCallback(() => {
    navigate("/upload-res");
  }, [navigate]);

  const onReviewTextClick = useCallback(() => {
    navigate("/upload-res");
  }, [navigate]);

  const onVectorSearchIcon1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[2494px] overflow-hidden text-center text-sm text-material-theme-sys-light-primary-fixed-dim font-inter">
      <div
        className="absolute top-[1755ppx] left-[163px] w-[100px] h-[33px] cursor-pointer"
        onClick={onReviewbottomContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-[20px] box-border w-[100px] h-[33px] border-[1px] border-solid border-material-theme-sys-light-primary-fixed-dim" />
        <div
          className="absolute top-[9px] left-[10px] font-medium inline-block w-20 h-[15px] cursor-pointer"
          onClick={onReviewTextClick}
        >
          {" "}
          Review +
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[430px] h-[116px] text-base text-gray-200">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-gray-300" />
        <img
          className="absolute top-[58px] left-[325px] w-8 h-9 object-cover cursor-pointer"
          alt=""
          src="/vector-search-icon-1@2x.png"
          onClick={onVectorSearchIcon1Click}
        />
        <img
          className="absolute top-[58px] left-[379px] w-[33px] h-[33px] object-cover cursor-pointer"
          alt=""
          src="/9131529-1@2x.png"
          onClick={onIconClick}
        />
        <div className="absolute top-[67px] left-[calc(50%_-_52px)] font-extrabold inline-block w-[103px] h-[18px]">
          Review
        </div>
      </div>
      <img
        className="absolute bottom-[-4px] left-[0px] w-[430px] h-[88px] object-cover"
        alt=""
        src="/barbottom@2x.png"
      />
    </div>
  );
};

export default ResPreupload;
