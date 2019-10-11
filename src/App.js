import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <h1>Welcome to home!</h1>
    </div>
  );
}
const About = () => {
  return (
    <div >
      <h1>How ABOUT you?</h1>
    </div>
  );
}
const Projects = ({ match }) => {
  return (
    <div >
      <h1>Welcome to my PROJECTS</h1>
      <ul>
        <li>
          <Link to={`${match.url}/project1`}> Project 1</Link>         
        </li>
        <li>
          <Link to={`${match.url}/project2`}> Project 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/project3`}> Project 3</Link>
        </li>
      </ul>
      <Route 
      path={`${match.path}/:name`}
      render={({ match }) => (
        <div>
          {''}
          <h3> {match.params.name} </h3>
          </div>
      )}
      />

      <Route path={`${match.path}/:name`} 
      render={ (props) => <Project {...props} />}
      />
    </div>
  );
}

const Project = ({match}) => {
  return (
    <div>
      <h3>I'm project page {match.params.name}</h3>
    </div>
  )
}

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );

}
const App = () => {
  return (
    <div >
      <Router>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}



export default App;
