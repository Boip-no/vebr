import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";

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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="Name" placeholder="Name" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control email="Email" placeholder="Email" ref={register} />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control phone="Phone" placeholder="Phone" ref={register} />
                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Get in touch!</Form.Label>
                <Form.Control message="Message" placeholder="Get in touch!" ref={register} />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Get in touch!</Button>
        </Form>
    );
}

export default Contact;