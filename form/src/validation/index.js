import * as yup from "yup";

const requiredMessage = "This one is required";
const minMessage = "Must be at least 6 characters";
const termsMessage = "Must accept the terms and conditions";

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required(requiredMessage)
        .min(6, minMessage),
    email: yup
        .string()
        .email("must be valid email address")
        .required(requiredMessage)
        .min(6, minMessage),
    password: yup
        .string()
        .required(requiredMessage)
        .min(6, minMessage),
    terms: yup
        .boolean()
        .oneOf([true], termsMessage),
})

export default formSchema;