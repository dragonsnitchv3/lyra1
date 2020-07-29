import React, {useEffect, useState} from 'react';
import Reveal from 'react-reveal';
import Typical from 'react-typical'
import textData from '../Data/TextData'
import {connect} from 'react-redux';
import Plx from "react-plx";
import AwesomeSlider from 'react-awesome-slider';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ParticlesJs from '../ParticleJs';


const AppBanner = ({nLang}) => {


        let content;
        nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

        let tp1 = content.d0008
        let tp6 = content.d0008a
        let tp2 = content.d0009
        let tp7 = content.d0009a
        let tp3 = content.d0010a
        let tp4 = content.d0011a
        let tp5 = content.d0012
        let tp8 = content.d0649

        let dura;

        nLang === 'en' ?
        (dura = 3000):
        (dura = 3000)

        return(
            <section className="appBannerSection">
                <div>
                    
                    <div className="app_banner_contentmt text_ctrv">
                                    
                                    <React.Fragment >
                                        <Reveal>
                                            <h2 className={`f_300 w_color2 wow text-center fadeInLeft f_size_65 text_align1 txt_gap3`} data-wow-delay="0.3s">
                                                <Typical
                                                    className="f_300 w_color2"
                                                    steps={[tp8, dura, tp6, dura, tp1,dura, tp2, dura, tp7, dura, tp3, dura, tp4, dura, tp5, dura]}
                                                    loop={Infinity}
                                                    wrapper='b'
                                                />
                                                {content.d0013.btitle.split("\n").map((i,key) => {
                                                    return <div className="text_align1 f_size_45v" key={key}>{i}</div>;
                                                })}
                                                
                                            </h2>
                                            <hr className="hr11"></hr>
                                            <p className="f_300 d_p_color l_height28 app_b1 wow fadeInLeft text_align1 txt_gap1" data-wow-delay="0.4s">{content.d0013.description}</p>
                                        </Reveal>
                                    </React.Fragment> 
                                    
                                    <div className="col-lg-12 text-center mt_40">
                        {/* <a href={content.d0386} className="seo_btn seo_btn_one btn_hover" data-wow-delay="0.5s">{content.d0014}</a> */}
                        
                        </div>
                        
                    </div>
                    <div className="text_ctrl text_align1 icon_sp"><i className={`ti-angle-down`}></i></div>

                    {/* <div className="text_ctrl text_align1 icon_sp"><FontAwesomeIcon icon={faThumbsUp} /></div> */}
                    
                </div>

                {/* <DynamicComponentWithNoSSR /> */}
            </section>
        )
    }

// const mapStateToProps = state => ({
//     lang: state.lang
// })

// export default connect(mapStateToProps)(AppBanner)

export default AppBanner