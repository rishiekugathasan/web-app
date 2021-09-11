import React, {useState} from 'react'

import hWHex from '../../../assets/hWimgs/hWHex.svg'

import HowitWorksModal from './HowitWorksModal'
import { Button } from 'react-bootstrap'
import ScaleText from 'react-scale-text';
import badImg from '../../../assets/bad.png'


export default function HowitWorksStep({bgImg, numImg, hText, text}) {
    const [modalShow, setModalShow] = useState(false);
    const HexSteps = (props) => (
      <ScaleText minFontSize={11} maxFontSize={39} >
        <span style={{ fontWeight:'600'}}>{props.hText}</span>
      </ScaleText>
    );
    const CMore = (props) => (
      <ScaleText minFontSize={9} maxFontSize={14} >
        <span >see More..</span>
      </ScaleText>
    );
    return (
        <div className="containStep hWBg" style={{ backgroundImage: `url(${bgImg})`}}>
            <div className="longHexContainer longHex" style={{backgroundImage: `url(${hWHex})`}}>
            <div className="hexTxtBox">
            <h1 className="hexH1Text flexalignStart mcfH1 px-3"><HexSteps hText={hText}/></h1>

            <Button className="seeMoreBtn" variant="custom" onClick={() => setModalShow(true)}>
              <CMore/>
            </Button>

        <HowitWorksModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        text = {text}
        header = {hText}
        />

            </div>
          </div>
            <div className="numberImgContainer">
            <img className="numberImg" src={numImg}></img></div>
        </div>
    )
}
  