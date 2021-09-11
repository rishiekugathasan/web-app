import React from 'react'

import '../../css/Home.css'
import '../../css/main.css'
import tripleHex from '../../assets/tripleHex.svg'
import TrainPanel from './TrainPanel';

import ReviewCarousel from './ReviewCarousel';
import HowitWorksPanel from './howitWorksPanel/HowitWorksPanel';
import Faqq from './FaqPanel/Faq';
import AltPanel from './whyYouSuceed/AltPanel';
import HexPanelText from './whyYouSuceed/HexPanelText';
import WyS from './whyYouSuceed/WyS';

// ferfeg

export default function Homepage() {
    return (
        <div>
         <TrainPanel />
         <div className="flexAlignStart d-flex" style={{paddingLeft: '2%'}}>
            <h1 className="mcfH1"style={{color: '#004c54' }}>What Our Clients Think</h1>
         </div>
        <ReviewCarousel />
        <div className='flexAlignEnd d-flex mb-5'>
                <h1 className="mcfH1"style={{color: '#004c54', paddingBottom: '10%'}}>WE ARE MYCUREFITNESS</h1>
           </div>
         <div>
         <div className="flexAlignStart d-flex mt-5" style={{paddingLeft: '2%', backgroundColor: '#004c54'}}>
            <h1 className="mcfH1"style={{ padding: "2%" }}>WHY YOU SUCCEED</h1>
         </div>
         {/* <AltPanel /> */}
         <WyS />
         </div>
         <div className="flexAlignStart d-flex" style={{paddingLeft: '2%', backgroundColor: '#004c54'}}>
            <h1 className="mcfH1"style={{ padding: "2%", textAlign: 'start' }}>The 4 step Mycure Fitness success </h1>
         </div>
        <HowitWorksPanel />
        <div className="flexAlignStart d-flex" style={{paddingLeft: '2%', backgroundColor: '#004c54'}}>
            <h1 className="mcfH1"style={{ padding: "2%" }}>FREQUENTLY ASKED QUESTIONS</h1>
         </div>
        <Faqq />
   
         </div>

        
    )
}
