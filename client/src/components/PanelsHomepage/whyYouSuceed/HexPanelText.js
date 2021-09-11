import React from 'react'
import tripleHex from '../../../assets/tripleHex.svg'
import '../../../css/succeed.css'
import threeHex from '../../../assets/threeHex.svg'
export default function HexPanelText() {
    return (
        <div className="mb-5">
          
            <div className="sBg containHexs" style={{backgroundImage: `url(${threeHex})`, color: 'red'}}>
                <div className="centerHexText" style={{color:'#004c54'}}>
                    {/* Those that succeed in fitness have a coach, but we go further - our system provides you with the understanding and experience to become your own coach, for life. */}
                </div>
                <div className="leftHexText" style={{color: '#004c54'}}>
                    {/* Assessed and coached by experts in the field of strength, movement, and health optimization. Everyone deserves to live healthier, stronger, longer.  */}
                </div>
                <div className="rightHexText" style={{color: '#004c54'}}>
                {/* Your body is beautifully unique, let our experts - who happen to be real people - make sure your body is trained that way to optimize strength and minimize injuries. */}
                </div>
            </div>
        </div>
    )
}
