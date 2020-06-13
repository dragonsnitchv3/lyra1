import React from 'react';
import OnepageMenu from '../../components/OnepageMenu';
import FooterData from '../../components/Footer/FooterData';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet'
import textData from '../../components/Data/TextData';
import {connect} from 'react-redux';
import Product2 from '../../components/Service/SubService/ServiceProd2WP';
import dynamic from 'next/dynamic';

class WebPortal extends React.Component {

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
            <div className="body_wrapper">
                <DynamicComponentWithNoSSR />
                <Helmet>
                    <title>{content.d0012}{content.d0443}</title>
                    <meta name="description" content={content.d0304} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Helmet>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL="/Services/WebPortal"/>
                {/* <CrmBanner PtitleBTF = {true} PdescriptionTF ={true} Ptitle={content.d0303} Psub ={content.d0304} Pdescription={content.d0305} Limg={require('../../img/home7/portal1.png')} nLang={cLang}/>
                <HostingActionTwo nLang={cLang}/>
                <ServiceP ServiceData={ServiceData} Title={content.d0306} WBP={true} Hicon='ti-id-badge' iclass='icon_five' hrno3="hr3_five" hrno4="hr4_five" dataNo={content.d0442} dataNo2={content.d0447} nLang={cLang}/>       */}
                {/* <ReadyTo FooterData={FooterData} nLang={cLang}/>
                <SecurityFeatures nLang={cLang}/> */}
                <Product2 nLang={cLang}/>
                <Footer FooterData={FooterData} nLang={cLang}/>
                </div>
        )
    }
    
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default WebPortal










{/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new2" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF ={true} Ptitle="E-COMMERCE" Psub ="The complete E-Commerce package." Pdescription="Hyatt Labs`s techonological experiences stretches throughout various industries, bringing you wider range of products and expertise."/> */}
{/* <ServiceAdv ServiceData={ServiceData} /> */}{/* <ServiceC ServiceData={ServiceData} /> */}