import React from 'react'
import Container from '../Container'
import Image from '../Image'
import service_heading from '../../assets/service_heading.png'
import Heading from '../Heading'
import Content from '../Content'
import Flex from '../Flex'
import blog_box from '../../assets/blog_box.png'
import ReadBtn from '../ReadBtn'

const Blog = () => {
  return (
    <section id='blog' className='pt-[80px] bg-workBGHcolor pb-[118px]'>
        <Container className="max-w-serviceContainer">
            <div className="text-center">
                <Image className="mx-auto" src={service_heading}/>
                <Heading className="font-workF font-extrabold text-[48px] pt-[20px] pb-[25px]" text="Our Latest Blog"/>
                <Content className="text-servicePcolor font-robotoF font-normal  text-[18px] px-[370px] leading-[30px] pb-[52px]" text="We provide digital experience services to startups and small businesses."/>
            </div>
            <Flex>
                <div className="w-[370px] bg-white shadow-blogShadow rounded-b-2xl mr-[30px] pb-[34px]">
                    <Image src={blog_box} alt={blog_box}/>
                    <Content className="font-workF font-medium text-[24px] text-footerCcolor pt-[30px] pl-[30px] pr-[130px] leading-[32px]" text="How to Be Ahead of Stock Changes"/>
                    <Content className="pt-[16px] pb-[34px] pl-[30px] font-nunitoF font-normal text-[18px] leading-[24px] text-blogBpCcolor tracking-[.5px]" text="By John  - 5 Comments"/>

                    <ReadBtn text="Read more"/>

                  
                </div>

                <div className="w-[370px] bg-white shadow-blogShadow rounded-b-2xl mr-[30px] pb-[34px]">
                    <Image src={blog_box} alt={blog_box}/>
                    <Content className="font-workF font-medium text-[24px] text-footerCcolor pt-[30px] pl-[30px] pr-[130px] leading-[32px]" text="Online Reputation And Management"/>
                    <Content className="pt-[16px] pb-[34px] pl-[30px] font-nunitoF font-normal text-[18px] leading-[24px] text-blogBpCcolor tracking-[.5px]" text="By Amin  - 10 Comments"/>
                    <ReadBtn text="Read more"/>
                 
                </div>

                <div className="w-[370px] bg-white shadow-blogShadow rounded-b-2xl pb-[34px]">
                    <Image src={blog_box} alt={blog_box}/>
                    <Content className="font-workF font-medium text-[24px] text-footerCcolor pt-[30px] pl-[30px] pr-[100px] leading-[32px]" text="Tips To Move Your Project More Forward"/>
                    <Content className="pt-[16px] pb-[34px] pl-[30px] font-nunitoF font-normal text-[18px] leading-[24px] text-blogBpCcolor tracking-[.5px]" text="By Insider  - 15 Comments"/>

                    <ReadBtn text="Read more"/>
                 
                </div>
            </Flex>
        </Container>

    </section>
  )
}

export default Blog