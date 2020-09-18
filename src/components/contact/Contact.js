import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("Firstname is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    phone: yup 
        .number()
        .required()
        .interger()
        .min(8, "Phonenumber must be minimum 8 numbers")
        .max(12, "Norwegian landcode is 0047 or +47"),
    message: yup
        .string()
        .required("A message is required")
        .max(150, "A message is required")
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
    //     console.log("data", data);
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
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control phone="Phone" placeholder="Phone" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Get in touch!</Form.Label>
                <Form.Control message="Message" placeholder="Get in touch!" ref={register} />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
            </Form.Group>

            <Button type="submit">Get in touch!</Button>
        </Form>
    );
}

export default Contact;