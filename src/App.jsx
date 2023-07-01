import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Events from './components/Events'
import Faculty from './components/Faculty'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className='overflow-hidden relative w-full sm:max-w- mx-auto font-sans'>
      <Navbar/>
      <Header />
      <About />
      <Events />
      <Faculty />
    </div>
  )
}

export default App