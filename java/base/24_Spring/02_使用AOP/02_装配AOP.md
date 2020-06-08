## 装配 AOP

在AOP编程中，我们经常会遇到下面的概念：
- Aspect：切面，即一个横跨多个核心逻辑的功能，或者称之为系统关注点
- Joinpoint：连接点，即定义在应用程序流程的何处插入切面的执行
- Pointcut：切入点，即一组连接点的集合
- Advice：增强，指特定连接点上执行的动作
- Introduction：引介，指为一个已有的Java对象动态地增加新的接口
- Weaving：织入，指将切面整合到程序的执行流程中
- Interceptor：拦截器，是一种实现增强的方式
- Target Object：目标对象，即真正执行业务的核心逻辑对象
- AOP 

```java
@Aspect
@Component
public class LoggingAspect {
    // 在执行UserService的每个方法前执行:
    @Before("execution(public * com.itranswarp.learnjava.service.UserService.*(..))")
    public void doAccessCheck() {
        System.err.println("[Before] do access check...");
    }

    // 在执行MailService的每个方法前后执行:
    @Around("execution(public * com.itranswarp.learnjava.service.MailService.*(..))")
    public Object doLogging(ProceedingJoinPoint pjp) throws Throwable {
        System.err.println("[Around] start " + pjp.getSignature());
        Object retVal = pjp.proceed();
        System.err.println("[Around] done " + pjp.getSignature());
        return retVal;
    }
}
```

## 小结
- 在 ```Spring``` 容器中使用 ```AOP``` 非常简单，只需要定义执行方法，并用 ```AspectJ```的注解标注应该在何处触发并执行
- ```Spring``` 通过 ```CGLIB``` 动态创建子类等方式来实现 ```AOP``` 代理模式，大大简化了代码
