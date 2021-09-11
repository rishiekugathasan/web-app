import React, {useState} from 'react'
import Media from 'react-media'
import '../../../css/main.css'
import '../../../css/contact.css'
import {Form, Button} from 'react-bootstrap'
import ContactInfo from './ContactInfo'

export default function ContactUs() {
    const [fname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inquiry, setInquiry] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.name.value;
        const email = form.email.value;
        const inquiry = form.inquiry.value;
        const formData = {
            name,
            email,
            inquiry
        }
        fetch('/sendEmail', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
            // body: new FormData(form.current)
          }).then(window.location.reload());
        console.log(formData.name);
      };

    // action="/sendEmail" method="POST"

    return (
        <div className="contactBox px-5">
            <div className="flexAlignStart d-flex px-4 mb-5 mt-5">
                <h1 className="mcfH1"style={{color: '#004c54'}}>CONTACT US</h1>
            </div>
            <Form onSubmit={handleSubmit}  className="contactForm  d-flex flex-direction-row"> 
                <div className="contactForm_col-1">
                    <Form.Group className="mb-5 px-4" controlId="formName">
                        <Form.Label className="flexAlignStart d-flex">Name</Form.Label>
                        <Form.Control className="contactFormInputs" type="text" required
                            value={fname}
                            name="name"
                            onChange={event =>{ setName(event.target.value) }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-5 px-4" controlId="formEmail">
                        <Form.Label className="flexAlignStart d-flex">Email</Form.Label>
                        <Form.Control className="contactFormInputs" type="email" required
                        value={email}
                        name="email"
                        onChange={event =>{ setEmail(event.target.value) }}
                        />
                    </Form.Group>
                    <Media queries={{ small: { maxWidth: 900 } }}>
                        {matches =>
                            matches.small ? (
                            <></>
                            ) : (
                                <ContactInfo />
                            )
                        }
                    </Media>
                </div>
{/* Start of column 2  */}
                <div  className="contactForm_col-2">
                    <Form.Group className="mb-3 px-4" controlId="formInquiry">
                        <Form.Label className="flexAlignStart d-flex">Inquiry</Form.Label>
                        <Form.Control className="contactFormInputs" as="textarea" 
                         value={inquiry}
                         name="inquiry"
                         onChange={event =>{ setInquiry(event.target.value) }}
                        rows={5}/>{/* might want to switch from rows to height style tag  */} 
                    </Form.Group>
                    <Media queries={{ small: { maxWidth: 900 } }}>
                        {matches =>
                            matches.small ? (
                            <ContactInfo />
                            ) : (
                                <></>
                            )
                        }
                    </Media>
                <Button className="buttonWhite" type="submit"  >Submit</Button>
                {/* maybe display in place of the button after submit?  */}
                <p style={{color: '#004c54'}}>Hang tight, we'll get back to you in 48 hours!</p>
                </div>
            </Form>
        </div>
    )
}
