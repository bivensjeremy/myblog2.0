import TextField, { MessageField } from '../comps/FormFields';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { contactMeValidation } from '../lib/Validations/contactmevalidation'

const FormSubmitSuccess = () => {
    return (
        <div className="text-center animated fadeInUp">
            <i className="bi bi0envelope-fill fs-1"></i>
            <h3 className="fw-bold m-3">Your message has been sent!</h3>


            <Link href="/">
                <button type="button" className="btn btn-dark">Return Home</button>
            </Link>
        </div>
    );
}

const contactme = () => {
    const [Processing, setProcessing] = useState('');
    const [Succeeded, setSucceeded] = useState(false);

    return (
        <div>
            <Head>
                <title>Send Me a Message</title>
            </Head>

            <div className="m-auto bg-light rounded-3 col-lg-6">
                
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={contactMeValidation}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        setProcessing(true);
                        const response = await fetch("/api/contactmeapi", { 
                            method: 'POST', 
                            headers: { 
                                'Content-type': 'application/json',
                                'Accept': 'application/json'
                            }, 
                            body: JSON.stringify(values) 
                        });
                        const resData = await response.json();
                        if (resData.status === 'success'){
                            setProcessing(false);
                            setSucceeded(true);
                        }else if(resData.status === 'fail'){
                            setProcessing(false);
                            alert("Message failed to send.")
                        }
                    }}
                >
                    <div className="p-5 m-auto col-lg-10">
                        {Succeeded ? (<FormSubmitSuccess />) : (
                            <div>
                                <h2 className="fw-bold text-center">Send me a message</h2>
                                <Form>
                                    <TextField label="Name" name="name" type="text" placeholder="" />
                                    <TextField label="Email" name="email" type="email" placeholder="" />
                                    <MessageField label="Message" name="message" type="text" />
                                    
                                    <div>
                                        <button type="submit" disabled={Processing || Succeeded} className="btn w-25 bg-dark text-light p-2">{Processing ? (
                                            <div className="spinner-border text-light" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        ) : (
                                            "Send"
                                        )}</button> 
                                    </div>
                                </Form>
                            </div> 
                        )}
                    </div>
                </Formik>
            </div>
        </div>
    );
}

export default contactme;