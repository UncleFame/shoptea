import React, { useCallback } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import {  useNavigate } from 'react-router-dom';


const Editprofile = () => {
  const Navigte = useNavigate();

  const Goeditpage = useCallback (() => {
    Navigte("/Profile");
  }, [Navigte])

  return (
     
    <div className="relative bg-white w-full h-ful overflow-hidden text-left  font-inter">
    <div className="flex flex-row items-center justify-between px-[60px]">
        <p  className="text-gray-400" onClick={Goeditpage} ><IoIosArrowBack />profile</p>    
        <p className='text-green-400' onClick={Goeditpage}> บันทึก</p>
    </div>
            <div className="   flex-col text-center item-center w-full justify-center gap-y-[px] ">
                <CgProfile size={80} />  

                <div class="container py-10 w-11/12 flex flex-col px-4">
                  <div>

                  <p className='w-full text-start'>ชิ่อ</p>
                  </div>
                <input type="text" 
                placeholder='username'
                
                className='rounded-lg border-solid border-2'/>  
                
                 
                
                 <p className='w-full text-start'>แนะนำตัว</p>
                
                <input type="text" 
                placeholder=''
                className='h-[90px] rounded-lg border-solid border-2'/> 
                 
                
                 <p className='w-full text-start pt-[50px]'>URL facebook </p>
                
                <input type="text" 
                
                className='rounded-lg border-solid border-2'/>   
                
              </div>

                
               
            </div>
            
</div>
);
};
  
export default Editprofile
