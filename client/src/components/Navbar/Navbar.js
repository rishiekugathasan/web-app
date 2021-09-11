import React from 'react'
import Media from 'react-media'

import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

export default function Navbar() {
    return (
        <div>
           <Media queries={{ small: { maxWidth: 1139 } }}>
                        {matches =>
                            matches.small ? (
                            <NavMobile/>
                            ) : (
                                <NavDesktop />
                            )
                        }
                    </Media>
        </div>
    )
}
