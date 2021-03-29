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
import ServiceItemc from '../Service/HostingServiceitemc';
import KF from './Icon/KeyFunctions3'
import dynamic from 'next/dynamic';



class Product extends React.Component {
    render(){

    let content;
        this.props.nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

    const DynamicComponentWithNoSSR = dynamic(
        () => import('../ParticleJs2'),
        { ssr: false }
    )

    return(
        <div className="">
            <DynamicComponentWithNoSSR />
            <section >
                
                <div className="hideOnMobile">
                
                    <div className="row">
                        <div className="vertical-center col-lg-4 hover_sec1 verticle_100m">
                            <div className="prodm_pg3 wrapper_padding12b txt_gap3 ctr_text vertical-center">
                                <img className="img_size_square_ab4" src="/img/home7/corp1.png" alt="" />
                                <h1 className="vertical-center wrapper_padding11">{content.d0672}<br></br></h1>
                                <p className="wrapper_padding12b">{content.d0675}<br></br></p>
                            </div>
                        </div>
                        <div className="col-lg-4 hover_sec1 verticle_100m">
                        <div className="prodm_pg3 wrapper_padding12 txt_gap3 ctr_text vertical-center">
                            <img className="img_size_square_ab4" src="/img/home7/corp2.png" alt="" />
                                <h1 className="vertical-center wrapper_padding11">{content.d0673}<br></br></h1>
                                <p className="wrapper_padding12b">{content.d0676}<br></br></p>
                            </div>
                        </div>
                        <div className="col-lg-4 hover_sec1 verticle_100m">
                        <div className="prodm_pg3 wrapper_padding12 txt_gap3 ctr_text vertical-center">
                        <img className="img_size_square_ab4" src="/img/home7/corp3.png" alt="" />
                                <h1 className="vertical-center wrapper_padding11">{content.d0674}<br></br></h1>
                                <p className="wrapper_padding12b">{content.d0677}<br></br></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container disp_dks">
                        <div className="row">
                            
                            <div className="col-lg-6 col-12">
                                <div className="row">
                                    {
                                        content.d0678.map((item) => {
                                            return(
                                                <ServiceItemc Pduration={item.Pduration} Ptitle={item.Ptitle} Pdescription={item.Pdescription} Pimg={item.Pimg} Pimgpre={item.Pimgpre} PtOne={item.PtOne}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                                
                            
                        </div>
                    </div>
                
            </section>
            
        </div>
    )
}
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default Product
