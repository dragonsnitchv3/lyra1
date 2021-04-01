import React, {Component} from 'react';
import Link from 'next/link'

class HRServiceItems extends Component{
    render(){
        var{Ptitle, Pdescription, Hicon, Pimg, Pimgpre, pAlt} = this.props;
        return(
            <div className="col-lg-6 col-12 mb_15">
                
                    
                        <div className="hosting_service_item_corp lf_text lf_text2">
                            <div className="row">
                                <div className="col-4">
                                   
                                        <img src={'/img/home7/' + Pimg} alt={pAlt}/>
                                    
                                </div>
                                <div className="col-8 pl_50 lf_text lf_text2 align-items-bottom">
                                    <h4 className="h_head">{Ptitle}</h4>
                                    <p>{Pdescription}</p>
                                </div>
                            </div>
                        </div>
                    
                
            </div>
        )
    }
}
export default HRServiceItems;