import React, {Component} from 'react';
import textData from '../Data/TextData'
import {connect} from 'react-redux';
import ExpandCollapse from 'react-expand-collapse';

class HostingPlan extends Component {
    
    render(){
        var {dataNo, C1T, C2T, C3T} = this.props
        let content;

        this.props.nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

        return(
            <section className="h_pricing_area sec_pad">
            <div className="container">
                {/* <Sectitle Title={content.d0417} TitleP={content.d0418} sClass="hosting_title text-center"/> */}
                <div className="hosting_title analytices_title text-center">
                        
                        <h2 className="wow fadeInUp"><span>{content.d0417a}</span>{content.d0417}</h2>
                        <p className="wow fadeInUp" data-wow-delay="0.3s">{content.d0418}</p>
                </div>
                <div className="h_price_inner">
                    <ul className="nav nav-tabs hosting_tab" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">{C1T}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">{C2T}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">{C3T} </a>
                        </li>
                    </ul>
                    <div className="tab-content h_price_tab" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            {dataNo.Col1.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>{content.d0415}</h5>
                                            </div>

                                            <div className="p_head">
                                                <h5>{content.d0416}</h5>
                                            </div>
                                            
                                        </div>
                                        <ExpandCollapse previewHeight= "145px" expandText={content.d0393} collapseText={content.d0394} ellipsisText="">
                                        <div className="h_price_body">
                                            {
                                                post.desc.map( list => {
                                                    return(
                                                        
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Feature}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h6>{content.d0424}</h6>
                                                            </div>
                                                        </div>
                                                       
                                                    )
                                                })
                                            }
                                        </div>
                                        </ExpandCollapse>
                                    </div> 
                                </React.Fragment>          
                            ))}
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            {dataNo.Col2.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>{content.d0415}</h5>
                                            </div>

                                            <div className="p_head">
                                                <h5>{content.d0416}</h5>
                                            </div>
                                            <div className="p_head c_width">
                                                    
                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.desc.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5 className="h_price_itemh5">{list.Feature}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h6>{content.d0424}</h6>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                </React.Fragment>          
                            ))}
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            {dataNo.Col3.map(post =>(
                                <React.Fragment key={post.id}>
                                    <p>{post.title}</p>
                                    <div className="h_price_body">
                                        <div className="price_head">
                                            <div className="p_head">
                                                <h5>{content.d0415}</h5>
                                            </div>

                                            <div className="p_head">
                                                <h5>{content.d0416}</h5>
                                            </div>
                                            <div className="p_head c_width">
                                                    
                                            </div>
                                        </div>
                                        <div className="h_price_body">
                                            {
                                                post.desc.map( list => {
                                                    return(
                                                        <div className="h_p_list" key={list.id}>
                                                            <div className="h_price_item memory" data-title="Memory">
                                                                <h5>{list.Feature}</h5>
                                                            </div>
                                                            <div className="h_price_item c_width">
                                                                <h6>{content.d0424}</h6>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div> 
                                </React.Fragment>          
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang
})


export default HostingPlan