import React from 'react'

const ReadBtn = ({text}) => {
  return (
   <button className="bg-transparent rounded-full z-[20] relative pl-[30px] text-serviceMPcolor font-opensansF font-bold leading-[24px] text-[18px]">{text} <span className="before:w-[33px] before:h-[33px] before:rounded-full before:z-[-10] before:absolute before:content-[' '] before:bg-serviceRDHcolor before:top-[-3px] before:left-[20px]"></span></button>
  )
}

export default ReadBtn