import React from 'react'

export const MenuItem = ({image,name,price}) => {
  return (
    <div className="menuItem">
        <div style={{backgroundImage:`url(${image})`}}> </div>
        <h1>{name}</h1>
        <p>{price}</p>


       
    </div>
  )
}
