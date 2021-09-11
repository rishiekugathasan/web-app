import React from 'react'
import { Accordion } from 'react-bootstrap';
import ScaleText from "react-scale-text";

export default function FaqQuestion({ekey, question, answer }) { 
      const FaqQ = (props) => (
        <ScaleText minFontSize={16} maxFontSize={24} >
          <span style={{color: '#004c54', textAlign:"start", fontWeight:'600'}}>{props.question}</span>
        </ScaleText>
      );
    return (
      <>      
        <Accordion.Toggle eventKey={ekey}  className="faqBtn">      
            <h1 className="mcfH1" style={{color: '#004c54', textAlign:"start", fontWeight:'600'}}><FaqQ question={question} /></h1>
        </Accordion.Toggle>
            <Accordion.Collapse eventKey={ekey} >
                <div id="collapse-text" style={{color: '#004c54'}}>
                    <p className="carouselText">{answer}</p>
                </div>
           </Accordion.Collapse>
        </>
    )
}
