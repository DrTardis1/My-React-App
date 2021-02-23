import React from 'react';
import './StrengthsAndWeaknesses.css';

class StrengthsAndWeaknesses extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div className="s-w-parent">
                <div className="s-w-blurb">
                    <div>
                        And how about my
                    </div>
                    <div>
                        strengths & weaknesses?
                    </div>
                </div>
                <div className="strengths">
                    <div className="title">
                        Strengths
                    </div>
                    <ul>
                        <li>Problem Solving</li>
                        <li>Communication</li>
                    </ul>
                </div>
                <div className="weaknesses">
                    <div className="title">
                        Weaknesses
                    </div>
                    <ul>
                        <li>Things not on the strengths list</li>
                        <li>Writing Strengths & Weaknesses lists</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default StrengthsAndWeaknesses;