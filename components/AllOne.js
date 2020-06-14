import React from 'react';
import textData from './Data/TextData';
import {connect} from 'react-redux';
import Product2griditem from './Portfolios/Product2griditem';
import Reveal from 'react-reveal';
import Fade from 'react-reveal/Fade';
import ServiceItem from './Service/HostingServiceitem'
import Particles from 'react-particles-js';
import TechIcon from './Features/TechIcon'
import WYWG from './Service/Icon/WYWG';
import TechStacks from './Service/TechStacks'
import Link from 'next/link'

const AllOne = ({nLang}) => {

    let content;
    nLang === 'en' ?
    (content = textData.english):
    (content = textData.chinese)

    return(
        
        <div className="body_wrapper bk_col5 ">
            <Reveal duration={1} effectOut="fadeOutLeft">
            <div className="wrapper_padding2 bk_col5 sec_pad32">
                {/* <Fade bottom cascade>
                    <div className="home_desc3 ctr_text hosting_title ">
                        <h>{content.d0423}</h>
                        <p>{content.d0359}</p>
                    </div>
                </Fade> */}
                {/* <div className="row sec_pad20">
                    <div className="row portfolio_gallery mb_30" id="work-portfolio"> */}
                    {/* {
                        content.d0056.map((item) => {
                            return(
                                // <Package3 Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} />
                                <Product2griditem colClass="col-lg-4 col-sm-6 develop" Pduration={item.Pduration}  pImg={item.Pimg} Phref={item.Phref} Ptitle={item.Ptitle} Pdescription={item.Pdescription} PtOne={item.PtOne}/>
                            )
                        })
                    } */}

                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 d-flex align-items-center">
                                <div className="home_panel1 txt_gap1 pr_15r">
                                    <h2 className="wow fadeInUp " data-wow-delay="0.3s">{content.d0596}</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">{content.d0016}</p>
                                    <Link href={content.d0386} data-wow-delay="0.7s"><a className="disp_mob ctr_text hosting_btn wow fadeInUp">{content.d0014}</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="row">
                                    {
                                        content.d0056.map((item) => {
                                            return(
                                                <ServiceItem Phref={item.Phref} Pduration={item.Pduration}  Hicon={item.Hicon} Phref={item.Phref} Ptitle={item.Ptitle} Pdescription={item.Pdescription} PtOne={item.PtOne}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            
                                    <Link href={content.d0386} data-wow-delay="0.7s"><a className="disp_dks ctr_textm2 hosting_btn  wow fadeInUp">{content.d0142}</a></Link>
                                
                            
                        </div>
                    </div>

                    {/* </div>
                </div> */}
                
            </div>
            <div className="bk_col5c wrapper_padding8 ctr_textm2">

                <div className=" sec_pad32">
                    <div className="prod_desc2 ctr_text mb_70">
                        <h2>{content.d0597}</h2>
                    </div>
                    <div className="row ctr_textm">

                        <WYWG PIcon="ti-split-v-alt" PName={content.d0494} PDesc={content.d0490}/>
                        <WYWG PIcon="icon-link" PName={content.d0495} PDesc={content.d0491}/>
                        <WYWG PIcon="ti-files" PName={content.d0496} PDesc={content.d0492}/>
                        <WYWG PIcon="ti-bolt" PName={content.d0497} PDesc={content.d0493}/>
                        
                    </div>
                    <div className="mt_70 ctr_text">
                        <Link href={content.d0386} data-wow-delay="0.4s"><a className=" about_btn btn_hover wow fadeInUp">{content.d0032}</a></Link>
                    </div>
                    
                </div>


            </div>
            {/* <div className="wrapper_padding7 bk_col5b sec_pad32">

                <div className="prod_desc2 ctr_text mb_70">
                    <h2>{content.d0461}</h2>
                </div>
            
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img_size_square" src={require('../img/main2.png')} />
                    </div>
                    <div className="col-lg-6">
                        <div className="verticle_line home_desc1">
                            <p>{content.d0019}</p>
                            <p2>{content.d0020}</p2>
                            <p>{content.d0021}</p>
                        </div>
                    </div>
                </div>
            </div> */}

                <div className="sec_pad32 bk_col5b">

                    <div className="container">
                        <div className="prod_desc2 ctr_text mb_50r ">
                            <h3>{content.d0461}</h3>
                        </div>

                        <div className="row">

                                <div className="col-lg-6 flex-row-reverse d-flex align-items-center ">
                                    
                                    <div className="about_pg pr_50r mb_15rt">
                                        <h3 className={`disp_mob wow fadeInUp`}>{content.d0601}</h3>
                                        <h4 className="fadeInUp ctr_textm">{content.d0019}</h4>
                                    </div>
                                </div>

                                <div className="col-lg-6 pl_70r">
                                        <img className="img_size_square_ab" src='/img/main3.jpg' alt=""/>
                                </div>
                                
                                
                        </div>
                    </div>

                    
                    
                </div>
            
            <TechStacks nLang={nLang} bk_col="bk_col8"/>
            
            </Reveal>
        </div>
    )
}

// const mapStateToProps = state => ({
//     lang: state.lang
// })

// export default connect(mapStateToProps)(AllOne)

export default AllOne