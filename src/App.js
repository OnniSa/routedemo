
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h1>This is HOME page</h1>
    </>
  );
}
const About = () => {
  return (
    <>
      <h1>This is ABOUT page</h1>
    </>
  );
}
const Projects = ({ match }) => {
  return (
    <>
      <h1>This is PROJECTS page</h1>

      <ul>
        <li>
          <Link to={`${match.url}/project1`}>Project1</Link>
        </li>
        <li>
          <Link to={`${match.url}/project2`}>Project2</Link>
        </li>
        <li>
          <Link to={`${match.url}/project3`}>Project3</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:name`} render={ (props) => <Project {...props} /> } />
      {/* <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div> {' '}
            <h3> {match.params.name}</h3>
          </div>
        )} /> */}
    </>
  );
}

const Project = ({match}) => {
  return (
    <div>
      <h3>I am  {match.params.name}</h3>
    </div>
  )
}

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </nav>
    </>
  )
}
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
        {/* <Home />
         <About />
         <Projects /> */}
      </Router>
    </>
  )
}
export default App;