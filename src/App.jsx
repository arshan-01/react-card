import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HoverCard from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <HoverCard />
   <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
   </>
  )
}

export default App
