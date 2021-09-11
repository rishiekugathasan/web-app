import React from 'react' 

import dPP from '../../../assets/mTimages/updated/DPP_HP.svg'
import wH from '../../../assets/mTimages/wH.svg'
import rS from '../../../assets/mTimages/RS_HP (1).svg'
import jG from '../../../assets/mTimages/updated/JG_HP.svg'
import jGpic from '../../../assets/mTimages/updated/JG_HP_PIC.svg'
import dPPpic from '../../../assets/mTimages/updated/DPP_HP_PIC.svg'
import rSpic from '../../../assets/mTimages/updated/RS_HP_PIC.svg'

import '../../../css/lpmeetTheTeam.css'
import TeamMember from './TeamMember'

export default function MeetTheTeam() {
    const memberInfo = [
        {img: rSpic, imgClass: "topLeft", text: "Rohit began his career working as a strength and conditioning coach and personal trainer. He used exercise to help athletes and clients lose weight, get stronger, and move better. This approach to physical training being the foundation of health continues in his practice today as all his patients leave stronger than they came! He is certified with the Functional Range Systems as a manual therapist and mobility specialist. This system is currently used by professional organizations such as Chicago Cubs, Portland Trailblazers, Houston Rockets, and many more."},
        {img: jGpic, imgClass: "mid", text: "James has always used nutrition, movement and strength improvements to live a happier life.  Combining his Neuroscience background with strength training has been a rewarding journey that has led to him personally coaching over 200 individuals in 13+ years in the health and strength improvement world. This experience has led to the development of MyCure FItness’s Propreitary approach to lifelong fitness and cognitive improvements. Mycure Fitness "},
        {img: dPPpic, imgClass: "topRight", text: "After finishing his neuroscience degree at the U of T, Dr Paul finished his medical school at University of Sydney in Australia and has practiced within the orthopaedic fields there as well as in the Family Physician role. He currently is a practicing Physician in Canada. Specializing in multiple medical health fields, Dr. Paul is an expert in preventative and optimization medicine where he practices in his philosophy: strength is ultimate health."}
    ]
    const renderMember = (member, index) => {
        return (
          <TeamMember key={index}
                img={member.img}
                imgClass={member.imgClass} 
                text={member.text}
          />
            ) 
        }

    return (
        <div class="containTeam">  
            {memberInfo.map(renderMember)}

            <img class="bottomLeft" src={wH} alt={wH}/> 
            <img class="bottomRight" src={wH} alt={wH}/>
        </div>
    )
}
