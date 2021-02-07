import React from 'react';
import Header from './Header';
import WorkExperience from './WorkExperience';
import AboutMe from './AboutMe';

class App extends React.Component{
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

export default App;