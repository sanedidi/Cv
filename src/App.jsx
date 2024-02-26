import React from 'react'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import { Toaster } from 'react-hot-toast'
import Projects from './Components/Projects/Projects'
// import House from './Components/3d/House.jsx'

const App = () => {
  return (
    <>
    <Main />
    {/* <House /> */}
    <About />
    <Toaster />
    <Projects />

    </>
  )
}

export default App