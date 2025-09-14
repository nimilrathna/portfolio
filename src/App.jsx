import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Skills from "./components/skills/skills";
import Introduction from './components/introduction';
import Career from './components/career/career';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app-container inter-font">
    <Navbar />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Introduction />
        <Career />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
