import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import service_heading from '../../assets/service_heading.png'
import Heading from '../Heading'
import Content from '../Content'
import Button from '../Button'
import who_box from '../../assets/who_box.png'
import manBanner from '../../assets/3d.png'

const Banner = () => {
  return (
    <section className="bg-bannerImg bg-no-repeat bg-cover bg-center pt-[214px] relative">
        <Container className="max-w-bannerContainer" >
            <Flex className="justify-between ml-[160px]">
                   <div className="w-1/2">                  
                    <div className="relative">
                    <div className="absolute top-[10px] left-[-350px]">
                    <Image src={manBanner}/>
                   </div>
                        <Image className="pb-[22px] pt-[50px]" src={service_heading}/>
                        <Heading className="font-opensansF font-extrabold text-[64px] text-clientHCcolor leading-[90px] pb-[20px]" text="We Are Digital #Marketing# Agency"/>
                        <Content className="font-paprikaF text-servicePcolor font-normal text-[20px] leading-[36px] pr-[80px] pb-[30px]" text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. "/>
                        <Button className="leading-[24px] capitalize py-[20px] px-[40px] rounded-full font-opensanF font-semibold text-[18px] text-white bg-workHCcolor" text="get free quoto"/>
                    </div>
                   </div>
                   <div className="w-1/2 pb-[207px] pt-[60px]">
                    <div className="ml-[120px] ">
                        <Image src={who_box}/>
                    </div>
                   </div>
            </Flex>
        </Container>
       
    </section>
  )
}

export default Banner