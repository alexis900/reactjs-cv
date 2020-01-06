import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../img/logo.svg'
import './style.scss'

export default class Navigation extends Component {
    render() {
        return (
            <header>
                <div className="brand">
                    <div className="image"><img src={Logo} alt=""/></div>
                    <div className="text">
                        <Link to="/">My<span>CV</span></Link>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" to="skills">habilidades</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="projects">proyectos</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="experience">experiencia</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="education">formación</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="courses">cursos</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="repository">repositorios</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}
