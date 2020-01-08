import React, { Component } from 'react'

export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        
        const { repo } = this.props
        return (
            <div>
                {repo.name}
                <a href={repo.html_url}>Repositorio</a>
            </div>
        )
    }
}
