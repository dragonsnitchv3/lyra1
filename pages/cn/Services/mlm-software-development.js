import React from 'react';
import OnepageMenu from '../../../components/OnepageMenu';
import FooterData from '../../../components/Footer/FooterData';
import Footer from '../../../components/Footer/FooterCN';
import textData from '../../../components/Data/TextData';
import {connect} from 'react-redux';
import Head from 'next/head';
import Product2 from '../../../components/Service/SubService/ServiceProd2MLM';
import dynamic from 'next/dynamic';

class MLM extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "//js.hs-scripts.com/7851342.js";
        script.async = true;
    
        document.body.appendChild(script);
      }
      
    render() {
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
                    <title>{content.d0138}/{content.d0138a}{content.d0138b}{content.d0443}</title>
                    <meta name="description" content={content.d0141} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Head>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL={content.d0385aa}/>
                {/* <CrmBanner PtitleBTF = {true} PdescriptionTF ={true} Ptitle="MLM" Psub ="The complete MLM package." Pdescription="Hyatt Labs`s techonological experiences stretches throughout various industries, bringing you wider range of products and expertise."/> */}
                <Product2 nLang={cLang}/>
                {/* <StartupBanner PtitleBTF = {true} PdescriptionTF ={true} Ptitle={content.d0138} Psub ={content.d0141} Pdescription={content.d0139} Limg={require('../../img/home7/mlm1.png')} nLang={cLang} nTheme="agency_banner_area_two"/>  */}
                {/* <ServiceP ServiceData={ServiceData} Title={content.d0140} MLM={true} Hicon='ti-user' iclass='icon_one' hrno3="hr3_one" hrno4="hr4_one" dataNo={content.d0441} dataNo2={content.d0436} nLang={cLang}/>      
                <ReadyTo FooterData={FooterData} nLang={cLang}/> */}
                {/* <HostingActionTwo nLang={cLang}/> */}
                {/* <FaqSection dataNo={content.d0413} C1T={content.d0143} C2T={content.d0170} C3T={content.d0188} nLang={cLang}/> */}
                {/* <MLML hrno3="hr3" hrno4="hr4"/> */}
                {/* <SecurityFeatures nLang={cLang}/> */}
                <Footer FooterData={FooterData} nLang={cLang}/>
                </div>
        )
    }
    
}


const mapStateToProps = state => ({
    lang: state.lang
})

export default MLM










{/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new2" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF ={true} Ptitle="E-COMMERCE" Psub ="The complete E-Commerce package." Pdescription="Hyatt Labs`s techonological experiences stretches throughout various industries, bringing you wider range of products and expertise."/> */}
{/* <ServiceAdv ServiceData={ServiceData} /> */}{/* <ServiceC ServiceData={ServiceData} /> */}