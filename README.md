# BUA-server

## 项目基础搭建

### TypeORM 配置

#### 逆向工程

只能生成基础的数据表，但是无法生成表与表之间的关系

### dotenv

### nodemon + ts-node

TODO:

    - [x] 把上述阅读过的内容进行操作
    - [x] dataBase 操作 映射完成 
    - [ ] 重写NestJS（上）阅读




## 问题**

1. spec_key 和 spec_value 主要是做什么用的？

2. 为什么需要把SPU 和 spec_key 建立多对多关系？

3. 为什么SKU和 spec_value 建立多对多关系？

## 分类

### 前端获取方案：

1. 一次性加载 
2. 每点击一个分类加载一个小分类？

分析侧重点： 数据量大小、业务需求（前端UX效果 & 垂直电商领域等）

是否需要将缓存数据存入Redis中？

### 分类数据如何返回？

> 不应该直接将数据库中的数据结构直接返回给前端，也不应该完全处理成前端想要的样子，应该折中选择。

1. 返回一个二维数组形式
2. 返回两个数组 [ 一级分类 ] [ 二级分类 ]

## 权限控制

何时应该对接口进行权限控制？

C端权限指的是？ （是否能够访问API）

### 权限模型

    用户 -> 分组 -> 权限
    
    最佳实践不建议用户直接和权限建立关系

    ！！！"RBAC" 应用
    
- C端权限不是很复杂，但是CMS中还是比较复杂的。

- C端分组是固定的，通常不是"动态权限"

@KOA 课程中的权限方案？？？

- [ ] AOP 在nestJS中的应用以及各个 执行顺序

TODO:
[ ] 优惠券开发
