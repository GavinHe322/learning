# 使用 Resource

读取配置文件、资源文件。

```java
import org.springframework.core.io.Resource;

@Component
public class AppService {
    @Value("classpath:/logo.txt")
    private Resource resource;

    private String logo;

    @PostConstruct
    public void init() throws IOException {
        try (var reader = new BufferedReader(
                new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8))) {
            this.logo = reader.lines().collect(Collectors.joining("\n"));
        }
    }
}
```

## 小结
- ```Spring```提供了 ```Resource``` 类便于注入资源文件
- 最常用的注入是通过 ```classpath``` 以 ```classpath:/path/to/file``` 的形式注入
