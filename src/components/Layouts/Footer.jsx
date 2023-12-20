import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Content from '../Content'
import List from '../List'

const Footer = () => {
  return (
    <section id='footer' className='pt-[140px] bg-footerBGHcolor'>
      <Container className="max-w-serviceContainer">
        <Flex className="justify-between">
            <div className="w-[450px]  ">
                <Image className="pb-[44px]" src={logo}/>
                <Content className="font-nunitoF font-normal text-[18px] text-servicePcolor leading-8 capitalize pb-[190px]" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."/>
            </div>
           
            <div className="">
                <Content className="font-opensansF font-normal text-[24px] text-footerCcolor pb-[48px]" text="Features "/>
           
                <ul>
                  
                 <Flex className="flex-col gap-y-6">
                    <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor " nameManu="Home"/>
                    <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor"  nameManu="About"/>
                    <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor"  nameManu="Benifit"/>
                    <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor"  nameManu="Pricing"/>
                    <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor"  nameManu="Blog"/>
                 
                 </Flex>
          
                </ul>
                
            </div>

            <div className="">
                <Content className="font-opensansF font-normal text-[24px] text-footerCcolor  pb-[48px]" text="Products "/>
                <ul>
                <Flex className="flex-col gap-y-6">
                <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor capitalize " nameManu="Task Management"/>
                <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor capitalize " nameManu="Company growth"/>
                <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor capitalize " nameManu="Time tracking"/>
                </Flex>
                </ul>
            </div>

            <div className="">
                <Content className="font-opensansF font-normal text-[24px] text-footerCcolor  pb-[48px]" text="Support "/>
                <ul>
               <Flex className="flex-col gap-y-6">
                <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor capitalize " nameManu="Customer service"/>
                <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor capitalize " nameManu="Accessibility"/>
                <List href="#" className="font-nunitoF font-semibold text-[20px] text-servicePcolor capitalize " nameManu="Contact us"/>
               </Flex>
                
                </ul>
            </div>
         



        </Flex>
      </Container>


      <Container className="max-w-serviceContainer pb-[55px]">
        <Flex className="justify-between">
            <div className="font-nunitoF font-normal text-[18px] text-servicePcolor  ">
                <Content className="" text="@20201 Innovate.All rights reserved."/>
            </div>
            <div className="ml-[450px] font-nunitoF font-normal text-[18px] text-servicePcolor ">
                <Content text="Privacy policy "/>
               
            </div>
            <div className="font-nunitoF font-normal text-[18px] text-servicePcolor ">
               <Content text="Terms & condition"/>
               </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Footer