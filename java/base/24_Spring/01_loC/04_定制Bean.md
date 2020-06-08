# 定制 Bean

## Scope

对于 ```Spring``` 容器来说，当我们把一个 ```Bean``` 标记为 ```@Component``` 后，它就会自动为我们创建一个单例（ ```Singleton``` ），即容器初始化时创建 ```Bean```，容器关闭前销毁 ```Bean``` 。在容器运行期间，我们调用 ```getBean(Class)``` 获取到的 ```Bean``` 总是同一个实例。

还有一种 ```Bean```，我们每次调用 ```getBean(Class)```，容器都返回一个新的实例，这种 ```Bean``` 称为 ```Prototype```（原型），它的生命周期显然和 ```Singleton```不同。声明一个 ```Prototype``` 的 ```Bean``` 时，需要添加一个额外的 ```@Scope注解```：

```java
@Component
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE) // @Scope("prototype")
public class MainSession {
}
```

## 注入List

有些时候，我们会有一系列接口相同，不同实现类的Bean。例如，注册用户时，我们要对email、password和name这3个变量进行验证。为了便于扩展，我们先定义验证接口：


因为Spring是通过扫描classpath获取到所有的Bean，而List是有序的，要指定List中Bean的顺序，可以加上@Order注解：

## 可选注入

可以给@Autowired增加一个required = false的参数：

```java
@Component
public class MailService {
  @AUtowired(required = false)
  ZoneId zoneId = ZoneId.systemDefault();
}
```

这个参数告诉Spring容器，如果找到一个类型为ZoneId的Bean，就注入，如果找不到，就忽略。


## 创建第三方 Bean

如果一个 ```Bean``` 不在我们自己的 ```package``` 管理之类，例如 ```ZoneId```,如何创建它?

答案是我们自己在 ```@Comfiguration``` 类中编写一个Java 方法房间并返回它，注意要给方法标记一个 ```@Bean``` 注解

```java
@Configuration
@ComponentScan
public class AppConfig {
  // 创建一个 Bean
  @Bean
  ZoneId createZoneId() {
    return ZoneId.of("z");
  }
}
```

## 使用别名

**@Bean(name)**

```java
@Configuration
@ComponentScan
public class AppConfig {
    @Bean("z")
    ZoneId createZoneOfZ() {
        return ZoneId.of("Z");
    }

    @Bean
    @Qualifier("utc8")
    ZoneId createZoneOfUTC8() {
        return ZoneId.of("UTC+08:00");
    }
}
```

**@Primary**

```java
@Configuration
@ComponentScan
public class AppConfig {
    @Bean
    @Primary // 指定为主要Bean
    @Qualifier("z")
    ZoneId createZoneOfZ() {
        return ZoneId.of("Z");
    }

    @Bean
    @Qualifier("utc8")
    ZoneId createZoneOfUTC8() {
        return ZoneId.of("UTC+08:00");
    }
}
```

## 使用 FactoryBean

```java
@Component
public class ZoneIdFactoryBean implements FactoryBean<ZoneId> {
  String zone = "Z";

  @Override
  public ZoneId getObject() throws Exception {
    return ZoneId.of(zone);
  }

  @Override
  public class<?> getObjectType() {
    return ZoneId.class;
  }
}
```

## 小结
- ```Spring``` 默认使用 ```Singleton``` 创建 ```Bean```，也可指定 ```Scope``` 为 ```Prototype```
- 可将相同类型的 ```Bean``` 注入 ```List```
- 可用 ```@Autowired(required=false)``` 允许可选注入
- 可用带 ```@Bean``` 标注的方法创建 ```Bean```
- 可使用 ```@PostConstruct``` 和 ```@PreDestroy``` 对 ```Bean``` 进行初始化和清理
- 相同类型的 ```Bean``` 只能有一个指定为 ```@Primary```，其他必须用 ```@Quanlifier("beanName")``` 指定别名
- 注入时，可通过别名 ```@Quanlifier("beanName")``` 指定某个 ```Bean```
- 可以定义 ```FactoryBean``` 来使用工厂模式创建Bean
