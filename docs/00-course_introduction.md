# Nodejs

## 学习 Node.js 的三个境界

我总结的编程3种境界

- 打日志：console.log
- 断点调试：断点调试：node debugger 或node inspector 或vscode
- 测试驱动开发（tdd | bdd）

大家可以自测一下，自己在哪个水平？如果是第三个阶段，那么本场Live可能不太适合你。哈哈哈

本教程适合nodejs入门级别，循环渐进，慢慢深入学习！

## 如何学习Node.js

Node不是语言，不是框架，只是基于V8运行时环境。结合libuv能够通过js语法获得更好的等价于c/c++的性能。

它很简单，异步是解决并发的最佳实践。

###  基础学习

1）js语法必须会

1. js基本语法，都是c语系的，有其他语言背景学习起来相对更简单
2. 常见用法，比如正则，比如数据结构，尤其是数组的几种用法。比如bind/call/apply等等
3. 面向对象写法。js是基于对象的，所以它的oo写起来非常诡异。参见红皮书JavaScript高级编程，很多框架都是自己实现oo基础框架，比如ext-core等。

犀牛书，《JavaScript权威指南》，没事就多翻翻，看少多少遍都不为过。

2）个人学习和技术选型都要循序渐进

1. 先能写，采用面向过程写法，简单理解就是定义一堆function，然后调用，非常简单
2. 然后再追求更好的写法，可以面向对象。对于规模化的编程来说，oo是有它的优势的，一般java、c#，ruby这些语言里都有面向对象，所以后端更习惯，但对于语言经验不那么强的前端来说算高级技巧。
3. 等oo玩腻了，可以有更好的追求：函数式编程，无论编程思维，还是用法上都对已有的编程思维是个挑战。我很喜欢函数式，但不太会在团队里使用，毕竟oo阶段还没完全掌握，风险会比较大。但如果团队水平都非常高了，团队稳定是可以用的。

可以看出我的思路，先能写，然后再追求更好的写法，比如面向对象。等团队水平到一定程度了，并且稳定的时候，可以考虑更加极致的函数式写法。

团队是这样选型的，个人学习也这样，最好是循序渐进，步子迈大了不好。

3）各种高级的JavaScript友好语言

JavaScript友好语言指的是能够使用其他语法实现，但最终编译成js的语言。自从Node.js出现后，这种黑科技层出不穷。比如比较有名的coffee、typescript、babel（es）等。

CoffeeScript虽然也是JavaScript友好语言，但其语法借鉴ruby，崇尚极简，对于类型和OO机制上还是偏弱，而且这么多年也没发展起来，仍然是比较小众的活着。未来比例会越来越少的。

显然TypeScript会越来越好，TypeScript 的强大之处是要用过才知道的。

- 1）规模化编程，像Java那种，静态类型，面向对象，前端只有TypeScript能做到
- 2）亲爹是微软安德斯·海尔斯伯格，不知道此人的请看borland传奇去
- 3）开源，未来很好
- 4）组合拳：TypeScript + VSCode = 神器

当下前端发展速度极快，以指数级的曲线增长。以前可能1年都不一定有一项新技术，现在可能每个月都有。大前端，Node全栈，架构演进等等都在快速变化。可以说，前端越复杂，有越多的不确定性，TypeScript的机会就越大。

4）再论面向对象

面向对象想用好也不容易的，而且js里有各种实现，真是让人眼花缭乱。

- 基于原型的写法，纵观JavaScript高级编程，就是翻来覆去的讲这个，这个很基础，但不是很好用。可以不用，但不可以不会。
- 自己写面向对象机制是最好的，但不是每个人都有这个能力的。好在es6规范出了更好一点的面向对象，通过class、extends、super关键字来定义类，已经明显好很多了，虽然还很弱，但起码勉强能用起来了。从面向过程走过来的同学，推荐这种写法，简单易用。但要注意面向对象要有面向对象的写法，要理解抽象，继承，封装，多态4个基本特征。如果想用好，你甚至还需要看一些设计模式相关的书。好在有《JavaScript设计模式》一书。Koa2里已经在用这种写法了。
- js是脚本语言，解释即可执行。所以它的最大缺点是没有类型系统，这在规模化编程里是非常危险的，一个函数，传参就能玩死人。于是现在流行使用flow和typescript来做类型校验。flow只是工具，比较轻量级。而typescript是es6超集，给es6补充了类型系统和更完善的面向对象机制，所以大部分人都会对ts有好感，很有可能是未来的趋势。

对于es6高级特性，我是比较保守的，一般node长期支持版本lts支持的我都让用，一些更新的特性我一般不让使用。根本lts版本保持一致就好。

我的团队现在是采用es6的面向对象写法开发，后面会一点一点转到typescript上的。熟练oo转到ts是非常容易的。

## Node.js应用场景

《Node.js in action》一书里说，Node.js 所针对的应用程序有一个专门的简称：DIRT。它表示数据密集型实时（data-intensive real-time）程序。因为 Node.js 自身在 I/O 上非常轻量，它善于将数据从一个管道混排或代理到另一个管道上，这能在处理大量请求时持有很多开放的连接，并且只占用一小部分内存。它的设计目标是保证响应能力，跟浏览器一样。

这话不假，但在今天来看，DIRT 还是范围小了。其实 DIRT 本质上说的 I/O 处理的都算，但随着大前端的发展，Node.js 已经不再只是 I/O 处理相关，而是更加的“Node”！

Node.js 使用场景主要分为4大类



- 1）跨平台：覆盖你能想到的面向用户的所有平台，传统的PC Web端，以及PC客户端 `nw.js/electron` 、移动端 `cordova`、HTML5、`react-native`、`weex`，硬件 `ruff.io` 等
- 2）Web应用开发：网站、Api、RPC服务等
- 3）前端：三大框架 React \ `Vue` \ `Angular` 辅助开发，以及工程化演进过程（使用`Gulp`/Webpack 构建 Web 开发工具）
- 4）工具：`npm`上各种工具模块，包括各种前端预编译、构建工具 `Grunt` / `Gulp`、脚手架，命令行工具，各种奇技淫巧等

下面列出具体的 Node.js 的使用场景，以模块维度划分

| 分类           | 描述                                                         | 相关模块                                                     |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 网站           | 类似于 `cnodejs.org` 这样传统的网站                          | `Express` / `Koa`                                            |
| Api            | 同时提供给移动端，PC，`H5` 等前端使用的 `HTTP Api` 接口      | `Restify` / `HApi`                                           |
| Api代理        | 为前端提供的，主要对后端Api接口进行再处理，以便更多的适应前端开发 | `Express` / `Koa`                                            |
| IM即时聊天     | 实时应用，很多是基于 `WebSocket`协议的                       | `Socket.io` / `sockjs`                                       |
| 反向代理       | 提供类似于 `nginx` 反向代理功能，但对前端更友好              | `anyproxy` / `node-http-proxy` / `hiproxy`                   |
| 前端构建工具   | 辅助前端开发，尤其是各种预编译，构建相关的工具，能够极大的提高前端开发效率 | `Grunt` / `Gulp` / `Bower` / `Webpack` / `Fis3` / `YKit`     |
| 命令行工具     | 使用命令行是非常酷的方式，前端开发自定义了很多相关工具，无论是shell命令，node脚本，还是各种脚手架等，几乎每个公司\小组都会自己的命令行工具集 | `Cordova` / `Shell.js`                                       |
| 操作系统       | 有实现，但估计不太会有人用                                   | `NodeOS`                                                     |
| 跨平台打包工具 | 使用 Web 开发技术开发PC客户端是目前最流行的方式，会有更多前端开发工具是采用这种方式的 | PC端的electron、nw.js，比如钉钉PC客户端、微信小程序IDE、微信客户端，移动的Cordova，即老的Phonegap，还有更加有名的一站式开发框架Ionicframework |
| P2P            | 区块链开发、BT客户端                                         | `webtorrent` / `ipfs`                                        |
| 编辑器         | `Atom` 和 `VSCode` 都是基于 `electron` 模块的                | `electron`                                                   |
| 物联网与硬件   | ruff.io和很多硬件都支持node sdk                              | `ruff`                                                       |
