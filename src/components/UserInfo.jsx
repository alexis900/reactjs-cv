import React, { Component } from 'react'
import ContactButton from './ContactButton'

import Info from '../data/info.json'

export default class UserInfo extends Component {

    getAge = (sdate) => {
        var today = new Date();
        var birthDate = new Date(sdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        return (
            <div className="text-center">
                <img src={Info.userimage} alt="Alejandro Martín Pérez" id="my-photo" className="rounded-circle" />
                
                <h1>{Info.name}</h1>
                <p>Hola buenas, me llamo {Info.name} y tengo {this.getAge(Info.birthdate)} años. Soy administrador de sistemas aunque también me encanta todo lo relacionado con el mundo web.</p>
                <div>
                    {
                        Info.contacts.map(contact => (
                            <ContactButton key={contact.name} url={contact.url} icon={contact.icon}/>
                            )
                        )
                    }
                </div>
            </div>

        )
    }
}
