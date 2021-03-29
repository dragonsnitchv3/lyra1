import React from 'react';

const WYWG = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-xl-3 col-lg-4 col-md-6 col-12">
            <div className="hosting_service_item5b ctr_text mb-30">
                <div className="icon ctr_text2 ctr_text">
                    <i className={PIcon}></i>
                </div>
                <h1 className="">{PName}</h1>
                <p className="ctr_text2">{PDesc}</p>
            </div>
        </div>
    )

}

export default WYWG