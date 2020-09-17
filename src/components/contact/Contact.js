import React from "react";
import { useform } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";

const scehma = yup.object().shape({
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
        .max(150, "")
});