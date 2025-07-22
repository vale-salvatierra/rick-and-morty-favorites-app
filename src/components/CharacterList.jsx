import { useContext } from "react";
import CharacterCard from "./CharacterCard";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { Container, Row } from "react-bootstrap"


const CharacterList = () => {
    const {characters, heartItem } = useContext(FavoritesContext)
    return (
        
        <>
        <Container fluid className="py-5 backGround">
        <Row>
        {
            characters.map((char) =>(
                <CharacterCard 
                key={char.id}
                image={char.image}
                name={char.name}
                heart={() => heartItem(char)}
                id={char.id}
                isFav={char.isFavorite}/>
            ))
        }

        </Row>

        </Container>
        
        
        </>
    );
}

export default CharacterList;