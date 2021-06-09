import React, { Component } from 'react';
import './index.css';
import { Card, Form, Input, Button, message } from 'antd';
// import logo from './img/bg.mp4';
import axios from 'axios';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};

const onFinish = (values: any) => {
  console.log('Success:', values);
  axios.post('http://127.0.0.1:7001/login', values).then((response) => {
    if (!response.data.status) {
      message.error('用户名或密码错误');
      return;
    }
    message.success('登录成功');
  });
};

const onRegister = (values: any) => {
  console.log('Success:', values);
  axios.post('http://127.0.0.1:7001/register', values).then((response) => {
    if (!response.data.status) {
      message.error('注册失败');
      return;
    }
    message.success('注册成功');
  });
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <video muted autoPlay loop className='videos'>
          <source src={require('./img/bg.mp4').default} />
        </video>
        {false ? (
          <div className='contents'>
            <Card
              className='loginBox'
              title='登录'
              extra={<a href='#'>注册</a>}
              style={{ width: 300 }}>
              <Form
                {...layout}
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                <Form.Item
                  name='username'
                  rules={[{ required: true, message: '请输入用户名' }]}>
                  <Input
                    size='large'
                    placeholder='请输入用户名'
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name='password'
                  rules={[{ required: true, message: '请输入密码' }]}>
                  <Input.Password
                    size='large'
                    placeholder='请输入密码'
                    prefix={<KeyOutlined />}
                  />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type='primary' htmlType='submit'>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        ) : (
          <div className='contents'>
            <Card
              className='loginBox'
              title='注册'
              extra={<a href='#'>登录</a>}
              style={{ width: 300 }}>
              <Form
                {...layout}
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onRegister}>
                <Form.Item
                  name='nikename'
                  rules={[{ required: true, message: '请输入昵称' }]}>
                  <Input
                    size='large'
                    placeholder='请输入昵称'
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name='username'
                  rules={[{ required: true, message: '请输入用户名' }]}>
                  <Input
                    size='large'
                    placeholder='请输入用户名'
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name='password'
                  rules={[{ required: true, message: '请输入密码' }]}>
                  <Input.Password
                    size='large'
                    placeholder='请输入密码'
                    prefix={<KeyOutlined />}
                  />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type='primary' htmlType='submit'>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
