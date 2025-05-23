import { useState } from 'react'
import './App.css'

function App() {
  const [value, setVlaue] = useState(0)

  return (
   <>
   <h1>Count {value}</h1>
   <button onClick={
    () =>{
      setVlaue(value+3);
    }
   }>Add 3</button>
   <button onClick={
    () =>{
      setVlaue(value+2);
    }
   }>Add 2</button>
   
   </>

  )
}

export default App
