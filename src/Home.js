//import { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => { // Home is the parent component for props
    const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {/* if pending is true, show a loading message */}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs ={blogs}/>} {/*This is the Child component for props*/}
            {/* the line above will check the condition on the left side frist before moving to the right side of the condition. IF it does not happen, it will not execute the right side. */} 
        </div>
    );
}
 
export default Home;

// Example 1
// const Home = () => {

//     const handleClick = (e) => {
//         console.log('Hello ninjas', e); // this logs the event
//     };

//     const handleClickAgain = (name) => {
//         console.log('Hello ' + name);
//     };

//     return (  
//         <div className="Home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>{/* Do not invoke, just create a reference. If invoked, it will happen immediately without the user clicking it. Invoked: {handleClick()} */
//              {/* <button onClick={handleClickagain('')}>Click me again</button> // would need to wrap this in an anonymous function function... instead do... */
//              <button onClick={(e) => 
//                 handleClickAgain('Belen', e)
//                  //console.log('Hello')
//             }>Click me again</button>
//          </div>
//      );

// Example 2
// const Home = () => {
//     // To make this reactive, add the import and include useState
//     // let name = 'Belen';
//     // const handleClick = () => {
//     //     name = 'luigi';
//     const [name, setName] = useState('Belen');
//     const [age, setAge] = useState('29');

//     const handleClick = () => {
//         setName('Magdalena');
//         setAge('30');
//     };

//     return (  
//         <div className="Home">
//             <h2>Homepage</h2>
//             <p>{name} is {age} years old.</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );

// Example 3 -- setting array of blogs
// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum something', author: 'mario', id: 1},
//         { title: 'Welcome Party!', body: 'ipsum cool', author: 'luigi', id: 2},
//         { title: 'Web dev tips', body: 'lorem something', author: 'mario', id: 3}
// ]);

//     return (  
//         <div className="home">
//             {blogs.map((blog) => (
//             <div className="blog-preview" key = {blog.id}>
//                 <h2>{ blog.title }</h2>
//                 <p>Written by { blog.author }</p>
//             </div>
//             ))}
//         </div>
//     );
// }

// example 4
// const Home = () => { // Home is the parent component for props
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum something', author: 'mario', id: 1},
//         { title: 'Welcome Party!', body: 'ipsum cool', author: 'luigi', id: 2},
//         { title: 'Web dev tips', body: 'lorem something', author: 'mario', id: 3}
// ]);

// const handleDelete = (id) => {

//     return (  
//         <div className="home">
//              <BlogList blogs ={blogs} title="All Blogs!" /> {/*This is the Child component for props*/}
//              <BlogList blogs ={blogs.filter((blog) =>blog.author === 'mario' )} title="Mario's Blogs" />
//         </div>
//     );
// }

// Example 5   - delete with interactive button
// const handleDelete = (id) => {
//     const newBlogs =  blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs); 
// }

//     return (  
//         <div className="home">
//              <BlogList blogs ={blogs} title="All Blogs!"  handleDelete= {handleDelete} /> {/*This is the Child component for props*/}
//         </div>
//     );
// }

// from BlogList.js
// const BlogList = ({blogs, title, handleDelete}) => {
//         return ( 
//             <div className="blog-list">
//                 <h2>{title}</h2>
//                 { blogs.map((blog) =>(
//                     <div className="blog-preview" key ={blog.id}>
//                         <h2>{blog.title}</h2>
//                         <p>Written by {blog.author}</p>
//                          <button onClick={() => handleDelete(blog.id)}>Delete blog</button> {/*anonymous function */}
//                     </div>
//                 ))}
//             </div>
//         );
//     }

// Example 6: hooks

// onst [name, setName] = useState('mario');

// const handleDelete = (id) => {
//     const newBlogs =  blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs); 
// }

// // Hook
// useEffect(() => {// This will run every time there is  re-render when the page loads and when there are changes.
//     console.log('Use effect run')
//     console.log(blogs);
//     console.log(name);
//     },[name]); //using square brackets ensure that the useEffect hook only happens after the first initial render. When the state changes, it wont run it again.

//     return (  
//         <div className="home">
//              <BlogList blogs ={blogs} title="All Blogs!"  handleDelete= {handleDelete} /> {/*This is the Child component for props*/}
//             <button onClick={() => setName('Luigi')}>Change name</button>
//             <p>{name}</p>
//         </div>
//     );
// }
// Example 7 -- loading Message
// first make the variable
// const [isPending, setIsPending] = useState(true); 

// second: add it
// return (  
//     <div className="home">
//         {/* if pending is true, show a loading message */}
//         {isPending && <div>Loading...</div>}
//         {blogs && <BlogList blogs ={blogs} title="All Blogs!"/>} {/*This is the Child component for props*/}
//         {/* the line above will check the condition on the left side frist before moving to the right side of the condition. IF it does not happen, it will not execute the right side. */}
        
//     </div>
// );

// third: set it
// useEffect(() => {// This will run every time there is  re-render when the page loads and when there are changes.
//     fetch('http://localhost:8000/blogs')
//     .then(res =>{ // responce object to get json.
//         return res.json(); // passes json to a javascript for us. 
//     })
//     .then(data => { // takes in the actual data.
//         console.log(data);
//         setBlogs(data); 
//         setIsPending(false); // changes
//     })
//     }, []);