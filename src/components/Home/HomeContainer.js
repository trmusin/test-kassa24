import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {loadCards} from "../../redux/reducers/cardsReducers";
import {activateFilter} from "../../redux/reducers/filterReducers";
import Home from "./Home";
import {logOutUser} from "../../redux/reducers/authReducer";


const mapStateToProps = ({cards}) =>({
    isReady: cards.isReady,
});

export default connect(mapStateToProps,{loadCards, activateFilter, logOutUser})(

    ({loadCards, activateFilter, logOutUser, isReady })=>{

        useEffect(() => {loadCards()}, []);

        return(
            <div>
                <Home
                    activateFilter={activateFilter}
                    logOutUser={logOutUser}
                    isReady={isReady}
                />
            </div>
        )
    }
);