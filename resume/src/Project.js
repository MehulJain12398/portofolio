import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

function Project({title,image,link,desc,pos}) {


    const [check,setCheck] = useState(false) 
    const [linkImage,setLinkImage] = useState(false)


    useEffect(() => {

        window.addEventListener("resize" ,() => {
            if(window.innerWidth < 800){
                setCheck(true)
            }
            else setCheck(false)
        })
        
    },[])

    useEffect(() => {
        window.addEventListener("resize" ,() => {
            if(window.innerWidth < 550){
                setLinkImage(true)
            }
            else setLinkImage(false)
        })

    },[])

    const style = {
        cursor:"pointer"
    }




    const handleClick = () =>  {
        window.location.assign(link)
    }

    return (


        
        <div className={check ? "project_column" : pos } 
        // style={{backgroundImage:"url(https://www.nxtbookmedia.com/wp-content/uploads/2014/06/netflix.png)",
        //         width:"100%",
        //         backgroundSize:"cover",
        //         backgroundPosition:"center center",
        //         objectFit:"cover",
        //         height:"50vh"
        
        
        


        // }}
        >
            <div className="image_container">
            {linkImage ? <img src={image} alt="" className="image_project" onClick={handleClick} style={style}/> : <img src={image} alt="" className="image_project" />}
            {/* <p>image project</p> */}
            <button className="button_visit" onClick={handleClick}>Visit the App</button>
            </div>
        {/* <img src="https://www.nxtbookmedia.com/wp-content/uploads/2014/06/netflix.png" alt="" className="image_project" /> */}
        <div className="info">
            <h1>{title}</h1>
            <p>{desc}</p>
        
            {/* <p>Netflix clone made with advanced react, axios to asynchronously fetch movie data of over 30 
            thousand movies from Tmdb api. Features trailer links, dynamically generated movie and tv show and an interactive UI replicated from the original netflix app.</p> */}
        </div>
        
            
        
            
        </div>
    )
}

export default Project
