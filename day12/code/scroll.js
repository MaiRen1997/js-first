(function() {
    const main = document.getElementById("main");
    const elm = document.createElement("span");
    main.appendChild(elm);

    elm.style.left = '0px';
    elm.style.top = '0px';
    elm.style.position = 'fixed';
    elm.style.background = 'rgba(255,0,0,1)';
    elm.style.height = '3px';
    elm.style.zIndex = 9999;

    var progressbar = function() {
        // body高度-显示区域的高度
        var height = document.body.clientHeight - document.documentElement.clientHeight;

        // 获得滚动条距离页面顶部的距离 document.documentElement.scrollTop
        var tops = document.documentElement.scrollTop || document.body.srcollTop;


        if (height > 0 && tops) {
            // 设置宽度 计算百分比
            elm.style.width = 100 * tops / height + '%';
        } else {
            elm.style.width = '0';
        }
    };
    // window.onscroll 滚动条 滚动事件
    // window.onresize 修改窗口大小 事件
    window.onscroll = window.onresize = progressbar;
})()