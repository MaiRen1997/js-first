/**
 * 为元素添加类名
 * @param {DOMElement} elm 
 * @param {string} className 
 */
function addClass(elm, className) {
    if (elm.nodeType == 1 && typeof className == 'string') {
        elm.setAttribute('class', elm.getAttribute('class') + ' ' + className);
    }
}



/**
 * 为元素删除类名
 * @param {DOMElement} elm 
 * @param {string} className 
 */
function removeClass(elm, className) {
    if (elm.nodeType == 1 && typeof className == 'string') {
        // 1. 找到类名
        var classList = elm.getAttribute('class'); // 获得类名
        classList = classList.split(' '); // 将字符串拆分成数组
        var _index = classList.indexOf(className); // 在数组中找指定的类名 获得索引
        if (_index >= 0) classList.splice(_index, 1);
        classList = classList.join(' '); // 拼接成字符串
        elm.setAttribute('class', classList);
    }
}