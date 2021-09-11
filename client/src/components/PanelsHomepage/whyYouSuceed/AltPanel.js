import React from 'react'

export default function AltPanel() {
    
    const questions = [
        {text:" It's a fact that coaches speed up your fitness success, but we dive further - we develop your mind muscle connection for you to become your own coach, for life."},
        {text: "From the very beginning you  are coached by experts in Movement, Strength, Medicine, and Nutrition. Our proven MyCure Team system will make you live healthier, stronger, happier."},
        {text: "You are beautifully unique - at MyCure fitness, your programs are custom tailored around your lifestyle. Realistic life can lead to extraordinary results."}
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
