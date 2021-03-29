import React, {Component} from 'react';
import Link from 'next/link'
import Reveal from 'react-reveal';
import Fade from 'react-reveal/Fade';
import ProgressiveImage from 'react-progressive-image';

class Portfolio2griditem extends Component{
    render(){
        var {pImg, Ptitle, Pdescription, PtOne, tTwo, colClass, Phref, Pduration, pImgpre } = this.props;
        return(
            
            <div className={`wrapper_padding portfolio_item mb_40r ${colClass} `}>
                
                <Link href={Phref}>
                
                <div className="portfolio_img">
                
                    <ProgressiveImage src={"/img/portfolio/" + pImg} placeholder={"/img/portfolio/" + pImgpre}>
                        {src => <img className="img_size_square_ab" src={src} alt="" />}
                    </ProgressiveImage>                   
                
                    <div className="hover_content">
                        
                        <div className="portfolio-description leaf">
                            
                                <h3 className="f_500 f_size_22 txt_gap1 f_p">{Ptitle}</h3>
                                
                            
                            <hr className="hr13"></hr>
                        </div>
                    </div>
                </div>
                </Link>
                
                <div className="home_desc6 mt_15 ctr_text">
                    <h>{Ptitle}</h>
                    <p>{Pdescription}</p>
                </div>
                
           
            </div>
            
            
        )
    }
}
export default Portfolio2griditem;