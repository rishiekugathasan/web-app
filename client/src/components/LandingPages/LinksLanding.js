import React from 'react'
import backgroundImage from '../../assets/landingImgs/BackGroundImage.svg'
import AA from '../../assets/landingImgs/aATransparent.svg'
import mcf from '../../assets/landingImgs/mcf.svg'

export default function LinksLanding() {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, height:'100vh', overflow:'hidden', backgroundSize: 'cover'}}>
            <div  className="centerContainer" >
            <div className="linksContainer" >
                  <a href="https://www.athleticadvantage.ca/"> <img style={{maxWidth:'50%', padding:'2% 0%'}} src={AA} >
                 </img></a> 
            </div>
            <div className="linksContainer">
                <a href="mycurefitnessURLHERE"> 
                <img style={{maxWidth:'45%',  padding:'2% 0%'}} src={mcf}></img></a>
              </div> 
            </div>
            <style>{"\
        .body{\
          color:red;\
        }\
      "}</style>
        </div>
   
    )
}
