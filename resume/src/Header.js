import React from 'react'
import './Header.css'
import jpg from  './WhatsApp Image 2021-08-18 at 12.27.50 PM-modified.png'

function Header() {
    return (
        <div className="Header">
            <div className="header-content">
                   
             <h1>Hi There<br />
            <span  className="title">I'm Mehul Jain</span>
         </h1>
    
         
         <img src={jpg} alt="Avatar" className="image"/>

         
            
            </div>

            
         
         
                   
            
        </div>
    )
}

export default Header
