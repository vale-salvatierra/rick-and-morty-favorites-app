import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Buscador = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const {characters, setFilterData} = useContext(FavoritesContext)
    

    const handleChange = (e) =>{
        e.preventDefault()
        let term = e.target.value
        setSearchTerm(term)
        let results = characters.filter((char) => (
            char.name.toLowerCase().includes(term.toLowerCase())
            
        ))
        setFilterData(results)
        
    }
    return (
        <>
        <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search Name"
                                    className=" mr-sm-2"
                                    onChange={handleChange}
                                    value={searchTerm}
                                />
                            </Col>
                        </Row>
                    </Form></>
    );
}

export default Buscador;