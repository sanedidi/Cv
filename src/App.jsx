import React from 'react'
import Main from './Components/Main/Main'
import About from './Components/About/About'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Main />
    <About />
    <Toaster />
    </>
  )
}

export default App