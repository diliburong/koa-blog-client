# *__Stutter Blog__*

> *__My persional blog __*

## npm 相关命令

``` bash
# 安装工程依赖
npm install

# 在本地启动调试 server
npm run dev

# 构建线上生产环境产物
npm run build

# 启动编译后的代码，注意，需要在 dist 目录中启动，仅 SSR 模式下有效
npm run start

# 检查代码是否符合规范
npm run lint
```
当在服务器使用nginx部署时，如果路由模式为`history`需要在配置中加入以下配置。
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

不然会在页面刷新的时候报404，具体原因是应为使用history模式时，用户直接访问或者刷新非index.html时，例如访问'/list'，web服务器会绕过index.html，去'/list'位置找相应的页面，这样就会导致404。

具体见[HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)


