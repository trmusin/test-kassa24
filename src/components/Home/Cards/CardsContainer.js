import React from 'react';
import { connect } from 'react-redux';
import Cards from "./Cards";
import {orderBy} from "lodash/collection";
import {deleteCard} from "../../../redux/reducers/cardsReducers";


const sortCards =(articles, filterValue )=>{
    switch (filterValue) {
        case 'date_asc':
            return orderBy(articles, 'createdAt', 'asc');
        case 'date_desc':
            return orderBy(articles, 'createdAt', 'desc');
        case 'text_asc':
            return orderBy(articles, 'title', 'asc');
        case 'text_desc':
            return orderBy(articles, 'title', 'desc');
        case 'all':
            return articles;
        default:
            return articles;
    }
};


const mapStateToProps = ({cards, filters}) =>({
    articles: cards.articles && sortCards(cards.articles,  filters.filterValue,),
});

export default connect(mapStateToProps,{deleteCard})(

    ({articles, deleteCard})=>{

        return(
            <div>
                <Cards
                    articles={articles}
                    deleteCard={deleteCard}
                />
            </div>
        )
    }
);