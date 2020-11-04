### Z.js
采用面向对象的编程思想完成一个JavaScript工具函数库



### 定义类 Z
用于创建对象 创建一个数组
这个类会继承数组
自定义的对象会拥有数组的方法 和 length 属性

会向全局环境暴露一个别名 $ 它是一个工厂函数

在这个数组里存放的东西是DOM元素 `querySelectorAll()`

### 公有方法
方便对DOM元素进行批量的操作

#### on()
方法on()为被选择的元素添加事件   
语法: $('selector').on(type,callback)   
      $('selector').on(options)   
参数: type[string] 事件的类型   
      callback[function] 事件的处理函数   
      options[object] 需要绑定的事件名和事件处理函数   
```javascript
$('div').on('click',function(){
    //事件处理函数
});

$('div').on({
    mouseover:function(){
    //事件处理函数
    },
    mouseout:function(){
    //事件处理函数
    }
});
```

#### css()
方法css()为所有被选元素设置行内样式   
语法:$('selector').css(style,value);   
     $('selector').css(options);   
参数:style[string] css样式名   
     value[string] css样式值   
     options[object] css样式的名值对   
```javascript
$('.text').css('color','red');

$('.text').css({
    'color':'red',
    'font-size':'2em'
});

```


#### addClass()
方法addClass()为所有被选择的元素添加指定的类名   
语法:$('selector').addClass(className);   
参数:className[string] css类名   
```javascript
$('#box').addClass('active');
```

#### removeClass()
方法removeClass()为所有被选择的元素删除指定类名   
语法:$('selector').removeClass(className)   
参数:className[string] css类名   
```javascript
$('.box').removeClass('active');
```

#### toggleClass()   
方法toggleClass()为所有被选元素切换类名   
有该类名就删除 没有该类名就添加   
语法:$('selector').toggleClass(className);   
参数:className[string] css类名   
```javascript
$('.box').toggleClass('active');
```

#### replaceClass()
方法replaceClass()为所有被选择的元素替换类名   
语法:$('selector').replaceClass(oldName,newName);   
参数:oldName[string] 已经存在的类名 需要删除的类名
    newName[string] 需要替换的新类名 需要添加的类名
```javascript
$('.box').replaceClass('red','yellow');
```

#### attr()
方法attr()可以获得或设置属性值
语法: $('.box').attr(attrName)   获得属性值
      $('.box').attr(attrName,value) 设置或修改属性值
      $('.box').attr(attrName,callback) 设置或修改属性值
        回调参数: oldValue 当前属性的旧值
                  index    每一个元素的索引值
```javascript
let result = $('.box').attr('id');

$('.box').attr('title','你好世界');

$('.box').attr('title',function(oldValue,index){
    return oldValue+'world';
});
```

#### removeAttr()
方法removeAttr()为所有的被选择元素删除指定的属性
语法: $('selector').removeAttr(attrName);
```javascript
$('.box').removeAttr('class');
```

