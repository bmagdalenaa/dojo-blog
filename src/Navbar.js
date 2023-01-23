// components are functions that returns a jsx template and then that function is exported at the bottom of the file.
import {Link} from 'react-router-dom';

// using a snippet to create a functional component  - use sfc + tab to create a stateless functional component
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                 {/* For styling directly on file 
                 <a href="/create" style={{
                    // First set of curly brackets are a dynamic value and second is the js object
                    // double curly brackets to repreneset key-value pair
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius:'8px'
                 }}>New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav> 
    );
}
 
export default Navbar;
// components are functions that returns a jsx template and then that function is exported at the bottom of the file.
import {Link} from 'react-router-dom';

// using a snippet to create a functional component  - use sfc + tab to create a stateless functional component
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                 {/* For styling directly on file 
                 <a href="/create" style={{
                    // First set of curly brackets are a dynamic value and second is the js object
                    // double curly brackets to repreneset key-value pair
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius:'8px'
                 }}>New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav> 
    );
}
 
export default Navbar;