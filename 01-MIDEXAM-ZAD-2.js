function solve(array) {
    let passengers = Number(array.shift())
    let wagons = array.shift().split(' ').map(Number)
    
    for(let i = 0; i < wagons.length; i++){

        while(wagons[i] < 4){

        if(passengers-- === 0){
            console.log("The lift has empty spots!");
            console.log(`${wagons.join(' ')}`);
            return;
        }
        wagons[i]++  
            if(wagons[i] === 4){
                break;
            }
        }     
    }

    console.log(`There isn't enough space! ${passengers} people in a queue!`);
    console.log(`${wagons.join(' ')}`);
}
solve
([
    "15",
    "0 0 0 0 0"
])
