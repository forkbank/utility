function each(){

}

function map(){

}

// array
// boolean
// date
// error
// function
// number
// object
// string
// object
// undefined
// null
// symbol
function type(obj){
  var result = Object.prototype.toString.call(obj).replace(/\[object /,'').replace(']','').toLowerCase();
  if(result === 'object' && !obj){
    return obj === null  ? 'null' : 'undefined';
  }else{
    return result;
  }
}