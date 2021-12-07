import Head from 'next/head'

const aboutproject = () => {
    return (
        <div className="container border w-50 rounded-3 bg-light p-3 border-3 border-dark">
            <Head>
                <title>About This Project</title>
            </Head>
            <h2 className="text-center m-3">About This Blog Project</h2>

            <p className="m-3">This project is a remake of an old blog I created. I decided to redo it since I've learned more about coding and different frameworks. Both projects use MongoDB for their databases, but this project uses NEXTJS as a framework and includes additional features such as Yup for validations and Next-Auth for password management. </p>

            <p className="m-3">As for the most difficult part of this project, I would say it was getting the individual blog pages to render. It took a little understanding, but once it all came together, it was a breeze and fun to work on.</p>

            <p className="m-3">Throughout my coding career, I plan to add new blog posts along the way. I want to add a section for videos, as I plan to create videos, too!</p>
        </div>
    );
}

export default aboutproject;