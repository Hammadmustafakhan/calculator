 function getNumber(num){ 

    var result = document.getElementById("result");
  
    result.value += num
 }
 function cancel (){
    var result = document.getElementById("result");
    result.value="" 
 }
 function result(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
 }