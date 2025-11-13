import { useState } from 'react'
import './App.css'
import PokemonApp from './components/PokemonApp'

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
    {!show ? <button onClick={() => setShow(!false)}>Start Pokemon App</button> :
    <PokemonApp />}

    
    </>
  )
}

export default App
