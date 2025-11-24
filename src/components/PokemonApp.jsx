import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const PokemonApp = () => {


    const [pokemons, setPokemon] = useState([])

    //Hämtar alla Pokemons i api:et vid start av applikationen
    useEffect(() => {
        const renderPokemons = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151') 
            const json = await response.json()

            setPokemon(json.results)
        }
        renderPokemons()
    }, [])

    const [selectedPokemon, setSelectedPokemon] = useState('')
    const navigate = useNavigate()

    //Funktion för att göra stor bokstav på första bokstaven i namnet
    const capitalize = (name) =>
        name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div>
            <h1>Pokédex</h1>
            <div className="select-div">
                {/*Sparar vald pokemon i selectedPokemon*/}
                <select onChange={(e) => setSelectedPokemon(e.target.value)
                }>
                    <option value="">Välj Pokémon</option>
                    {pokemons.map((pokemon) => (
                        <option key={pokemon.name} value={pokemon.name}>{capitalize(pokemon.name)}</option>
                    ))}
                </select>
                 {/*Navigerar till vald pokemons sida*/ }
                <button disabled={!selectedPokemon} onClick={() => navigate(`/pokemon/${selectedPokemon}`)}>Välj</button>
            </div>
            
        </div>
    )

}
export default PokemonApp