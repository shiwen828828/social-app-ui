import Mock from 'mockjs';
import { loginResponse, loginError } from './mockdata/loginmock';

// 定义一个模拟的登录接口
Mock.mock('/api/login', 'post', (options) => {
    const { username, password } = JSON.parse(options.body);

    // 假设的登录逻辑
    if (username === 'admin' && password === '123456') {
        return loginResponse; // 成功响应
    } else {
        return loginError; // 错误响应
    }
});