import React from 'react'

const ContactButton = props => (
<a 
    href={props.url}
    key={props.name}
    className="btn btn-lg btn-primary rounded-circle mx-2"
>
        <i className={props.icon}></i>
</a>
)

export default ContactButton