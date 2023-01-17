//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() { //this is root component of the application and the first component that gets rendered to the dom, it sits at the very top of the application
  return (
    <div className="App">
      <Navbar /> {/* Navbar from the import at the top of the file */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; // we must always export the component function so that we can use it in other files.
// you can see the import in index.js under imports.

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */


      // Sample 1
      //we can create variables inside the function before the return template
  // numbers, strings and arrays are fine but booleans and objects will cause an error.
  // const title = 'Welcome to the new blog!';
  // const likes = 50;
  // const person = {name: 'Yoshi', age: 30};
  // const link = 'http://google.ca';
      // return (
      //   <div className="App">
      //     <Navbar /> {/* Navbar from the import at the top of the file */}
      //     <div className="conent">
      //       <h1>{title}</h1>
      //       <p>Liked {likes} times</p>
      //       {/* dynamically values can be added directly in curly braces (e.g. string, value or array*/}
      //       <p>{10}</p>
      //       <p>{"hello ninjas"}</p>
      //       <p>{[1,2,3,4,5]}</p>
      //       <p>{Math.random() * 10}</p>
      //       <a href= {link}>Google Site</a>
      //     </div>
      //   </div>
      // );
