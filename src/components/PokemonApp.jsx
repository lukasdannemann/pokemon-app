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
            {!chosenPokemon && <h1>Pokédex</h1>}
            <select onChange={(e) => setSelectedPokemon(e.target.value)
            }>
                <option value="">Välj Pokemon</option>
                {pokemons.map((pokemon) => (
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            <button disabled={!selectedPokemon} onClick={ () => setChosenPokemon(selectedPokemon)}>Välj</button>
            <Pokemon chosenPokemon={chosenPokemon} />
        </div>
    )

}
export default PokemonApp