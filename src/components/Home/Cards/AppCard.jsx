import React from 'react';
import { Comment, Avatar } from 'antd';
import Button from "antd/es/button/button";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {ru} from "date-fns/locale";



const AppCard =({cards, deleteCard})=> {

    const{title, text, createdAt, avatar, id} = cards;

    const handleDeleteCard =()=>deleteCard(id);

    return (
        <div>
            <div>
                <Comment
                    actions={[<Button
                                size="small"
                                onClick={handleDeleteCard}
                            >
                                Удалить
                            </Button>]
                    }
                    author={<h4>{text}</h4>}
                    avatar={
                        <Avatar
                            src={avatar}
                        />
                    }
                    content={
                        <p>{title}</p>
                    }
                    datetime={
                        formatDistanceToNow(new Date(createdAt), {addSuffix: true, locale: ru})
                    }
                />
            </div>
        </div>
    );
};

export default AppCard;