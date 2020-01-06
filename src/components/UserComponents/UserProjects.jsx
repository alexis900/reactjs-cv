import React, { Component } from 'react'
import Card from '../Card'
import Button from '../Button'

import Projects from '../../data/projects.json'

export default class UserProjects extends Component {
    render() {
        return (
            <div className="row">
                {
                    Projects.map(project => (
                        <div className="col-sm-4" key={project.id}>
                            <Card 
                                title={project.name}
                                img={project.img}
                                body={project.description}
                                button={
                                    <div className="text-right">
                                        <Button name="Repositorio" url={project.repository} />
                                    </div>
                                } 
                                tags={
                                    project.tags
                                }/>
                        </div>
                        )
                    )
                }
            </div>
        )
    }
}
