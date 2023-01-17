import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => { // Home is the parent component for props
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum something', author: 'mario', id: 1},
        { title: 'Welcome Party!', body: 'ipsum cool', author: 'luigi', id: 2},
        { title: 'Web dev tips', body: 'lorem something', author: 'mario', id: 3}
]);

    return (  
        <div className="home">
             <BlogList blogs ={blogs} /> {/*This is the Child component for props*/}
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

// Example 3
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