/**
 * Created by Elf on 15-3-16.
 */
var txt;
var  num=0;
var btn;
window.onload=function(){
    txt=document.getElementById("txt");
    btn=document.getElementById("btn");
    if(sessionStorage.num){
        num=sessionStorage.num;
    }else{
        num=0;
    }
    btn.onclick=function(){
        num++;
        sessionStorage.num=num;
        showNum();

    }
    function showNum(){
        txt.innerHTML=num;
    }
}
