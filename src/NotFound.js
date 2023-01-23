import { Link } from "react-router-dom";
/**  If the page is not found, you will be directed back to the homepage. **/

const NotFound = () =>{
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}

export default NotFound;