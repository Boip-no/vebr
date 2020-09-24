import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import Iframe from "react-iframe";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(2, 'Name has to be longer than 2 characters' )
        .required("Firstname is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    phone: yup
        .string()
        .matches( phoneRegExp, 'Please enter a valid phone number.' )
        .required( "Please enter your phone number" ),
    message: yup
        .string()
        .required("A message is required")
        .max(150, "A message is required")
});

function Contact() {
    const { register, handleSubmit, errors } = useForm( {
        resolver: yupResolver( schema )
    } );

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Container id="contact" className="contact Row-lg-12">
            <Row className="justify-content-md-center">
                <Col xs={12} sm={6}>
                <h3 className="background">Contact</h3>
                    <Form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="contact__form--group">
                            <Form.Label className="contact__form--label">Name</Form.Label>
                            <Form.Control name="Name" ref={register} />
                            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
                        </Form.Group>

                        <Form.Group className="contact__form--group">
                            <Form.Label className="contact__form--label">Email</Form.Label>
                            <Form.Control name="Email" ref={register} />
                            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                        </Form.Group>

                        <Form.Group className="contact__form--group">
                            <Form.Label className="contact__form--label">Phone</Form.Label>
                            <Form.Control name="Phone" ref={register} />
                            {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                        </Form.Group>

                        <Form.Group className="contact__form--group">
                            <Form.Label className="contact__form--label">Message</Form.Label>
                            <Form.Control name="Message" placeholder="Get in touch!" ref={register} />
                            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                        </Form.Group>

                        <Button type="submit">Get in touch!</Button>
                    </Form>
                </Col>
                <Col xs={12} sm={6}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.460923696031!2d10.404922851779196!3d59.194341381521575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4646b981f8c4d83d%3A0xdad5df272883fad6!2sVeibakken%2010%2C%203140%20N%C3%B8tter%C3%B8y!5e1!3m2!1sno!2sno!4v1600841464449!5m2!1sno!2sno" width="600" height="450" frameborder="0" aria-hidden="false" tabindex="0"></Iframe>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;