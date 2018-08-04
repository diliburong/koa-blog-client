import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
// import { getToken } from '@/utils/auth'
// import fileDownload from 'js-file-download'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/', // api的base_url
    timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        if (sessionStorage.getItem('token')) {
            config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// respone拦截器
service.interceptors.response.use(
    response => {
        // console.log(response)
        // if (response.data.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        //     const filename = response.config.params.filename || 'temp.xlsx'
        //     // fileDownload(response.data, filename)
        // }
        const res = response.data
        console.log(response);
        // res.status = 401
        // 50008:非法的token; 50012:其他客户端登录了; 50014:Token 过期了;
        if (res.status === 401 || res.status === 50012 || res.status === 50014) {
            // store.dispatch('FedLogOut').then(() => {
            //     location.reload() // 为了重新实例化vue-router对象 避免bug
            // })
            sessionStorage.setItem('token', '');
            // location.reload();
            // console.log('res.status')
            alert(res.status);

        } else if (res.status === 500) {
            Message({
                message: res.msg,
                type: 'error',
                duration: 5 * 500
            })
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 500
        })
        if(error.response.status === 401 ) {

        }
        console.log(error.response.status)
        
        // location.href = '/login'
        return Promise.reject(error)
    }
)

export default service