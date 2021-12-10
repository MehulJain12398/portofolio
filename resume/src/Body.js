import React from 'react'
import './Body.css'
import Project from './Project'
import './data'
import { data } from './data'

function Body() {
    const {netflix , amazon , github,hotstar} = data
    return (
        <div className="body">
        <h1 id="project">
        Projects
        <hr />
        </h1>

        <div className="container">
        <Project title={netflix.title} image={netflix.image} link={netflix.link} desc={netflix.desc} pos={netflix.position}/>
        <Project title={amazon.title} image={amazon.image} link={amazon.link} desc={amazon.desc} pos={amazon.position}/>
        <Project title={github.title} image={github.image} link={github.link} desc={github.desc} pos={github.position} />
        <Project title={hotstar.title} image={hotstar.image} link={hotstar.link} desc={hotstar.desc} pos={hotstar.position} />
        </div>

        
            
        </div>
    )
}

export default Body
