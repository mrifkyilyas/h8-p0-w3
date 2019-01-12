function targetTerdekat(arr) {
    arrTampung = []
    if(arr.indexOf('x')===-1 || arr.indexOf('o')===-1){
        arrTampung.push(0)
    }else{
        for(var i=0; i<arr.length; i++){
            if(arr[i].indexOf('o')===0){
               for(var j=0; j<arr.length; j++){
                    if(arr[j].indexOf('x')===0){
                        arrTampung.push(Math.abs(i-j))
                                     
                    }
                }
            }
            
        }
        arrTampung.sort()
        
    }
    return arrTampung[0]

    
   
  }
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2