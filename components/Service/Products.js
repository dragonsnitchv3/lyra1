import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';
import textData from '../Data/TextData';
import {connect} from 'react-redux';

class Products extends Component {
    render(){
        var {Ptitle, Hicon, iclass, Ptitle, Pdescription, Phref, Pduration} = this.props;

        let content
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
             <Fade bottom duration={Pduration}>
                <div className="col-lg-4">
                    <a href={`/${Phref}`}>
                        <div className="seo_service_item">

                            {/* <div className="row p_service_info">
                                <div className="col-lg-4 col-sm-6">
                                    
                                    
                                    
                                </div>
                            </div> */}
                        <div className=" p_service_info">
                            <div className={'p_service_item'}>
                                <div className={`icon ${iclass}`} align='middle'><i className={`${Hicon}`}></i></div>
                            </div>
                        </div>
                            <h4 className={`${gap1}`}>{Ptitle}</h4>
                            
                            <p>{Pdescription}</p>
                                <div className="col-lg-12 text-center mt_40">
                                    <a href={`/${Phref}`} className="seo_btn seo_btn_one btn_hover">{content.d0017}</a>
                                </div>
                            {/* <a href={`/${Phref}`}><i className="seo_service_item_awp arrow_right"></i></a> */}
                            
                        </div>
                    </a>
                </div>
            </Fade>
                        
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default connect(mapStateToProps)(Products)