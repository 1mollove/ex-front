import React, { useState, useEffect } from 'react';
import { Modal, Button, Space } from 'antd';
import {withRouter} from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import  './header.less'
 function Header(props) {
    let user = localStorage.getItem('user')
    const logoinOut = () => {
        
        Modal.confirm({
          title: 'Confirm',
          icon: <ExclamationCircleOutlined />,
          content: 'Bla bla ...',
          okText: '确认',
            cancelText: '取消',
            onOk() {
                localStorage.removeItem('user')
                props.history.replace('/login')
            },
        });
      }
    return (
        <div className="header">
            <div className="header-top">
                <a href="javascript:" onClick={logoinOut}>退出</a>
                <span>欢迎！user</span>
            </div>
            <div className="header-bottom">
                <div className="hb-left">
                    首页
                </div>
                <div className="hb-right">
                    <span className="span">2021-3-12 12:12:12</span>
                    <img src="" alt="we" />
                    <span className="span">晴天</span>
                </div>

            </div>
        </div>
    )
}

export default withRouter(Header)
