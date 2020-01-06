import React from 'react'

const Card = props => (
    <div className="card">
        <div className="card-header">
            <h5>{props.title}</h5>
        </div>
        <img src={props.img} alt="" className="img-fluid mx-auto" height="200px" width="200px"/>
        <div className="card-body">
<p className="card-text text-justify">{props.body}</p>
            {props.button}
        </div>
        <div className="card-footer">
            {props.tags.map((tag) => (
                <span>{tag} </span>
            ))}
        </div>
    </div>
)

export default Card