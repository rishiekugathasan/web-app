import React from 'react'

export default function AltPanel() {
    
    const questions = [
        {text:" Fit for life - Our training will develop you to become your own coach, for life!"},
        {text: "The MyCure Fitness System will help you live healthier, stronger, happier. Delivered by experts with over 20 years experience, achieved by you, ASAP."},
        {text: "Accurate and seamless technology integration to make every MyCure Fitness Programs custom made for you. quote: \“We make getting fit achievable\”"}
    ]
  
      const renderQA = (t, index) => {
          return(

            <div className="wYSMobile mx-2 pb-3 pt-3" key={index} >
                {t.text}
           </div>
          ) }

    return (
        <div className="d-flex" style={{background: '#004c54', alignItems: 'center', flexDirection: 'column'}}>
            {questions.map(renderQA)}
            <div className="pb-5" style={{borderTop: 'solid white', width: '90%'}}>
            </div>
        </div>
    )
}