import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


const Pokemon = ({ chosenPokemon }) => {

    const {name} = useParams()
    const chosen = chosenPokemon || name
    const [pokemonData, setPokemonData] = useState({})

    useEffect(() => {

        if (!chosen) return;

        const renderPokemonData = async () => {
            const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosen}`)
            const json = await results.json()

            setPokemonData(json)
            console.log(json)
        }

        renderPokemonData()
    }, [chosen])


//OM Pokemon är vald, skriv ut information =>
    return (
        <div>
            {chosen && pokemonData.types &&
                <>
                <div className="pokemon-card">
                    <h2 className="pokemon-name">{chosen.toUpperCase()}</h2>
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
                </div>
                <Link  to={'/pokemons'}><button className='back-button'>Gå tillbaka</button></Link>
                </>}
        </div>
    )}
export default Pokemon