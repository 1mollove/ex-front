import React, { useState, useEffect } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import Header from '../../component/header/header'
import LeftNav from '../../component/left-nav'
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
const {Footer, Sider, Content } = Layout;

export default function Admin(props) {
    //clear user
    // localStorage.removeItem('user')
    let user = localStorage.getItem('user')
    useEffect(() => {
        if (user===null||user===undefined) {
            props.history.replace('/login')
            localStorage.removeItem('user')
        }
    })

    return (
        
        <Layout style={{ height:'100%'}}>
            <Sider>
                <LeftNav />
            </Sider>
            <Layout>
                <Header/>
                <Content style={{ margin:'20px',background:'#fff'}}>
                <Switch>
                    <Redirect from='/' exact to='/home'/>
                    <Route path='/home' component={Home}/>
                    <Route path='/category' component={Category}/>
                    <Route path='/product' component={Product}/>
                    <Route path='/user' component={User}/>
                    <Route path='/role' component={Role}/>
                    <Route path="/charts/bar" component={Bar}/>
                    <Route path="/charts/pie" component={Pie}/>
                    <Route path="/charts/line" component={Line}/>
                    
                    </Switch>  
                </Content>
                <Footer style={{textAlign:'center',color:'#999'}}>推荐使用谷歌浏览器，可以获得更好的浏览体验</Footer>
            </Layout>
        </Layout>
        
    )
}
