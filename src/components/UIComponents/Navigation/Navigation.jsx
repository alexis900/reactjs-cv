import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.svg";
import "./style.scss";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <div className="brand">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="brandText">
            <Link to="/">
              My<span>CV</span>
            </Link>
          </div>
        </div>
        <nav>
          <Link className="nav-link" to="skills">
            habilidades
          </Link>
          <Link className="nav-link" to="projects">
            proyectos
          </Link>
          <Link className="nav-link" to="experience">
            experiencia
          </Link>
          <Link className="nav-link" to="education">
            formación
          </Link>
          <Link className="nav-link" to="courses">
            cursos
          </Link>
          <Link className="nav-link" to="repository">
            repositorios
          </Link>
        </nav>
      </header>
    );
  }
}
