import React, { Component } from "react";
import Logo from "../../../assets/img/logo.svg";
import "./style.scss";
import { Navbar, Image, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <Navbar bg="primary" variant="light" expand="sm">
          <Navbar.Brand href="#/">
            <Image src={Logo} width="85" height="85" />
            <Navbar.Text>
              My<span>CV</span>
            </Navbar.Text>
          </Navbar.Brand>
          <Nav className="mr-auto text-uppercase text-light">
            <Nav.Link href="#/skills">habilidades</Nav.Link>
            <Nav.Link href="#/projects">proyectos</Nav.Link>
            <Nav.Link href="#/experience">experiencia</Nav.Link>
            <Nav.Link href="#/education">formación</Nav.Link>
            <Nav.Link href="#/courses">cursos</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    );
  }
}
