import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import Cards from "./Cards/CardsContainer";
import Preloader from "../Preloader/Preloader";
import PropTypes from 'prop-types';

const { SubMenu } = Menu;




const Home =({activateFilter, logOutUser, isReady })=> {

    const [state, setState] = useState({current: 'all',});

    const handleClick = e => {
        setState({current: e.key});
        activateFilter(e.key)
    };

    const handleOut=()=> logOutUser();


    return (
    !isReady
        ? <div>
            <Preloader />
        </div>
        :
        <div className="HomePage">
            <div className="HomePageHeader">
                <div className="HomePageMenu">
                    <Menu
                        onClick={handleClick}
                        selectedKeys={[state.current]}
                        mode="horizontal"
                    >
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                              <Icon type="setting" />
                                Сортировка
                            </span>
                            }
                        >
                            <Menu.ItemGroup>
                                <Menu.Item key="all">Без фильтра</Menu.Item>
                                <Menu.Item key="date_desc">Дата(desc)</Menu.Item>
                                <Menu.Item key="date_asc">Дата(asc)</Menu.Item>
                                <Menu.Item key="text_desc">Текст(desc)</Menu.Item>
                                <Menu.Item key="text_asc">Текст(asc)</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="logout">
                            <a href='#' onClick={handleOut}>
                                Выйти
                            </a>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
            <div>
                <Cards />
            </div>
        </div>
    );
};


Home.propTypes = {
    activateFilter: PropTypes.func,
    logOutUser: PropTypes.func,
    isReady: PropTypes.bool,
};

export default Home;