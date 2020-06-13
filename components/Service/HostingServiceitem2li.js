import React, {Component} from 'react';

class bull extends Component{
    render(){
        var {Pli} = this.props;
        return(
            <div>
                <li className="process_bullet ">{Pli}</li>
            </div>
                
            
        )
    }
}
export default bull;