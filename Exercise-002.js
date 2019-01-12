//input "hello world!"
//output "!dlrow olleh"

input = "hello world!"
inputReverse = ''
    for(var i=input.length-1; i>=0; i--){
        inputReverse = inputReverse + input[i]

    }
    
console.log(inputReverse)