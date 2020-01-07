import React, { Component } from 'react'
import Package from '../../../../package.json'
import './style.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <span id="version">{Package.version}</span>
                <a id="repository" href={Package.repository.url}>GitHub Repository</a>
            </footer>
        )
    }
}
