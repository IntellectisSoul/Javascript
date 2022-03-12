let numbers = [1, 2, 4, 7, 3, 5, 6];
//this function returns either '1' or '0', true or false and is a boolean
function isOddNumber(number) {
    return number % 2;  //when a number is divided by 2, it has zero remainder. so this returns either a '1' or a '0'.
}
//pass the function to a filter method. The filter() method sieves only the 'true' and creates a new array
const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers); // [ 1, 7, 3, 5 ]


//a shorter way of writing using fat arrow and callback : 
let oddNumbers = numbers.filter(number => number % 2);


//example 2 :
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]