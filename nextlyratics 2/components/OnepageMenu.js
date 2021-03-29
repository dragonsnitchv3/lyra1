import React from 'react';
import dynamic from 'next/dynamic'

const NSSR = ({nLang, navL}) => {
    const TopBar = dynamic(
        () => import('./OnepageMenuNSSR'),
        { ssr: false }
    )
    return(
            <TopBar nLang={nLang} slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive" navL={navL}/>
        )
} 

export default NSSR;