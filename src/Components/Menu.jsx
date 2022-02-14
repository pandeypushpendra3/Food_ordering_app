import React from 'react'
import "./Menu.css"
import {MenuList} from "./MenuList";
import {MenuItem} from "./MenuItem";
export const Menu = () => {
  return (
    <>
    <div className="menu">
        <div className="menuTitle">
        <h1 className="menuTitle menuOur">Our Menu</h1>
            <div className="menuList">
              {
                MenuList.map((menuItem,key) => {
                  return (
                    <>
                      <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
                    </>
                  )

                })
              }
            </div>
        </div>
    </div>

    </>
  )
}
