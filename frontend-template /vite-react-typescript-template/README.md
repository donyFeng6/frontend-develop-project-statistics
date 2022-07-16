

# vite 项目模板

用vite、typescript、react、redux搭建的项目模板

### 项目文档

dist 打包编译文件
index.html 静态 html 入口文件

```bash
  src     #  项目主程序文件
    —— components   #  项目组件
    —— pages       	#  项目页面目录
    —— Routes       #  项目路由
    —— Store        #  项目集成redux入口
    —— utils        #  项目工具集成目录
```

### 安装及依赖包

```bash
创建应用
yarn create vite vite-react-typescript-template --template react-ts

安装依赖 redux sass router
yarn add sass redux react-redux redux-thunk redux-logger react-router-dom

添加依赖声明
yarn add -D @types/redux-logger

安装代码格式检测 eslint prettier
yarn add eslint eslint-config-standard eslint-plugin-import eslint-plugin-promise eslint-plugin-node
  prettier eslint-config-prettier autoprefixer postcss-pxtorem

yarn add axios crypto-js @types/crypto-js -D


```
