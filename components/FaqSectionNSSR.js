import React, {Component} from 'react';
import textData from './Data/TextData'
import {connect} from 'react-redux';
import Reveal from 'react-reveal/Reveal';
import 'bootstrap/dist/js/bootstrap.min.js';


// tab-pane 

class FaqSection extends Component {

    render(){
        var {dataNo, C1T, C2T, C3T, hideD2} = this.props
        let content;

        this.props.nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

        let gap1;

        this.props.nLang === 'en' ?
        (gap1 = "txt_gap1"):
        (gap1 = "")
    
        let gap2;
    
        this.props.nLang === 'en' ?
        (gap2 = "txt_gap2"):
        (gap2 = "")
        
        return(
            <section className="faq_area bk_col5">
                <div className="">

                    {/* <div className="triangle-down "></div> */}
                    <div className="verticle_lineg1_ctr"></div>

                    <div className="wrapper_padding3 prod_desc2 lf_text max_width">
                            <Reveal effect="fadeInUp" duration={1300}><h2>{content.d0557a}</h2></Reveal>
                    </div>  

                    <div className="row">
                    {/* <div className="col-lg-2"></div> */}
                    
                        <div className="col-lg-12">
                            <div className="tab-content faq_content" id="myTabContent">
                                <div className="tab-pane fade show active" id="purchas" role="tabpanel" aria-labelledby="purchas-tab">
                                    {/* <h3 className="f_p f_size_22 f_500 t_color3 mb_20">How to purchase</h3> */}
                                    {/* <div className="hosting_title analytices_title text-center">
                        
                                            <h2 className={`wow fadeInUp ${gap1}`}><span>{content.d0417a}</span>{content.d0417}</h2>
                                            <p className="wow fadeInUp" data-wow-delay="0.3s">{content.d0418}</p>
                                    </div> */}

                                    
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h6>{content.d0462}</h6>
                                                <h5 className="mb-0">
                                                
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    {C1T}<i className="ti-plus"></i><i className="ti-minus"></i>
                                                    </button>
                                                </h5>
                                            </div>
    
                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="tab-pane fade show active  " id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    {dataNo.Col1.map(post =>(
                                                        <React.Fragment key={post.id}>
                                                            
                                                            <div className="h_price_body ">
                                                                
                                                                <div className="price_head2">
                                                                        <div className="p_head2">
                                                                            <h5>{post.title}</h5>
                                                                        </div>
                                                                </div>

                                                                <div className="price_head">
                                                                    <div className="p_head">
                                                                        <h5>{content.d0415}</h5>
                                                                    </div>

                                                                    <div className="p_head">
                                                                        <h5>{content.d0416}</h5>
                                                                    </div>
                                                                    
                                                                </div>
                                                                
                                                                <div className="h_price_body">
                                                                    {
                                                                        post.desc.map( list => {
                                                                            return(
                                                                                

                                                                                <div className="h_p_list" key={list.id}>
                                                                                    <div className="h_price_item  memory" data-title="Memory">
                                                                                        <p>{list.Feature}</p>
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
                                    {
                                        hideD2 ? 
                                        null :
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h6>{content.d0462}</h6>
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    {C2T}<i className="ti-plus"></i><i className="ti-minus"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                        {dataNo.Col2.map(post =>(
                                                            <React.Fragment key={post.id}>
                                                                
                                                                <div className="h_price_body">
                                                                    
                                                                    <div className="price_head2">
                                                                            <div className="p_head2">
                                                                                <h5>{post.title}</h5>
                                                                            </div>
                                                                    </div>

                                                                    <div className="price_head">
                                                                        <div className="p_head">
                                                                            <h5>{content.d0415}</h5>
                                                                        </div>

                                                                        <div className="p_head">
                                                                            <h5>{content.d0416}</h5>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="h_price_body">
                                                                        {
                                                                            post.desc.map( list => {
                                                                                return(
                                                                                    

                                                                                    <div className="h_p_list" key={list.id}>
                                                                                        <div className="h_price_item  memory" data-title="Memory">
                                                                                            <p>{list.Feature}</p>
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
                                    }
                                        
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h6>{content.d0462}</h6>
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    {C3T}<i className="ti-plus"></i><i className="ti-minus"></i>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                        {dataNo.Col3.map(post =>(
                                                            <React.Fragment key={post.id}>
                                                                
                                                                <div className="h_price_body">
                                                                    
                                                                    <div className="price_head2">
                                                                            <div className="p_head2">
                                                                                <h5>{post.title}</h5>
                                                                            </div>
                                                                    </div>

                                                                    <div className="price_head">
                                                                        <div className="p_head">
                                                                            <h5>{content.d0415}</h5>
                                                                        </div>

                                                                        <div className="p_head">
                                                                            <h5>{content.d0416}</h5>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    
                                                                    <div className="h_price_body">
                                                                        {
                                                                            post.desc.map( list => {
                                                                                return(
                                                                                    

                                                                                    <div className="h_p_list" key={list.id}>
                                                                                        <div className="h_price_item  memory" data-title="Memory">
                                                                                            <p>{list.Feature}</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-2"></div> */}
                    <div className="mt_40 verticle_lineg1_ctr"></div>
                    <div className="triangle-up "></div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang
})


export default FaqSection