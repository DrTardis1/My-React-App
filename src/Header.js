import React from 'react';
import './Header.css';

import BryceImg from './Bryce.jpg';

class Header extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div className="header-parent">
                <div className="header">
                    <div className="header-info">
                        <div className="header-desc">
                            <div className="top">
                                Hi there!
                            </div>
                            <div className="bot">
                                My name is
                            </div>
                        </div>
                        <div className="title">
                            Bryce Lynch!
                        </div>
                    </div>
                    <div className="header-img-div">
                        <img className="header-img" src={BryceImg} alt="Yours truly!"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;