import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



const App = () => {


  const [offset, setOffset] = useState(0);
  const [preOffset, setPreOffset] = useState(0);
 
  
  function MyApp () {
  
      
  
      useEffect(() => {
          const onScroll = () => setOffset((pre)=>{
           
             
              setPreOffset(pre);
            
            return (window.scrollY);
          });
          // clean up code
          window.removeEventListener('scroll', onScroll);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
      }, []);
  
      console.log(offset); 
      // console.log(preOffset);
  };
  MyApp()
  return (
    <div style={{overflowX:"hidden"}}>
      <Navbar 
        offset={offset} 
        setOffset={setOffset} 
        preOffset={preOffset}
        setPreOffset={setPreOffset}
      />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App