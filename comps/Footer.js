import Link from 'next/link'

const footer = () => {
    return (
        <div>
            <footer className="pt-5">
                <nav className="d-flex justify-content-center pb-2 text-light">
                    <Link href="/aboutproject"><a className="mx-4">About This Project</a></Link>
                    <Link href="/contactme"><a className="mx-4">Send Me an Email</a></Link>
                    <Link href="https://www.honeybook.com/widget/bivens_blueprint_llc_191523/cf_id/612fa0a4ceb19b0e829a228d"><a className="mx-4">Request Services</a></Link>
                    <Link href="https://www.bivensblueprint.com"><a className="mx-4">Bivens Blueprint</a></Link>
                </nav>
                <p className="text-center text-light">&copy; {new Date().getFullYear()} Bivens Blueprint, LLC</p>
            </footer>
        </div>
    );
}

export default footer;