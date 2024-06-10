import React from 'react'
import Container from './Container'
import Ban from "../assets/ban.png"
import { FaBarsStaggered } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='my-[50px]'>
            <Container>
                <div className="flex justify-between">
                    <div className="w-[20%] flex gap-4">
                        <div className="">
                            <FaBarsStaggered />
                        </div>
                        <div className="">
                            <h3>Category</h3>
                            <h3>Category</h3>
                        </div>
                    </div>
                    <div className="w-[80%]">
                        <img className='w-[100%] rounded-xl' src={Ban} alt="banner" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
