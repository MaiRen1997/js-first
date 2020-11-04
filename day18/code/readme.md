### 面向对象程序设计 (一种计算机的编程架构)
### OOP(Object Oriented Programming)

主流编程思想
面向过程编程(函数式编程 基于函数)
面向对象编程(基于 类 Class)

JS不具备类
在JavaScript中 class关键字 是构造函数的语法糖
学习面向对象的编程思想
应为JS的一些特性类似于面向对象语言的
可以通过这些特性来实现面向对象的编程思想

面向对象编程思想的三大特点
封装  继承  多态

多态指的是函数的多种运行状态(函数重载)

```javascript
function fn(){
    switch(arguments.length){
        case 1:
            console.log(arguments[0].split(''));
            break;
        case 2:
            console.log((arguments[0]+arguments[1]).split(''));
            break;
        case 3:
            console.log(arguments[0].concat(arguments[1],arguments[2]))
    }
}

```

类 的概念
类是一个抽象的概念 泛指一类事物 是一个比较大的范围

动物 类

犬 类
四条腿 嗅觉灵敏 人类的朋友

下面这些类所指范围更小 是犬类的分支(子类)
金毛
萨摩耶

类的具象化 叫做 (实例)对象
对象的抽象化  就是 类
汪杰家养了一只血统纯正的 萨摩耶 叫做 帕吉 

泰迪
哈士奇
拉布拉多
柯基
阿拉斯加