
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Form from '../form/Form'
import './contact.css'

export default function Contact() {
  return (
    <section id='contact'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Get in Touch</h2>
                </Col>
                <Col lg='6' md='6'>
                    <div className="contact_info-container d-flex align-items-center gap-5 ">
                        <div className="single_info-box w-50">
                            <h6>Address</h6>
                            <p>Kathmandu, Nepal</p>
                        </div>
                        <div className="single_info-box w-50">
                            <h6>Phone</h6>
                            <p>+91-7368039186</p>
                        </div>
                    </div>

                    <div className="contact_info-container d-flex align-items-center gap-5">
                        <div className="single_info-box w-50">
                            <h6>Email</h6>
                            <p>iamavishah100@gmail.com</p>
                        </div>
                        <div className="single_info-box w-50">
                            <h6>Whatsapp no.</h6>
                            <p>7368039186</p>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <Form/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
