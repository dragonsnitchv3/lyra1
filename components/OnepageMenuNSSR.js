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

  constructor(props) {
    super(props);
    this.state = {}
 }

    
    componentDidMount() {

    const _this = this;
    const body = document.querySelector("body");
    const custom_logo1x = document.querySelector(".custom_logo1x");
    const custom_logo1 = document.querySelector(".custom_logo1");
    const znavbar = document.querySelector(".znavbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      znavbar.classList.add("show");
      menuBtn.classList.add("hide");

    }
    cancelBtn.onclick = ()=>{
      znavbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    

    window.onscroll = function() {
      if(_this.props.nLang === "en") {
        scrollFunction()
      } else{
        scrollFunction2()
      }
    };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        znavbar.classList.remove("sticky");
        znavbar.classList.add("sticky2")
        custom_logo1x.classList.remove("custom_logo1x");
        custom_logo1x.classList.add("custom_logo1xa");
      } else {
        znavbar.classList.remove("sticky2");
        znavbar.classList.add("sticky")
        custom_logo1x.classList.remove("custom_logo1xa");
        custom_logo1x.classList.add("custom_logo1x")
      }
    }

    function scrollFunction2() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          znavbar.classList.remove("sticky");
          znavbar.classList.add("sticky2")
          custom_logo1.classList.remove("custom_logo1");
          custom_logo1.classList.add("custom_logo1a");
        } else {
          znavbar.classList.remove("sticky2");
          znavbar.classList.add("sticky")
          custom_logo1.classList.remove("custom_logo1a");
          custom_logo1.classList.add("custom_logo1")
        }
      }

        
    }


    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass, nLang, navL} =this.props;

        let content;

        nLang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)

        function triggerBL() {
            var element = document.getElementById("backgroundBL");
            element.className.add("navbar_fixed");
            console.log("triggered")
        }

        return (
            
<nav id="znavbar" class="znavbar sticky">
                <div class="zcontent">
                
                {
                            nLang === 'en' ?
                            <Link href={content.d0386e}>
                                <a >
                                <img className="custom_logo1x" src="/img/lyrad.png" alt=""/>
                                </a>    
                            </Link>
                            :
                            <Link  href={content.d0386e}>
                                <a >
                                <img className="custom_logo1" src="/img/lyracn2.png" alt=""/>
                                </a>
                            </Link>
                        }
                <ul class="zmenu-list">
                    <div class="zicon cancel-btn">
                    <i class="ti-close"></i>
                    </div>
                                <li className=""><Link exact title="About Us"  href={content.d0386a}><a className="">{content.d0002}</a></Link></li> {/*.w_menu .nav-item .*/}
                                <li className=""><Link exact title="Products" href={content.d0386b}><a className="">{content.d0003}</a></Link></li>
                                <li className=""><Link exact title="Portfolio" href={content.d0657a}><a className="">{content.d0657}</a></Link></li>
                                <li className=""><Link exact title="Process" href={content.d0386c}><a className="">{content.d0004}</a></Link></li>
                                <li className=""><Link title="Pricing" href={content.d0386}><a className="">{content.d0006}</a></Link></li>
                    
                    {nLang === 'en'? 
                                
                                    
                                <li><a className="" href={`/cn${navL}`}><img className="flag"  src='/img/china.svg' /></a></li>
                                :  
                                <li><a className="" href={`/${navL}`}><img className="flag"  src='/img/uk.svg' /></a></li>
                                    
                                
                    }
                </ul>
                <div class="zicon menu-btn">
                    <i class="ti-menu"></i>
                </div>
                </div>
            </nav>
            
            
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