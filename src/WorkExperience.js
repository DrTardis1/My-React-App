import React from 'react';
import Job from './Job';

class WorkExperience extends React.Component{
    render(){
        return(
            <div>
                <Job title={"Developer"}
                workplace={"incubatorTANK"} 
                start={"16th November, 2020"} 
                end={"Present"}
                description={"So far, my job here has involved a lot of software development! Daily, I am required to solve problems and find solutions to any number of unique situations that may arise. While I am mainly focused on one of many projects in the TANK, I often help with other projects."}/>

                <Job title={"Labourer"}
                workplace={"Newcastle Greenskeepers Suppliers"}
                start={"Feb, 2015"}
                end={"April, 2018"}
                description={
                    "A typical day here involved me packing bags of fertilizer and other greenskeeping equipment/chemicals into a delivery van. On weekends, in addition to these regular responsibilities, I would also be required to complete odd jobs such as mowing lawns, or washing the van."
                } />
            </div>
        )
    }
}
export default WorkExperience;