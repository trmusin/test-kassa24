import {LOGIN_USER, LOGOUT_USER, SET_USER_DATA} from "../constants";


let initialState = {

    user: {
        login: 'admin',
        password: 'Admin1',
    },
    isAuth: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                user: action.user
            };
        case LOGIN_USER:
            return {
                ...state,
                isAuth: state.user.login === action.user.login && state.user.password === action.user.password
            };
        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false
            };
        default:
            return state;
    }
};


export const setUserData = (user) => ({type: SET_USER_DATA, user});
export const logInUseData = (user) => ({type: LOGIN_USER, user});
const logOutUserData = () => ({type: LOGOUT_USER});


export const logOutUser = () => (dispatch) => dispatch(logOutUserData());




export default authReducer;