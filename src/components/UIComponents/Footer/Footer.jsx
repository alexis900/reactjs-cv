import React, { Component } from 'react'
import Package from '../../../../package.json'
import './style.scss'
import { Navbar, Nav } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            
            <Navbar as="footer" fixed="bottom">
                <Nav>
                    <Nav.Link id="version" as="span">{Package.version}</Nav.Link>
                    <Nav.Link href={Package.repository.url} className="btn btn-primary" inline>Repositorio en <FontAwesomeIcon icon={faGithub}/></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
