import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app-container inter-font">
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
      </main>
      <Footer />
    </div>
  )
}

export default App
