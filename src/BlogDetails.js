import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetail = () => {

    const { id } = useParams()
    const { data, error } = useFetch("http://localhost:8000/blogs/" + id.toString())

    return (<div className="blog-detail">
        { data &&
            <div><h2>Blog Details - { data.title }</h2>
                <p>{ data.body }</p></div>
        }

    </div>);
}

export default BlogDetail;