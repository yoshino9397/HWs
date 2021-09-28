//---------------------------//

function power(x, y) {
  return Math.pow(x, y);
}
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));

//-----------------------------//

function productOfArray(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  console.log(product);
}
productOfArray([1, 2, 3, 10]);
productOfArray([1, 2, 3]);

//------------------------------//
function reverse(a) {
  return a.split("").reverse().join("");
}
console.log(reverse("AshLynx"));

//----------------------------------------/

function isPalindrome(x) {
  var y = x.split("").reverse().join("");
  if (x === y) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("ashlynx"));
console.log(isPalindrome("ashsa"));

