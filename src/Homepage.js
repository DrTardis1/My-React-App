import React from 'react';
import Header from './Header';
import WorkExperience from './WorkExperience';
import AboutMe from './AboutMe';


class Homepage extends React.Component{
    render(){
        return (
          <div>
            <Header/>
            <WorkExperience/>
            <AboutMe/>
          </div>
        )
      }
}

export default Homepage;