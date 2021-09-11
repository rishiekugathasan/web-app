import React from 'react'
import { Accordion } from 'react-bootstrap'
import '../../../css/Home.css'
import FaqQuestion from './FaqQuestion'

export default function Faq() {

    const questions = [
      {ekey: "0", question: "How will I guarantee fitness improvement?", answer: "money back guarantee in first 2 month or 10 sessions or your money back"},
      {ekey: "1", question: "I have never done any strength or resistance training - Is this for me?", answer: "we do a thorough intake process and we encourage to find our where you are now, you just might surprise yourself in finding out, you are stronger than you think"},
      {ekey: "2", question: "I have tried strength training before - What is different about the mycure fitness approach?", answer: "as an individual your training should reflect eh unique person you are. We work with experts in the field of movement, medicine, and cognitive behavioural optimization to ensure you are at the centre of your integrative health optimization"},
      {ekey: "3", question: "Will you coach me on nutrition?", answer: "we believe nutrition is a foundational and habit based approach to changing your life, by working around your habits and improving them through continued coaching with our team of coaches and doctors, we will educate you to start understanding nutrition the way you need so your self empowered to make the best decisions"}
      
    ]

    const renderQA = (qa, index) => {
        return(
          <FaqQuestion key={index}
            ekey={qa.ekey}
            question={qa.question}
            answer={qa.answer}
        
          />
        ) }

    return (
        <div>      
        <Accordion >
          {questions.map(renderQA)}
            
        
           
         
        </Accordion>
        </div>  
        
    )
}

