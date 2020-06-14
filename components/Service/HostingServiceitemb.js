import React, {Component} from 'react';
import Link from 'next/link'

class HRServiceItems extends Component{
    render(){
        var{Ptitle, Pdescription, Hicon, Phref} = this.props;
        return(
            <div className="col-lg-6 col-12 mb_15">
                <Link href={Phref}>
                    
                        <div className="hosting_service_item lf_text lf_text2">
                            <div className="row">
                                <div className="col-4">
                                    <div className="icon ctr_text">
                                        <i className={`${Hicon}`}></i>
                                    </div>
                                </div>
                                <div className="col-8 pl_50 lf_text lf_text2">
                                    <Link href={Phref}><h4 className="h_head">{Ptitle}</h4></Link>
                                    <p>{Pdescription}</p>
                                </div>
                            </div>
                        </div>
                    
                </Link>
            </div>
        )
    }
}
export default HRServiceItems;