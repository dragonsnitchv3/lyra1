import React from 'react';
import OnepageMenu from '../../components/OnepageMenu';
import FooterData from '../../components/Footer/FooterData';
import Footer from '../../components/Footer/Footer';
import textData from '../../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import Product2 from '../../components/Service/SubService/ServiceProd2OBS';
import dynamic from 'next/dynamic';

class OBS extends React.Component {

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
                <Head>
                    <title>{content.d0011b}{content.d0443}</title>
                    <meta name="description" content={content.d0283} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL={content.d0390}/>
                {/* <StartupBanner PtitleBTF = {true} PdescriptionTF ={true} Ptitle={content.d0282} Psub ={content.d0283} Pdescription={content.d0284} Limg={require('../../img/home7/book1.png')} nLang={cLang} nTheme="agency_banner_area_three"/>  */}
                {/* <ServiceP ServiceData={ServiceData} Title={content.d0285} OBS={true} Hicon='ti-credit-card' iclass='icon_four' hrno3="hr3_four" hrno4="hr4_four" dataNo={content.d0440} dataNo2={content.d0436} nLang={cLang}/>      
                <ReadyTo FooterData={FooterData} nLang={cLang}/> */}
                {/* <HostingActionTwo nLang={cLang}/>
                <FaqSection dataNo={content.d0414} C1T={content.d0072} C2T={content.d0090} C3T={content.d0106} nLang={cLang}/> */}
                {/* <OBSL hrno3="hr3_four" hrno4="hr4_four"/> */}
                <Product2 nLang={cLang}/>
                {/* <SecurityFeatures nLang={cLang}/> */}
                <Footer FooterData={FooterData} nLang={cLang}/>
                </div>
        )
    }
    
    
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default OBS










{/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new2" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF ={true} Ptitle="E-COMMERCE" Psub ="The complete E-Commerce package." Pdescription="Hyatt Labs`s techonological experiences stretches throughout various industries, bringing you wider range of products and expertise."/> */}
{/* <ServiceAdv ServiceData={ServiceData} /> */}{/* <ServiceC ServiceData={ServiceData} /> */}