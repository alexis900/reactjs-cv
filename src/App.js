import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import UserInfo from './components/UserInfo'
import UserExperience from './components/UserExperience'
import UserSkills from './components/UserSkills'
import UserEducation from './components/UserEducation'
import UserCourses from './components/UserCourses'
import UserProjects from './components/UserProjects'
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container p-4">
        <div className="row">
            <Route path="/" exact component={UserInfo} />
            <Route path="/experience" component={UserExperience} />
            <Route path="/skills" component={UserSkills}/>
            <Route path="/education" component={UserEducation} />
            <Route path="/projects" component={UserProjects} />
            <Route path="/courses" component={UserCourses} />
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
