import React from 'react';
import './Socials.css';

class Socials extends React.Component{

    render(){

        return(
            <div className="socials">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <div className="socials-circle">
                    <a className="socials-link" href="https://www.linkedin.com/in/bryce-lynch">
                        <div className="fa fa-linkedin"/>
                    </a>
                </div>
                <div className="socials-circle">
                    <a className="socials-link" href="https://www.facebook.com/DrTardis1">
                        <div className="fa fa-facebook"/>
                    </a>
                </div>
            </div>
        )
    }

}

export default Socials;