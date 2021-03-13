import React, { useState, useEffect } from 'react';
import { Link,withRouter } from 'react-router-dom'
import { Menu, Button } from 'antd';
import './left-nav.less'
import logo from '../../asset/img/logo.png'
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;

 function LeftNav(props) {
    let path=props.location.pathname
    const  getMenuNode = (menuList) => {
      return menuList.map(item => {
        if (!item.children) {
            
          return (
            <Menu.Item key={item.key} >
            <Link to={item.key}>{item.title}</Link>  
          </Menu.Item>)
          } else {
            return (
              <SubMenu key={item.key}  title={item.title}>
               {getMenuNode(item.children)}
              </SubMenu>)
          }
        })
      }
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
                selectedKeys={[path]}
              >
                {getMenuNode(menuList)}
            </Menu>
      
        </div>
    )
}
export default withRouter(LeftNav)