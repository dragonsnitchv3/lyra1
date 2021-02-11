import React from 'react';
import dynamic from 'next/dynamic'

const NSSR = ({nLang}) => {
    const TopBar = dynamic(
        () => import('./AppBannerNSSR'),
        { ssr: false }
    )
    return(
            <TopBar nLang={nLang}/>
        )
} 

export default NSSR;