import React from 'react'
import mcfLogo from '../../assets/landingImgs/mcf.svg'
import '../../css/test.css'
export default function FooterMobile() {
    return (
        <div className="footerMobile d-flex" >
            <img className="mb-5 mx-5" style={{width: '45%'}} src={mcfLogo} />
            <ul className="pagesList d-flex mx-5">
                <li ><a href="../#">HOME</a></li>
                <li><a href="../#/quiz/question_1">KNOW YOUR STRENGTH</a></li>
                <li><a href="../#"  >Products We Trust</a></li>
                <li><a href="../#/aboutUs">YOUR TEAM</a></li>
                <li><a href="../#/contactUs">CONTACT US</a></li>
            </ul>
            <div className="socialsList">
                
            </div>
        </div>
    )
}
