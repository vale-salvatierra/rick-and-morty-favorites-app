import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { Card } from "react-bootstrap";
import axios from "axios";

const CharacterDetails = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState([])
    useEffect(()=>{
        const fetchCharacter = async () => {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(response.data)
            console.log(response.data)
        }
        fetchCharacter()
    },[])

    
    // console.log(id)
    // console.log(character)
    return (
        <>
            <div className="blur-background">
                <div className="overlay">
                    <Card key={character.id} className='cardStyle'  style={{ width: "22rem", padding: "1.5rem" }}>
                        <Card.Img variant="top" src={character.image} />
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                {character.name} is a {character.gender} {character.species}.
                                Last known location is {character.location?.name} and their current status is {character.status}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </>

    );
}

export default CharacterDetails;