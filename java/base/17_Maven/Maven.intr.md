# Mavent 介绍

主要功能
- 提供一套标准化的项目结构
- 提供了一套标准化的构建流程 (编译、测试、打包、发布...)
- 提供了一套依赖管理机制

## Mavent 项目结构

```bash

a-maven-project
├──pom.xml
├──src
├   ├──main
├   ├   ├──java
├   ├   └──resources
├   ├──test
├       ├──java
├       └──resources
└──target

```

- 描述文件 ```pom.xml```
- 源码  rsc/main/java
- 资源目录 src/main/resources
- 测试源码 src/test/java
- 测试资源 src/test/resources

## 安装 maven

mvn

## 小结

- Maven 使用 ```pom.xml``` 定义项目内容，并使用预设的目录结构
- 在 ```Maven``` 中声明一个依赖项可以自动下载并导入 ```classpath```
-Maven 使用 ```groupId```、```artifactId```、和 ```version``` 唯一定位一个依赖
