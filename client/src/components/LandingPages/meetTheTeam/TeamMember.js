import React, {useState} from 'react'
import wH from '../../../assets/mTimages/wH.svg'
import MeetTheTeamModal from './MeetTheTeamModal';

export default function TeamMember({img, imgClass, text}) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
                {/* <img className={imgClass} src={img} alt={wH} onClick={() => setModalShow(true)}/> */}
                <div className={imgClass} onClick={() => setModalShow(true)} ></div>
                <MeetTheTeamModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    text = {text} />
        </>
    )
}
