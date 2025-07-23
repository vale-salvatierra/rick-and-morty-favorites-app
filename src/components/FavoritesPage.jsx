import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { Card, Col, Container, Row } from "react-bootstrap";

const FavoritesPage = () => {
    const { favorites } = useContext(FavoritesContext)
    return (
        <>
        <Container fluid className="py-5 backGround vh-100">
            <Row>
            {
                favorites.map((char) => (
                    <Col className="pt-5">
                    <Card className='cardStyle' key={char.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={char.image} />
                        <Card.Body>
                            <Card.Title>{char.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                ))
            }
            </Row>
        

        </Container>
            
        </>
    );
}

export default FavoritesPage;