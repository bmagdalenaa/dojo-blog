import {Link} from "react-router-dom";

const BlogList = ({blogs}) => {

// This can be done in shorter form as above.
// const BlogList = (props) => {
//     const blogs = props.blogs;

//     console.log(props,blogs);

    return ( 
        <div className="blog-list">
            { blogs.map(blog =>(
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                     {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> anonymous function */}
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;