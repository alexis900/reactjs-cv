import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
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
          <Link to="skills" id="skills">
            habilidades
          </Link>
          <Link to="projects" id="projects">
            proyectos
          </Link>
          <Link to="experience" id="experience">
            experiencia
          </Link>
          <Link to="education" id="education">
            formación
          </Link>
          <Link to="courses" id="courses">
            cursos
          </Link>
        </nav>
      </header>
    );
  }
}
