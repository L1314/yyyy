// banner
/*{
    let now = 0;
    let bannerObj = document.querySelector("#bannerz");
    let bannerDots = document.querySelectorAll(".lunbo li");
    let bannerImgs = document.querySelectorAll(".bannertu");
    let prevObj = document.querySelector(".zbtnn");
    let nextObj = document.querySelector(".ybtnn");
    let f = setInterval(fn, 1000);

    function fn(dir = "r") {
        if (dir === "r") {
            now++;
            if (now === bannerDots.length) {
                now = 0;
            }
        } else if (dir === "l") {
            now--;
            if (now === -1) {
                now = bannerDots.length - 1;
            }
        }
        for (let i = 0; i < bannerDots.length; i++) {
            bannerDots[i].classList.remove("active");
        }
        bannerDots[now].classList.add("active");

    }

    bannerDots.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < bannerDots.length; i++) {
                bannerDots[i].classList.remove("active");
            }
            ele.classList.add("active");
            now = index;
        }
    });
    prevObj.onclick = function () {
        fn("l")
    };
    nextObj.onclick = function () {
        fn();
    };
    bannerObj.onmouseover = function () {
        clearInterval(f);
    };
    bannerObj.onmouseout = function () {
        f = setInterval(fn, 1000);
    };
}*/
// ad滑动开始
{
    let prevObj = document.querySelector(".ad .l-arrow");
    let nextObj = document.querySelector(".ad .r-arrow");
    let adObj = document.querySelector(".ad");
    let adContainer = document.querySelector(".ad .ad-container");
    let now = 4;
    let dir = "r";
    let flag = true;

    function slide() {
        if (now === 4 || now === 8) {
            adContainer.style.transition = "margin-left 1s ease";
        }
        if (dir === "r") {
            now++;
        } else if (dir === "l") {
            now--
        }
        adContainer.style.marginLeft = -295 * now + "px";
    }

    adContainer.addEventListener("transitionend", function () {
        if (now === 12) {
            adContainer.style.transition = "none";
            now = 4;
            adContainer.style.marginLeft = -1180 + "px";
        }
        if (now === 0) {
            now = 8;
            adContainer.style.transition = "none";
            adContainer.style.marginLeft = -2360 + "px";
        }
        flag = true;
    });
    let t = setInterval(slide, 1500);
    window.onblur = adObj.onmouseover = function () {
        clearInterval(t);
    };
    window.onfocus = adObj.onmouseout = function () {
        t = setInterval(slide, 1500);
    };
    nextObj.onclick = function () {
        dir = "r";
        if (flag) {
            slide();
            flag = false;
        }

    };
    prevObj.onclick = function () {
        dir = "l";
        if (flag) {
            slide();
            flag = false;
        }


    }
}


// 公告
{
    let nextObj=document.querySelector(".notice .r-a");
    let prevObj=document.querySelector(".notice .l-a");
    let noticeObj=document.querySelector(".notice ul");
    let notice=document.querySelector(".notice");
    let now=0;
    nextObj.onclick=function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";

    };
    prevObj.onclick=function(){
        if(now===0){
            now=3;
        }
        now--;
        noticeObj.style.marginTop=-38*now+"px";
    }
    let t=setInterval(function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";
    },1000);
    notice.onmouseover=function(){
        clearInterval(t);
    };
    notice.onmouseout=function(){
        t=setInterval(function(){
            if (now===2){
                now=-1;
            }
            now++;
            noticeObj.style.marginTop=-38*now+"px";
        },1000)
    }
}
{
let tpkj = document.querySelector(".tp");
    //    console.log(tpkj)
    let tp = document.querySelectorAll(".img");
    //    console.log(tp);

    setInterval(function(){

    },3000)
}