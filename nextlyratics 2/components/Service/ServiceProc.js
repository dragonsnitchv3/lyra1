import React from 'react';
import textData from '../Data/TextData';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
import ServiceItem from '../Service/HostingServiceitem2'
import Reveal from 'react-reveal';
import ProgressiveImage from 'react-progressive-image';


const Process = ({ nLang }) => {
    let content;

    nLang === 'en' ?
    (content = textData.english):
    (content = textData.chinese)

    return(
        <React.Fragment>
            <section className="bk_col5 ">
                <div className="container ctr_textm">

                
            <div className=" s_round one"></div>
                <div className="s_round two"></div>
                <img className="p_absoulte s_shap" src="/img/home-security/shap.png" alt=""/>
                <Reveal>

                    
                    <div className="pt_150">
                        <div className="about_pg mb_0r">
                            <h1 className="">{content.d0362}<span className="font_col1">{content.d0362b}</span><br></br></h1>
                            {/* <hr className="hr12"></hr> */}
                            <p>{content.d0363}</p>
                        </div>
                    </div>
                </Reveal>
                <div className="">

                    {/* <div className="about_pg2 txt_gap2 ctr_text mb_50 ">
                        <h>{content.d0463}</h>
                    </div> */}

                    
                    <div className=" mb_100 ">
                        <div className="row justify-content-center">
                            {
                                content.d0453.map((item) => {
                                    return(
                                        <ServiceItem Phref={item.Phref} Pduration={item.Pduration}  Hicon={item.Hicon} Phref={item.Phref} Ptitle={item.Ptitle} Pdescription={item.Pdescription} PtOne={item.PtOne} Step={item.Step} Pbull={item.Pbull}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Reveal>
                        <div className="row sec_pad25">

                                <div className="col-lg-6 flex-row-reverse d-flex align-items-center ">
                                    
                                    <div className="about_pg3 pr_50r">
                                        <h1 className={`wow fadeInUp`}>{content.d0484}</h1>
                                        <p className="fadeInUp">{content.d0475}</p>
                                        <p className="fadeInUp">{content.d0475a}</p>
                                    </div>

                                </div>

                                <div className="col-lg-6 pl_70r">
                                        
                                        <ProgressiveImage src="/img/process/3.jpg" placeholder="/img/process/3pre.jpg">
                                            {src => <img className="img_size_square_ab" src={src} alt="" />}
                                        </ProgressiveImage>
                                </div>
                                
                        </div>
                    </Reveal>
                </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}

export default Process