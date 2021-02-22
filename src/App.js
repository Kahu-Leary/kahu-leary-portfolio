import {BrowserRouter, Route, Switch} from 'react-router-dom' 

import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Posts from './components/Posts'
import Project from './components/Project'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/posts/:slug' />
        <Route component={Posts} path='/posts' />
        <Route component={Project} path='/projects' />

      </Switch>
    </BrowserRouter>
  )

}

export default App;
