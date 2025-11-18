import { useEffect, useState } from "react"

const Pokemon = ({ chosenPokemon }) => {

    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {

        if (!chosenPokemon) return;

        const renderPokemonData = async () => {
            const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
            const json = await results.json()

            setPokemonData(json)
            console.log(json)
        }

        renderPokemonData()
    }, [chosenPokemon])


//OM Pokemon är vald, skriv ut information =>
    return (
        <div>
             { chosenPokemon && pokemonData.types && 
                <ul className="pokemon-div">
                    <h2>{chosenPokemon.toUpperCase()}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt={chosenPokemon} />
                    <h3>Types:</h3>
                    {pokemonData.types.map(type => (
                        <li key={type.slot}>{type.type.name}</li>
                        
                    ))}
                </ul>}
        </div>
    )}
export default Pokemon