import React from 'react';
import './Header.css';

import Socials from './Socials';
import Details from './Details';
import BryceImg from './Bryce.jpg';

class Header extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div className="header">
                <p>Bryce Lynch</p>
                <img className="header-img" src={BryceImg}/>
                <Socials/>
                <Details/>
            </div>
        )
    }
}

export default Header;