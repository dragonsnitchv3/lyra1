import React from 'react';
import AppBanner from '../../components/Banner/AppBanner';
import OnepageMenu from '../../components/OnepageMenu';
import AgencyAction from '../../components/AgencyAction';
import Footer from '../../components/Footer/FooterCN';
import AllOne from "../../components/AllOne";
import textData from '../../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import dynamic from 'next/dynamic'

class DigitalMarketing extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "//js.hs-scripts.com/7851342.js";
        script.async = true;
    
        document.body.appendChild(script);
      }

      // H

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
                    <title>{content.d0439a}</title>
                    <meta name="description" content={content.d0034} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu nLang={cLang} navL=""/>
                {/* <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL=""/> */}
                {/* <Hamburger /> */}
                <AppBanner nLang={cLang}/>
                <AllOne nLang={cLang}/>
                
                {/* <Service ServiceData={ServiceData} nLang={cLang}/> */}
                <AgencyAction nLang={cLang}/>
                <Footer nLang={cLang}/>
            </div>
        )
    }
    
}
export default DigitalMarketing;