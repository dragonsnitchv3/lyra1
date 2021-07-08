import React from 'react';
import Reveal from 'react-reveal/Reveal';
import textData from '../../Data/TextData';
import {connect} from 'react-redux';
import KF from '../Icon/KeyFunctions4'
import KF3 from '../Icon/KeyFunctions3'
import KF2 from '../Icon/KeyFunctions2'
import WYWG2 from '../Icon/WYWG2'
import IWDT from '../Icon/IWDT'
import TechStacks from '../../Service/TechStacks';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-image';



const Product = ({ nLang }) => {
    let content;

    nLang === 'en' ?
    (content = textData.english):
    (content = textData.chinese)

    return(
        <React.Fragment>
            <section className="">
            <Reveal>
                <div className="bk_col5 row wrapper_padding7">
                    <div className="verticle_lineg1"></div>
                    <div className="col-lg-12 sec_pad32">
                        <div className="row ">
                            <div className="col-lg-5 sec_pad33">
                                <ProgressiveImage src='/img/home7/wp2.png' placeholder='/img/home7/wp2pre.png'>
                                    {src => <img className="img_size_square3u" src={src} alt="" />}
                                </ProgressiveImage>
                            </div>
                            <div className="col-lg-7 pl_70r">
                                <div className="prodm_pg2 txt_gap3">
                                    <p>{content.d0486}</p>
                                    <h1>{content.d0487e}<br></br></h1>
                                    <h2>{content.d0488}<br></br></h2>
                                    <p>{content.d0489e}<br></br></p>
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
                    <div className="verticle_lineg1_ctr"></div>
                    <div className="prod_desc1 ctr_text2 sec_pad34">
                        <p>{content.d0577}</p>
                        <h1>{content.d0559e}</h1>
                    </div>
                    <div className="verticle_lineg1_ctr disp_mob"></div>
                    <div className="triangle-up disp_mob"></div>
                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5b wrapper_padding7 sec_pad35 disp_mob">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="prod_desc2 width1 ctr_text">
                                <h2>{content.d0508}</h2>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="prod_desc2">
                                <p><span className="f_700 t_color f_size_30 lf_text3">{content.d0509}</span>{content.d0578}</p>
                                <p>{content.d0579}</p>
                                <p>{content.d0580}</p>
                            </div>
                        </div>
                    </div>  
                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5 wrapper_padding7">
                    <div className="triangle-down "></div>
                    <div className="verticle_lineg1_ctr"></div>

                    <div className="bk_col5 sec_pad32">
                        <div className="prod_desc2 ctr_text mb_70">
                            <h2>{content.d0306}</h2>
                        </div>
                        <div className="row mt_50r justify-content-center">
                            {/* <div className="col-lg-1"></div> */}
                            {
                                content.d0561d.map((item) => {
                                    return(
                                        <KF PIcon={item.PIcon} PName={item.PName} PDesc={item.PDesc}/>  
                                    )
                                    
                                })
                            }
                            
                            {/* <div className="col-lg-1"></div> */}
                        </div>
                    </div>

                    

                    <div className="verticle_lineg1_ctr"></div>
                    <div className="triangle-up "></div>

                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5 wrapper_padding7xb sec_pad35">
                    <div className="mb_70 prod_desc2 lf_text">
                            <h2>{content.d0592}</h2>
                    </div>  
                    <div className="row mt_50r">
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                <li className="process_bullet4">{content.d0581}</li>
                                <li className="process_bullet4">{content.d0582}</li>
                                <li className="process_bullet4">{content.d0583}</li>
                                <li className="process_bullet4">{content.d0584}</li>
                                <li className="process_bullet4">{content.d0585}</li>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                <li className="process_bullet4">{content.d0586}</li>
                                <li className="process_bullet4">{content.d0587}</li>
                                <li className="process_bullet4">{content.d0588}</li>
                                <li className="process_bullet4">{content.d0589}</li>
                                <li className="process_bullet4">{content.d0590}</li>
                            </div>
                        </div>
                    </div>  
                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5b wrapper_padding7 pt_s50">
                    <div className="mb_70 prod_desc2 lf_text">
                            <h2>{content.d0591}</h2>
                    </div>  
                    <div className="row mt_50r justify-content-center">
                    {
                        content.d0562d.map((item) => {
                            return(
                                <KF PIcon={item.PIcon} PName={item.PName} PDesc={item.PDesc}/>  
                            )
                            
                        })
                    }
                    </div>

                    <div className="verticle_lineg1_ctr mt_05"></div>
                    <div className="triangle-up "></div>
                </div>
                </Reveal>

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

            {/* <section className="tracking_product_area sec_pad32">
                <div className="wrapper_padding3 prod_desc2 lf_text max_width">
                        <Reveal effect="fadeInUp" duration={1300}><h2>{content.d0468}</h2></Reveal>
                </div>     
                <div className="wrapper_padding3">
                    <TrackingProductItem itemClass="tracking_pr_two" image="wd1.jpg" TrackingTitle={content.d0469} Trackingd={content.d0470} Trackingd2={content.d0470a} Trackingbtn={content.d0142}/>
                    <TrackingProductItem itemClass="tracking_pr_two" rowclass="flex-row-reverse" image="wd3.jpg" TrackingTitle={content.d0471}  Trackingd={content.d0472} Trackingd2 ={content.d0473} Trackingbtn={content.d0142}/>
                    <TrackingProductItem itemClass="tracking_pr_two" image="wd4.jpg" TrackingTitle={content.d0474}  Trackingd={content.d0475} Trackingd2={content.d0476} Trackingbtn={content.d0142}/>
                    <TrackingProductItem itemClass="tracking_pr_two" rowclass="flex-row-reverse" image="wd2.jpg" TrackingTitle={content.d0477}  Trackingd={content.d0478} Trackingd2={content.d0479} Trackingbtn={content.d0142}/>
                </div>
            </section> */}

                

                <Reveal>
                <div className="bk_col5 wrapper_padding7">

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
                <div className="bk_col5 wrapper_padding9 sec_pad35">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                <h1>{content.d0532}</h1> {/* */}
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0533}</span>{content.d0573a}</p>
                                <p>{content.d0593}</p>
                                <p>{content.d0568}</p>
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
                <div className="bk_col5b wrapper_padding7">
                    <div className="triangle-down "></div>
                    <div className="verticle_lineg1_ctr"></div>

                    <div className="prod_desc3 text-center">
                        <h2 className="mt_130">{content.d0031}</h2>
                        <Link href={content.d0386} data-wow-delay="0.4s"><a className="txt_gap2 about_btn wow fadeInRight">{content.d0032}</a></Link>
                    </div>

                    
                    <div className="mt_130 verticle_lineg1_ctr"></div>
                    <div className="triangle-up "></div>

                </div>
                </Reveal>

                <Reveal>
                <div className="bk_col5 wrapper_padding5 pt_s50">
                    <div className="prod_desc2 ctr_text mb_70">
                        <h2>{content.d0554e}</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="prod_desc3">
                                
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0549}</span>{content.d0547e}</p>
                                <p>{content.d0548e}</p>
                                <p>{content.d0551}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mt_50r">
                            <div className="prod_desc3">
                                
                                <p><span className="f_700 t_color f_size_30 lf_text3p1">{content.d0552}</span>{content.d0550e}</p>
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

            <TechStacks nLang={nLang} bk_col="bk_col5b"/>
            
            {/* <FAQ /> */}
            <Reveal>
            <div className=" wrapper_padding7xb sec_pad35 ctr_text row">

                <div className="col-12 prod_desc1 ctr_text2">
                    <h2 className="">{content.d0556}</h2>
                    <p className="mb_100">{content.d0555}</p>
                    {/* <a href={content.d0386} className="mt_70 txt_gap2 about_btn wow fadeInRight" data-wow-delay="0.4s">{content.d0032}</a> */}
                </div>

                <div className="col-12 prod_desc1 ctr_text2 ">
                    <h2 className="mb_50">{content.d0557}</h2>
                    <Link href={content.d0386} data-wow-delay="0.4s"><a className="mt_130 ctr_text txt_gap2 about_btn wow fadeInRight">{content.d0032}</a></Link>
                </div>

                

            </div>
            </Reveal>
            </section>
            
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default Product
