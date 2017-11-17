# 多粉项目-应用类-前端脚手架

#### 一、项目打开路径： 域名/#/项目名/index 例如：localhost:8030/#/bigScreenLottery/index

#### 二、目录结构
```$xslt
├─build
├─config
├─src
│  ├─assets
|  |  ├─js
|  |  |  ├─util.js  // 项目公共的函数方法       
│  ├─components
│  │  ├─Dome      // 项目一: 演示dome 
│  │  │  ├─css   
│  │  │  ├─img   
│  │  │  ├─js 
│  │  │  ├─api    // 该项目下的所有请求方法
│  │  │  │  └─index.js  
│  │  │  └─vue    
│  │  │  │  └─index.vue   // 默认加载该路由
│  │  │  └─router.js    // 统一打包配置演示dome项目下的路由
│  │  ├─PublicVue  // 公共vue
│  │  │  ├─button
│  │  │  └─null-data
│  │  └─ErrorState   // 页面错误提示如：404
│  │  └─bigScreenLottery   // 大屏抽奖
│  │  └─bigScreenInteract   // 大屏互动
│  │  └─luckyDraw          // 幸运大抽奖 
│  ├─http
│  │   └─index.js    // 统一初始化各个项目的axios请求方法
│  └─router
│  │   └─index.js    // 加载各个项目的路由
└─static   // 公共资源目录
│   ├─css
│   ├─imgs
│   └─js
│       └─lib    // 项目引入的插件
│         └─jquery-2.2.2.min.js
├─index.html  // 项目入口
│
│

```
#### 访问菜单
```
- http://localhost:8031/index.html
```
#### 四、具体方法可以参考以下：
> 访问路径: http://localhost:8030/#/dome/index
```$xslt
├─build
├─config
├─src
│  ├─assets
│  ├─components
│  │  ├─Dome    // 演示项目
│  │  │  ├─css 
│  │  │  ├─img
│  │  │  ├─js
│  │  │  └─vue
│  │  │  ├─api   
│  │  │  │  └─index.js 
│  │  │  └─router.js
```