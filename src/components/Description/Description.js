import React from 'react';
import { Empty, Button } from 'antd';
import { Link } from "react-router-dom";




const Description =()=>{
    return(
        <div>
            <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                imageStyle={{
                    height: 60,
                }}
                description={
                    <span>
                        Код приложения можно посмотреть на GitHub
                    </span>
                }
            >
                <a href="https://github.com/Talgat555/test-kassa24">
                    <Button type="primary">
                        Перейти в репозиторий
                    </Button>
                </a>
                <p className="DescriptionLink">
                    <Link to='/'>
                        На главную
                    </Link>
                </p>
            </Empty>
        </div>
    )
};

export default Description;