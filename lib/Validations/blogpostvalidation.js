import * as Yup from 'yup';

export const blogPostValidation = Yup.object({
    title: Yup.string().required('Please name your blog post'),
    category: Yup.string().required('Invalid Category Type'),
    content: Yup.string().required('Don\'t forget to add a post')
})