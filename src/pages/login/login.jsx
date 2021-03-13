import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import {BrowserRouter} from 'react-router-dom'
import logo from '../../asset/img/logo.png'
import './login.less'
import {reqLogin} from '../../api'
// login 组件
export default function Login(props) {
    const [form] = Form.useForm();
    useEffect(() => {
        let user = localStorage.getItem('user')
       
        if (user) {
            props.history.replace('/')
        } else {
            return
        }
    })
    const onFinish = async (values) => {
       
        const { username, password } = values
        const result = await reqLogin(username, password)
        
        if (result.status===0) {
            message.success('success')
            localStorage.setItem('user', result.data.username);
           props.history.replace('/')
        } else {
            message.error('login failed:' + result.msg)
            localStorage.removeItem('user')
        }
        
        }
    const onFinishFailed = () => {
        return ()=>console.log(' input error')
        
        
        }
    return (
        <div className="login">
            <header className="login-header">
                <img src={logo} alt="logo" />
                <h1>React 后台管理系统</h1>
            </header>
            <section className="login-content">
                <h3>login</h3>
                <Form
                className="login-form"
                name="basic"
                initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
            
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                        { type: 'string', },
                        {min: 4,
                        max: 12,
                            message: 'range is 4-12',
                        },
                        {
                            whitespace: true,
                            message: 'space not required',
                        },
                        
                    ]
                    }
                    initialValue='admin'
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                   
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                        
                        {
                            min: 4,
                            message: 'at lesst  4 ',
                        },
                        {
                            pattern: /[a-zA-Z0-9_]+/,
                            message: '大小写数字或者下划线!',
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    login
                    </Button>
                </Form.Item>
            </Form>
            </section>
            
            </div>
      
    )
}
