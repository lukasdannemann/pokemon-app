
const Pokemon = ({chosenPokemon}) =>{

    return(
        <div>
            {chosenPokemon && <h1>Ditt val: {chosenPokemon}</h1>}
        </div>
    )
    //Att göra: ersätt PokemonApp med Pokemon och fetcha info om vald pokemon
}
export default Pokemon