## 使用 Annotation

使用 ```Spring``` 的 ```ioC``` 容器，实际是通过 ```xml``` 配置依赖映射依赖关系。

问题: 写起来非常繁琐，每增加一个组件，就必须把新的 ```Bean``` 配置到 ```XML``` 中


注意:

- 每个 Bean 被标注为 ```@Component``` 并正确 ```@Autowired``` 注入
- 配置类被标注为 ```@Configuration``` 和 ```@ComponentScan```
- 所有 ```Bean``` 均在值包以及子包内


使用 ```@ComponentScan``` 非常方便，但是，我们也要特别注意包的层次结构。通常来说，气动配置 ```AppConfig``` 位于自定义的顶层包(例如: ```com.itranswarp.learnjava```)，其他 ```Bean``` 按类别放入子包

## 小结
- 使用 ```Annotation``` 可以大幅简化配置，每个 ```Bean``` 通过 ```@Component``` 和 ```@Autowored``` 注入
- 必须合理设计包的层次结构，才能发挥 ```@ComponentScan``` 的威力
