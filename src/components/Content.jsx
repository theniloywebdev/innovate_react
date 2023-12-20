import React from 'react'

const Content = ({text,className}) => {
  return (
    <div className={`${className}`}>{text}</div>
  )
}

export default Content