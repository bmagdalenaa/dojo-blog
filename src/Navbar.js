// components are functions that returns a jsx template and then that function is exported at the bottom of the file.

// using a snippet to create a functional component  - use sfc + tab to create a stateless functional component
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                 {/* For styling directly on file 
                 <a href="/create" style={{
                    // First set of curly brackets are a dynamic value and second is the js object
                    // double curly brackets to repreneset key-value pair
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius:'8px'
                 }}>New Blog</a> */}
                 <a href="/create">New Blog</a>
            </div>
        </nav> 
    );
}
 
export default Navbar;