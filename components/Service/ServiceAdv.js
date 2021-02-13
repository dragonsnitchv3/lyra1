import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';
import Startupsitem from './Sservice/Startupsitem';
import Advantage from './Advantage'


export default class Service extends React.Component {
    render(){
        
        var {ServiceData, Title} = this.props;

        return(
            <React.Fragment>
                    <section className="sec_pad8 bg_colorw">
                        <div className="container">

                            <div className="breadcrumb_content text-center mb_20">
                                    <p className="f_p f_700 f_size_20 t_color3  text-center f_border">MARKET READY, STRAIGHT FROM THE BOX.</p>
                            </div>

                            <div className="row seo_service_info">
                                {
                                    ServiceData.AdvantageI.map(item => {
                                        return(
                                            <Advantage Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} Pimage={item.Pimage} />
                                        )  
                                    })
                                }
                            </div>

                        </div>
                    </section>
            </React.Fragment>
    )}}