import React from 'react';
import dynamic from 'next/dynamic'

const NSSR = ({nLang, C1T, C2T, C3T, hideD2, dataNo}) => {
    const TopBar = dynamic(
        () => import('./FaqSectionNSSR'),
        { ssr: false }
    )
    return(
            <TopBar nLang={nLang} C1T={C1T} C2T={C2T} C3T={C3T} hideD2={hideD2} dataNo={dataNo}/>
        )
} 

export default NSSR;