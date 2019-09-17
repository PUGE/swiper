window.onload = function() {
   // 5个轮播
    // var size = [
    //   {"top":60,"left":"0%", "width":"20%","height":240,"zIndex":2},
    //   {"top":30,"left":"15%", "width":"30%","height":300,"zIndex":3},
    //   {"top":0,"left":"30%", "width":"40%","height":360,"zIndex":4},
    //   {"top":30,"left":"55%", "width":"30%","height":300,"zIndex":3},
    //   {"top":60,"left":"80%", "width":"20%","height":240,"zIndex":2},
    //   {"top":60,"left":"40%",  "width":"20%","height":240,"zIndex":1},
    //   {"top":60,"left":"40%",  "width":"20%","height":240,"zIndex":1},
    // ]
    // 3个轮播
    var size = [
      {"left":"0%", "width":"30%", "height":300, class:"swiper-item show"},
      {"left":"32%", "width":"36%", "height":360, class:"swiper-item show active"},
      {"left":"70%", "width":"30%", "height":300, class:"swiper-item show"},
      {"left":"40%", "width":"20%", "height":240, class:"swiper-item hide"},
      {"left":"40%", "width":"20%", "height":240, class:"swiper-item hide"},
      {"left":"40%",  "width":"20%", "height":240, class:"swiper-item hide"},
      {"left":"40%",  "width":"20%", "height":240, class:"swiper-item hide"},
    ]
    // 容器
    var wrap = document.getElementById('wrap');
    var cont = wrap.firstElementChild || wrap.firstChild;
    var btnArr=wrap.getElementsByTagName('a');
    var falg=true;
    var speed=7000;
    // 鼠标悬浮停止轮播
    wrap.onmouseover=function(){
      console.log('停止轮播!')
      clearInterval(wrap.timer);
    }
    // 鼠标移出开始轮播
    // wrap.onmouseout=function(){
    //   wrap.timer = setInterval(function(){
    //     move(true)
    //   },speed);
    // }
    var liArr = cont.children;
    // 排列
    move();
    // 开启自动轮播
    wrap.timer = setInterval(function(){
      move(true);
    }, speed);
    // 前进按钮点击
    btnArr[1].onclick=function(){
      if (falg) {
        move(true)
      }
    }
    // 后退按钮点击
    btnArr[0].onclick=function(){
      if (falg) {
        move(false)
      }
    }
    function move(bool) {
      if(bool != undefined){
        if (bool) {
          size.unshift(size.pop());
        } else {
          size.push(size.shift());
        }
      }
      for (var i=0; i < liArr.length; i++) {
        animate(liArr[i], size[i], function() {
          falg = true
        })
      }
    }
}