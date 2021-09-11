import React from 'react'
import Media from 'react-media'

import FooterMobile from './FooterMobile'
import FooterDesktop from './FooterDesktop'

export default function Footer() {
    return (
        <div>
            {/* media queries will go here - modify max width value */}
            <Media queries={{ small: { maxWidth: 768 } }}>
                        {matches =>
                            matches.small ? (
                            <FooterMobile />
                            ) : (
                                <FooterDesktop />
                            )
                        }
                    </Media>
           
        </div>
    )
}
