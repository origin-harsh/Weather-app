import { useState } from 'react'
import './App.css'

function App() {
  const [value, setVlaue] = useState(0)

  return (
   <>
   <h1>Count {value}</h1>
   <button onClick={
    () =>{
      setVlaue(value+1);
    }
   }>Add</button>
   <button onClick={
    () =>{
      setVlaue(value-1);
    }
   }>Minus</button>
   <button onClick={
    () =>{
      setVlaue(0);
    }
   }>Reset</button>
   </>

  )
}

export default App
