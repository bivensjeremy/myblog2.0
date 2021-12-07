import BlogPost from "./BlogPost";

function createBlogPostCard(data){
    return(
        <BlogPost
            key={data._id}
            postId={data.postId}
            title={data.title}
            content={data.content}
            date={data.date}
            category={data.category}
        />
    )
}
const BlogSection = ({blogPost}) => {
    return (
        <section id="blogSection">
            <div className="pt-5 text-center text-light">
                <i className="bi bi-signpost-split display-4"></i>
                <h4 className="text-uppercase fw-bold">
                    Blog Posts
                </h4>
                
            </div>
            <div className="row row-cols-1 row-cols-md-3 py-5">
                {blogPost.map(createBlogPostCard)}
            </div>
        </section>
    );
}

export default BlogSection;