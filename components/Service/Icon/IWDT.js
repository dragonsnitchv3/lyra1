import React from 'react';

const WYWG = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-lg-3 col-6">
            <div className="hosting_service_item3 ctr_text mb_40rt">
                <div className="icon ctr_text2 ">
                    <i className={PIcon}></i>
                </div>
                <h2 className="">{PName}</h2>
            </div>
        </div>
    )

}

export default WYWG