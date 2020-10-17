import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
// import ErrorMessage from "./ErrorMessage";
import Iframe from "react-iframe";
import {Col, 
        Form, 
        Button,
        Container,
        Row} from "react-bootstrap";

export default function Contact() {
    const { handleSubmit, register, /* errors */ } = useForm();
    function sendEmail(e) {

      emailjs.sendForm('service_br0glnq', 'template_1wfjs3m', 'user_YxJjY8QiXlh2Wc8LNtrUn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
        <h2 id="contact">Contact</h2>
            <Container>
                    <Row>
                    <Col xs={12} md={6}>
                        <Form className="contact__form" onSubmit={handleSubmit(sendEmail)}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" className="contact__form--control" name="from_name" ref={register({required: true, minLength: 3})} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" className="contact__form--control" name="user_email" ref={register({required: true})} />
                                {/* {errors.user_email && errors.user_email.type === "required" && <ErrorMessage name="user_email" as="p" childer="This is required" />} */}
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" className="contact__form--control" name="user_number" ref={register({required: true})} />
                                {/* {errors.user_number && errors.user_number.type === "required" && <ErrorMessage name="user_number" as="p" childer="This is required" />} */}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control className=" contact__form--control" name="message" placeholder="Get in touch!" ref={register({required: true, minlength: 5})} />
                                {/* {errors.message && errors.message.type === "required" && <ErrorMessage name="message" as="p" children="This is required" />}
                                {errors.message && errors.message.type === "minlength" && <ErrorMessage name="message" as="p" children="Please type a longer message" />} */}
                            </Form.Group>

                            <Button value="Send" className="contact--btn" type="submit">Get in touch!</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.460923696031!2d10.404922851779196!3d59.194341381521575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b981f8c4d83d%3A0xdad5df272883fad6!2sVeibakken%2010%2C%203140%20N%C3%B8tter%C3%B8y!5e1!3m2!1sno!2sno!4v1600841464449!5m2!1sno!2sno" width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0"></Iframe>
                    </Col> 
                </Row>
            </Container>
        </>
    );
  }