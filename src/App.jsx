import { useState } from 'react'
import './App.css'
import PokemonApp from './components/PokemonApp'

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
    {!show ? <button className='start-button' onClick={() => setShow(!false)}>Start Pokémon App</button> :
    <PokemonApp />}

    
    </>
  )
}

export default App
