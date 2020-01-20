import {REMOVE_CARD, SET_CARDS} from "../constants";
import {getCards} from "../../api/api";


const initialState = {
    articles: [],
    isReady: false
};


const cardsReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return {...state,
                articles: action.data,
                isReady: true
            };
        case REMOVE_CARD:
            return{
                ...state,
                articles: state.articles.filter( el => el.id != action.id)
            };
        default:
            return state;
    }
};


export const setCards =(data) => ({type: SET_CARDS, data});
export const removeCard =(id) => ({type: REMOVE_CARD, id});


export const loadCards = () =>  async(dispatch) => {
        let response = await getCards();
            dispatch(setCards(response.data));
};

export const deleteCard = (id) => (dispatch) => dispatch(removeCard(id));


export default cardsReducers;