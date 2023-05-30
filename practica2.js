const numbers =[10, 15, 56, 40, 25, 37, 27];
let max = numbers [0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max){
        max = numbers[i]
    }
}

alert("El numero mayor es:" +max);
console.log("El numero mayor es" +max);