import React from 'react';
import Link from 'next/link'
import { useSession } from 'next-auth/react';

const blogpost = (props) => {
    const [mouseIn, setMouseIn] = React.useState(false);
    const { data: session, status } = useSession();
    
    const handleChange = () => {
        setMouseIn((prev) => !prev);
    };

    const BlogBody = () => {
        return(
            <p className="card-text px-2 overflow-auto">
                {(props.content.length > 300 ? props.content.substring(0, 300) + ' . . .' : props.content)}
            </p>
        )
    };

    const ReadMore = () => {
        return(
            <div>
                <Link href={'/blogposts/' + props.postId}>
                    <a><button className="btn btn-outline-danger m-5">Read Post</button></a>
                </Link>
            </div>
        )
    };
    
    return (
        <div className="col-lg-3 col-md-6 col my-2">
            
            <div className="card text-center shadow-sm  mx-2" onMouseEnter={handleChange} onMouseLeave={handleChange}>
                <div>
                    <div className="card-header" style={{backgroundColor:"#DFD8CA"}}>
                        {props.title} |<em className="mx-4" style={{color:"#B91646"}}>{props.category}</em>
                    </div>
                    
                    <div className="card-body overflow-auto" style={{maxHeight: 200, minHeight: 200, backgroundColor: "#FBF3E4"}}>
                        {mouseIn ? <ReadMore /> : <BlogBody />}
                    </div>

                    <div class="card-footer text-end" style={{backgroundColor:"#DFD8CA"}}>

                    {/* {session ? <button type="submit" className="btn btn-danger text-light">Delete Post</button> : <></>} */}
                         

                        <span style={{color:"#B91646"}}> Post Date: </span> {props.date} 
                    </div>
                </div>

            </div>
        </div>
    );
}

export default blogpost;