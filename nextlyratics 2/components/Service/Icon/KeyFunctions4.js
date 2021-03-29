import React from 'react';

const WYWG = ({ nLang, PIcon, PName, PDesc }) => {

    return(
        <div className="col-xl-3 col-lg-4 col-6">
            <div className="mb_50 hosting_service_item5b ctr_text">
                <div className="icon ctr_text ctr_text2 ">
                    <i className={PIcon}></i>
                </div>
                <h1 className="">{PName}</h1>
                <p className="ctr_text2">{PDesc}</p>
            </div>
        </div>
    )

}

export default WYWG