import React from 'react';
import OnepageMenu from '../../../components/OnepageMenu';
import ServiceP from '../../../components/Service/ServiceOnly';

import Footer from '../../../components/Footer/Footer';
import ServiceData from '../../../components/Service/ServiceData';
import FooterData from '../../../components/Footer/FooterData';
import AgencyAction from '../../../components/AgencyAction';

import textData from '../../../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import dynamic from 'next/dynamic';

class Service extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "//js.hs-scripts.com/7851342.js";
        script.async = true;
    
        document.body.appendChild(script);
      }
      
    render() {
        var {lang} = this.props

        const cLang = "cn"
        const content = textData.chinese;

        const DynamicComponentWithNoSSR = dynamic(
            () => import('../../../components/ParticleJs'),
            { ssr: false }
        )

        return(
            <div className="body_wrapper">
                <DynamicComponentWithNoSSR />
                <Head>
                    <title>{content.d0003}{content.d0443}</title>
                    <meta name="description" content={content.d0359} />
                    <meta name="googlebot" content="index,follow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL={content.d0385b}/>
                {/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new_product" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF ={true} Ptitle={content.d0358} Pdescription={content.d0359} imgName2={require("../img/Products.png")} nLang={cLang}/> */}
                <ServiceP ServiceData={ServiceData} nLang={cLang}/>
                {/* <SecurityCustomerLogo nLang={cLang}/> */}
                <AgencyAction nLang={cLang}/>
                <Footer fClass="pt_150" FooterData={FooterData} nLang={cLang}/>
                
            </div>
        )
    }
    
}

export default Service