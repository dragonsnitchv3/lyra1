import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';
import Startupsitem from './Sservice/Startupsitem';
import Products from './Products'
import Package from './Package2'
import Pserviceslider from './Sservice/Pserviceslider';
import textData from '../Data/TextData'
import {connect} from 'react-redux';
import SecurityIntegration from '../Features/SecurityIntegration'
import Reveal from 'react-reveal';

class Service extends React.Component {
    render(){
        let ServiceData = this.props.ServiceData;

        let content;
        this.props.nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

        let gap1;

        this.props.nLang === 'en' ?
        (gap1 = "txt_gap1"):
        (gap1 = "")
    
        let gap2;
    
        this.props.nLang === 'en' ?
        (gap2 = "txt_gap2"):
        (gap2 = "")

    return(
        <React.Fragment>
            <section className="sec_pad32 bk_col7">
                <div className="wrapper_padding4">
                <Fade bottom cascade>
                    <div className="hosting_title home_desc3a ctr_text max_width">
                        <h className="txt_gap1">{content.d0454}</h>
                        {/* <hr className="hr1"></hr> */}
                        
                    </div>
                        <div className="row">
                            <div className="col-lg-1"></div>
                                <div className="col-lg-10">
                                    <div className="row seo_service_info">
                                    {/* {
                                        content.d0453.map(item => {
                                            return(
                                                <Package Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} Phref={item.Phref} Pimage={item.Pimage} Hicon={item.Hicon} iclass={item.iclass} iname={item.iname}/>
                                            )  
                                        })
                                    } */}
                                    {
                                        content.d0453.map(item => {
                                            return(
                                                <SecurityIntegration Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} Phref={item.Phref} Pimage={item.Pimage} Hicon={item.Hicon} iclass={item.iclass} iname={item.iname}/>
                                            )  
                                        })
                                    }
                                    </div>
                                </div>
                            <div className="col-lg-1"></div>
                        </div>
                    </Fade>
                    </div>
            </section>


            <section className="payment_features_area2">
            
            
            

            
            </section>
            
        </React.Fragment>
    )
    }
}
    
const mapStateToProps = state => ({
    lang: state.lang
})

export default connect(mapStateToProps)(Service)
