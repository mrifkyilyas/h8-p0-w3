function palindrome(kata) {
    kataTerbalik = ''
    for(var i=kata.length-1; i>=0; i--){
        kataTerbalik = kataTerbalik + kata[i]
     }
    return kataTerbalik===kata
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false