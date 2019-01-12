function groupAnimals(animals) {
    var zoo = []
    for( var i=0; i<animals.length; i++){
        var cage = []
        var isAvail = false
        for(var j=0; j<zoo.length; j++){
            if(animals[i][0]===zoo[j][0][0]){
                zoo[j].push(animals[i])
                isAvail = true
            }
        }
        if(isAvail===false){
            cage.push(animals[i])
            zoo.push(cage)
        }
    }

    return zoo.sort()
    


}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
 //[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]