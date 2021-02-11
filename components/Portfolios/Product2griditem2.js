import React, {Component} from 'react';
import Link from 'next/link'
import Reveal from 'react-reveal';
import Fade from 'react-reveal/Fade';
import ProgressiveImage from 'react-progressive-image';
import Popup from '../Service/Popup'

class Portfolio2griditem extends Component{

    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
          togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         } 

    render(){
        var {pImg, Ptitle, Pdescription, PtOne, tTwo, colClass, Phref, Pduration, pImgpre, Pop, PContent, nLang } = this.props;
        return(

                <div className={`wrapper_padding mb_40r ${colClass} `}>
                    
                    <div className={`portfolio_item2  `}>
                        <a onClick={this.togglePopup.bind(this)}>
                            <div className="portfolio_img">
                            
                            <ProgressiveImage src={"/img/works/" + pImg} placeholder={"/img/works/" + pImgpre}>
                                {src => <img className="img_size_square_pb" src={src} alt="" />}
                            </ProgressiveImage>                   
                        
                            
                            </div>
                        </a>
                    </div>
                    
                    <div className="home_desc6a mt_15">
                        <h>{Ptitle}</h>
                        <p>{Pdescription}</p>
                    </div>
                    
                    <div>
                        {this.state.showPopup ?  
                            <Popup  
                                    nLang={nLang}
                                    text='Click "Close Button" to hide popup'  
                                    closePopup={this.togglePopup.bind(this)} 
                                    PContent={PContent} 
                            />  
                            : null  
                        }
                    </div>
            
                </div>

                

            
            
            
            
        )
    }
}
export default Portfolio2griditem;