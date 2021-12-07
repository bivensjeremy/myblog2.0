import Head from 'next/head'
import { Formik, Form } from 'formik';
import { useState } from 'react';
import TextField, { OptionField, MessageField } from '../../comps/FormFields';
import PostSubmitSuccess from '../../comps/PostSubmitSuccess';
import { blogPostValidation } from '../../lib/Validations/blogpostvalidation'
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link'
import { server } from '../../config';
import { useRouter } from 'next/router'
import Restricted from '../../comps/Restricted';

const createblogpost = () => {
    const [postSuccess, setPostStatus] = useState('');
    const [processing, setProcessing] = useState(false);
    const date = new Date();
    const postDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const router = useRouter();

    if (loading) {
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    };
    if (session) {
        return (
            <div>
                <Head>
                    <title>Create a New Blog Post</title>
                </Head>
                

                <div className="m-auto bg-light rounded-3 col-sm-10 col-md-7">
                    <Formik
                        initialValues={{
                            title: '',
                            category: '',
                            content: '',
                            date: postDate,
                        }}
                        validationSchema={blogPostValidation}
                        onSubmit={async(values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            setProcessing(true);
                            const response = await fetch('/api/createblogpostapi', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json'
                                }, 
                                body: JSON.stringify(values) 
                            });
                            const resData = await response.json();
                            if (resData.status === 'success'){
                                setPostStatus(true)
                            } else if(resData.status === 'fail'){
                                alert('Post Failed')
                            }
                        }}
                    >

                        <div className="p-5 m-auto">
                            <div>
                                <div className="m-auto">
                                    <h2 className="text-center">Create A Blog Post</h2>
                                </div>
                                {postSuccess ? (<PostSubmitSuccess />) : (
                                    <Form>
                                        <div className="row py-4">
                                            <div className="col-lg-6">
                                                <TextField label="Post Title" name="title" type="text" />
                                            </div>
                                            <div className="col-lg-6">
                                                <OptionField label="Category" name="category" type="text" />
                                            </div>
                                        </div>
                                        
                                        <MessageField label="Post Content" name="content" type="text" />


                                        <div className="row">
                                            <div className="col-6">
                                                <button type="submit" disabled={processing || postSuccess} className="btn text-light fw-bold bg-dark p-2">{processing ? (
                                                <div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            ) : (
                                                "Submit Post"
                                            )}</button> 
                                            </div>

                                            <div className="col-6 text-end">
                                                <h4 className="fst-italic fs-6">Post Date: {postDate}</h4>
                                            </div>
                                            
                                        </div>
                                    </Form>
                                )}    
                            </div> 
                        </div>
                    </Formik>
                </div>
                
                <div className="m-3 text-center row">
                    <div className="col">
                        <Link href='/'>
                            <a onClick={()=> signOut({callbackUrl: `${server}`})}>
                                <button type="submit" className="btn p-2 btn-danger text-light">Sign Out</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    } else {
        <Restricted />
    }
}

export default createblogpost;