import React from 'react'
import Container from '../Container'
import Image from '../Image'
import service_heading from '../../assets/service_heading.png'
import Heading from '../Heading'
import Content from '../Content'
import Flex from '../Flex'
import service_one from '../../assets/service_one.png'
import service_two from '../../assets/service_two.png'
import service_three from '../../assets/service_three.png'
import ReadBtn from '../ReadBtn'



const Service = () => {
  return (
   <section id="service" className='bg-serviceBGcolor'>
     <Container className="max-w-serviceContainer">
           <div className="text-center">
            <Image className="mx-auto pt-[60px]" src={service_heading} />
           <Heading className="font-opensansF font-extrabold text-[48px] pt-[16px]" text="Our Service"/>
          <Content className="text-servicePcolor font-paprikaF font-normal  text-[18px] px-[434px] leading-[32px]" text="We have been providing great flooring solutions service."/>
           </div>

           <Flex>
               <div className="w-[370px] pt-[52px] pb-[100px] mr-[30px] ">
                <div className="bg-serviceMcolor  rounded-2xl  text-center pb-[57px]">
                  <Image className="mx-auto pt-[52px] pb-[28px]" src={service_one}/>
                  <Content className="font-opensansF font-semibold text-[30px] pb-[20px]" text="Marketing Strategy"/>
                  <Content className="text-servicePcolor font-paprikaF font-normal text-[18px] pb-[24px] px-[57px]" text="Social Media has changed the way we interact & do business while creating"/>

                  <ReadBtn text="Read more"/>
                </div>
               </div>

               <div className="w-[370px] pt-[52px] pb-[100px] mr-[30px]">
                <div className="bg-serviceScolor  rounded-2xl  text-center pb-[57px]">
                  <Image className="mx-auto pt-[52px] pb-[28px]" src={service_two}/>
                  <Content className="font-opensansF font-semibold text-[30px] pb-[20px]" text="Social Marketing"/>
                  <Content className="text-servicePcolor font-paprikaF font-normal text-[18px] pb-[24px] px-[40px]" text="Social Media has changed the way we interact & do business while creating a new avenue."/>

                  <ReadBtn text="Read more"/>

                </div>
               </div>

               <div className="w-[370px] pt-[52px] pb-[100px]">
                <div className="bg-serviceCcolor  rounded-2xl  text-center pb-[57px]">
                  <Image className="mx-auto pt-[52px] pb-[28px]" src={service_three}/>
                  <Content className="font-opensansF font-semibold text-[30px] pb-[5px]" text="Content Marketing"/>
                  <Content className="text-servicePcolor font-paprikaF font-normal text-[18px] pb-[8px] px-[57px]" text="Content Marketing is the other fold of online advertisement. If you are looking to build"/>

                  <ReadBtn text="Read more"/>

                </div>
               </div>
           </Flex>
     </Container>
   </section>
  )
}

export default Service