//import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
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