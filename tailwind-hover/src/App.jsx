import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShuffleHero from './com/Home'
import FlipNavWrapper from './com/Header'
import ScrollingTestimonials from './com/Tes'
import BlogPostCarousel from './com/Info'
import Footer from './com/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FlipNavWrapper />
     <ShuffleHero/>
     <BlogPostCarousel/>
     <ScrollingTestimonials/>
     <Footer/>
    </>
  )
}

export default App
