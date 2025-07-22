import { Container, Nav, Navbar, Row, Col, Button, Form} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar expand="lg" className="menuStyle">
            <Container>
                <Navbar.Brand><NavLink className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'} to="/"><img class="imgStyle" src="public/assets/58f37720a4fa116215a9240f.png" alt="Rick and Morty Logo" /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <NavLink className={({ isActive }) => isActive ? 'active nav-link text-white' : 'nav-link text-grey'} to="/">All Characters</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active nav-link text-white' : 'nav-link text-grey'} to="/favorites">Favorites</NavLink>
                    </Nav>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" variant="dark">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;