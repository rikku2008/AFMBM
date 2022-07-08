'use strict';

let GiveClass = (expantion) =>{
    let ex_clientRect = expantion.getBoundingClientRect();
    let wh = window.innerHeight;
    if(wh > ex_clientRect.top + 200) {
        expantion.classList.add('active');
    }
}
let expantion = document.getElementsByClassName('marker-animation');

// 画面大きい時用初期チェック
for(let i = 0,len = expantion.length;i < len;i++){
    GiveClass(expantion[i]);
}

window.onscroll = function(){
    for(let i = 0,len = expantion.length;i < len;i++){
        GiveClass(expantion[i]);
    }
}