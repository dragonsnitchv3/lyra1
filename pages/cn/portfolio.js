import React from 'react';

import OnepageMenu from '../../components/OnepageMenu';

import Footer from '../../components/Footer/FooterCN';
import ServiceAb from '../../components/Service/ServiceAb';
import FooterData from '../../components/Footer/FooterData';
import AgencyAction from '../../components/AgencyAction';
import textData from '../../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import Particles from 'react-particles-js';
import dynamic from 'next/dynamic';
import ServicePort from "../../components/Service/ServicePort";

class DigitalMarketing extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "//js.hs-scripts.com/7851342.js";
        script.async = true;
    
        document.body.appendChild(script);
      }

      



    render(){
        const cLang = "cn"
        const content = textData.chinese;
        const DynamicComponentWithNoSSR = dynamic(
            () => import('../../components/ParticleJs'),
            { ssr: false }
        )
        return(
            <div className="body_wrapper">
                <DynamicComponentWithNoSSR />
                <Head>
                    <title>{content.d0002}{content.d0443}</title>
                    <meta name="description" content={content.d0034} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu nLang={cLang} navL={content.d0385d}/>
                {/* <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL=""/> */}
                {/* <Hamburger /> */}
                <ServicePort nLang={cLang} />
                
                {/* <Service ServiceData={ServiceData} nLang={cLang}/> */}
                <AgencyAction nLang={cLang}/>
                <Footer nLang={cLang}/>
            </div>
        )
    }
    
}
export default DigitalMarketing;