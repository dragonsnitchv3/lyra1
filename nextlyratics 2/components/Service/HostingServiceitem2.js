import React, {Component} from 'react';
import Bull from './HostingServiceitem2li';
import Reveal from 'react-reveal';

class HRServiceItems extends Component{
    render(){
        var{Ptitle, Pdescription, Hicon, Phref, Step, Pbull} = this.props;
        return(
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 justify-content-center">
                    <Reveal>
                        <div className="hosting_service_item2 ctr_textm mb_30rt">

                            <div className="about_pg mb_30rt">
                                <h11>{Step}</h11>
                            </div>

                            <div className="process_area1 ">
                                <div className="process_position ctr_textm">
                                    <div className="icon ctr_textm2">
                                        <i className={`${Hicon}`}></i>
                                    </div>
                                    <a href={Phref}><h4 className="h_head3">{Ptitle}</h4></a>
                                    <p>{Pdescription}</p>
                                    <div className="row ctr_textm2 disp_mob">
                                        {Pbull.map((item) => {
                                            return(
                                                <Bull Pli={item.Pli}/>
                                            )
                                        })}
                                    </div>
                                    <div className="row ctr_textm2 justify-content-center disp_dks2">
                                        {Pbull.map((item) => {
                                            return(
                                                <Bull Pli={item.Pli}/>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
            </div>
        )
    }
}
export default HRServiceItems;