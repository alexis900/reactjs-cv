import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">My CV</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto text-uppercase">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">sobre mi</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="skills">habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="projects">proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="experience">experiencia</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="education">formación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="courses">cursos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
