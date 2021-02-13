import React, {Component} from 'react';
import Reveal from 'react-reveal'
class HRServiceItems extends Component{
    render(){
        var{HRtitle, HRdescription, HRpic, Hicon, rclass, iclass, Phref,} = this.props;
        return(
            <React.Fragment>

                <div className="seo_service_item_HR col-lg-4">
                    <Reveal bottom cascade>
                    <a href={Phref}>
                        
                    <div className={`p_service_item ${rclass}`}>
                        {/* <div className={`icon ${iclass}`}><i className={`ti-${Hicon}`}></i></div> */}
                        <div >
                            <img className="custom_imgs3" src={'/img/' + HRpic}/>
                        </div>
                        
                        <h5 className="f_600 f_p t_color3">{HRtitle}</h5>
                        <p className="f_300">{HRdescription}</p>
                    </div>
                    </a>
                    </Reveal>
                </div>

            </React.Fragment>
        )
    }
}
export default HRServiceItems;