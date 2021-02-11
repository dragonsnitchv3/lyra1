import React, {Component} from 'react';
import HRServiceItems from './HRServiceItems';
import textData from '../../Data/TextData';
import {connect} from 'react-redux';

class HRService extends Component{
    render(){
        let ServiceData = this.props.ServiceData;

        let content;

        this.props.lang === 'en' ?
        (content = textData.english):
        (content = textData.chinese)
        return(
            <section className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <div className="container">
                    {/* <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">SaasLand is built for designers like you.<br/> With useful features, an intuitive interface.</h2> */}
                    <div className="row p_service_info">
                            {
                                content.d0369.map(item => {
                                    return(
                                        <HRServiceItems HRtitle={item.Ptitle} HRdescription={item.Pdescription} HRpic={item.Pic} Hicon={item.Hicon} rclass={item.rclass} iclass={item.iclass} Phref={item.Phref} key={item.id}/>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    lang: state.lang
})

export default connect(mapStateToProps)(HRService)