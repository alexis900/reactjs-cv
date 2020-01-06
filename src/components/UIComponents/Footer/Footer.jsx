import React, { Component } from 'react'
import Package from '../../../../package.json'
import './style.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>{Package.version}</p>
                <a href={Package.repository.url}>GitHub Repository</a>
            </footer>
        )
    }
}
