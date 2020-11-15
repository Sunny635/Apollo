# Apollo
## 简介
- 通过这个项目将自己所会的技术以及自己的架构思想尽可能的体现出来

## 技术栈
- python
- flask
- vue-element-admin
- element-ui
- mysql
- redis
- celery

## 架构
- 前后端分离的方式，前端通过http请求调用后端接口，目前后端不涉及到微服务架构

## 部署方式
### 以下为在本地的部署方式
1. 前端启动 `npm run dev` 模型启动在9527端口, 在前端的代码中固定了会通过http请求后端5000端口
2. 后端启动 `python manage.py`  默认监听5000端口
3. 启动celery `celery -A app.task.spider_tasks worker -l INFO` celery 可以执行的任务都写在了app.task.spider_tasks中
### 前端架构
- 直接使用了vue-element-admin框架，代码尽可能复用element-ui中的demo

### 后端架构
- 使用flask框架
```
└── server
    ├── README.md
    ├── app
    │   ├── __init__.py
    │   ├── base                # 定义服务的基类
    │   ├── controllers         # 控制器层，封装一些操作数据库功能，尽可能提供通用的方法，尽量避免接触到业务逻辑
    │   ├── models              # model层，主要是映射到数据库层
    │   ├── task                # 存放celery执行的异步任务
    │   ├── urls.py             # 路由表，将请求映射到views层的具体方法上
    │   ├── utils               # 工具库
    │   └── views               # views层，第一层处理服务接受到的请求，以及处理部分业务相关的逻辑
    ├── config.py               # 与项目相关的配置
    ├── manage.py               # 项目启动文件，
    ├── requirements.txt        # 项目以来文件

```

## 功能点
|序号|    功能项          |    功能简介     |      完成进度  |
|  ---- |      ----         |  ----         |       ----     |
| 1 |创建贴吧爬虫任务      |  根据帖子id，爬去页码，爬去这个帖子下发布的内容，回复内容，以及相关的用户信息 |       done    |
| 2 |查看爬虫任务结果      |  通过可视化列表页面，查看这个任务下爬取的结果信息             |       doing   |
| 3 |查询功能             | 查询数据库中的帖子以及帖子的回复内容, 返回搜索到的详细信息, 通过mysql查询可能较慢，后期可以考虑上es，或者是在逻辑上进行优化 | todo|

## TODO
- 完善controller层向view层返回结果的方式, 替换为字典形式返回，发生异常的情况下
- 增加代码主要流程过程的日志记录
- 对数据的操作，提供单条数据的操作以及批量操作的方式
- celery 启动方式优化
- 增加操作记录的功能
- 增加爬虫任务状态监控
- 完善状态码
- 权限控制
- 邮件通知
- grafana监控接入
- sentry监控接入
- zipkin调用链路接入