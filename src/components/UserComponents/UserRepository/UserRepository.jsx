import React, { Component } from "react";
import Repository from './Repository'

const axios = require("axios");

export default class UserRepository extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  componentDidMount() {
    const userURL = `https://api.github.com/users/alexis900`;
    axios
      .get(userURL)
      .then(res => {
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

    const reposURL = "https://api.github.com/users/alexis900/repos";

    axios
      .get(reposURL)
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.setState({
          repos: data
        });
      })
      .catch(err => {
        if (err) console.error("Cannot fetch Weather Data from API, ", err);
      });
  }

  render() {
    const { login, avatar, name, bio, repos } = this.state;
    console.log(this.state);
    return (
      <div>
        <img src={avatar} alt="" />
        <h2>{login + " - " + name}</h2>
        <h3>{bio}</h3>
        <div>
        {repos &&
            repos.map((repo, key) => (
                <Repository key={key} repo={repo}/>
                
            ))}
            
        </div>
      </div>
    );
  }
}
