import React from 'react';
import { Spin } from 'antd';

const Preloader =()=>{


    return(
        <div className="Preloader">
            <div>
                <Spin tip="Loading..." />
            </div>
        </div>
    )
};


export default Preloader;