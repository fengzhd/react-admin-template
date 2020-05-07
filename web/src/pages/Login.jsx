import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export class Login extends Component {
  loginSubmit = () => {
    console.log('登录');
    message.success('登录成功', 1, () => {
      this.props.history.replace('/index')
    });
  };
  render() {
    return (
      <div className="flex j-center a-center w-full h-full bg-blue">
        <div className="w-300 fs-24">
          <div className="m-b-20 text-center">
            系统登录
          </div>
          <Form>
            <Form.Item>
              <Input prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>
            <Form.Item>
              <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="w-full" onClick={this.loginSubmit}>登录</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
