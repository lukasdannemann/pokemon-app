import { Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import PokemonApp from './components/PokemonApp'
import Pokemon from './components/Pokemon'
import ErrorPage from './pages/ErrorPage'

function App() {
  const navigate = useNavigate()

  //Routes för navigation mellan sidor utan att behöva ladda om hela webbplatsen
  return (
      <Routes>
        <Route path='/' element={<button className='start-button' onClick={() => navigate('/pokemons')}>Start Pokémon App</button>}/>
        <Route path='/pokemons' element={<PokemonApp />} />
        <Route path='/pokemon/:name' element={<Pokemon />}/>
        <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App
