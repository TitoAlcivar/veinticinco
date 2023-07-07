import {useState, useEffect} from 'react'

export const PokeList = () => {
    const [pokemons, setPokemons] = useState(null)

    const getData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data
    }

    const Pikachu = async () => {
        const data = await getData('https://pokeapi.co/api/v2/pokemon/pikachu')
        console.log(data);
    }
    Pikachu()

    const Pokemons = async () => {
        const data = await getData('https://pokeapi.co/api/v2/pokemon')
        console.log(data.results);
    }
    Pokemons()



    return (
        <div>
            {
               pokemon ? pokemon.name : '' 
            }
        </div>
    )
}
