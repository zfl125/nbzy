import axios from 'axios'
// import { getCookie } from '@/utils/cookie'
import {
    stringify
} from 'qs'
// const {
//     USE
// } = DATA_TMP
import {
    Message
} from 'element-ui'
var asRun = 0;
var isMessage = false;
var requestTimes = null


var Times = () => {
    if (asRun == 0) return;
    asRun--
}
requestTimes = setInterval(Times, 3000)





var service = axios.create({
        baseURL: '/',
        timeout: 30000
    })
    //添加请求拦截器
service.interceptors.request.use(function(config) {
    const token = localStorage.getItem('authc')
        // if (token && !USE) {
    config.headers['Authorization'] = token;
    return config
        // } else {
        //     window.location.href = "/login"
        // }
}, function(error) {
    return Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use(function(response) {
    const {
        data
    } = response;
    if (data.state == 1 || data.status == 1) {
        if (data.data) {
            return data.data
        }
        return data
    }
    return data
        // Message.error(data.msg);
}, (error) => {
    console.log('err', error)
    asRun++;
    console.log('请求失败次数', asRun)
    if (asRun > 10 && !isMessage) {
        isMessage = true
        clearInterval(requestTimes);
        Message({
            message: '您的登录权限已过期，请重新登陆！',
            type: 'warning',
            close: () => {
                localStorage.removeItem('authc')
                window.location.href = "/login"
            }
        })
    }
    return Promise.reject(error)
})

export default {
    //get请求
    get(url, param) {
        return new Promise((resolve, reject) => {
            service({
                method: 'get',
                url,
                params: param,
            }).then(res => { //axios返回的是一个promise对象
                resolve(res) //resolve在promise执行器内部 
            }).catch(err => {
                reject(err)
                console.log(err, '异常')
            })

        })
    },
    //post请求
    post(url, data, headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }) {
        return new Promise((resolve, reject) => {
            service({
                method: 'post',
                url,
                data: stringify(data),
                headers
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
                console.log(err, '异常')
            })
        })
    }
}