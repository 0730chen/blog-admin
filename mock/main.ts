import Mock from 'mockjs'
//自定义数据
// 注册接口
const tokens = {
    admin: "admin"
}
Mock.mock('/user/login', (req, res) => {
    let {admin} = req.body
    const data = {
        state: 'success',
        code: 66666,
        token: tokens.admin
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
Mock.mock('/api/article', (req, res) => {
    let data = [
        {title: '第一个文章', context: '第一个', data: new Date()},
        {title: '第二篇文章', context: '第二个', data: new Date()},
        {title: '第三篇文章', context: '第三个', data: new Date()}
    ]
    return data
})