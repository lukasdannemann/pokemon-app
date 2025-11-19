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
            {chosenPokemon && pokemonData.types &&

                <div className="pokemon-card">
                    <h2 className="pokemon-name">{chosenPokemon.toUpperCase()}</h2>
                    <img className="pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`} alt={chosenPokemon} />
                    <hr />
                    <div className="attribute-lists">
                        <ul>
                            {pokemonData.types.map(type => (
                                <li className={`type ${type.type.name}`}>{type.type.name}</li>
                            ))}
                        </ul>
                        <ul className="attributes">
                            <li>Weight: {pokemonData.weight}</li>
                            <li>Height: {pokemonData.height}</li>
                        </ul>
                    </div>
                </div>}
        </div>
    )}
export default Pokemon