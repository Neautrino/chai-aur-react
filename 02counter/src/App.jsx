import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]  = useState(15)

  const addValue = ()=>{
    // console.log("Add " + counter);
    // counter += 1;
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const reduceValue = () =>{
    console.log("Reduce " + counter);
    counter -= 1;
    if(counter<0) counter=0
    setCounter(counter)

    
  }

  return (
    <>
      <h1>Hello Subhendu Singh</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={reduceValue}
      >Decrease Value {counter}</button>
      <p>Footer:  {counter}</p>
    </>
  )
}

export default App
