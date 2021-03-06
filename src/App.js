import { Route, Switch, useLocation } from 'react-router-dom' 
import { AnimatePresence } from 'framer-motion'

import Home from './components/Home'
import About from './components/About'
// import SinglePost from './components/SinglePost'
// import Post from './components/Post'
import Project from './components/Project'
import Contact from './components/Contact'
import NavBar from './components/NavBar'

// import video from './video/plexus.mov'
// import pic from './images/sky.jpg'

function App() {
  const location = useLocation()

  return (
    <>
      <NavBar />

      <div className='hidden lg:contents relative lg:min-h-screen'>
        <div className='absolute inset-0 z-negative'>
            {/* <video autoPlay muted loop className='object-cover w-full h-full'>
              <source src={video} />
            </video> */}
            {/* <img className='object-cover w-screen h-screen' src={pic} alt='background'></img> */}
        </div>
      </div>
    <AnimatePresence>
      <Switch location={location} key={location.key}>

        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
        {/* <Route component={SinglePost} path='/post/:slug' /> */}
        {/* <Route component={Post} path='/post' /> */}
        <Route component={Project} path='/projects' />

      </Switch>
    </AnimatePresence>
    </>

  )

}

export default App;
