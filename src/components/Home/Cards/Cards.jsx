import React from 'react';
import { List } from 'antd';
import AppCard from "./AppCard";
import PropTypes from 'prop-types';


const Cards =({articles, isReady, deleteCard})=>{


    let Cards = articles.map(item =>(
            <div className="Card" key={item.id+item.text}>
                <AppCard
                    cards={item}
                    deleteCard={deleteCard}
                />
            </div>
        ));

    return (
        <div className='HomePageCards'>
            <List>
                {Cards}
            </List>
        </div>
    );
};

Cards.propTypes = {
    articles: PropTypes.array,
    deleteCard: PropTypes.func,
    isReady: PropTypes.bool,
};


export default Cards;