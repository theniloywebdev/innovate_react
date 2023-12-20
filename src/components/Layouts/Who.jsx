import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Heading from '../Heading'
import who_box from '../../assets/who_box.png'
import dots from '../../assets/dots.png'
import service_heading from '../../assets/service_heading.png'
import Content from '../Content'
import frame_one from '../../assets/frame_one.png'
import frame_two from '../../assets/frame_two.png'
import frame_three from '../../assets/frame_three.png'
import frame_four from '../../assets/frame_four.png'
import frame_five from '../../assets/frame_five.png'
import frame_six from '../../assets/frame_six.png'

const Who = () => {
  return (
    <section id='who' className='bg-serviceBGcolor pb-[80px]'>
        <Container className="max-w-whoContainer">
            <Flex>
                 <div className="w-1/2 relative">
                      <div className="pt-[96px]">
                        <Image className="" src={who_box} alt="who_box"/>
                        <Image className="absolute top-[195px] left-[10px] z-[-10]" src={dots} alt="dots"/>
                      </div>
                     
                      
                 </div>

                 <div className="w-1/2 ml-[130px]">
                    <div className="top_l0g0">
                         <div className="pt-[96px]">
                            <Image className="" src={service_heading} alt="service_heading"/>
                            <Heading className="font-opensansF font-extrabold text-[48px] py-[15px]" text="Who We Are"/>
                            <Content className="text-servicePcolor font-paprikaF font-normal  text-[18px] pr-[40px] leading-[30px]" text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, "/>
                         </div>
                         <div className="icon pt-[45px]">
                         <div className="">
                         <Flex>
                                <Image className="mr-[70px]" src={frame_one}/>
                                <Image className="mr-[70px]" src={frame_two}/>
                                <Image src={frame_three}/>
                           </Flex>
                         </div>
                          <div className="">
                               
                           <Flex>
                                <Image className="mr-[70px] pt-[40px]" src={frame_four}/>
                                <Image className="mr-[70px] pt-[40px]" src={frame_five}/>
                                <Image className="pt-[40px]" src={frame_six}/>
                           </Flex>
                          </div>
                             
                         </div>
                    </div>
                 </div>
            </Flex>
        </Container>

    </section>
  )
}

export default Who