import React from 'react'

const List = ({nameManu,href,className}) => {
  return (
    <li><a href={href} className={`${className}`}>{nameManu}</a></li>
  )
}

export default List