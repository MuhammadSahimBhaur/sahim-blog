import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
    return (<div className="bloglist">
        <h2><b>{ title }</b></h2>
        { blogs.map((blog) => (
            <div className="blog-preview" key={ blog.id } onClick={ () => handleDelete(blog.id) }>
                <Link to={ `/blogs/${blog.id}` } >
                    <h3>{ blog.title }</h3>
                    <p>Written by { blog.author }</p>
                </Link>
            </div>
        )) }
    </div>);
}

export default BlogList;