import React from 'react';
import OnepageMenu from '../../../components/OnepageMenu';
import FooterData from '../../../components/Footer/FooterData';
import Footer from '../../../components/Footer/FooterCN';
import textData from '../../../components/Data/TextData';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet'
import Product2 from '../../../components/Service/SubService/ServiceProd2LOG';
import dynamic from 'next/dynamic';


class Logistics extends React.Component {

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
                <Helmet>
                    <title>{content.d0010}{content.d0443}</title>
                    <meta name="description" content={content.d0236} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </Helmet>
                <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" nLang={cLang} navL="Services/WarehouseManagementSystem"/>
                {/* <SecurityBanner PtitleBTF = {true} PdescriptionTF ={true} Ptitle={content.d0235} Psub ={content.d0236} Pdescription={content.d0237} Limg={require('../../img/home7/log1.png')} nLang={cLang}/> */}
                {/* <ServiceP ServiceData={ServiceData} Title={content.d0238} LOG={true} Hicon='ti-truck' iclass='icon_three' hrno3="hr3_three" hrno4="hr4_three" dataNo={content.d0441a} dataNo2={content.d0436} nLang={cLang}/>      
                <ReadyTo FooterData={FooterData} nLang={cLang}/> */}
                {/* <HostingActionTwo nLang={cLang}/>
                <FaqSection dataNo={content.d0412} C1T={content.d0250} C2T={content.d0261} C3T={content.d0240} nLang={cLang}/> */}
                {/* <LOGL hrno3="hr3_three" hrno4="hr4_three"zz/> */}
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

export default Logistics










{/* <Breadcrumb3 breadcrumbClass="breadcrumb_area_new2" imgName="breadcrumb/banner_bg.png" PtitleBTF = {true} PdescriptionTF ={true} Ptitle="E-COMMERCE" Psub ="The complete E-Commerce package." Pdescription="Hyatt Labs`s techonological experiences stretches throughout various industries, bringing you wider range of products and expertise."/> */}
{/* <ServiceAdv ServiceData={ServiceData} /> */}{/* <ServiceC ServiceData={ServiceData} /> */}