import { signIn } from "next-auth/react";
import styles from '../styles/Home.module.css'

const Restricted = () => {
    return (
        <div align="center" className={styles.container}>
            <div className="bg-light rounded col-md-6 col-lg-4 col-10 p-5">
                <h5>You must be signed in to post</h5>
               
                <div container className="text-center">                        
                    <button className="btn btn-primary" onClick={signIn}>Sign In </button>
                </div>
            </div>
        </div>
    );
}

export default Restricted;