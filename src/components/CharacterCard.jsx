import { useContext, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";


const CharacterCard = ({image, name, heart, id, isFav}) => {
    const [isFavorite, setIsFavorite] = useState(isFav)
    const {toggleButton} = useContext(FavoritesContext)

    const toggleFav = () =>{
        setIsFavorite(!(isFav))
        heart()
        toggleButton(id)
    }

    return (
        <>
        <Col className="pt-5">
        <Card  className='cardStyle' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className=" text-center">{name}</Card.Title>
                    <Link className="plus" to={`/character/${id}`}><i className="bi bi-plus-circle"></i></Link>
                    <Button variant="primary" onClick={()=> toggleFav()} className="heart"><i className={isFavorite ? "bi bi-heart-fill" : "bi bi-heart"}></i></Button>
                </Card.Body>
            </Card>
        </Col>
            
        </>
    );
}

export default CharacterCard;