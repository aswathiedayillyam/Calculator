function dispBox(num){
    var res=document.querySelector(".result")
 res.value+=num
  
  
}
function print(){
    var res=document.querySelector(".result").value;
var out=eval(res)
document.querySelector(".result").value=out
}
function clr(){
    var res=document.querySelector(".result").value;
    var data=res.slice(-1,0)
    document.querySelector(".result").value=data
}