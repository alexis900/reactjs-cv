import React, { Component } from 'react'
const axios = require('axios');

export default class UserRepository extends Component {
    componentDidMount(){
        const URL = `https://api.github.com/users/alexis900`
        axios
        .get(URL)
        .then(res => {
            console.log("DATA", res.data)
          return res.data;
         
        })
        .then(data => {
          this.setState({
            login: data.login,
            avatar: data.avatar_url,
            name: data.name,
            bio: data.bio
          });
        })
        .catch(err => {
          if (err) console.error("Cannot fetch Weather Data from API, ", err);
        });
    }
    render() {
        

        return (
            <div>
                <p>
                </p>
            </div>
        )
    }
}