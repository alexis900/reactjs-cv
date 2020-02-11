import React from 'react';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom'

import Navigation from './components/UIComponents/Navigation/Navigation'
import UserInfo from './components/UserComponents/UserInfo/UserInfo'
import UserExperience from './components/UserComponents/UserExperience/UserExperience'
import UserSkills from './components/UserComponents/UserSkills/UserSkills'
import UserEducation from './components/UserComponents/UserEducation/UserEducation'
import UserCourses from './components/UserComponents/UserCourses/UserCourses'
import UserProjects from './components/UserComponents/UserProjects/UserProjects'
import Footer from './components/UIComponents/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <div className="container p-4">
        <div className="row">
            <Route exact path="/" component={UserInfo} />
            <Route path="/experience" component={UserExperience} />
            <Route path="/skills" component={UserSkills}/>
            <Route path="/education" component={UserEducation} />
            <Route path="/projects" component={UserProjects} />
            <Route path="/courses" component={UserCourses} />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
