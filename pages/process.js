import React from 'react';
import OnepageMenu from '../components/OnepageMenu';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import {connect} from 'react-redux';
import AgencyAction from '../components/AgencyAction';
import Head from 'next/head'
import ServiceProc from '../components/Service/ServiceProc';
import dynamic from 'next/dynamic';
import textData from '../components/Data/TextData';

class Process extends React.Component {
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
            <div className="">
                <DynamicComponentWithNoSSR />
                <Head>
                    <title>{content.d0004}{content.d0443}</title>
                    <meta name="description" content={content.d0446} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL={content.d0386c}/>
                <ServiceProc nLang={cLang}/>
                <AgencyAction nLang={cLang}/>
                <Footer FooterData={FooterData} nLang={cLang}/>
            </div>
        )
    }

}

export default Process