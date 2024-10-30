//ages 

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);


ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);


let sumOfAges = 0;
for( let i = 0; i < ages.length; i++) {
    console.log("test")
    sumOfAges += ages[i];
    console.log("index:", i, "sumOfAges:", sumOfAges)
}

console.log("total sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("average", average);

//Names average
let names = ["sam", "tommy", "tim", "sally", "buck", "bob"];
let totalChars = 0;

for (let i =0; i < names.length; i++) {
    totalChars += names[i].length;
    console.log("index:", i, "name:", "totalChars:", totalChars);
}
let averageName = totalChars / names.length;
console.log("average name length", averageName);

//names concat

let concatNames = "";
for (let i = 0; i < names.length; i++){
    concatNames = concatNames.concat(names[i] + " ");
    console.log(i, "names concatenated", concatNames);
}

console.log("last element of ages array: ", ages[ages.length -1]);


console.log("first element of ages array:", ages[0]);

//name lengths

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("name lengths array:", nameLengths);
}

let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
    charsTotal += nameLengths[i];
    console.log("charsTotal:", charsTotal);
}

function concatWords(word, n){
    console.log("word par:", word, "n par:", n);
    let concat = word.repeat(n);
}
concatWords("Hello", 3);

function fullName(firstName, lastName){
    let fullName = firstName + " " + lastName
    console.log(fullName)
}
fullName("John", "Doe");

let numbers1 = [100, 200, 300, 400]
let numbers2 = [1, 2, 3, 4]

//numbers array

function sumNumbersArray(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        console.log(i, "test");
        total += array[i];
        console.log("total", total);
    }
    if (total > 100) {
        console.log(total, true);
        return true
    } else {
        console.log(total, false);
        return false
    }
}
sumNumbersArray(numbers2);

function calculateNumbersAverage(array){
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i];
        console.log("calculate functions, total:", total);
    } 
    let average = total / array.length;
    console.log("average of numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);

let numbers3 = [100, 100, 100];
let numbers4 = [100, 100, 99];

function twoAverages(array1, array2){
    console.log("parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;
        console.log("current number loop1:", number, "total1:", total1);
    }
    for (const number of array2) {
        total2 += number;
        console.log("current number loop2:", number, "total2:", total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("averages", average1, average2);

    if (average1 > average2) {
        console.log(true);
        return true;
    } else if (average1 < average2) {
        console.log(false);
        return false;
    } else {
        console.log("averages are equal");
    }
}
twoAverages(numbers3, numbers4);

function willBuyDrink(isHotOutside, moneyInPocket) {
    let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
    console.log("buy a drink?", buyDrink);
    return buyDrink;
}

willBuyDrink(true, 5);