import styles from '../../styles/Home.module.css'
import { getCsrfToken, csrfToken } from 'next-auth/react';
import Head from 'next/head'
import { MessageField } from '../../comps/FormFields';
import { useState } from 'react';

export async function getServerSideProps(context) {
    return {
        props: {
        csrfToken: await getCsrfToken(context)
        }
    }
}

const signin = ({ csrfToken }) => {
    const [postSuccess, setPostStatus] = useState('');
    const [processing, setProcessing] = useState(false);

    return (
        <div className={styles.container}>
            <Head>
                <title>Create a New Blog Post</title>
            </Head>
            <div className="bg-light rounded col-md-6 col-lg-4 col-10 p-5">

                {/* <h2 className="fw-bold text-center">Sign In</h2>  */}

                <form method="post"  action="/api/auth/callback/credentials">
                    <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <div class="form-floating mb-3">
                        <input 
                            type="password"
                            name="password"
                            className="form-control" 
                            placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                    </div>
                    
                    <div>
                        <button type="submit" className="btn w-100 bg-dark text-light">Sign In</button> 
                    </div>
                </form>
            </div> 
        </div>
    );
}

export default signin;