import React from 'react';
import OnepageMenu from '../components/OnepageMenu';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import textData from '../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import Particles from 'react-particles-js';
import dynamic from 'next/dynamic';

class Contact extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "//js.hs-scripts.com/7851342.js";
        script.async = true;
    
        document.body.appendChild(script);
      }
      
    render() {
        const cLang = "en"
        const content = textData.english;
        const DynamicComponentWithNoSSR = dynamic(
            () => import('../components/ParticleJs'),
            { ssr: false }
        )

        return(
            <div className="body_wrapper">
            <DynamicComponentWithNoSSR />
                <Head>
                    <title>{content.d0006}{content.d0443}</title>
                    <meta name="description" content={content.d0341} />
                    <meta name="googlebot" content="index,follow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL={content.d0386}/>
                {/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new_contact" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF={false} Ptitle={content.d0361} Pdescription="" imgName2={require("../img/contact2.png")} nLang={cLang}/> */}
                <Contacts nLang={cLang}/>
                <Footer FooterData={FooterData} nLang={cLang}/>
            </div>
        )
    }
    
}

export default Contact