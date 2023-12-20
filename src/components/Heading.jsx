import React from 'react'


const Heading = ({text,className}) => {
  let pattern = /#([^#]+)#/g;
  let textWithSpan = text.replace(pattern,"<span class='one'>$1</span>");
  return <h1 dangerouslySetInnerHTML={{__html: textWithSpan}} className={`${className}`}></h1>
   
  
}

export default Heading









