import React from 'react'

import './contactData'
import './Contact.css'
import { contactData } from './contactData';
function Contact() {

    const assigntTo= (url) => {
        window.location = url
    }


    return (
        <div className="contact">
        
            <h1 id="contactHeading">Contact Me</h1>
        
            <div className="contact_details">


            {contactData.map((data) => {
                const {title,link , icon} = data
                return(
                    <div className="icons_mat" onClick={() => assigntTo(link)}>
                        {icon}
                        <p>{title}</p>

                        </div>

                )
            })}


            {/* <div className="icons_mat" onClick={sendEmail}>
                        <EmailIcon className="material" />
                        <p>joonujain@gmail.com</p>

                        </div>
                        <div className="icons_mat">
                        <LinkedInIcon className="material"/>
                        <p>Mehul Jain</p>
                        </div>
                        <div className="icons_mat">
            
                        <GitHubIcon className="material"/>
                        <p>MehulJain12398</p>
                        </div> */}
                        {/* <div className="icons_mat">
            
                        <PhoneIcon className="material"/>
                        <p>+91 9057582076</p>
                        </div> */}


        </div>
            
        </div>
    )
}

export default Contact
