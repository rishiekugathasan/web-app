import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function MeetTheTeamModal (props) {
    return (
      
            <Modal 
            backdrop={true}
            keyboard={false}
            size="md"
            show={props.show} 
            onHide={props.onHide}
            // {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>

      <Modal.Body>
        <p style={{color: "#004c54"}}>{props.text}</p>
      </Modal.Body>
      </Modal>
    
    )
}
