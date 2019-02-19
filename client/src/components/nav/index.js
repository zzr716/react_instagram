import React from 'react';
import { Menu, Dropdown, notification } from 'antd';
import { Link } from 'react-router-dom';
import Style from './index.scss'

class Nav extends React.Component {
    render () {
        const aboutMenu = (
            <Menu>
                <Menu.item>关于我</Menu.item>
                <Menu.item>关于我</Menu.item>
                <Menu.item>关于我</Menu.item>
            </Menu>
        )
        return (
            <nav className="page-header">
                <div className="header toggle">
                    <div className="navigate">
                        <Dropdown overlay={aboutMenu}>
                            <a className="user"></a>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;