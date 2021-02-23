import React from 'react';
import Header from './Header';
import Stats from './Stats';
import StrengthsAndWeaknesses from './StrengthsAndWeaknesses';


class Homepage extends React.Component{
    render(){
        return (
          <div>
            <Header/>
            <Stats/>
            <StrengthsAndWeaknesses/>
          </div>
        )
      }
}

export default Homepage;