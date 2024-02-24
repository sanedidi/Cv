import React from 'react'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import { Toaster } from 'react-hot-toast'
import Projects from './Components/Projects/Projects'

const App = () => {
  return (
    <>
    <Main />
    <About />
    <Toaster />
    <Projects />
    </>
  )
}

export default App