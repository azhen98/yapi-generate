const API = require('./api')

interface InterfaceLoginData {
    email: string;
    password: string
}

// YAPI地址
const host: string = 'https://doc.jsxygkj.com'

const pid: number = 257

const loginData: InterfaceLoginData = {
    email: '15939054361@163.com',
    password: 'z19980522'
}

// 初始化
const tmp = new API(host, pid, {
    // 注释的部分作者还没写
    // prefix: '',
    pathFolder: __dirname + '\\api\\',
    space: 2,
    requestInstanceName: 'request',
    requestImportName: '@/utils/request',
    createTemplate: false
})

// 登录
tmp.login(loginData).then(() => {
    // 开始转化任务
    tmp.startTask()
})



