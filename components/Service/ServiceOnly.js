import React from 'react';
import Product2griditem from '../Portfolios/Product2griditem'
import textData from '../Data/TextData';
import {connect} from 'react-redux';
import TechIcon from '../Features/TechIcon'
import TechStacks from '../Service/TechStacks'
import Reveal from 'react-reveal';

class Service extends React.Component {
    render(){

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
            <section className="payment_features_area2">
            <section className="seo_service_area wrapper_padding2 ctr_textm">
                 {/* <div className="bg_shape shape_one"></div> */}
                {/*<div className="bg_shape shape_two"></div>
                <div className="bg_shape shape_three"></div> */}
                <div>
                <Reveal>
                    <div className="pt_150">
                        <div className="about_pg mb_0">
                            <h1 className="">{content.d0358}<span className="font_col1">{content.d0358b}</span><br></br></h1>
                            {/* <hr className="hr12"></hr> */}
                            <p>{content.d0016}</p>
                        </div>
                    
                    </div>

                </Reveal>
                    {/* <div className="ctr_text sec_pad25">
                        <div className="seo_features_content3">
                                <h2>{content.d0379}</h2>
                                <hr className="hr4"></hr>
                                <h5 className="sec_pad25">{content.d0359}</h5>
                        </div>
                        
                    </div> */}

                    {/* <div className="hosting_title analytices_title text-center">
                        <h2 className={`wow fadeInUp ${gap1}`}><span>{content.d0422}</span>{content.d0423}</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">{content.d0359}</p>
                    </div>

                    <SeoTitle Title={content.d0455} nLang={this.props.nLang}/>  */}
                    
                    {/* <div className={`seo_sec_title3 mb-30`}>
                        <h20 className={`${gap2}`}>{content.d0459}</h20>
                        <hr className="hr10"></hr>
                        <p>{content.d0359}</p>
                    </div> */}
                        
                        <div className="mt-30 sec_pad32 mt-100r">
                            {/* <Fade bottom cascade>
                            <div className="home_desc3 ctr_text hosting_title ">
                                <h>{content.d0423}</h>
                                <p>{content.d0359}</p>
                            </div>
                            </Fade> */}
                            <div className="row sec_pad20">
                                <div className="row portfolio_gallery mb_30 justify-content-center" id="work-portfolio">
                                {
                                    content.d0056a.map((item) => {
                                        return(
                                            // <Package3 Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} />
                                            <Product2griditem colClass="col-xl-4 col-lg-6 col-md-6 col-12 develop" pAlt={item.pAlt} Pduration={item.Pduration} pImg={item.Pimg} pImgpre={item.Pimgpre} Phref={item.Phref} Ptitle={item.Ptitle} Pdescription={item.Pdescription} PtOne={item.PtOne}/>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    

                    {/* <div className="row seo_service_info sec_pad12">
                        {
                            content.d0056.map(item => {
                                return(
                                    <Products Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} Phref={item.Phref} Hicon={item.Hicon} iclass={item.iclass} nLang={this.props.nLang}/>
                                )  
                            })
                        }
                    </div> */}

                    
                
            </section>
            <TechStacks nLang={this.props.nLang} bk_col="bk_col5"/>
            </section>
        </React.Fragment>
    )}}

export default Service