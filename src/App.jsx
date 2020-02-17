import React from "react";
import "./App.scss";

import { Route } from "react-router-dom";

import Navigation from "./components/UIComponents/Navigation/Navigation";
import UserInfo from "./components/UserComponents/UserInfo/UserInfo";
import UserExperience from "./components/UserComponents/UserExperience/UserExperience";
import UserSkills from "./components/UserComponents/UserSkills/UserSkills";
import UserEducation from "./components/UserComponents/UserEducation/UserEducation";
import UserCourses from "./components/UserComponents/UserCourses/UserCourses";
import UserProjects from "./components/UserComponents/UserProjects/UserProjects";
import Footer from "./components/UIComponents/Footer/Footer";

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <div>
      <Navigation />
      <div className="container p-4">
        <div className="row">
          <Route exact path="/" component={UserInfo} />
          <Route exact path="/experience" component={UserExperience} />
          <Route exact path="/skills" component={UserSkills} />
          <Route exact path="/education" component={UserEducation} />
          <Route exact path="/projects" component={UserProjects} />
          <Route exact path="/courses" component={UserCourses} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
