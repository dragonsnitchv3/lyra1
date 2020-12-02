import React from 'react';

export default class TechIcon extends React.Component {
    render(){
        var {Pimg, Pdesc} = this.props
        return(
                <div className="ctr_text mb-30 max-width">
                    <div className="tech_logo_area">
                        <img className="" src={'/img/stack/' + Pimg}></img>
                    </div>
                        
                    
                    <p className="ctr_text tech_logo_desc">{Pdesc}</p>
                </div>
            
        )
    }
}