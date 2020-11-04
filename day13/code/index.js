window.onload=function(){
    //获取输入文本框
    var title = document.querySelector('#title');
    //获取代做的项目栏
    var ol=document.querySelector('#todolist');  
    //获取ol下所有的li元素
    var ol_li=ol.querySelectorAll('li');
    //获取已做项目栏
    var ul =document.querySelector('#donelist');
    //获取ul下所有的li元素
    var ul_li=ul.querySelectorAll('li');
    //获取包含元素，做事件委托
    var section = document.querySelectorAll('section');
        section=section[1];
    var span = document.querySelectorAll('span');
        span[0].innerHTML=0;span[1].innerHTML=0;
    title.onkeyup=function(ev){
        var inputValue=this.value;
        if(ev.keyCode==13&&inputValue){//用来判断输入值不为空，且按下了回车换行符
            inputValue=this.value;
            //创建li节点
            var li =document.createElement('li');
            //为li节点设置属性
            li.setAttribute('draggable','true');
            //创建input节点
            var input=document.createElement('input');
            //为input节点设置属性
            input.setAttribute('type','checkbox');
            input.setAttribute('class','input');
            //将input节点添加到li标签
            var result=li.appendChild(input);
            //创建一个p节点
            var p = document.createElement('p');
            //为p元素设置属性
            p.setAttribute('id','p-0');
            p.setAttribute('class','p');
            p.innerHTML+=inputValue;
            //将p元素添加到li中
            li.appendChild(p);
            //创建一个a节点
            var a =document.createElement('a');
            //设置a的class，要不然后面获取不到a的className
            a.setAttribute('class','a');
            //将a添加到li中
            li.appendChild(a);
            //将li添加到ol
            ol.appendChild(li);
            this.value='';
            //获取ol下所有的li元素
            ol_li=ol.querySelectorAll('li');
            ul_li=ul.querySelectorAll('li');
            span[0].innerHTML=ol_li.length;
            span[1].innerHTML=ul_li.length;
            console.log(ol_li);
        }   
    }

    //写删除代码
    ol.addEventListener('click',function(ev){
        switch(ev.target.className){
            case 'input':
               ul.appendChild(ev.target.parentNode);
               break; 
            case'a':
                this.removeChild(ev.target.parentNode);
        }
        ol_li=ol.querySelectorAll('li');
        ul_li=ul.querySelectorAll('li');
        span[0].innerHTML=ol_li.length;
        span[1].innerHTML=ul_li.length;
        console.log(ol_li.length);
    })
    ul.addEventListener('click',function(ev){
        switch(ev.target.className){
            case 'input':
                console.log(ev.target.parentNode);
                ol.appendChild(ev.target.parentNode);
                break;
            case 'a':
                this.removeChild(ev.target.parentNode);
        }
        ol_li=ol.querySelectorAll('li');
        ul_li=ul.querySelectorAll('li');
        span[0].innerHTML=ol_li.length;
        span[1].innerHTML=ul_li.length;
    })

} 