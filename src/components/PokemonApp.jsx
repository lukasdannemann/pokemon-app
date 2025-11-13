import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

const PokemonApp = () => {

    const [pokemons, setPokemon] = useState([])
    useEffect(() => {
        const renderPokemons = async() => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const json = await response.json()

            setPokemon(json.results)
            console.log(json.results)
        }
        renderPokemons()
    }, [])

    const [chosenPokemon, setChosenPokemon] = useState('')
    const [selectedPokemon, setSelectedPokemon] = useState('')

    return(
        <div>
            <h1>Welcome to the Pokemon App</h1>
            <select onChange={(e) => setSelectedPokemon(e.target.value)}>
                {pokemons.map((pokemon) => (
                    <option value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            <button onClick={() => setChosenPokemon(selectedPokemon)}>Välj</button>
            <Pokemon chosenPokemon={chosenPokemon} />
        </div>
    )

}
export default PokemonApp