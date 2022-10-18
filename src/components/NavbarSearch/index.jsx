import React, { useContext } from "react";
import {Button} from "@mui/material";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { DataContext } from "../../context/provider";


const NavbarSearch = () => {
  const { cart } = useContext(DataContext);

  return (
    <Navbar bg="dark" variant="dark" display="flex"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "100%" }}>
      <Container fluid style={{ width: "80%" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/673/673938.png" width="70px" alt="Mamma Mia Logo" className="mx-5"/>
        <Navbar.Brand href="#">Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"home"}>
              <Button variant="outlined" className="mx-5 boton-home" component="label">Home<input hidden accept="home/*" multiple type="file" /></Button>
            </Link>
          </Nav>
          <Form className="d-flex">
            <Link to={"carrito"}>
              <Nav.Link href="#action2">
                <div style={{ paddingRigth: "5px", paddingLeft: "20px" }}>
                  <Badge color="error" badgeContent={cart.length}>
                    <ShoppingCartIcon fontSize="large" className="mx-5 shopping-color"/>
                  </Badge>
                </div>
              </Nav.Link>
            </Link>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavbarSearch;
