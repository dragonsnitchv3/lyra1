import Particles from 'react-particles-js';
import NoSSR from 'react-no-ssr';
import React, {useEffect, useState} from 'react';

class ParticlesJs extends React.Component {
        
    render() {
        let device;
    
        window.innerWidth > 700 ?
        (device = 70):
        (device = 30)
        return (
                <Particles 
                    // width= "100%"
                    height= {window.innerHeight}
                    params={{ 

                    
                    particles: { 
                        number: { 
                        value: device, 
                        }, 
                        move: {
                            enable: true,
                            speed: 1.1,
                        },
                    color: {
                        value: '#ffffff',
                        opacity	: 1
                    },

                    line_linked: {
                        color: '#8a8a8a',
                        opacity	: 1,
                        width: 0.7
                        // distance: 250
                    },
                    pauseOnBlur: true
                    }
                    }}
                    className= "background_att"
                /> 
            
        )
    }
    
}

export default ParticlesJs