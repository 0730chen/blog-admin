import Mock from 'mockjs'
//自定义数据
// 注册接口
Mock.mock('/user/login', (req, res) => {
    const data = {
        state: 'success',
        code: 66666
    }
    return data
})
Mock.mock('/user/token', (req, res) => {
    console.log(req, res)
    const a = [100, 80, 60, 40, 20].reverse();
    const data = {
        state: 'success',
        code: '1'
    }
    return data
})
Mock.mock('/user/info', (req, res) => {
    console.log(req)
    console.log('info')
    const data = {
        state: 'success',
        code: 66666
    }
    return data
})