import Head from 'next/head';
import clientPromise from '../../lib/mongodb';

// export const getStaticPaths = async() => {
//     // const id = context.params.id
//     const client = await clientPromise
//     const db = client.db('blogDB');

//     const data = await db.collection('MyBlogPosts').find({
//         // postId: id
//     }).toArray()

//    //  const res = await fetch(`${server}/api/getblogpost`)
//    //  const data = await res.json();
//     const paths = data.map(post => {
//         return  {
//             params: { id: post.postId }
//         }
//     })
    
//     return { paths, fallback: false }
// }

export const getServerSideProps = async(context) => {
    const id = context.params.id
    const client = await clientPromise
    const db = client.db('blogDB');

    const data = await db.collection('MyBlogPosts').find({
        postId: id
    }).toArray()

    const singlePost = await JSON.parse(JSON.stringify(data))
    
    return { props: {singlePost} }
}

const BlogPost = ( {singlePost} ) => {
    const { title, category, content, date } = singlePost[0];
    return (
        <div className="container w-75 pt-3">
                <Head>
                    <title>Blog Post | {title}</title>
                </Head>
            <div className="my-2">
                <div className="card text-center shadow-sm  mx-2">
                    <div>
                        <div className="card-header" style={{backgroundColor:"#DFD8CA"}}>
                            <h2>{title}</h2>
                            <span style={{color:"#B91646"}}> Category: </span> {category}
                        </div>
                        
                        <div className="card-body m-3">
                            {content}
                        </div>

                        <div class="card-footer" style={{backgroundColor:"#DFD8CA"}}>
                            <span style={{color:"#B91646"}}> Post Date: </span> {date} 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BlogPost;