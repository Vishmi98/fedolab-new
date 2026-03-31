export type ContactUsType = {
    name: string;
    email: string;
    subject: string;
    phoneNo: string;
    message: string;
}
export type SubmitFormResponseType = {
    success: boolean;
    message: string;
    data: ContactUsType;
}

export type SubmitFormResponseDataType = {
    success: boolean;
    message: string;
    data: {
        lead: ContactUsType;
    }
}