import { useEffect, useState } from "react"

const Pokemon = ({chosenPokemon}) =>{

    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {

        if (!chosenPokemon) return;

        const renderPokemonData = async() => {
            const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`)
            const json = await results.json()

            setPokemonData(json)
            console.log(json)
        }
        
        renderPokemonData()
    }, [chosenPokemon])

    return(
        <div>
            {chosenPokemon && <><h1>Ditt val: {chosenPokemon}</h1>
            <p>{pokemonData.id}</p></>}
        </div>
    )
    //Att göra: ersätt PokemonApp med Pokemon och fetcha info om vald pokemon
}
export default Pokemon