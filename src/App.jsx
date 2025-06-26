import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Home from './Home'
import Gallery from './Gallery'
import About from './About'
import Classes from './Classes'
import Term from './Term'
import Fol from './Fol'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Home/>
    <Gallery/>
    <About/>
    <Classes/>
    <Term/>
    <Fol/>

    </>
  )
}

export default App
