import Container from "../components/Container"
import React from 'react'
import { FaQuestion } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#F3F3F3] h-[50px] leading-[50px]">
      <Container>
        <div className="flex justify-end">
            <div className="flex gap-x-8 items-center">
                <div className="">
                <h3 className="font-pops text-[16px] font-normal">Call Us +880 1988-304505</h3>
                </div>
               <div className="flex items-center gap-x-2">
               <FaQuestion/> 
               <h3 className="text-[16px] font-pops">Need Help</h3>
               </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
