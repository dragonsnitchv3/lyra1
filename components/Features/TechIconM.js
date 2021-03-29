import React from 'react';

export default class TechIcon extends React.Component {
    render(){
        var {Pimg, Pdesc, pAlt} = this.props
        return(

                <div className="col-6">
                        <div className="tech_logo_area ctr_text">
                            <img alt={pAlt} className="" src={'/img/stack/' + Pimg}></img>
                        </div>
                            
                        
                        <p className="ctr_text tech_logo_desc">{Pdesc}</p>
                           
                </div>

            
        )
    }
}