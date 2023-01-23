import{useState} from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState('false');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents the page from reloading and clearning when submitted ir
        const blog = {title, body, author}

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)// need to turn body from an object to json string
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
            //history.go(-1); // after blog has been added, it takes you back to the previous page ... to go forward use '+'
            history.push('/'); //takes us back to a specific page
        })  
    }

    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input 
                        type="text" 
                        required
                        value ={title} // this needs to get updated throught setTitle
                        onChange={(e) => setTitle(e.target.value)} // e means events, e is targeting the value of title.
                        // triggers the onChange event > updates the state of the title > the value of the import will then match the const. (Binding)
                    />
                </label>
                <label> Blog body: </label>
                <textarea
                    required
                    value={body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={author}
                    onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
         </div>
  );
}
export default Create;  