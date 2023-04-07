import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Footer = () => {
  return (
    <>
        <div className="flex flex-row justify-end ">
   <div className="font-bold text-[#545454]">Privacy & Terms</div>
   <div className="font-bold text-[#545454] pl-5">Contact us</div>
   <div className="font-bold text-[#545454] pl-5">English(United States)</div>
   <div className="pr-52 mb-5"><KeyboardArrowDownIcon sx={{color:"gray"}}/></div>
        </div>
    </>
  )
}

export default Footer