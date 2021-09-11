import React, {useState} from 'react'
import { Button, Collapse } from 'react-bootstrap';
// import '../../css/test.css';

export default function NavMobile() {
    const [open, setOpen] = useState(false);


return (
        <div>
            {/* <!-- The overlay --> */}


{/* <!-- Use any element to open/show the overlay navigation menu --> */}
<Button className="navDropButton d-flex flexAlignStart" onClick={() => setOpen(!open)} >☰</Button>
       {open ? 
      
            <div id="myNav" class="overlay" style={{height: '100%'}}>


  {/* <!-- Overlay content --> */}
  <Button className="navDropButton flexAlignStart d-flex" onClick={() => setOpen(!open)} >☰</Button>
  <div className="overlay-content">
  <a href="../#" onClick={() => setOpen(!open)} >Home</a>
    <a href="../#/aboutUs" onClick={() => setOpen(!open)} >Your Team</a>
    <a href="#" onClick={() => setOpen(!open)} >Products We Trust</a>
    <a href="../#/quiz/question_1" onClick={() => setOpen(!open)} >Know Your Strength</a>
    <a href="../#/contactUs" onClick={() => setOpen(!open)} >Contact Us</a>
  </div>
  
</div>
            : <div id="myNav" class="overlay" style={{height: '0%'}}>
            <Button className="navDropButton flexAlignStart d-flex" onClick={() => setOpen(!open)} >☰</Button>
            <div className="overlay-content">
            <a href="#" onClick={() => setOpen(!open)}>Home</a>
            <a href="../#/aboutUs" onClick={() => setOpen(!open)} >Your Team</a>
            <a href="#" onClick={() => setOpen(!open)} >Products We Trust</a>
            <a href="../#/quiz/question_1" onClick={() => setOpen(!open)} >Know Your Strength</a>
            <a href="../#/contactUs" onClick={() => setOpen(!open)} >Contact Us</a>
            </div>
          
          </div>} 
 </div>
    )
}
