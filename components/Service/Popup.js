import React from 'react';  
import textData from '../Data/TextData'; 
import TechIcon from '../Features/STechIcon'
import TechIconM from '../Features/TechIconM'
import ProgressiveImage from 'react-progressive-image';
import Link from 'next/link'

class Popup extends React.Component {  
  render() {  

    var {PContent} = this.props;

    let content;

    this.props.nLang === 'en' ?
    (content = textData.english):
    (content = textData.chinese)
    
return (  
<div className='popup'>  
<div className='popup_inner'>
    <div className="sec_pad32a wrapper_padding2a">
        <div className="row">
            <div className="col-lg-11 col-9 home_desc7">
                <h1>{PContent.Ptitle}</h1>
                <h2>{PContent.Pdescription}</h2>
            </div>
            <div className="col-lg-1 col-3">
                <a className="pointer_1" onClick={this.props.closePopup}><p className="close_1">X</p></a>
            </div>
        </div>
        <div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <ProgressiveImage src={"/img/works/" + PContent.Pimg1} placeholder={"/img/works/" + PContent.Pimgpre}>
                        {src => <img className="img_size_square_pb2" src={src} alt="" />}
                    </ProgressiveImage>  
                </div>
                <div className="col-lg-6 col-12 mt_20r mb_40">
                    <div className="home_desc8">
                        <h1>{PContent.PInsert1}<br /></h1>
                        <h1><br /></h1>
                        <h1>{PContent.PInsert2}</h1>
                    </div>

                    <div>
                        <div className="home_desc7 mt_30 mb_20">
                            <h3>{content.d0656}</h3>
                        </div>
                        <div className="row disp_mob">
                            <div className="row ">
                                {
                                    PContent.PTech.map((item) => {
                                        return(
                                            <TechIcon Pimg={item.Pimg} Pdesc={item.Pdesc}/>
                                        )
                                        
                                    })
                                } 
                            </div>
                        </div>
            
                        <div className="row disp_dks justify-content-center">
                            
                                {
                                    PContent.PTech.map((item) => {
                                        return(
                                            <TechIconM Pimg={item.Pimg} Pdesc={item.Pdesc}/>
                                        )
                                        
                                    })
                                } 
                        </div>
                    </div>
                    
                    <div className="sec_pad36r"> 
                        <a href={PContent.PLink} className="ctr_text hosting_btn2a wow fadeInUp">{content.d0659}</a>
                    </div>

                </div>
            </div>
        </div>
        
        
    </div>  
</div>  
</div>  
);  
}  
}  

export default Popup;