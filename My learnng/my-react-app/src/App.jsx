import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="app-root">
      <Navbar/>
      <main className="app-main">
        <h1>Stripe Navbar Assignment</h1>
        <p>This is placeholder page content below the navbar.</p>
      </main>

     </div>
    </>
  )
}

export default App
