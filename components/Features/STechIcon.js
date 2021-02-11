import React from 'react';

export default class TechIcon extends React.Component {
    render(){
        var {Pimg, Pdesc} = this.props
        return(
                <div className="ctr_text mb_20 max-width2">
                    <div className="tech_logo_area2">
                        <img className="" src={'/img/stack/' + Pimg}></img>
                    </div>
                        
                    
                    <p className="ctr_text tech_logo_desc2">{Pdesc}</p>
                </div>
            
        )
    }
}