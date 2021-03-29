import Particles from 'react-particles-js';
import NoSSR from 'react-no-ssr';
import React, {useEffect, useState} from 'react';

class ParticlesJs extends React.Component {
        
    render() {
        let device;
    
        window.innerWidth > 700 ?
        (device = 80):
        (device = 25)
        return (
                <Particles 
                    // width= "100%"
                    height= {window.innerHeight}
                    params={{ 
                    retina_detect: false,
                    particles: { 
                        number: { 
                        value: device, 
                        
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