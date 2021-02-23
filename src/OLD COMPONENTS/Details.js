import React from 'react';
import './Details.css';

class Details extends React.Component{

    render(){
        return(
            <div className="details">
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Bryce Lynch</td>
                        </tr>
                        <tr>
                            <td>Date of Birth:</td>
                            <td>19/02/1998</td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td>0473 765 858</td>
                        </tr>
                        <tr>
                            <td>Email address:</td>
                            <td>bryce.lynch@outlook.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Details;