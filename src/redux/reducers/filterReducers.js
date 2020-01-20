import {SET_FILTER} from "../constants";


const initialState = {
    filterValue: 'all',
};


const filterReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filterValue: action.filterValue,
            };
        default:
            return state;
    }
};

export default filterReducers;


export const setFilter =(filterValue) => ({type: SET_FILTER, filterValue});


export const activateFilter = (filterValue) =>  async(dispatch) => dispatch(setFilter(filterValue));