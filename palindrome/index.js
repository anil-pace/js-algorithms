//  using INBUILT methods
/*
const palindrome = str => {
    const myWord = str.split('').reverse().join('');
    if (myWord === str){
        return true
    } else {
        return false
    }
}
*/


// using for Method
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
   var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str.charAt(i) !== str.charAt(len - 1 - i) {
          return false;
      }
    }
    return true;
   }
   palindrome("A man, a plan, a canal. Panama");
  
 module.exports = palindrome;