function pasanganTerbesar(num) {
    arrayAngka = []
    numString = String(num)
    for(var i=0; i<=numString.length-2; i++ ){
        arrayAngka.push(numString[i]+numString[i+1])
    }
    arrayAngka.sort(function(a,b){return a>b})
       
    return arrayAngka[arrayAngka.length-1]
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99



//coba pull
