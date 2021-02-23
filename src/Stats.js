import React from 'react';
import './Stats.css';

import Music from './music.svg';
import logo from './logo.svg';

class Stats extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div className="stats-parent">
                <div className="music-ico">
                    <img className="music-img" src={Music}/>
                </div>
                <div className="stats-detail">
                    <div>
                        Age 23
                    </div>
                    <div>
                        Favourite Color Black
                    </div>
                    <div>
                        Favourite song Shoot to Thrill - AC/DC
                    </div>
                    <div>
                        Favourite Movie Terminator 2
                    </div>
                </div>
                <div className="stats-blurb">
                    <div>
                        Here's a quick
                    </div>
                    <div>
                        overview of 
                    </div>
                    <div>
                        my details!
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;