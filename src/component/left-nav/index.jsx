import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
import './left-nav.less'
import logo from '../../asset/img/logo.png'
const { SubMenu } = Menu;

export default function LeftNav() {
    return (
        <div className="left-nav">
            <Link to='/home' className="left-nav-hd">
                <img src={logo} alt="logo" />
                <h1>后台管理</h1>
            </Link>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                
                >
                <Menu.Item key="home" icon={<PieChartOutlined />}>
                  <Link to='/home'>首页</Link>  
                </Menu.Item>
                
                <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                    <Menu.Item key="category" icon={<DesktopOutlined />}>
                         <Link to='/category'>品类管理</Link>
                    </Menu.Item>
                    <Menu.Item key="product" icon={<DesktopOutlined />}>
                        <Link to='/product'>商品管理</Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="user" icon={<PieChartOutlined />}>
                  <Link to='/user'>用户管理</Link>  
                </Menu.Item>
                <Menu.Item key="role" icon={<PieChartOutlined />}>
                  <Link to='/role'>角色管理</Link>  
                </Menu.Item>
            </Menu>
      
        </div>
    )
}
