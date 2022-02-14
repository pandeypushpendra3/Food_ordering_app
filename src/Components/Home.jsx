import React from 'react'
import photo from "../assets/photo.jpeg"
import {Link} from "react-router-dom";
import "./Home.css"
export const Home = () => {
  return (
  <>
      <div className="home" style={{backgroundImage:`url(${photo})`}}>
          <div className="headerContainer">
              <h1>Food Corner</h1>
              <p>Indian Food at a click</p>
              <Link to="/menu">
              <button>Order Now</button>
              </Link>
          </div>
      </div>
  </>
  )
}
