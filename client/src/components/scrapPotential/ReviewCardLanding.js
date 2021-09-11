import React from 'react'
import {Card} from 'react-bootstrap'

export default function ReviewCardLanding({txt, author}) {
    return (
       
         <Card className="reviewCard">
             <Card.Body>
                <Card.Text>
                    {txt}
                </Card.Text>
             </Card.Body>
             <footer className="blockquote-footer">
                <i>{author}</i>
            </footer>
         </Card>
        
    )
}