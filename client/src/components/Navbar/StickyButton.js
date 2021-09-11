import React from 'react'
import { Button } from 'react-bootstrap'
import '../../css/main.css'
import NavMobile from './NavMobile'

export default function StickyButton() {
    return (
        <div>
              <div className="buttonBar">
                
        <div className="flexAlignStart d-flex" >
                <NavMobile />
         </div>
         <div className="flexAlignEnd d-flex" style={{paddingRight: '4%', paddingTop: '1.5%'}}>
         <a href="../#/quiz/question_1"><Button className="buttonWhiteNav">Know Your Strength</Button></a> </div> 
         </div>
        </div>
    )
}
