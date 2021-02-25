import React from 'react';

const KF = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-lg-4 col-xl-3 col-md-6 col-12 mb_50">
            <div className="hosting_service_item6 ">
                <div className="mb-30">
                    <div className="icon ctr_text ctr_text2">
                        <i className={PIcon}></i>
                    </div>
                </div>
                <h1 className="">{PName}</h1>
                <p>{PDesc}</p>
            </div>
        </div>
    )

}

export default KF