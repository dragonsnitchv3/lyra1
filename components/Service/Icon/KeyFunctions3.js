import React from 'react';

const WYWG = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-lg-4 col-12">
            <div className="mb_50 hosting_service_item5a ctr_text">
                <div className="icon ctr_text2 ">
                    <i className={PIcon}></i>
                </div>
                <h1 className="highlight1">{PName}</h1>
                <p className="ctr_text2">{PDesc}</p>
            </div>
        </div>
    )

}

export default WYWG