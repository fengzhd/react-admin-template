import React, { Component } from 'react'
import { withRouter } from "react-router";
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { login, getCaptcha } from 'api/user'
export class Login extends Component {
  constructor() {
    super()
    this.state = {
      captcha: <i>123</i>
    }
    this.formRef = React.createRef()
  }
  loginSubmit = async () => {
    this.formRef.current.validateFields(['username', 'password', 'captcha']).then(form => {
      console.log(form)
      login(form).then(res => {
        console.log(res)
        if (res.code === 200) {
          sessionStorage.setItem('userInfo', JSON.stringify(res.data))
          console.log(this.props)
          this.props.history.replace('/index')
        }
      })
    }).catch(err => {
      message.error(err.errorFields[0].errors[0], 1);
    })
  };
  inputHandler = (e, prop) => {
    // console.log(e.target.value)
    this.formRef.current.setFieldsValue({
      [prop]: e.target.value
    });
  }
  getCaptchaHandler = async () => {
    let res = await getCaptcha()
    this.setState({
      captcha: res.data.captcha
    })
  }
  async componentDidMount() {
    this.getCaptchaHandler()
  }
  render() {
    return (
      <div className="flex j-center a-center w-full h-full bg-blue">
        <div className="w-300 fs-24">
          <div className="m-b-20 text-center">
            系统登录
          </div>
          <Form ref={this.formRef} size="large">
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
              <Input placeholder="请输入用户名" prefix={<UserOutlined />} onChange={e => this.inputHandler(e, 'username')} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
              <Input type="password" placeholder="请输入密码" prefix={<LockOutlined />} onChange={e => this.inputHandler(e, 'password')} />
            </Form.Item>
            <Form.Item>
              <Form.Item name="captcha" noStyle rules={[{ required: true, message: '请输入验证码' }]}>
                <Input placeholder="请输入验证码" className="w-200" prefix={<QuestionCircleOutlined />} onChange={e => this.inputHandler(e, 'captcha')} />
              </Form.Item>
              <span className="d-inline-block bg-white w-100 h-40 v-a-top" 
                    dangerouslySetInnerHTML = {{ __html: this.state.captcha }} 
                    onClick={this.getCaptchaHandler}>
              </span>
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

export default withRouter(Login)
