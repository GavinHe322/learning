# loC原理

loC 全称 ```Inversion of Control```，控制反转


假定一个在线书店，通过 ```BookService```获取书籍
```java
public class BookService {
  private HikariConfig config = new HikariConfig();
  private DataSource dataSource = new HikariDataSource(config);

  public Book getBook(long bookId) {
    try(Connection conn = dataSrouce.getConnection()) {
      // ...
      return book;
    }
  }
}
```

继续编写 ```UserService``` 获取用户

```java
public class UserServoce {
  private HikariConfig config = nwe HikariConfig();
  private DataSource dataSource = new HikariDataSource(config);

  public User getUser(long userId) {
    try (Connection conn = dataSource.getConnection()) {
      // ...
      return user;
    }
  }
}
```

```java
public class CartServlet extends HttpServlet {
  private BookService bookService = new BookService();
  private UserService userService = new UserService();

  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    long curentUserId = getFromCookie(req);
    User currentUser = userService.getUser(currentUserId);
    Book book = bookService.getBook(req.getParameter("bookId"));
    carService addToCart(currentUser, book);
    // ...
  }
}
```

购买记录

```java
public class HistoryServlet extends HttpServlet {
  private BookService bookService = new BookService();
  private UserService userService = new UserService();
}
```

核心问题
- 谁负责创建组件?
- 谁负责根据依赖关系组装组件
- 销毁时，如何按依赖顺序正确销毁

```java
public class BookService {
  private DataSource dataSource;

  public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
  }
}
```

loC 又称为依赖注入，解决的最主要问题：将组件的创建 + 配置与组件的使用相分离，并且，由 loC 容器负责管理组件的声明周期。

```xml
<beans>
    <bean id="dataSource" class="HikariDataSource"/>
    <bean id="bookSource" class="BookService">
        <property name="dataSource" ref="dataSource"/>
    </bean>
</beans>
```

## 依赖注入方法

```java
public class BookService {
  private DataSource dataSource;

  public BookService(DataService dataSource) {
    this.dataSource = dataSource;
  }
}
```

## 无侵入容器

无侵入：指应用程序的组件无需实现 ```sprint``` 的特定接口，或者说，组件根本不知道自己在 ```Sprint```的容器中运行。这种无侵入的涉及有以下好处:

- 应用程序组件既可以在 ```Spring``` 的 ```IoC ```容器中运行，也可以自己编写代码自行组装配置
- 测试的时候并不依赖Spring容器，可单独进行测试，大大提高了开发效率
