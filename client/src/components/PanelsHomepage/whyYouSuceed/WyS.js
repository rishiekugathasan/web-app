import React from 'react'
import Media from 'react-media'
import HexPanelText from './HexPanelText'
import AltPanel from './AltPanel'


export default function WyS() {
    return (
        <div style={{height: '100%'}}>
            <Media queries={{ small: { maxWidth: 1315 } }}>
                        {matches =>
                            matches.small ? (
                            <AltPanel/>
                            ) : (
                                <HexPanelText/>
                            )
                        }
                    </Media>
        </div>
    )
}
