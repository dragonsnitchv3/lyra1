import React from 'react';
import OnepageMenu from '../../components/OnepageMenu';
import Footer from '../../components/Footer/Footer';
import AgencyAction from '../../components/AgencyAction';
import HostingPlan from '../../components/Features/HostingPlan';
import textData from '../../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import Product2 from '../../components/Service/SubService/ServiceProd2ECOM';
import dynamic from 'next/dynamic';

class Ecom extends React.Component {

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
                    <title>{content.d0008}{content.d0443}</title>
                    <meta name="description" content={content.d0705} />
                    <meta name="googlebot" content="index,follow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL={content.d0388}/>
                {/* <HostingBanner PtitleBTF = {true} PdescriptionTF ={true} Ptitle={content.d0067} Psub ={content.d0068} Pdescription={content.d0069} Limg={require('../../img/home7/ecom1.png')} nLang={cLang}/> */}
                {/* <ServiceP ServiceData={ServiceData} Title={content.d0070} ECOM={true} Hicon='ti-shopping-cart' iclass='icon_two' hrno3="hr3_two" hrno4="hr4_two" dataNo={content.d0437}  dataNo2={content.d0436} nLang={cLang}/>      
                <ReadyTo FooterData={FooterData} nLang={cLang}/> */}
                {/* <HostingActionTwo nLang={cLang}/>
                <FaqSection dataNo={content.d0411} C1T={content.d0072} C2T={content.d0090} C3T={content.d0106} nLang={cLang}/> */}
                {/* <HostingPlan dataNo={content.d0411} C1T={content.d0072} C2T={content.d0090} C3T={content.d0106} nLang={cLang}/> */}
                {/* <ECOML hrno3="hr3_two" hrno4="hr4_two"/> */}
                <Product2 nLang={cLang}/>
                {/* <SecurityFeatures nLang={cLang}/> */}
                <Footer nLang={cLang}/>
                </div>
        )
    }

    
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default Ecom










{/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new2" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF ={true} Ptitle="E-COMMERCE" Psub ="The complete E-Commerce package." Pdescription="Hyatt Labs`s techonological experiences stretches throughout various industries, bringing you wider range of products and expertise."/> */}
{/* <ServiceAdv ServiceData={ServiceData} /> */}{/* <ServiceC ServiceData={ServiceData} /> */}