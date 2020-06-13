import React, {Component} from 'react';
import Link from 'next/link'
import Reveal from 'react-reveal';
import Fade from 'react-reveal/Fade';

class Portfolio2griditem extends Component{
    render(){
        var {pImg, Ptitle, Pdescription, PtOne, tTwo, colClass, Phref, Pduration } = this.props;
        return(
            
            <div className={`wrapper_padding portfolio_item mb_40r ${colClass} `}>
                
                <Link href={Phref}>
                
                <div className="portfolio_img">
                <Fade bottom duration={Pduration}><img src={"/img/portfolio/" + pImg} alt=""/></Fade>
                    <div className="hover_content">
                        
                        <div className="portfolio-description leaf">
                            
                                <h3 className="f_500 f_size_22 txt_gap1 f_p">{Ptitle}</h3>
                                
                            <div className="links">
                                <Link href={Phref}>{PtOne}</Link>
                            </div>
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