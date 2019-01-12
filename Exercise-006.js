function angkaPalindrome(num) {
  numString = ''  
  for(var i=num+1; i<=num*2; i++){
      numString = String(i)
      angkaTerbalik = ''
     for(var j=numString.length-1; j>=0; j-- ){
         angkaTerbalik = angkaTerbalik + numString[j]
     }
     if(angkaTerbalik===numString){
         return numString
     }
    
  }
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001