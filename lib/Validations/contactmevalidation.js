import * as Yup from 'yup';

export const contactMeValidation = Yup.object({
    name: Yup.string().required('Who are you?'),
    email: Yup.string().email().required('Invalid email'),
    message: Yup.string().required('What is your message?')
})