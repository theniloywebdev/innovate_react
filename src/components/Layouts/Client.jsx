import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import service_heading from '../../assets/service_heading.png'
import Heading from '../Heading'
import Content from '../Content'
import client_circle from '../../assets/client_circle.png'

const Client = () => {
  return (
   <section id='client' className='bg-footerBGHcolor'>
    <Container className="max-w-serviceContainer">
        <Flex className="">
            <div className="w-[370px] pt-[100px] mr-[30px]">
                    <Image className="pb-[16px] " src={service_heading}/>
                    <Heading className="text-clientHCcolor font-opensansF font-extrabold text-[48px] tracking-[0.5px] pb-[20px]" text="Client Review"/>
                    <Content className="font-paprikaF font-normal text-[18px] text-servicePcolor leading-[30px] pr-[30px] pb-[6px]" text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "/>
                    <div className="icon text-[64px] text-clientIcolor ">
                    <i class="fa-solid fa-circle-chevron-left hover:text-clentIcolor duration-500"></i>
                    <i class="fa-solid fa-circle-chevron-right pl-[25px] hover:text-clentIcolor duration-500"></i>
                    </div>               
            </div>
            <div className="w-[370px] pt-[100px]  mr-[30px]">
              <div className="bg-serviceScolor shadow-clientShadow pt-[25px] pl-[40px] rounded-2xl ">
              <Content className="font-paprikaF font-normal text-[18px] text-servicePcolor leading-[30px] pr-[60px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>

              <Flex className="gap-x-6">
                <div className="pt-[10px] pb-[40px]">
                    <Image src={client_circle} alt={client_circle}/>
                </div>
                <div className="pt-[23px]">
                    <Content className="font-opensanF font-semibold text-[24px] text-serviceMPcolor tracking-[0.5px]" text="Jane Cooper"/>
                    <Content className="font-opensanF font-normal text-[18px] text-serviceMPcolor tracking-[0.5px]" text="Fashion Designer"/>
                </div>
              </Flex>

              </div>
            </div>

            <div className="w-[370px] pt-[100px] ">
              <div className="bg-white pt-[25px] pl-[40px] rounded-2xl shadow-clientShadow">
              <Content className="font-paprikaF font-normal text-[18px] text-servicePcolor leading-[30px] pr-[60px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient. "/>

              <Flex className="gap-x-6">
                <div className="pt-[10px] pb-[40px]">
                    <Image src={client_circle} alt={client_circle}/>
                </div>
                <div className="pt-[23px]">
                    <Content className="font-opensanF font-semibold text-[24px] text-serviceMPcolor tracking-[0.5px]" text="Eleanor Pena"/>
                    <Content className="font-opensanF font-normal text-[18px] text-serviceMPcolor tracking-[0.5px]" text="Architecture"/>
                </div>
              </Flex>

              </div>
            </div>
        </Flex>
    </Container>

   </section>
  )
}

export default Client