import React from 'react'
import {Link} from 'react-router-dom'
import PDF from './Mehul_Jain_resume (3).pdf'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import './About.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import { Icon } from '@iconify/react';

function About() {
    const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);
    return (
        <div className="about">
        <h1 id="about_heading">
        About Me
        <hr />
        </h1>

        
        <div className="about_content">
        <div className="about_one">
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aperiam explicabo? Ea deleniti facere, molestiae maiores, blanditiis voluptates vero nostrum tenetur fuga nobis nam expedita cupiditate architecto a sunt eius?</p> */}
        <p>I'm a <strong>Front-end Developer</strong> and <strong>API Engineer (APIGEE)</strong> from Jaipur, Rajasthan.</p><br />
        <p>I code, write and build stuff</p><br />
        <p>I'm focused on building projects on <strong>Javascript</strong> mainly on <strong>React.js </strong></p><br />
        <p>Sometimes when i'm not coding, i'm likely at my gym or play some <br />songs which you can checkout <a href="https://soundcloud.com/user96051938" id="cloud"><>here</> </a>. </p>
        </div>

        <div className="about_two">
        <p></p>
    
        {/* <hr /> */}
        <br />
        
        
                {/* <a href={PDF} download="Mehul_Jain_resume.pdf">
                    <div className="resume">
                    <GetAppIcon className="down_icon"/>
                        <p> Download</p>
                    </div>
                </a> */}
                <div className="section_resume">
                <StyledButton  href={PDF} download="Mehul_Jain_resume.pdf" size="large">
                <GetAppIcon />
                <p>Download</p>
                </StyledButton>
                <h4 id="my">Here's my Resume for all the information regarding my Education as well as my Work Experience!!!</h4>

                </div>

            
           
        </div>

        </div>
        
            
        </div>
    )
}

export default About
