import React from 'react'

const Button = props => (
<a href={props.url} className="btn btn-primary text-white">{props.name}</a>
)

export default Button