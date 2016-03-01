/**
 * Created by denniszhang on 16/3/1.
 */
/*
 * 普通方式
 var overlay=$('#overlay');
 function init(){
     $('body').append('<div id="overlay" class="Hide"></div>');
     $('#overlay').on('click',function(){
        close();
    })
 }
 function open(){
    $('#overlay').removeClass('Hide');
 }
 function close(){
    $('#overlay').addClass('Hide');
 }
 $(function() {
     init();
     $('button').on('click', function () {
        open();
     })
 })
 */
/*
* 使用单个变量模拟命名空间
var Overlay={
    init:function(){
        $('body').append('<div id="overlay" class="Hide"></div>');
        var that=this;
        $('#overlay').on('click',function(){
            that.close();
        })
    },
    open:function(){
        $('#overlay').removeClass('Hide');
    },
    close:function(){
        $('#overlay').addClass('Hide');
    }
}
$(function() {
    Overlay.init();
    $('button').on('click', function () {
        Overlay.open();
    })
})
 * */
/*
* 函数闭包
var Overlay=(function(){
    function _close(){
        $('#overlay').addClass('Hide');
    }
    var OverlayFunc = function(config){

    }
    OverlayFunc.prototype.init=function(){
        $('body').append('<div id="overlay" class="Hide"></div>');
        $('#overlay').on('click',function(){
            _close();
        })
    }
    OverlayFunc.prototype.open=function(){
        $('#overlay').removeClass('Hide');
    }
    return OverlayFunc;
})();
$(function() {
    var overlay=new Overlay;
    overlay.init();
    $('button').on('click', function () {
        overlay.open();
    })
})
 */
/*
* 面向对象（使用ES6 Class），仅部分浏览器支持，可以用gulp转化为ES5语法
* */
'use strict'
class Overlay {
    constructor() {
        $('body').append('<div id="overlay" class="Hide"></div>');
        var that=this;
        $('#overlay').on('click',function(){
            that._close();
        })
    }
    open(){
        $('#overlay').removeClass('Hide');
    }
    _close(){
        $('#overlay').addClass('Hide');
    }
}
$(function() {
    var overlay=new Overlay();
    $('button').on('click', function () {
        overlay.open();
    })
})