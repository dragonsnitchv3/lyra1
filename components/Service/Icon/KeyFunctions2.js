import React from 'react';

const KF = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-lg-3 col-6 mb_50">
            <div className="hosting_service_item6 ">
                <div className="icon ctr_text">
                    <i className={PIcon}></i>
                </div>
                <h1 className="">{PName}</h1>
                <p>{PDesc}</p>
            </div>
        </div>
    )

}

export default KF