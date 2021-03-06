import { Message } from 'element-ui'
// login-client.js
export default function ({store, redirect, route}) {

    // 查看 store 中的登录状态，前端路由跳转不会重置 store 中的值
    let isLogin = store.state.auth.login;
    // console.log(sessionStorage.getItem('token'))
    // 如果未登录且当前路由不是到登录页，则重定向到登录页
    // 通过 route.path 判断路由
    if (!isLogin && route.path !== '/login') {
        Message({
            message: "请先登陆",
            duration: 3 * 800
        })

        return redirect({
            path: '/login'
        });
    }
}