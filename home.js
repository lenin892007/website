//my example
function descendingOrder(n){
  var digits = (""+n).split("").sort(function(a, b){return b-a});
  digits = digits.join("");
  return Number(digits);
}

//good examples
//1
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

//2
function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}
