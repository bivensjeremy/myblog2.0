import styles from '../styles/Home.module.css'
import Image from 'next/image';
import whatisblog from '../public/images/whatisblog.png'
import Link from 'next/link'

const CenterStage = () => {
    return (
        <div className={styles.main}>
            <div>
                <Image
                    src={whatisblog}
                    alt='Blog_Image'
                    className="rounded-pill"
                />
            </div>

            <div className="text-center pb-4">
                <h1 className="text-light display-4 mb-5">
                    My Blog, <br/> My Business
                </h1>
                <Link href="#blogSection">
                    <button type="button" className="btn btn-outline-light">Read Stories <i className="bi bi-arrow-down"></i></button>
                </Link>
            </div>
           
        </div>
    );
}

export default CenterStage;