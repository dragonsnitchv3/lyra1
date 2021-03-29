import React from 'react';
import textData from '../Data/TextData';
import TechIcon from '../Features/TechIcon'
import TechIconM from '../Features/TechIconM'
import Reveal from 'react-reveal';


const TechStacks = ({ nLang, bk_col}) => {
    let content;

    nLang === 'en' ?
    (content = textData.english):
    (content = textData.chinese)

    return(
        <div className={`${bk_col} wrapper_padding7 sec_pad32`}>
            <Reveal>
            <div className="home_desc5 ctr_text2 mt_50r">
                <h1 className="txt_gap3">{content.d0419}</h1>
                <p className="">{content.d0421}</p>
                <h3>{content.d0420}</h3>
            </div>
            
            <div className="row disp_mob">
                <div className="row ctr_text2 justify-content-center">
                    {
                        content.d0482.map((item) => {
                            return(
                                <TechIcon pAlt={item.pAlt} Pimg={item.Pimg} Pdesc={item.Pdesc}/>
                            )
                            
                        })
                    } 
                </div>
            </div>
            
                <div className="row disp_dks justify-content-center">
                    
                        {
                            content.d0482.map((item) => {
                                return(
                                    <TechIconM pAlt={item.pAlt} Pimg={item.Pimg} Pdesc={item.Pdesc}/>
                                )
                                
                            })
                        } 


                    
                </div>
            </Reveal>
            <Reveal>
            <div className="home_desc5 ctr_text tech_logo_div mt_50r">
                <h3>{content.d0420a}</h3>
            </div>
            
            <div className="row disp_mob">
                <div className="row ctr_text2 justify-content-center">
                    {
                        content.d0483.map((item) => {
                            return(
                                <TechIcon pAlt={item.pAlt} Pimg={item.Pimg} Pdesc={item.Pdesc}/>
                            )
                            
                        })
                    } 
                </div>
            </div>

            <div className="row disp_dks justify-content-center"> 
                    {
                        content.d0483.map((item) => {
                            return(
                                <TechIconM pAlt={item.pAlt} Pimg={item.Pimg} Pdesc={item.Pdesc}/>
                            )
                            
                        })
                    } 
            </div>
            </Reveal>
        </div>
    )
}

export default TechStacks