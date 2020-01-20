import React from 'react';
import { Route } from "react-router-dom";
import Login from "./Login/LoginContainer";
import Register from "./Register/RegisterContainer";
import Description from "../Description/Description";


const Auth =()=>{

    return(
        <section className='Auth'>
            <div className='auth_content'>
                <Route path='/login' exact component={ Login } />
                <Route path='/register' exact component={ Register } />
                <Route path='/description' exact component={ Description } />
            </div>
        </section>
    )
};

export default Auth;