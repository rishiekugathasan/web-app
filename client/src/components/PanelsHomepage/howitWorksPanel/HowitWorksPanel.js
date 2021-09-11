import React from 'react'
import HowitWorksStep from './HowitWorksStep'

import no1 from '../../../assets/hWimgs/no1.svg'
import no2 from '../../../assets/hWimgs/no2.svg'
import no3 from '../../../assets/hWimgs/no3.svg'
import no4 from '../../../assets/hWimgs/no4.svg'

import hWBg from '../../../assets/hWimgs/hWBg.png'

import img01 from '../../../assets/hWimgs/img01.png'
import img02 from '../../../assets/hWimgs/img02.png'
import img03 from '../../../assets/hWimgs/img03.png'
import img04 from '../../../assets/hWimgs/img04.png'


const stepInfo = [
    {bgImg: img01, numImg: no1, hText: "Plan your Strength", text: 'Start here, Know your strength Sit strong and a strength and optimization expert will give you a call to discuss your next move, after a comprehensive intake that will give the clearest picture of where you are in your journey and the vision to carry it to success'},
    {bgImg: img02, numImg: no2, hText: "Execute your Vision", text: 'Programming that reflects your strength, health, nutrition, and cognitive behavioural enhancement is rolled out.  Wearable technology is something we strongly believe in - knowledge is power and we want you to understand and optimize your own body like nobody can.'},
    {bgImg: img03, numImg: no3, hText: "Reassess your potential", text: 'Structured within your training program are timelines to meet with our experts to discuss your progress and optimize your levels of improvement.'},
    {bgImg: img04, numImg: no4, hText: "Automate your Lifestyle", text: 'With the tools in place to ensure physical empowerment and life long motivation, its you back in the driver seat, with the knowledge needed to succeed, don’t worry, we are always here to ensure you stay the course and level up as an athlete for life.'}
]


// Aranesh 

const renderStep = (step, index) => {
    return (
      <HowitWorksStep key={index}
            bgImg={step.bgImg}
            numImg={step.numImg}
            hText={step.hText}
            text={step.text}
      />
    ) 
  }
export default function howitWorksPanel() {
    return (
        <div className="mb-5 pb-5">
            {stepInfo.map(renderStep)}
        </div>
    )
}
