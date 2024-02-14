import React, { FC } from 'react'
import {FaStar} from "react-icons/fa"
export const Star = ({rating}) => {
  const isNumber = Math.floor(rating) === rating;
  return (
    <div className='flex items-center justify-start gap-x-3'>
      <ul className='flex p-0 m-0 gap-x-1'>
        {
          Array.from({length : rating}, (_, index)=>{
            return <FaStar key={index} className='text-yellow-400'/>
          })
        }
      </ul>
      <p>{isNumber ? `${rating}.0` : rating}</p>
    </div>
  )
}
