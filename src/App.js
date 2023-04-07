import React from 'react'
import './App.css'
import Footer from './component/Footer'
import About from './component/About'
import Log from './component/Log'
const App = () => {
  return (
    <>
    <div className="flex flex-row">
      <About/>
      <Log/>
      </div>
      <Footer/>
      
    
    </>
  )
}

export default App