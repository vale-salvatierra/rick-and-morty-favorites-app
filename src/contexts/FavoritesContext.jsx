import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


const FavoritesContext = createContext()

const FavoritesProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [favorites, setFavorites] = useState([])
    const [filterData, setFilterData] = useState([])


    useEffect(() => {
        const fetchCharacters = async () => {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/`)
            setLoading(false)
            response.data.results.forEach((char) => char.isFavorite = false)
            setCharacters(response.data.results)
            setFilterData(response.data.results)
            console.log(response.data.results)
        }
        fetchCharacters()
    }, [])



    const heartItem = (char) => {
        if ((favorites.includes(char))) {
            let newArr = favorites.filter((character) => character !== char)
            setFavorites(newArr)

        } else {
            setFavorites([...favorites, char])
        }

        console.log(favorites)
    }
    const details = (char) => {
        return <Navigate to={`/character/${char.id}`} />
    }
    const toggleButton = (id) => {
        let newArrTwo = characters.map((char) => {
            if (char.id == id) {
                char.isFavorite = !(char.isFavorite)
            }
            return char
        })
        setCharacters([...newArrTwo])
    }


    return (
        <FavoritesContext.Provider value={{ characters, setCharacters, loading, setLoading, heartItem, favorites, details, toggleButton, filterData, setFilterData }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesProvider }