import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function HowitWorksModal(props) {
    return (
      
            <Modal 
            backdrop={true}
            keyboard={false}
            size="lg"
            show={props.show} 
            onHide={props.onHide}
            // {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
      <Modal.Header>
      <Modal.Title  style={{color:'#004c54'}} id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{color:"#004c54"}}>{props.text}</p>
      </Modal.Body>
      </Modal>
    
    )
}
