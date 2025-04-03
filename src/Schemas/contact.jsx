import * as yup from "yup";

export const contactSchema = yup.object({
    userName: yup.string().required("Name Is Required"),
    email: yup.string().email("Enter Valid email").required("Email is Required"),
    message: yup.string().required("Min 10 Characters Required")
});
