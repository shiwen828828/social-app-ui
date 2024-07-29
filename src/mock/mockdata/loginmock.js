export const loginResponse = {
    code: 200,
    message: '登录成功',
    data: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        userId: '123456',
        username: 'admin',
    },
};

export const loginError = {
    code: 401,
    message: '用户名或密码错误',
};
