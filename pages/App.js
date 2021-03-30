import React from 'react';
import AppBanner from '../components/Banner/AppBanner';
import OnepageMenu from '../components/OnepageMenu';
import AgencyAction from '../components/AgencyAction';
import Footer from '../components/Footer/Footer';
import AllOne from "../components/AllOne";
import textData from '../components/Data/TextData';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet'
import dynamic from 'next/dynamic';
import Head from 'next/head'

class DigitalMarketing extends React.Component {
    componentDidMount() {
        

        
    
        



         function disableselect(e) {
           return false
         }
         
         function reEnable() {
           return true
         }
         
         document.onselectstart = new Function ("return false")
         
         if (window.sidebar) {
           document.onmousedown = disableselect
           document.onclick = reEnable
         }

            document.onkeypress = function (event) {  
            event = (event || window.event);  
            if (event.keyCode == 123) {  
            return false;  
            }  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            }  
            document.onmousedown = function (event) {  
            event = (event || window.event);  
            if (event.keyCode == 123) {  
            return false;  
            }  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            }  
            document.onkeydown = function (event) {  
            event = (event || window.event);  
            if (event.keyCode == 123) {  
            return false;  
            }  else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
                    return false;
                }
            } 
            
          
      }



    render(){
        const cLang = "en"
        const content = textData.english;
        const DynamicComponentWithNoSSR = dynamic(
            () => import('../components/ParticleJs'),
            { ssr: false }
        )

        const schemaData = 

            {
                "@context": "http://www.schema.org",
                "@type": "SoftwareCompany",
                "name": "Lyratics Technologies",
                "url": "https://www.lyratics.com/",
                "logo": "https://dbtt8lz9zizso.cloudfront.net/mail/lyratics.png",
                "description": "Lyratics Technologies provides web, android & ios mobile app development services in Malaysia and internationally. We are a web and mobile app developer that specializes in developing distinctive web and mobile apps that grow your business.",
                "address": {
                   "@type": "PostalAddress",
                   "streetAddress": "Level 8, MCT Tower Sky Park, Jalan USJ 25/1, One City",
                   "addressLocality": "Subang Jaya",
                   "addressRegion": "Selangor",
                   "postalCode": "47650",
                   "addressCountry": "Malaysia"
                },
                "geo": {
                   "@type": "GeoCoordinates",
                   "latitude": "3.0215469",
                   "longitude": "101.5801311"
                },
                "hasMap": "https://www.google.com/maps/place/Lyratics+Technologies/@3.0215469,101.5801311,15z/data=!4m2!3m1!1s0x0:0xfd4435796d89194?sa=X&ved=2ahUKEwi3ss7OwtfvAhV7yTgGHc0-DwUQ_BIwCnoECBgQBQ",
                 "openingHours": "Mo 09:00-20:00 Tu 09:00-20:00 We 09:00-01:00 Th 09:00-20:00 Fr 09:00-20:00 Sa 09:00-20:00",
                "telephone": "01161887508"
              }
              
        return(
            <div className="body_wrapper">
                <DynamicComponentWithNoSSR />
                <Head>
                    <title>{content.d0439a}</title>
                    <meta name="description" content={content.d0034a} />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                    />
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