import React from 'react';

const WYWG = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-lg-3 col-md-6">
            <div className="hosting_service_item5 ctr_text mb-30">
                <div className="icon ctr_text2 ">
                    <i className={PIcon}></i>
                </div>
                <h1 className="">{PName}</h1>
                <p className="ctr_text2">{PDesc}</p>
            </div>
        </div>
    )

}

export default WYWG