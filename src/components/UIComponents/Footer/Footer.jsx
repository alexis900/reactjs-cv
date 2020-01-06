import React, { Component } from 'react'
import Package from '../../../../package.json'

export default class Footer extends Component {
    render() {
        return (
            <footer className="fixed-bottom">
                <p>{Package.version}</p>
                <a href={Package.repository.url}>GitHub Repository</a>
            </footer>
        )
    }
}
