import React from 'react';
import textData from '../Data/TextData';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
import Reveal from 'react-reveal';
import ProgressiveImage from 'react-progressive-image';


const Service = ({ nLang }) => {
    let content;

    nLang === 'en' ?
    (content = textData.english):
    (content = textData.chinese)

    let gap1;

    nLang === 'en' ?
    (gap1 = "txt_gap1"):
    (gap1 = "")

    let gap2;

    nLang === 'en' ?
    (gap2 = "txt_gap2"):
    (gap2 = "")
    return(
        <React.Fragment>
            
            <section className="payment_features_area bk_col5">
                <div className="s_round one"></div>
                <div className="s_round two"></div>
                <img className="p_absoulte s_shap" src='/img/home-security/shap.png' alt=""/>
                <div className="wrapper_padding2 pt_150 ctr_textm">
                <Reveal>
                    <div className="about_pg mb_70">
                        <h1 className="">{content.d0360}<span className="font_col1">{content.d0360a}</span></h1>
                        {/* <hr className="hr12"></hr> */}
                        <p>{content.d0034}</p>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="row mb_15 flex-row-reverse mb_90 align-items-center">
                        <div className="center_vert1 col-lg-6  pb_90r">
                                {/* <img className="img_size_square_ab" src='/img/main.jpg' alt=""/> */}

                                <ProgressiveImage src="/img/main.jpg" placeholder="/img/mainpre.jpg">
                                    {src => <img className="img_size_square_ab" src={src} alt="" />}
                                </ProgressiveImage>
                        </div>

                        

                        
                        <div className="center_vert1 col-lg-6 about_pg2  ">
                            <h>{content.d0035}</h>
                            <p>{content.d0036}</p>
                            <p>{content.d0475}</p>
                        </div>
                        
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="row align-items-center mb_15">
                        <div className="col-lg-6 pr_70r pb_90r">
                                <img className="img_size_square_ab" src='/img/wd2.jpg' alt=""/>
                        </div>
                        <div className="col-lg-6 about_pg2 pl_70r">
                            <h>{content.d0037}</h>
                            <p>{content.d0038}</p>
                        </div>
                        
                    </div>
                    </Reveal>
                </div>
            <section className="seo_features_one ">
            <Reveal>
                <div className="container sec_pad32">

                    <div className="about_pg2 txt_gap2 ctr_text mb_50r ">
                        <h>{content.d0463}</h>
                    </div>

                    <div className="row">

                            <div className="col-lg-6 flex-row-reverse d-flex align-items-center ">
                                
                                <div className="about_pg pr_50r ">
                                    <h3 className={`disp_mob wow fadeInUp ${gap2}`}>{content.d0022}</h3>
                                    <p className="fadeInUp ctr_textm">{content.d0473}</p>
                                </div>
                            </div>

                            <div className="col-lg-6 verticle_line pl_70r">
                                    <img className="img_size_square_ab " src='/img/office.jpg' alt=""/>
                            </div>
                            
                            
                    </div>
                    
                </div>
                </Reveal>
            </section>
            </section>
            
        </React.Fragment>
    )
}

// const mapStateToProps = state => ({
//     lang: state.lang
// })

// export default connect(mapStateToProps)(Service)

export default Service