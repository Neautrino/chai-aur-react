import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "subhendu",
    age: 20
  }
  let arr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chaiAurCode" />
      <Card username="Subhendu Singh" btn='text me' />
    </>
  )
}

export default App
