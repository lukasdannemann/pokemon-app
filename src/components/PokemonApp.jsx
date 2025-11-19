import { useEffect, useState } from "react"
import Pokemon from "./Pokemon"

const PokemonApp = () => {


    const [pokemons, setPokemon] = useState([])
    useEffect(() => {
        const renderPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const json = await response.json()

            setPokemon(json.results)
            console.log(json.results)
        }
        renderPokemons()
    }, [])

    const [chosenPokemon, setChosenPokemon] = useState('')
    const [selectedPokemon, setSelectedPokemon] = useState('')

    const capitalize = (name) =>
        name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div>
            {!chosenPokemon && <h1>Pokédex</h1>}
            <div className="select-div">
                <select onChange={(e) => setSelectedPokemon(e.target.value)
                }>
                    <option value="">Välj Pokémon</option>
                    {pokemons.map((pokemon) => (
                        <option key={pokemon.name} value={pokemon.name}>{capitalize(pokemon.name)}</option>
                    ))}
                </select>
                <button disabled={!selectedPokemon} onClick={() => setChosenPokemon(selectedPokemon)}>Välj</button>
            </div>
            <Pokemon chosenPokemon={chosenPokemon} />
        </div>
    )

}
export default PokemonApp