import React from 'react'

export const Contact = () => {
  return (
    <>
        <div className="contact">
            <div className="leftside">
                leftside
            </div>
            <div className="rightside">
                <h1>Contact us</h1>
                <form id="contact-form" method="POST" >
                <label htmlFor="name">Full Name</label>
                 <input  name="name" type="text" placeholder ="Enter your name"/>
                 <label htmlFor="email">Email</label>
                <input type="name" placeholder="Enter your email address" type="email" />
               <label htmlFor="message">Message</label>
               <textarea name="message" placeholder="Enter your message" rows="10"></textarea>
               <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </>
  )
}
