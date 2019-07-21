<ul style="width: 70%;">
    <li>
        history ```api```
        <ul>
            <li>history.go(-1)</li>
            <li>history.go(1)</li>
            <li>history.forward()</li>
            <li>history.back(-1)</li>
        </ul>
    </li>
    <li>
        html5 新增 api:
        <ul>
            <li>history.pushState()  增加新的状态到历史状态栈</li>
            <li>history.replaceState() 用新的状态代替当前状态</li>
            <li>history.state  返回当前状态对象</li>
        </ul>
        <ul>
            <li>
                pushState() 和 replaceState() 均接收三个参数(statue, title, url)
            </li>
            <li>
                1. 参数说明
                <ul>
                    <li>state：合法的javascript对象，可以用在popstate 事件中</li>
                    <li>title：现在大多浏览器忽略这个参数，可以直接用 null 代替</li>
                    <li>url: 有效的url， 用于更新浏览器的地址栏</li>
                </ul>
            </li>
            <li>
                2. pushState 和 replaceState 的区别
                <ul>
                    <li>
                        pushState 在保留现有记录的同时，将url 加入到历史记录中。
                    </li>
                    <li>
                        replaceState 会将历史记录中的当前页面历史替换为 url
                    </li>
                </ul>
            </li>
            <li>
                3. 当 pushState 和 replaceState 改变url 同时，不会刷新页面，所以 html5 中的 history 具备了实现前端路由的能力
            </li>
            <li>
                4. 和 hash的区别
                <ul>
                    <li>
                        hash 改变时，可以通过 hashchange 进行监听。而 history 的改变不会触发任何事件，所以无法监听
                    </li>
                </ul>
            </li>
            <li>
                5. 触发 history 改变 url 的四种方式
                <ul>
                    <li>点击浏览器的前进后退</li>
                    <li>a 标签</li>
                    <li>js 触发 history.pushState 函数</li>
                    <li>js 触发 history.replaceState 函数</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>