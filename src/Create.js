import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("sahim")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        fetch('http://localhost:8001/blogs', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            history.push("/")
        })
    }

    return (
        <div className="createform">
            <form onSubmit={ handleSubmit }>
                <label ><h3>Title</h3></label>
                <input value={ title } onChange={ (e) => { setTitle(e.target.value) } } /><br />
                <label ><h3>Body</h3></label>
                <input value={ body } onChange={ (e) => { setBody(e.target.value) } } /><br /><br />
                <label><h3>Author</h3></label>
                <select onChange={ (e) => { setAuthor(e.target.value) } } value={ author }>
                    <option >sahim</option>
                    <option >haissam</option>
                </select>
                <br /><br />
                <button className="button">Submit</button>
            </form>

        </div>);
}

export default Create;