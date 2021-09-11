import React, {useRef} from 'react'
import useElementOnScreen from '../../hooks/useElementOnScreen';
import trainLogo from '../../assets/train.png'
import strongerLogo from '../../assets/stronger.png'
import {Button} from 'react-bootstrap'
import StickyButton from '../Navbar/StickyButton';
import  ScaleText  from 'react-scale-text';

// import '../../css/Landing.css'
export default function TrainPanel() {
    const targetRef = useRef(null);
    const isVisible = useElementOnScreen({
        root: null, 
        rootMargin: '0px',
        threshold: 0.3
    }, targetRef)

    const QuoteSpan = (props) => (
        <ScaleText minFontSize={19} maxFontSize={32} >
          <span style={{textAlign:"start", fontWeight:'600'}}>{props.quote}</span>
        </ScaleText>
      );

    
    return (
  
        <div className="trainTxtPanel d-flex flex-column" ref={targetRef}>
            {!isVisible ? 
                <StickyButton /> 
            : ''} 
       
            <div className="greenBehind" fluid></div>
           
            <div className="bgDiv">  
            {/* marginTop: '-16%' */}
                <img style={{width: '95%', marginTop: '-7.5%'}} src={strongerLogo} />
                <div className="flexAlignEnd d-flex" style={{padding: '4%'}}></div> 
                
                <div className='txtBox'>
                   
                    <QuoteSpan quote={"You are incredibly unique - we train to optimize that"}/>
                    {/* <footer className="blockquote-footer">
                        <i>Quote </i>
                    </footer> */}
                    
                    <div className="flexAlignStart d-flex" style={{padding: '4%'}}>
                    <a href="../#/quiz/question_1"><Button className="buttonWhite">Know Your Strength ⟶</Button></a></div> 
                </div>
            </div>
           
        </div>
    )
}
