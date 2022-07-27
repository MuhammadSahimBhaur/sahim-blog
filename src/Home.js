import BlogList from "./BlogList"
import useFetch from "./useFetch"


const Home = () => {

    const { data: blogs, error } = useFetch("http://localhost:8001/blogs")


    console.log("blogs-", blogs)

    const handleDelete = (id) => {
        console.log()
    }

    return (
        <div className="home">
            { error && <div className="error">{ error }</div> }
            { !blogs && !error && <div className="loading"><p>Loading...</p></div> }
            { blogs && <BlogList blogs={ blogs.blogs.filter((blog) => blog.author === "sahim") } title={ "Sahim's Blogs" } handleDelete={ handleDelete } /> }
            { blogs && <BlogList blogs={ blogs.blogs.filter((blog) => blog.author === "haissam") } title={ "Haissam's Blogs" } handleDelete={ handleDelete } /> }
        </div>
    );
}

export default Home;