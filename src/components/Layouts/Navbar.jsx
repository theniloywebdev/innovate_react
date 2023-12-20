import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import List from '../List'
import Button from '../Button'
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
   <nav  className="py-[30px] fixed top-0 left-0 w-full bg-transparent z-[1111111111]">
    <Container className="max-w-serviceContainer">
        <Flex className="justify-between">
            <div className="w-[200px] pt-[26px]">
                <Image src={Logo}/>
            </div>
            <div className="w-[770] pt-[45px]">
                <ul>
                  <Flex>
                  <div className="flex items-center px-6 group ">
                <List className=' font-opensansF font-semibold text-[18px] text-clientHCcolor group-hover:text-clentIcolor transition-all ease-in-out duration-500' href='#' nameManu="Home" />
                <FaAngleDown className="group-hover:text-clentIcolor transition-all ease-in-out duration-500" />
                </div>

                <div className="flex  items-center px-6 group">
                <List className=' font-opensansF font-semibold text-[18px] text-clientHCcolor group-hover:text-clentIcolor transition-all ease-in-out duration-500' href='#' nameManu="About" />
                <FaAngleDown className='group-hover:text-clentIcolor transition-all ease-in-out duration-500'/>
                </div>

                <div className="flex  items-center px-6 group">
                <List className=' font-opensansF font-semibold text-[18px] text-clientHCcolor group-hover:text-clentIcolor transition-all ease-in-out duration-500' href='#' nameManu="Service" />
                <FaAngleDown className='group-hover:text-clentIcolor transition-all ease-in-out duration-500'/>
                </div>

                <div className="flex  items-center px-6 group">
                <List className=' font-opensansF font-semibold text-[18px] text-clientHCcolor group-hover:text-clentIcolor transition-all ease-in-out duration-500' href='#' nameManu="Portfolio" />
                <FaAngleDown className='group-hover:text-clentIcolor transition-all ease-in-out duration-500'/>
                </div>

                <div className="flex  items-center px-6 group">
                <List className=' font-opensansF font-semibold text-[18px] text-clientHCcolor group-hover:text-clentIcolor transition-all ease-in-out duration-500' href='#' nameManu="Price" />
                <FaAngleDown className='group-hover:text-clentIcolor transition-all ease-in-out duration-500'/>
                </div>

                <div className="flex  items-center px-6 group">
                <List className=' font-opensansF font-semibold text-[18px] text-clientHCcolor group-hover:text-clentIcolor transition-all ease-in-out duration-500' href='#' nameManu="Blog" />
                <FaAngleDown className='group-hover:text-clentIcolor transition-all ease-in-out duration-500'/>
                </div>

                

                

                  </Flex>
                </ul>
            </div>
            <div className="w-[200px] pt-[26px]">
                <Button className="py-[20px] px-[28px] rounded-full font-opensanF font-semibold text-[18px] text-white bg-workHCcolor" text="Contact Us"/>
            </div>
        </Flex>
    </Container>
   </nav>
  )
}

export default Navbar