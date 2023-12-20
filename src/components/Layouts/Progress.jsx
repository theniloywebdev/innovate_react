import React from 'react'
import Container from '../Container'
import Image from '../Image'
import service_heading from '../../assets/service_heading.png'
import Heading from '../Heading'
import Content from '../Content'
import Flex from '../Flex'
import ReadBtn from '../ReadBtn'
import progress_box from '../../assets/progress_box.png'

const Progress = () => {
  return (
    <section id='progress' className='bg-workBgcolor'>
       <Container className="max-w-serviceContainer">
       <div className="text-center">
                <Image className="mx-auto" src={service_heading}/>
                <Heading className="font-workF font-extrabold text-[48px] pt-[20px] pb-[25px]" text="Our Latest Blog"/>
                <Content className="text-servicePcolor font-robotoF font-normal  text-[18px] px-[370px] leading-[30px] pb-[52px]" text="We provide digital experience services to startups and small businesses."/>
        </div>
        <div className="one">
            <Flex className="justify-between">
                <div className="w-[465px]  pt-[110px]">
                   <div className="pt-[24px] bg-serviceMcolor rounded-2xl">
                    <ReadBtn text="Step-1"/>
                    <Content className="font-opensanF font-semibold text-[30px] text-serviceMPcolor py-[20px] pl-[24px]" text="Global SEO Research"/>
                    <Content className="font-robotoF font-normal text-[18px] text-servicePcolor pb-[20px] pr-[90px] leading-[30px] pl-[24px]" text="Practical tools and features make it easier to build and manage your site."/>
                   </div>
                </div>
                <div className="w-[570px]">
                    <Image className="pt-[52px]" src={progress_box} alt={progress_box}/>
                </div>
            </Flex>
        </div>

        <div className="two">
            <Flex className="justify-between">
              
                <div className="w-[570px]">
                    <Image className="" src={progress_box} alt={progress_box}/>
                </div>
                <div className="w-[465px]  pt-[58px]">
                   <div className="pt-[24px] bg-serviceScolor rounded-2xl">
                    <ReadBtn text="Step-2"/>
                    <Content className="font-opensanF font-semibold text-[30px] text-serviceMPcolor py-[20px] pl-[24px]" text="Social media integration"/>
                    <Content className="font-robotoF font-normal text-[18px] text-servicePcolor pb-[20px] pr-[90px] leading-[30px] pl-[24px]" text="Practical tools and features make it easier to build and manage your site."/>
                   </div>
                </div>
            </Flex>
        </div>

        <div className="three">
            <Flex className="justify-between">
                <div className="w-[465px]  pt-[58px]">
                   <div className="pt-[24px] bg-serviceCcolor rounded-2xl">
                    <ReadBtn text="Step-3"/>
                    <Content className="font-opensanF font-semibold text-[30px] text-serviceMPcolor py-[20px] pl-[24px]" text="Launching the Application"/>
                    <Content className="font-robotoF font-normal text-[18px] text-servicePcolor pb-[20px] pr-[90px] leading-[30px] pl-[24px]" text="Practical tools and features make it easier to build and manage your site."/>
                   </div>
                </div>
                <div className="w-[570px] pb-[100px]">
                    <Image src={progress_box} alt={progress_box}/>
                </div>
            </Flex>
        </div>
       </Container>
    </section>
  )
}

export default Progress