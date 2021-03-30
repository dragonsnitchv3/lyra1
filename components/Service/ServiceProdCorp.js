import React from 'react';
import Reveal from 'react-reveal/Reveal';
import textData from '../Data/TextData';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
import Team from './Icon/Team'
import WYWG2 from './Icon/WYWG2'
import IWDT from './Icon/IWDT'
import TrackingProductItem from '../Features/TrackingProductItem';
import TechStacks from '../Service/TechStacks'
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-image';
import ServiceItem from '../Service/HostingServiceitem';
import KF from './Icon/KeyFunctions4';
import dynamic from 'next/dynamic';
import CorpSel from './CorpSel'



class Product2 extends React.Component {
    

    render(){
    var {nLang} = this.props;
    let content;
        this.props.nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

    const DynamicComponentWithNoSSR = dynamic(
        () => import('../ParticleJs2'),
        { ssr: false }
    )

    return(
        <React.Fragment>
            <section>
                <Reveal>
                <div className="bk_col5 row wrapper_padding7">
                    <div className="verticle_lineg1"></div>
                    <div className="sec_pad32 col-lg-12 ">
                        <div className="row">
                            <div className="col-lg-5 sec_pad33">
                                <ProgressiveImage src='/img/home7/website.png' placeholder='/img/home7/corppre.png'>
                                    {src => <img className="img_size_square3u" src={src} alt="" />}
                                </ProgressiveImage>
                            </div>
                            <div className="col-lg-7 pl_70r ">
                                <div className="prodm_pg2 txt_gap3 ">
                                    <p>{content.d0486}</p>
                                    <h1>{content.d0670}<br></br></h1>
                                    <h2>{content.d0488}<br></br></h2>
                                    <p>{content.d0671}<br></br></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="wrapper_padding5 pt_200">
                        <div className="about_pg mb_70">
                            <h className="mb_40">{content.d0362}</h>
                            <hr className="hr12"></hr>
                            <p>{content.d0363}</p>
                        </div>
                    </div> */}
                    <Reveal></Reveal>
                    <div className="verticle_lineg1_ctr"></div>
                    <div className="wrapper_paddingm1 prod_desc1 ctr_text2 sec_pad34">
                        {/*<p><span className="f_700 t_color f_size_30 lf_text3">{content.d0509}</span>{content.d0510}</p>*/}
                        <p><span className="f_700 t_color f_size_30 lf_text3">{content.d0663}</span>{content.d0662}</p>
                        <p>{content.d0664}</p>
                        <h3 className="disp_mob">{content.d0665}</h3>
                    </div>
                    <div className="verticle_lineg1_ctr disp_mob"></div>
                    <div className="triangle-up disp_mob "></div>
                </div>
                </Reveal>
                
                <Reveal>
                    <div>
                        <CorpSel nLang={this.props.nLang}/>
                    </div>
                    
                </Reveal>

                
                <div className="bk_col5b wrapper_padding7">
                <div className="triangle-down "></div>
                    <div className="verticle_lineg1_ctr"></div>

                    
                    
                        <div className="prod_desc2 ctr_text mb_70">
                            <h2>{content.d0661}</h2>
                        </div>
                        <div className="row mt_50r justify-content-center">
                            {/* <div className="col-lg-1"></div> */}
                            {
                                content.d0660.map((item) => {
                                    return(
                                        <KF PIcon={item.PIcon} PName={item.PName} PDesc={item.PDesc}/>  
                                    )
                                    
                                })
                            }
                            
                            {/* <div className="col-lg-1"></div> */}
                        </div>
                    

                    

                    <div className="verticle_lineg1_ctr"></div>
                    <div className="triangle-up "></div>

                </div>
                



                
                {/*}         
                <Reveal>
                <div className="bk_col5 wrapper_padding7xb sec_pad35">
                    <div className="mb_70 prod_desc2 lf_text">
                            <h5 className="">{content.d0605}</h5>
                    </div>  
                    <div className="row mt_50r">
                        <div className="col-lg-6 ">
                            <div className="prod_desc3">
                                <li className="process_bullet4">{content.d0606}</li>
                                <li className="process_bullet4">{content.d0607}</li>
                                <li className="process_bullet4">{content.d0608}</li>
                                <li className="process_bullet4">{content.d0609}</li>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                <li className="process_bullet4">{content.d0610}</li>
                                <li className="process_bullet4">{content.d0611}</li>
                                <li className="process_bullet4">{content.d0612}</li>
                                <li className="process_bullet4">{content.d0613}</li>
                            </div>
                        </div>
                    </div>  
                </div>
                </Reveal>
                */}

                {/* <FaqSection dataNo={content.d0414} C1T={content.d0072} C2T={content.d0090} C3T={content.d0106} nLang={nLang}/> */}
                
                

                <section className="bk_col5b sec_pad32">
                    <div className="wrapper_padding3a prod_desc2 lf_text max_width">
                            <Reveal effect="fadeInUp" duration={1300}><h5>{content.d0468}</h5></Reveal>
                    </div>     
                    <div className="wrapper_padding3a">
                        <TrackingProductItem itemClass="tracking_pr_two" pAlt="modern web development" image="modern-web-development.jpeg" imagepre="wd1pre.jpg"  TrackingTitle={content.d0679} Trackingd={content.d0680}  Trackingbtn={content.d0142} nLang={nLang}/>
                        <TrackingProductItem itemClass="tracking_pr_two" pAlt="360 web customization" rowclass="flex-row-reverse" image="360-web-customization.jpeg" imagepre="wd3pre.jpg"  TrackingTitle={content.d0681}  Trackingd={content.d0682} Trackingd2={content.d0682a} Trackingbtn={content.d0142} nLang={nLang}/>
                        <TrackingProductItem itemClass="tracking_pr_two" pAlt="web design and performance" image="design-and-performance.jpeg" imagepre="wd4pre.jpg" TrackingTitle={content.d0683}  Trackingd={content.d0684} Trackingd2={content.d0685} Trackingbtn={content.d0142} nLang={nLang}/>
                        <TrackingProductItem itemClass="tracking_pr_two" pAlt="leading web technologies" rowclass="flex-row-reverse" image="leading-technologies.jpeg" imagepre="wd2pre.jpg" TrackingTitle={content.d0477}  Trackingd={content.d0686} Trackingd2={content.d0687} Trackingbtn={content.d0142} nLang={nLang}/>
                    </div>
                </section>


                <Reveal>
                <div className="bk_col5 wrapper_padding7 sec_pad35">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="prod_desc2 width1 ctr_text">
                                <h2>{content.d0519}</h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="prod_desc2">
                                <p><span className="f_700 t_color f_size_30 lf_text3">{content.d0520}</span>{content.d0521}</p>
                                <p>{content.d0522}</p>
                                <p>{content.d0523}</p>
                            </div>
                        </div>
                    </div>  
                </div>
                </Reveal>
            
                <Reveal>
                <div className="bk_col5b wrapper_padding5 pt_s50">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                <h4>{content.d0528}</h4>
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0524}</span>{content.d0525}</p>
                                <p>{content.d0526}</p>
                                <p>{content.d0527}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="prod_desc3 mt_50r">
                                <h4>{content.d0529}</h4>
                                <p className="mb_50"><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0531}</span>{content.d0530}</p>
                                <li className="process_bullet2">{content.d0598}</li>
                                <li className="process_bullet2">{content.d0599}</li>
                                <li className="process_bullet2">{content.d0600}</li>
                            </div>
                        </div>
                    </div>  
                    <div className="verticle_lineg1_ctr mt_100"></div>
                    <div className="triangle-up "></div>
                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5 wrapper_padding7 ">

                    <div className="sec_pad35">
                        <div className="prod_desc2 ctr_text mb_70">
                            <h2>{content.d0597}</h2>
                        </div>
                        <div className="row justify-content-center ctr_text2">
                            <WYWG2 PIcon="ti-split-v-alt" PName={content.d0498}/>
                            <WYWG2 PIcon="ti-mobile" PName={content.d0499}/>
                            <WYWG2 PIcon="ti-settings" PName={content.d0500}/>
                            <WYWG2 PIcon="icon-check" PName={content.d0501}/>
                        </div>
                    </div>

                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5b wrapper_padding9 sec_pad35">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                <h4>{content.d0532}</h4> {/* */}
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0533}</span>{content.d0534}</p>
                                <p>{content.d0535}<span ><Link href={content.d0386c}><a className="f_500 t_color">{content.d0537}</a></Link></span></p>
                                <p>{content.d0536}</p>
                                <p>{content.d0538}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_50r">
                            <div className="prod_desc3">
                                <li className="process_bullet3">{content.d0539}</li>
                                <li className="process_bullet3">{content.d0540}</li>
                                <li className="process_bullet3">{content.d0541}</li>
                                <li className="process_bullet3">{content.d0542}</li>
                                <li className="process_bullet3">{content.d0543}</li>
                                <li className="process_bullet3">{content.d0544}</li>
                                <li className="process_bullet3">{content.d0545}</li>
                                <li className="process_bullet3">{content.d0546}</li>
                            </div>
                        </div>
                    </div>  
                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5 wrapper_padding7">
                    <div className="triangle-down "></div>
                    <div className="verticle_lineg1_ctr"></div>

                    <div className="prod_desc3 text-center">
                        <h2 className="mt_130">{content.d0031}</h2>
                        <Link href={content.d0386} data-wow-delay="0.4s"><a className=" about_btn wow fadeInRight">{content.d0032}</a></Link>
                    </div>

                    
                    <div className="mt_130 verticle_lineg1_ctr"></div>
                    <div className="triangle-up "></div>

                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5b wrapper_padding5 pt_s50">
                    <div className="prod_desc2 ctr_text mb_70">
                        <h2>{content.d0554}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0549}</span>{content.d0547}</p>
                                <p>{content.d0548}</p>
                                <p>{content.d0551}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_50r">
                            <div className="prod_desc3">
                                
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0552}</span>{content.d0550}</p>
                                <p>{content.d0553}</p>
                            </div>
                        </div>
                    </div>  
                    <div className="row mt_70">
                        <IWDT PIcon="icon-calculator" PName={content.d0502}/>
                        <IWDT PIcon="ti-stats-up" PName={content.d0503}/>
                        <IWDT PIcon="ti-shield" PName={content.d0504}/>
                        <IWDT PIcon="icon-plus" PName={content.d0505}/>
                    </div>
                    <div className="verticle_lineg1_ctr mt_100"></div>
                    <div className="triangle-up "></div>
                </div>
                </Reveal>

            <TechStacks nLang={nLang} bk_col="bk_col5"/>
            
            {/* <FAQ /> */}

            <Reveal>
            <div className=" wrapper_padding7xb sec_pad35 ctr_text row">

                <div className="col-12 prod_desc1 ctr_text2 ">
                    <h2 className="">{content.d0556}</h2>
                    <p className="mb_100">{content.d0555}</p>
                    {/* <a href={content.d0386} className="mt_70 txt_gap2 about_btn wow fadeInRight" data-wow-delay="0.4s">{content.d0032}</a> */}
                </div>

                <div className="col-12 prod_desc1 ctr_text2 ">
                    <h2 className="mb_50">{content.d0557}</h2>
                    <Link href={content.d0386} data-wow-delay="0.4s"><a className="mt_130 ctr_text about_btn wow fadeInRight">{content.d0032}</a></Link>
                </div>

                

            </div>
            </Reveal>
            </section>
            
        </React.Fragment>
    )
}
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default Product2
