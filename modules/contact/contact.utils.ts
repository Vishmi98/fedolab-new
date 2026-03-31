import * as Yup from 'yup';

import { ContactUsType } from './contact.types';


export const contactUsInitialValues: ContactUsType = {
    name: '',
    email: '',
    subject: '',
    phoneNumber: '',
    message: ''
};

export const contactUsValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Valid email is required").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
});