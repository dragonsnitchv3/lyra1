import React from 'react';
import textData from '../../components/Data/TextData';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
import OnepageMenu from '../../components/OnepageMenu';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Service/ServiceProd';
import Particles from 'react-particles-js';
import dynamic from 'next/dynamic';

class WSWA extends React.Component {

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
            () => import('../../components/ParticleJs'),
            { ssr: false }
        )
        return(
            <div className="body_wrapper2">
               <DynamicComponentWithNoSSR />
                <Helmet>
                    <title>{content.d0481}{content.d0443}</title>
                    <meta name="description" content={content.d0470a} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Helmet>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL="/Services/WebDevelopment"/>
                <Product nLang={cLang}/>
                {/* <CloudBanner nLang={cLang}/>
                <TrackingProduct nLang={cLang}/>
                <HostingActionTwo nLang={cLang}/> */}
                <Footer nLang={cLang}/> 
                </div>
        )
    }
    
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default WSWA