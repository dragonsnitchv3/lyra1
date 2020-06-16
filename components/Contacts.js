import React, {Component} from 'react';
import axios from 'axios';
import textData from './Data/TextData';
import {connect} from 'react-redux';
import Fade from 'react-reveal/Fade';

var t1 = textData.english.d0384;
var t2 = textData.english.d0383;

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          phone: '',
          product: '',
          message: ''
        }
      }

      onNameChange = (event) => {
        this.setState({name: event.target.value})
      }
    
      onEmailChange = (event) => {
        this.setState({email: event.target.value})
      }

      onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
      }

      onProductChange = (event) => {
        this.setState({product: event.target.value})
      }
    
      onMessageChange = (event) => {
        this.setState({message: event.target.value})
      }

      resetForm= () => {
    
        this.setState({name: "", email: "", message: "" , product: "", phone: ""})
     }

    //   handleSubmit = ( event ) => {
    //     event.preventDefault();
    //     console.log(this.state);
    //   }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const phone = this.state.phone;
        const product = this.state.product;
        const message = this.state.message;
        axios({
            method: "POST", 
            url:"https://bknv2-kip10nxm0.vercel.app/send",
            // url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                phone: phone,  
                product: product, 
                message: message
            }
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert(`${t1}`); 
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert(`${t2}`)
            }
        })
    }

    render(){

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
            <section className="contact_info_area sec_pad ">
                <div className="container">
                    <div className="row ">
                    <Fade bottom cascade>
                    <div className="contact_form col-lg-8">
                            {/* <h2 className={`contact_info_item2 f_p f_size_24 t_color3 f_700 l_height28 `}>{content.d0340}</h2>
                            <h2 className="contact_info_item3 f_p f_size_16 t_color3 f_400">{content.d0341}</h2> */}
                            <div className="about_pg mb_70 mt_30r">
                                <h1 className="mb_40">{content.d0485}<span className="font_col1">{content.d0485a}</span></h1>
                                <hr className="hr12"></hr>
                            </div>

                            <form action="#" className="contact_form_box" method="post" id="contactForm" onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="column">
                                            <h2 className="f_p f_size_14 t_color3 f_600">{content.d0342}</h2>
                                            <div className="form-group text_box">
                                                <input type="text" id="name" name="name" value={this.state.name} placeholder={content.d0343} onChange={this.onNameChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="column">
                                            <h2 className="f_p f_size_14 t_color3 f_600">{content.d0344}</h2>
                                            <div className="form-group text_box">
                                                <input type="text" name="email" id="email" value={this.state.email} placeholder={content.d0345} onChange={this.onEmailChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="column">
                                            <h2 className="f_p f_size_14 t_color3 f_600">{content.d0346}</h2>
                                            <div className="form-group text_box">
                                                <input type="text" id="phone" name="phone" value={this.state.phone} placeholder={content.d0347} onChange={this.onPhoneChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="column">
                                            <h2 className="f_p f_size_14 t_color3 f_600">{content.d0348}</h2>
                                            <div className="form-group text_box">
                                                <input type="text" id="product" name="product" value={this.state.product} placeholder={content.d0349} onChange={this.onProductChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="column">
                                            <h2 className="f_p f_size_14 t_color3 f_600">{content.d0350}</h2>
                                            <div className="form-group text_box">
                                                <textarea name="message" id="message" cols="30" rows="10" value={this.state.message} placeholder={content.d0351} onChange={this.onMessageChange}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_three">{content.d0352}</button>
                            </form>
                            <div id="success">{content.d0353}</div>
                            <div id="error">{content.d0354}</div>
                        </div>
                        </Fade>
                        <Fade bottom cascade>
                        <div className="col-lg-1"></ div>
                        <div className="col-lg-3">
                        
                            <div className="contact_info_item mt_40">
                                
                                <h6 className={`f_p f_size_24 t_color3 f_400 mb_20 ${gap1}`}>{content.d0333}</h6>
                                <p className="f_400 f_size_15 ">{content.d0327}</p>
                            </div>
                            <div className="border_btm1"></div>
                            <div className="contact_info_item sec_pad20">
                                <h6 className={`f_p f_size_24 t_color3 f_400 mb_20 ${gap1}`}>{content.d0334}</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3"><i className={`icon-call-end`}></i></span>{content.d0323}</p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3"><i className={`ti-email`}></i></span>{content.d0325}</p>

                            </div>
                            <div className="border_btm1"></div>
                            <div className="contact_info_item border_btm1 sec_pad20">
                                <h6 className={`f_p f_size_24 t_color3 f_400 mb_20 ${gap1}`}>{content.d0335}</h6>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">{content.d0336}</span>{content.d0323}</p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">{content.d0337}</span> <a href="">{content.d0339}</a></p>
                                <p className="f_400 f_size_15"><span className="f_400 t_color3">{content.d0338}</span> <a href="">{content.d0339}</a></p>
                            </div>
                        </div>
                        </Fade>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Contacts