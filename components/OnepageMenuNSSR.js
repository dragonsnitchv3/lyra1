import React, {Component} from 'react';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';
import 'bootstrap/dist/js/bootstrap.min.js';
import textData from './Data/TextData'

class OnepageMenu extends Component {
    componentDidMount() {
        $(window).on("load",function(){
            $('.mega_menu_two .scroll').mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0
            })
        })
    }


    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass, nLang, navL} =this.props;

        let content;

        nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed"> {/*.navbar_fixed .header_area */}
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_onez ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        {
                            nLang === 'en' ?
                            <Link href={content.d0386e}>
                                <a className={`navbar-brand ${slogo}`}>
                                    <img className="custom_logo1x" src="/img/lyrad.png" alt=""/>
                                    <img className="custom_logo1xa" src="/img/lyrad.png" alt="logo"/>
                                </a>    
                            </Link>
                            :
                            <Link  href={content.d0386e}>
                                <a className={`navbar-brand ${slogo}`}>
                                <img className="custom_logo1" src="/img/lyracn2.png" alt=""/>
                                <img className="custom_logo1a" src="/img/lyracn2.png" alt="logo"/>
                                </a>
                            </Link>
                        }
                        
                        {/* <img className={'flag'} onClick={() => this.props.en()} src={require("../img/united-kingdom2.png")}/> */}
                        {/* <img className={'flag'} onClick={() => this.props.cn()} src={require("../img/china2.png")}/>  */}
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`mrg_left1 navbar-nav menu ml-auto ${nClass}`}>
                                
                                
                                <li className="nav-item"><Link exact title="About Us"  href={content.d0386a}><a className="nav-link">{content.d0002}</a></Link></li>
                                <li className="nav-item"><Link exact title="Products" href={content.d0386b}><a className="nav-link">{content.d0003}</a></Link></li>
                                <li className="nav-item"><Link exact title="Process" href={content.d0386c}><a className="nav-link">{content.d0004}</a></Link></li>
                                <li className="nav-item"><Link title="Pricing" href={content.d0386}><a className="nav-link">{content.d0006}</a></Link></li>
                            </ul>
                           
                            {nLang === 'en'? 
                                <div class="dropdown submenu ">
                                    <button class="lang_box1 btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className={'flag'} src='/img/uk.svg'/>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-left language" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href={`/cn${navL}`}><img className="flag"  src='/img/china.svg' /> 中文</a>
                                    </div>
                                </div> 
                                :
                                <div class="dropdown submenu ">
                                    <button class="lang_box1 btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className={'flag'} src='/img/china.svg'/>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-left language" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href={`/${navL}`}><img className="flag"  src='/img/uk.svg' /> English</a>
                                    </div>
                                </div>
                                
                            }

                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}




// const mapStateToProps = state => ({
//     lang: state.lang
// })

// const mapDispatchToProps = (dispatch) => ({
//         cn: () => 
//             dispatch(cn()),

//         en: () => 
//             dispatch(en())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(OnepageMenu)

export default OnepageMenu