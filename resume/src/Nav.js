import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import jpg from './WhatsApp Image 2021-08-18 at 12.27.50 PM-modified.png'


function Nav() {


    const [show,setShow] = useState(false)
    const [click,setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })

        return () => {
            window.removeEventListener("scroll",null)

        }

    },[])

    return (
        <div className={`nav ${show && `nav-black`}`}>
        <div className="nav-content">

        <div className="logoHead" onClick={() => {scroll.scrollToTop()}}>
            <img src={jpg} alt="logo" className="logo" />
        </div>
        <div className="list">
      <ul className={click ? "items" : "items close"}>
      <li><Link className={`path ${show && `path-color`}`} to="about_heading" smooth={true} duration={1000} onClick={handleClick}>
            About
        </Link>
        </li>
        <li><Link className={`path ${show && `path-color`}`}  to="project" smooth={true} duration={1000} onClick={handleClick}>
            projects
        </Link>
        </li>
        <li><Link className={`path ${show && `path-color`}`} to="contactHeading" smooth={true} duration={1000} onClick={handleClick}>
        contact
        </Link>
        </li>
      </ul>
        

        </div>

        <div className="menu-list" onClick={handleClick}>

            {click ? <CloseIcon className="hamburger"/> : <MenuIcon className="hamburger" /> }

        </div>

        


        </div>
            
        </div>
    )
}

export default Nav
