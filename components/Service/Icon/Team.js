import React from 'react';

const Product = ({ nLang, PIcon, PName }) => {

    return(
        <div className="col-lg-2 col-6">
            <div className="hosting_service_item3 ctr_text mb_40rt">
                <div className="icon ctr_text2">
                    <i className={PIcon}></i>
                </div>
                <h1 className="h_head2">{PName}</h1>
            </div>
        </div>
    )

}

export default Product