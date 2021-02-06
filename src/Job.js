import React from 'react';
import './Job.css';

class Job extends React.Component{
    render(){
        return(
            <div className="job">

                    <div className="job-workplace">
                        <h1>{this.props.workplace}, {this.props.title}</h1>
                        <hr/>
                        <div className="dates">
                            <div className="start-date">
                                {this.props.start}
                            </div>
                            <div className="end-date">
                                {this.props.end}
                            </div>
                        </div>
                        <hr/>
                        <div className="description">
                                {this.props.description}
                            </div>
                    </div>
                </div>
        )
    }
}

export default Job;