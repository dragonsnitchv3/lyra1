    import React , {Component} from 'react';
    import Link from 'next/link';
    import Reveal from 'react-reveal/Reveal'
    import textData from '../Data/TextData'
    import {connect} from 'react-redux';
    import axios from 'axios';

    var t1 = textData.english.d0382;
    var t2 = textData.english.d0383;

    class Footer extends Component {

        constructor(props) {
            super(props);
            this.state = {
              email: '',
            }
          }

        onEmailChange = (event) => {
            this.setState({email: event.target.value})
        }

        // handleSubmit = ( event ) => {
        //     event.preventDefault();
        //     console.log(this.state);
        // }

        handleSubmit = (e) => {
            e.preventDefault();
            
            const email = this.state.email;
            
            axios({
                method: "POST", 
                url:"https://bknv2-kip10nxm0.vercel.app/sends", 
                // url:"https://localhost:3002/sends", 
                data: {
                    type: 'enquiry',
                    email: email,  
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

        resetForm= () => {
    
            this.setState({email: ""})
         }

         

        render(){

            let content;
            this.props.nLang === 'en' ?
            (content = textData.english):
            (content = textData.chinese)
// 7142f8 5e2ced 280666
            return(
                <footer className="new_footer_area bk_col5">
                    <div className="new_footer_top">
                        <div className="container">
                            <div className="row">
                                
                                            <Reveal effect="fadeInUp">
                                                <div className="col-lg-3">
                                                    <div className="ta_ctr f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                    <h3 className="ta_ctr f_600 t_color7 f_size_16 mb-30 ">{content.d0321}</h3>
                                                            <div className="sec_pad20a">
                                                                <img className="custom_logo1xab" src='/img/lyrad.png' alt=""/>
                                                            </div>
                                                       
                                                            <h className="f_400 f_size_14 mb-0 t_color9"><i className={`icon-call-end`}></i>{content.d0322}</h>
                                                            <h2 className="f_600 f_size_14 mb_15 t_color">{content.d0323}</h2>
                                                            <h className="f_400 f_size_14 mb-0 t_color9"><i className={`ti-email`}></i>{content.d0324}</h>
                                                            <h2 className="f_600 f_size_14 mb_15 t_color">{content.d0325}</h2>
                                                            <h className="f_400 f_size_14 mb-0 t_color9"><i className={`ti-map-alt`}></i>{content.d0326}</h>
                                                            <h2 className="f_600 f_size_14 mb_15 t_color">{content.d0327}</h2>
                                                            <h className="f_400 f_size_14 mb-0 t_color9"><i className={`icon-clock`}></i>{content.d0328}</h>
                                                            <h2 className="f_600 f_size_14 mb_15 t_color">{content.d0329}</h2>
                                                            
                                                        
                                                    
                                                    </div>
                                                </div>
                                            </Reveal>
                                        
                                {
                                    content.d0330.map(widget=>{
                                        return(
                                            <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="ta_ctr f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                    <h3 className="f_600 t_color7 f_size_16 mb-30 ">{widget.title}</h3>
                                                    <ul className="list-unstyled f_list">
                                                        {
                                                            widget.menuItems.map(item =>{
                                                                return(
                                                                    <Link href={item.url}><li key={item.id} href={item.url}>{item.text}</li></Link>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            </Reveal>
                                        )
                                    })
                                }
                                {
                                    content.d0331.map(widget=>{
                                        return(
                                            <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                            <div className="col-lg-3">
                                                <div className="ta_ctr f_widget about-widget pl_10 wow fadeInLeft" data-wow-delay="0.4s">
                                                    <h3 className="f_600 t_color7 f_size_16  mb-30 ">{widget.title}</h3>
                                                    <ul className="list-unstyled f_list">
                                                        {
                                                            widget.menuItems.map(item =>{
                                                                return(
                                                                    <Link href={item.url}><li key={item.id} href={item.url}>{item.text}</li></Link>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                            </Reveal>
                                        )
                                    })
                                }
                                {/* {
                                    FooterData.SocialLinks.map(widget=>{
                                        return(
                                            <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                    <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                    <div className="f_social_icon">
                                                        {
                                                            widget.menuItems.map(item =>{
                                                                return(
                                                                    <Link to="/" key={item.id}><i className={item.icon}></i></Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            </Reveal>
                                        )
                                    })
                                } */}
                                {
                                    content.d0320.map(widget=>{
                                        return(
                                            <Reveal effect="fadeInLeft" duration={500} key={1}>
                                                <div className="col-lg-3" >
                                                    <div className="ta_ctr f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                        <h3 className="f_600 t_color7 f_size_16 mb-30 ">{widget.title}</h3>
                                                        <p >{widget.description}</p>
                                                        <form action="#" className="f_subscribe_two mailchimp" method="post" onSubmit={this.handleSubmit}>
                                                            <input type="text" name="EMAIL" className="form-control memail" placeholder={content.d0345} onChange={this.onEmailChange}/>
                                                            <button className="btn btn_get btn_get_two" type="submit">{content.d0381}</button>
                                                            <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                                            <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        )
                                    })
                                }
                            </div>
                            
                        </div>
                        {/* <div className="footer_bg">
                            <div className="footer_bg_one"></div>
                            <div className="footer_bg_two"></div>
                        </div> */}
                    </div>
                    {/* <hr className="hr7"></hr> */}
                    <div className="footer_bottom mt_15">
                        <div className="container">
                            <div className="row "> {/*align-items-center*/}

                                <div className="col-lg-6 col-sm-6">
                                    {/* <a href="index.html" className="f-logo"><img className="custom_logo2" src={require('../../img/lyra1.png')} alt=""/></a> */}
                                </div>

                                <div className="col-lg-6 col-sm-6 right1">
                                    <p className="mb-0 f_400 f_size_12">{content.d0332}</p>
                                </div>

                                
                                
                            </div>
                        </div>
                    </div>
                </footer>
            )
        }
    }

    // const mapStateToProps = state => ({
    //     lang: state.lang
    // })
    
    // export default connect(mapStateToProps)(Footer)

    export default Footer