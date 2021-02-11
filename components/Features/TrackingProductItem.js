import React, {Component} from 'react';
import Reveal from 'react-reveal';
import textData from '../Data/TextData';
import Link from 'next/link';
import ProgressiveImage from 'react-progressive-image';

class TrackingProductItem extends Component {
    
    render(){
        let {nLang, itemClass, rowclass, image, imagepre, TrackingTitle, Trackingd, Trackingd2, Trackingbtn}= this.props;
        let content;

        nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)
        return(

            <div className={`tracking_pr_item ${itemClass}`}>
                <div className={`row align-items-center ${rowclass}`}>
                    <div className="col-lg-6 tracking_bg">
                        <ProgressiveImage src={"/img/" + image} placeholder={"/img/" + imagepre}>
                            {src => <img className="img_size_square_ab" src={src} alt="" />}
                        </ProgressiveImage>
                        {/* <img className= "software_img" src={"/img/" + image} alt=""/> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="tracking_content wow fadeInDown">
                            <h3>{TrackingTitle}</h3>
                            <p>{Trackingd}</p>
                            <p>{Trackingd2}</p>
                            <Link href={content.d0386}><a className="seo_btn seo_btn_two btn_hover">{Trackingbtn}</a></Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default TrackingProductItem;