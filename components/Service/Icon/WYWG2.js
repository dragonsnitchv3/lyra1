import React from 'react';

const WYWG = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className="hosting_service_item4 ctr_text">
                <div className="icon">
                    <i className={PIcon}></i>
                </div>
                <h1 className="mt_30">{PName}</h1>
            </div>
            
        </div>
    )

}

export default WYWG