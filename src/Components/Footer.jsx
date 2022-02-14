import React from 'react'
import "./Footer.css"
import TwitterIcon from  "@mui/icons-material/Twitter";
import InstagramIcon from  "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                <LinkedInIcon/>
            </div>
                <p>&copy; 2022 IndianFoodCorner.com </p>
        </div>
    </>
  )
}
