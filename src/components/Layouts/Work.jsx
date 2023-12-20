
import React from 'react'
import Container from '../Container'
import Image from '../Image'
import service_heading from '../../assets/service_heading.png'
import Heading from '../Heading'
import List from '../List'
import Flex from '../Flex'
import work_one from '../../assets/work_one.png'
import work_two from '../../assets/work_two.png'
import work_three from '../../assets/work_three.png'
import work_four from '../../assets/work_four.png'
import work_five from '../../assets/work_five.png'
import work_six from '../../assets/work_six.png'

const Work = () => {
  return (
   <section id='work' className='pt-[80px] pb-[100px]'>
      <Container className="max-w-serviceContainer">
        <div className="text-center bg-workBgcolor">
            <Image className="mx-auto" src={service_heading}/>
            <Heading className="font-opensansF font-extrabold text-[48px] pt-[16px]" text="Work Showcase "/>
        </div> 
        <div className="manu_work pt-[47px]">
            <ul>
                <Flex>
                <List className="mr-[40px] font-opensansF font-semibold text-[24px] text-servicePcolor capitalize leading-[32px] hover:text-workHCcolor duration-500" href="#" nameManu="All"/>
                <List className="mr-[40px] font-opensansF font-semibold text-[24px] text-servicePcolor capitalize leading-[32px]  hover:text-workHCcolor duration-500"  href="#" nameManu="Digital Mkt"/>
                <List className="mr-[40px] font-opensansF font-semibold text-[24px] text-servicePcolor capitalize leading-[32px] hover:text-workHCcolor duration-500" href="#" nameManu="Branding"/>
                <List className="mr-[40px] font-opensansF font-semibold text-[24px] text-servicePcolor capitalize leading-[32px] hover:text-workHCcolor duration-500" href="#" nameManu="Content Mkt"/>
                <List className="mr-[40px] font-opensansF font-semibold text-[24px] text-servicePcolor capitalize leading-[32px] hover:text-workHCcolor duration-500" href="#" nameManu="Social Media Mkt"/>
                </Flex>
            </ul>
        </div>

         <div className="work_box pt-[52px]">
            <Flex>
                <Image className="mr-[30px]" src={work_one}/>
                <Image className="mr-[30px]"  src={work_two}/>
                <Image className="mr-[30px]"  src={work_three}/>
            </Flex>

            <Flex>
                <Image className="mr-[30px] mt-[30px]" src={work_four}/>
                <Image className="mr-[30px] mt-[30px]"  src={work_five}/>
                <Image className="mr-[30px] mt-[30px]"  src={work_six}/>
            </Flex>
         </div>
      </Container>
   </section>
  )
}

export default Work