import React, {Component} from 'react';
import textData from './Data/TextData';
import {connect} from 'react-redux';
import Particles from 'react-particles-js';
import Reveal from 'react-reveal';
import Link from 'next/link';


class AgencyAction extends Component {
    render(){
        let content;
        this.props.nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

        
        return(
            <section className="action_area_three sec_pad">
                {/* <div className="curved"></div> */}
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="action_content text-center">
                                <Reveal>
                                    <h2 className="ctr_text2 aga1">{content.d0031}</h2>
                                </Reveal>
                                <Reveal>
                                    <Link href={content.d0386} data-wow-delay="0.4s"><a className=" about_btn btn_hover wow fadeInUp">{content.d0032}</a></Link>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}

// const mapStateToProps = state => ({
//     lang: state.lang
// })

// export default connect(mapStateToProps)(AgencyAction)

export default AgencyAction