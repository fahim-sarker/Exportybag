import Container from "../components/Container"
import React from 'react'
import Lg from "../assets/logoex.png"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <Container>
                <div className="flex justify-between my-5 items-center">
                    <div className="w-[20%]">
                        <img src={Lg} alt="logo" />
                    </div>
                    <div className="w-[65%] relative">
                        <input type="search" placeholder='Search for Products. . .' className='pl-[20px] py-[16px] h-[60px] lg:w-[100%] outline-none bg-[#F3F3F3]' />
                        <div className=" bg-[#f57224] py-[22px] px-[22px] text-white  absolute top-[50%] right-[0px] translate-y-[-50%]">
                            <FaSearch/>
                        </div>
                    </div>
                    <div className="w-[15%] flex justify-end gap-x-10 items-center">
                        <div className="text-[25px]">
                            <FaShoppingCart />
                        </div>
                        <div className="text-[25px]">
                            <FaUser />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Navbar
