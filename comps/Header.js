import Image from 'next/image'
import Link from 'next/link'
import { server } from '../config';
import { useSession, signOut, signIn } from 'next-auth/react';

const header = () => {
    const { data: session, status } = useSession();
    
    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid px-4">
                <div className="nav-item dropdown">
                    <div id="navbarDropdownMenu" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        <i className="bi bi-list display-6 text-light"></i>
                    </div>
                    <ul className="dropdown-menu dropdown-menu p-2" aria-labelledby="navbarDropdownMenu">
                        <Link href='/'><a className="py-2 dropdown-item">Home</a></Link>
                        <Link href='/aboutproject'><a className="py-2 dropdown-item">About this Project</a></Link>
                        <Link href='https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d'><a className="py-2 dropdown-item">Request Services</a></Link>
                        <Link href='/contactme'><a className="py-2 dropdown-item">Contact Me</a></Link>
                    </ul>
                </div>
                

                <Link href='https://bivensblueprint.com' className="m-auto">
                    <a><Image
                        src='/images/BPLogo.png'
                        layout='intrinsic'
                        width='60'
                        height='60'
                        alt='Blueprint Logo'
                    /></a>
                </Link>
                
                {!session ? (
                    <>
                        <a onClick={() => signIn(null, {callbackUrl: `${server}/administration/createblogpost`})}>
                            <i className="bi bi-pencil-square fs-2 text-light pe-auto"></i> 
                        </a>
                    </>
                    ) : (
                    <>
                        <Link href="/administration/createblogpost"><a>
                            <div>
                                <i className="bi bi-pencil-square fs-2 text-light"></i> 
                            </div>
                        </a></Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default header;